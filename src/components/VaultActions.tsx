'use client'

import Image from 'next/image'
import { use, useEffect, useState } from 'react'

import { erc20Abi, maxUint256 } from 'viem'
import { useAccount, useReadContract } from 'wagmi'
import { sepolia } from 'wagmi/chains'

import { BigIntInput } from '@/components/BigIntInput'
import { NetworkGate } from '@/components/NetworkGate'
import { TransactionButton } from '@/components/TransactionButton'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { useSpotPrice } from '@/hooks/use-spot-price'
import { useTokenBalance } from '@/hooks/use-token-balance'

import { vaultMap } from '@/lib/constants'
import { useStateStore } from '@/lib/store'
import {
  cn,
  formatCurrency,
  formatNumber,
  formatPercentage,
  fromBigNumber,
} from '@/lib/utils'

import {
  useReadVaultBasePreviewDeposit,
  useReadVaultBasePreviewRedeem,
  vaultBaseAbi,
} from '@/codegen'

import { Settings } from 'lucide-react'

export const VaultActions = ({ slug }: { slug: keyof typeof vaultMap }) => {
  const [state, setState] = useState<'deposit' | 'withdraw' | 'migrate'>(
    'deposit'
  )
  const { amount, setAmount } = useStateStore()
  const { address: walletAddress } = useAccount()

  const [slippage, setSlippage] = useState('0.3')

  const { depositAddress, vaultAddress, migrationAddress, logoURI } =
    vaultMap[slug]

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
    chainId: sepolia.id,
  })

  const { data: previewRedeem } = useReadVaultBasePreviewRedeem({
    address: vaultAddress,
    args: [BigInt(amount)],
    chainId: sepolia.id,
  })

  const { data: totalRedeem } = useReadVaultBasePreviewRedeem({
    address: vaultAddress,
    args: [vaultBalance],
    chainId: sepolia.id,
  })

  const depositTokenPrice = useSpotPrice(depositAddress)

  const { data: allowance } = useReadContract({
    address: depositAddress,
    abi: erc20Abi,
    functionName: 'allowance',
    args: [walletAddress!, vaultAddress],
    chainId: sepolia.id,
  })
  const isApproved = allowance && allowance >= BigInt(amount)

  useEffect(() => {
    setAmount('')
  }, [state])

  return (
    <div className="flex flex-col gap-6 py-6 items-center">
      <div className="flex gap-4 w-full justify-center">
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
              <div className="flex flex-col font-light w-[128px]">
                <p className="text-gray">Amount to Migrate</p>
                <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                  <img src={logoURI} alt={slug} height={20} width={20} />
                  <p>{'PT-' + slug}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm flex items-center gap-1 font-light">
                <p className="text-gray">Balance: </p>
                <p>
                  {formatNumber(fromBigNumber(inputBalance))} {'PT-' + slug}
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
            <div className="flex justify-between mb-2">
              <p className="text-gray font-light">Slippage</p>
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
              <div className="flex flex-col font-light w-[128px]">
                <p className="text-gray">You pay</p>
                <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                  <img src={logoURI} alt={slug} height={20} width={20} />
                  <p>{state === 'deposit' ? slug : 'a' + slug}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="text-sm flex items-center gap-1 font-light">
                <p className="text-gray">Balance: </p>
                <p>
                  {formatNumber(fromBigNumber(inputBalance))}{' '}
                  {state === 'deposit' ? slug : 'a' + slug}
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
                  <img src={logoURI} alt={slug} height={20} width={20} />
                  <p>{state === 'deposit' ? 'a' + slug : slug}</p>
                </div>
              </div>
            </div>
            {state === 'deposit' && (
              <div className="flex justify-between items-center">
                <p className="text-sm font-light text-gray">
                  a{slug} is the receipt token for your staked {slug}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {isApproved ? (
        <NetworkGate>
          <TransactionButton
            disabled={!amount || BigInt(amount) === 0n}
            config={{
              args:
                state === 'deposit'
                  ? [amount, walletAddress]
                  : [amount, walletAddress, walletAddress],
              abi: vaultBaseAbi,
              functionName: state === 'deposit' ? 'deposit' : 'redeem',
              address: vaultAddress,
            }}
          >
            {state.toUpperCase()}
          </TransactionButton>
        </NetworkGate>
      ) : (
        <NetworkGate>
          <TransactionButton
            config={{
              abi: erc20Abi,
              address: depositAddress,
              functionName: 'approve',
              args: [vaultAddress, maxUint256],
            }}
          >
            Approve
          </TransactionButton>
        </NetworkGate>
      )}
    </div>
  )
}
