'use client'

import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'

import { Metric } from '@/components/Metric'

export const WalletPoints = () => {
  const { address } = useAccount()
  const { data: points } = useQuery({
    queryKey: ['points', address],
    enabled: !!address,
    queryFn: () =>
      fetch(`/api/points?address=${address}`).then((res) => res.json()),
  })

  return !!address ? (
    <Metric label="Your Points" amount={points?.points} decimals={0} />
  ) : (
    <p>Connect wallet to view your points</p>
  )
}
