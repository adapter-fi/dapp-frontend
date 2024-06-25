'use client'

import { useQuery } from '@tanstack/react-query'

import { Skeleton } from '@/components/ui/skeleton'

import { useVaultBalances } from '@/hooks/use-vault-balances'

import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'
import { formatPercentage } from '@/lib/utils'

import { columns } from '@/app/(dapp)/vaults/columns'
import { DataTable } from '@/app/(dapp)/vaults/data-table'

export const VaultsChart = () => {
  const { data: pendleData } = useQuery({
    queryKey: ['pendleData'],
    queryFn: () => getPendleMarketData(),
  })

  const vaultBalances = useVaultBalances()

  const chartData = pendleData?.map(
    (
      {
        logoURI,
        protocolURI,
        name,
        underlyingApy,
        impliedApy,
        type,
        chain,
        deprecated,
      },
      i
    ) => ({
      data: {
        name,
        logoURI,
        protocolURI,
        type,
        deprecated,
      },
      underlyingAPR:
        underlyingApy !== undefined
          ? formatPercentage(underlyingApy * 100)
          : 'TBD',
      autocompoundedAPY:
        underlyingApy !== undefined
          ? formatPercentage(impliedApy * 100)
          : 'TBD',
      deposits: vaultBalances?.at(i)?.tvl || 0,
      holdings: vaultBalances?.at(i)?.balance || 0,
      network: chain.name,
    })
  )

  const filteredChartData = chartData?.filter(
    ({ data: { deprecated }, holdings }) => !deprecated || (deprecated && holdings > 0)
  )

  return (
    <div className="p-12">
      {chartData ? (
        <DataTable columns={columns} data={filteredChartData!} />
      ) : (
        <Skeleton className="w-full h-[300px]" />
      )}
    </div>
  )
}
