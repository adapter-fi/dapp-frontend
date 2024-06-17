'use client'

import { Metric } from '@/components/Metric'

import { useVaultBalances } from '@/hooks/use-vault-balances'

import { formatNumber } from '@/lib/utils'

export const TVL = () => { 
  const vaultBalances = useVaultBalances()
  const tvl = vaultBalances?.reduce((acc, { tvl }) => acc + tvl, 0)
  return (
    <Metric label="Total Deposits" amount={formatNumber(tvl || 0)} unit="USD" />
  )
}
