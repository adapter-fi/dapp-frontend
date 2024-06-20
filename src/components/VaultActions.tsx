'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useQuery } from '@tanstack/react-query'
import { erc20Abi, maxUint256, zeroAddress } from 'viem'
import { useAccount, useReadContract } from 'wagmi'

import { BigIntInput } from '@/components/BigIntInput'
import { NetworkGate } from '@/components/NetworkGate'
import { TransactionButton } from '@/components/TransactionButton'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { useSpotPrice } from '@/hooks/use-spot-price'
import { useTokenBalance } from '@/hooks/use-token-balance'

import { adapterVaultAbi } from '@/lib/abi/AdapterVault'
import { vaultMap } from '@/lib/constants'
import { getPendleSwap } from '@/lib/queries/get-pendle-swap'
import { useStateStore } from '@/lib/store'
import {
  cn,
  formatCurrency,
  formatNumber,
  formatPercentage,
  fromBigNumber,
} from '@/lib/utils'

import {
  pendleAdapterAbi,
  pendleMigratorAbi,
  pendleMigratorAddress,
  useReadEEthKarakVault,
  useReadPendleAdapterGeneratePregenInfo,
  useReadVaultBaseAdapters,
  useReadVaultBasePreviewDeposit,
  useReadVaultBasePreviewRedeem,
  useSimulatePendleMigratorMigrate,
  vaultBaseAbi,
} from '@/codegen'

import { Settings } from 'lucide-react'

