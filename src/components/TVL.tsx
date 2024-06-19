'use client'

import { Metric } from '@/components/Metric'

import { useVaultBalances } from '@/hooks/use-vault-balances'

export const TVL = () => {
  const vaultBalances = useVaultBalances()
  const tvl = vaultBalances?.reduce((acc, { tvl }) => acc + tvl, 0)
  return <Metric label="Total Deposits" amount={tvl || 0} unit="USD" />
}
