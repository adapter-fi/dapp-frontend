'use client'

import { ReactNode, useEffect, useState } from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { Address, BaseError } from 'viem'
import { Chain } from 'viem'
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'

import { Button } from '@/components/ui/button'

import { useStateStore } from '@/lib/store'

import { toast } from 'sonner'

interface TransactionConfig {
  abi: any
  address: Address
  functionName: string
  args: any[]
  chain: Chain
}

export const TransactionButton = ({
  config,
  disabled,
  children,
}: {
  config: TransactionConfig
  disabled?: boolean
  children: ReactNode
}) => {
  const [txHash, setTxHash] = useState<Address | undefined>()
  const queryClient = useQueryClient()
  const { setAmount } = useStateStore()
  const { abi, args, address, functionName, chain } = config

  const {
    data: contractConfig,
    error: simulateError,
    isLoading: simulateLoading,
  } = useSimulateContract({
    abi,
    args,
    address,
    functionName,
    chainId: chain.id,
  })
  const { writeContract, isPending: userConfirming } = useWriteContract()

  const { isLoading: txLoading, isSuccess: txSuccess } =
    useWaitForTransactionReceipt({
      hash: txHash,
    })

  useEffect(() => {
    if (txSuccess) {
      toast.success('Transaction Success!', {
        action: {
          label: 'View on Etherscan',
          onClick: (e) => {
            e.preventDefault()
            window.open(
              `${chain?.blockExplorers?.default.url}/tx/${txHash}`,
              '_blank'
            )
          },
        },
      })
      queryClient.invalidateQueries()
      setAmount('')
      setTxHash(undefined)
    }
  }, [txSuccess, queryClient])

  const handleConfirm = () => {
    if (simulateError) {
      toast.error(
        (simulateError as BaseError).shortMessage || simulateError.message
      )
      return
    }

    writeContract(contractConfig!.request, {
      onSuccess(hash) {
        setTxHash(hash)
      },
      onError(error) {
        toast.error((error as BaseError).shortMessage || error.message)
      },
    })
  }

  return (
    <Button
      className="w-[160px] uppercase"
      loading={(!disabled && simulateLoading) || userConfirming || txLoading}
      disabled={disabled || simulateLoading || userConfirming || txLoading}
      onClick={handleConfirm}
    >
      {children}
    </Button>
  )
}