import { Button } from './ui/button'
import { Skeleton } from './ui/skeleton'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export const VaultActions = ({ slug }: { slug: keyof typeof vaultMap }) => {
  const [state, setState] = useState<'deposit' | 'withdraw' | 'migrate'>(
    'migrate'
  )
  const { amount, setAmount } = useStateStore()
  const { address: walletAddress } = useAccount()

  const [slippage, setSlippage] = useState('1')

  const {
    depositAddress,
    vaultAddress,
    migrationAddress,
    logoURI,
    chain,
    pendleMarketAddress,
  } = vaultMap[slug]
  const name = slug.slice(0, slug.indexOf('-'))

  const depositBalance = useTokenBalance(depositAddress)
  const vaultBalance = useTokenBalance(vaultAddress)
  const migrationBalance = useTokenBalance(migrationAddress)
  const inputBalance =
    state === 'deposit'
      ? depositBalance
      : state === 'withdraw'
        ? vaultBalance
        : migrationBalance

  const { data: previewDeposit } = useReadVaultBasePreviewDeposit({
    address: vaultAddress,
    args: [BigInt(amount)],
    chainId: chain.id,
  })

  const { data: previewRedeem } = useReadVaultBasePreviewRedeem({
    address: vaultAddress,
    args: [BigInt(amount)],
    chainId: chain.id,
  })

  const { data: totalRedeem } = useReadVaultBasePreviewRedeem({
    address: vaultAddress,
    args: [vaultBalance],
    chainId: chain.id,
  })

  const depositTokenPrice = useSpotPrice(depositAddress)

  const { data: allowance } = useReadContract({
    address: state === 'migrate' ? migrationAddress : depositAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [
      walletAddress!,
      //@ts-ignore
      state === 'migrate' ? pendleMigratorAddress[chain.id] : vaultAddress,
    ],
    chainId: chain.id,
  })

  const isApproved = allowance && allowance >= BigInt(amount)

  // This needs to be in another component eventually
  const { data: pendleSwapData } = useQuery({
    queryKey: [
      'pendleSwap',
      amount,
      chain,
      walletAddress,
      pendleMarketAddress,
      depositAddress,
      slippage,
    ],
    queryFn: () =>
      getPendleSwap({
        chainId: chain.id,
        receiver: walletAddress!,
        amount: amount,
        market: pendleMarketAddress!,
        tokenOut: depositAddress,
        slippage: parseFloat(slippage) / 100,
      }),
    enabled:
      !!walletAddress &&
      !!amount &&
      !!pendleMarketAddress &&
      state === 'migrate',
  })

  const { data: vaultAdapter } = useReadVaultBaseAdapters({
    address: vaultAddress,
    args: [0n],
    chainId: chain.id,
  })

  const { data: pregenInfo } = useReadContract({
    address: vaultAdapter,
    abi: pendleAdapterAbi,
    functionName: 'generate_pregen_info',
    args: [BigInt(pendleSwapData?.minTokenOut || 0)],
    chainId: chain.id as any,
    query: {
      enabled: !!pendleSwapData && !!vaultAdapter,
    },
  })

  const { data: migrateOut, isLoading: migrateLoading } =
    useSimulatePendleMigratorMigrate({
      args: [
        pendleMarketAddress!,
        BigInt(amount),
        depositAddress,
        BigInt(pendleSwapData?.minTokenOut || 0),
        pendleSwapData?.limit,
        vaultAddress,
        0n,
        // [pregenInfo!],
      ],
      chainId: chain.id as any,
      query: {
        enabled: !!pendleSwapData && !!amount,
      },
    })

  const migrateEstimatedOut = migrateOut?.result || 0n
  const migrateMinOut =
    (migrateEstimatedOut * BigInt((1 - parseFloat(slippage) / 100) * 10000)) /
    10000n

  useEffect(() => {
    setAmount('')
  }, [state])

  return (
    <div className="flex flex-col gap-6 py-6 items-center">
      <div className="flex gap-4 w-full justify-center">
        <button
          className={cn(
            'font-thin tracking-[1.6px] px-4',
            state === 'migrate'
              ? 'border-b-2 border-[#F9F9F2]'
              : 'text-gray hover:text-[#F9F9F2]'
          )}
          onClick={() => setState('migrate')}
        >
          MIGRATE
        </button>
        <button
          className={cn(
            'font-thin tracking-[1.6px] px-4',
            state === 'deposit'
              ? 'border-b-2 border-[#F9F9F2]'
              : 'text-gray hover:text-[#F9F9F2]'
          )}
          onClick={() => setState('deposit')}
        >
          DEPOSIT
        </button>
        <button
          className={cn(
            'font-thin tracking-[1.6px] px-4',
            state === 'withdraw'
              ? 'border-b-2 border-[#F9F9F2]'
              : 'text-gray hover:text-[#F9F9F2]'
          )}
          onClick={() => setState('withdraw')}
        >
          WITHDRAW
        </button>
      </div>
      {state === 'migrate' ? (
        <div className="flex flex-col gap-4">
          <div className="bg-[#1F1F1D] border border-[#3B3B39] rounded-[4px] p-4 flex flex-col w-[467px] gap-3">
            <div className="flex justify-between items-center w-full">
              <BigIntInput
                value={amount}
                onChange={(value) => setAmount(value)}
                placeholder="0.00"
                className="max-w-[250px]"
              />
              <div className="flex flex-col font-light min-w-[128px]">
                <p className="text-gray">Amount to Migrate</p>
                <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                  <img src={logoURI} alt={name} height={20} width={20} />
                  <p>{'PT-' + name}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm flex items-center gap-1 font-light">
                <p className="text-gray">Balance: </p>
                <p>
                  {formatNumber(fromBigNumber(inputBalance))} {'PT-' + name}
                </p>
              </div>
              <div className="flex gap-0.5 text-sm font-light">
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount((inputBalance / 4n).toString())}
                >
                  25%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount((inputBalance / 2n).toString())}
                >
                  50%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() =>
                    setAmount(((inputBalance / 4n) * 3n).toString())
                  }
                >
                  75%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount(inputBalance.toString())}
                >
                  MAX
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex justify-between">
              <p className="text-gray font-light">Max Slippage</p>
              <Dialog>
                <DialogTrigger className="flex items-center gap-1">
                  <p className="text-[#FBFDFD]">{formatPercentage(slippage)}</p>
                  <Settings size={20} />
                </DialogTrigger>
                <DialogContent className="flex flex-col text-white py-3 px-2">
                  <div className="flex items-center gap-1">
                    <Settings size={24} />
                    <p className="uppercase">Slippage</p>
                  </div>
                  <div className="flex justify-between items-center px-2 relative">
                    <p>Set Manual Slippage</p>
                    <Input
                      className="bg-white text-black p-2 w-[60%]"
                      value={slippage}
                      onChange={(e) => setSlippage(e.target.value)}
                    />
                    <p className="text-[#565151] absolute right-4">%</p>
                  </div>
                  <p className="text-[#A29D92] text-sm px-2">
                    Slippage is incurred due to swapping with Pendle&apos;s AMM
                    as a part of the migration process.
                  </p>
                  <p className="text-[#A29D92] text-sm mt-[-5px] px-2">
                    Your transaction will revert if the price changes
                    unfavorably by more than this percentage.
                  </p>
                </DialogContent>
              </Dialog>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray font-light">Estimated Output</p>
              {migrateLoading ? (
                <Skeleton className="h-[24px] w-[49px]" />
              ) : (
                <p className="text-[#FBFDFD]">
                  {formatNumber(fromBigNumber(migrateEstimatedOut), 4)}
                </p>
              )}
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray font-light">Minimum Received</p>
              {migrateLoading ? (
                <Skeleton className="h-[24px] w-[49px]" />
              ) : (
                <p className="text-[#FBFDFD]">
                  {formatNumber(fromBigNumber(migrateMinOut), 4)}
                </p>
              )}
            </div>
            <p className="text-[#FBFDFD] text-sm font-light">ROUTE</p>
            <Image
              src="/misc/migration-flow.png"
              height={100}
              width={467}
              alt="migration"
            />
          </div>
        </div>
      ) : (
        <div className="flex gap-3">
          <div className="bg-[#1F1F1D] border border-[#3B3B39] rounded-[4px] p-4 flex flex-col w-[467px] gap-3">
            <div className="flex justify-between items-center w-full">
              <BigIntInput
                value={amount}
                onChange={(value) => setAmount(value)}
                placeholder="0.00"
                className="max-w-[250px]"
              />
              <div className="flex flex-col font-light min-w-[128px]">
                <p className="text-gray">You pay</p>
                <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                  <img src={logoURI} alt={name} height={20} width={20} />
                  <p>{state === 'deposit' ? name : 'aPT-' + name}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm flex items-center gap-1 font-light">
                <p className="text-gray">Balance: </p>
                <p>
                  {formatNumber(fromBigNumber(inputBalance))}{' '}
                  {state === 'deposit' ? name : 'aPT-' + name}
                </p>
                <p className="text-gray">
                  /{' '}
                  {formatCurrency(
                    depositTokenPrice *
                      (state === 'deposit'
                        ? fromBigNumber(depositBalance)
                        : fromBigNumber(totalRedeem))
                  )}
                </p>
              </div>
              <div className="flex gap-0.5 text-sm font-light">
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount((inputBalance / 4n).toString())}
                >
                  25%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount((inputBalance / 2n).toString())}
                >
                  50%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() =>
                    setAmount(((inputBalance / 4n) * 3n).toString())
                  }
                >
                  75%
                </button>
                <button
                  className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out"
                  onClick={() => setAmount(inputBalance.toString())}
                >
                  MAX
                </button>
              </div>
            </div>
          </div>
          <Image
            src="/icons/divider.svg"
            height={136}
            width={32}
            alt="divider"
          />
          <div className="bg-[#1F1F1D] border border-[#3B3B39] rounded-[4px] p-4 flex flex-col w-[467px] gap-3">
            <div className="flex justify-between items-center w-full">
              <p className="text-[42px] font-bold truncate max-w-[251px]">
                {formatNumber(
                  fromBigNumber(
                    state === 'deposit' ? previewDeposit : previewRedeem
                  ),
                  0
                )}
              </p>
              <div className="flex flex-col font-light w-[128px]">
                <p className="text-gray">You receive</p>
                <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                  <img src={logoURI} alt={name} height={20} width={20} />
                  <p>{state === 'deposit' ? 'aPT-' + name : name}</p>
                </div>
              </div>
            </div>
            {state === 'deposit' && (
              <div className="flex justify-between items-center">
                <p className="text-sm font-light text-gray">
                  aPT-{name} is the receipt token for your staked {name}
                </p>
              </div>
            )}
          </div>
        </div>
      )}
      {state !== 'withdraw' ? (
        <Tooltip>
          <TooltipTrigger>
            <Button disabled>{state.toLocaleUpperCase()}</Button>
          </TooltipTrigger>
          <TooltipContent>
            Vault deposits and migrations temporarily disabled
          </TooltipContent>
        </Tooltip>
      ) : isApproved ? (
        <NetworkGate supportedChain={chain}>
          <TransactionButton
            disabled={!amount || BigInt(amount) === 0n}
            config={{
              args:
                // @ts-ignore
                state === 'deposit'
                  ? [amount, walletAddress]
                  : // @ts-ignore
                    state === 'migrate'
                    ? [
                        pendleMarketAddress!,
                        BigInt(amount),
                        depositAddress,
                        BigInt(pendleSwapData?.minTokenOut || 0),
                        pendleSwapData?.limit,
                        vaultAddress,
                        migrateMinOut,
                        // [pregenInfo!]
                      ]
                    : [amount, walletAddress, walletAddress],
              // @ts-ignore
              abi: state === 'migrate' ? pendleMigratorAbi : vaultBaseAbi,
              functionName:
                // @ts-ignore
                state === 'deposit'
                  ? 'deposit'
                  : // @ts-ignore
                    state === 'migrate'
                    ? 'migrate'
                    : 'redeem',
              address:
                // @ts-ignore
                state === 'migrate'
                  ? //@ts-ignore
                    pendleMigratorAddress[chain.id]
                  : vaultAddress,
              chain: chain,
            }}
          >
            {state.toUpperCase()}
          </TransactionButton>
        </NetworkGate>
      ) : (
        <NetworkGate supportedChain={chain}>
          <TransactionButton
            config={{
              abi: erc20Abi,
              // @ts-ignore 
              address: state === 'migrate' ? migrationAddress : depositAddress,
              functionName: 'approve',
              args: [
                // @ts-ignore 
                state === 'migrate'
                  ? //@ts-ignore
                    pendleMigratorAddress[chain.id]
                  : vaultAddress,
                maxUint256,
              ],
              chain: chain,
            }}
          >
            Approve
          </TransactionButton>
        </NetworkGate>
      )}
    </div>
  )
}
