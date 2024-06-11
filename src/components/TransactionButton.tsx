'use client'

import { ReactNode, useEffect, useState } from 'react'

import { useQueryClient } from '@tanstack/react-query'
import { Address } from 'viem'
import {
  useSimulateContract,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi'
import { sepolia } from 'wagmi/chains'

import { Button } from '@/components/ui/button'
import { useToast } from '@/components/ui/use-toast'

import { useStateStore } from '@/lib/store'

interface TransactionConfig {
  abi: any
  address: Address
  functionName: string
  args: any[]
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
  const { toast } = useToast()
  const [txHash, setTxHash] = useState<Address | undefined>()
  const queryClient = useQueryClient()
  const { setAmount } = useStateStore()

  const {
    data: contractConfig,
    error: simulateError,
    isLoading: simulateLoading,
  } = useSimulateContract({
    ...config,
    chainId: sepolia.id,
  })
  const { writeContract, isPending: userConfirming } = useWriteContract()

  const { isLoading: txLoading, isSuccess: txSuccess } =
    useWaitForTransactionReceipt({
      hash: txHash,
    })

  useEffect(() => {
    if (txSuccess) {
      toast({
        title: 'Success',
        description: 'Transaction success!',
      })
      queryClient.invalidateQueries()
      setAmount('')
      setTxHash(undefined)
    }
  }, [txSuccess, queryClient])

  const handleConfirm = () => {
    if (simulateError) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: simulateError.message,
      })
      return
    }

    writeContract(contractConfig!.request, {
      onSuccess(hash) {
        setTxHash(hash)
      },
      onError(error) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description: error.message,
        })
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
