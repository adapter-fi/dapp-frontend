'use client'

import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'

import { Metric } from '@/components/Metric'

import { useTokenBalance } from '@/hooks/use-token-balance'
import { useVaultBalances } from '@/hooks/use-vault-balances'

import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'
import { formatNumber, fromBigNumber } from '@/lib/utils'

export const VaultMetrics = ({
  vaultName,
  vaultAddress,
  slug,
}: {
  vaultName: string
  vaultAddress: Address
  slug: string
}) => {
  const balance = useTokenBalance(vaultAddress)
  const vaultBalances = useVaultBalances()
  const { data: pendleData } = useQuery({
    queryKey: ['pendleData'],
    queryFn: () => getPendleMarketData(),
  })

  return (
    <div className="grid grid-cols-4 gap-32 p-6">
      <Metric
        label="TVL"
        amount={vaultBalances?.filter(({ vault }) => vault === slug)[0].tvl || 0}
        unit="USD"
        size="sm"
      />
      <Metric
        label={'aPT-' + vaultName + ' Balance'}
        amount={formatNumber(fromBigNumber(balance))}
        unit={'aPT-' + vaultName}
        size="sm"
      />
      <Metric
        label="Yield"
        amount={formatNumber(
          (pendleData?.filter(
            ({ name }) => name.slice(0, name.indexOf('-')) === vaultName
          )[0].impliedApy || 0) * 100
        )}
        unit="%"
        size="sm"
      />
      <Metric
        label="Rewards Earned"
        amount="0"
        unit={'aPT-' + vaultName}
        size="sm"
      />
    </div>
  )
}
