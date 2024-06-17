'use client'

import { useQuery } from '@tanstack/react-query'

import { Skeleton } from '@/components/ui/skeleton'

import { useVaultBalances } from '@/hooks/use-vault-balances'

import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'

import { columns } from '@/app/(dapp)/3093aa6df97b839999cbd94a1b71b0fcb3240940fc3f8ec565eb2292e40f910e/columns'
import { DataTable } from '@/app/(dapp)/3093aa6df97b839999cbd94a1b71b0fcb3240940fc3f8ec565eb2292e40f910e/data-table'

export const VaultsChart = () => {
  const { data: pendleData } = useQuery({
    queryKey: ['pendleData'],
    queryFn: () => getPendleMarketData(),
  })

  const vaultBalances = useVaultBalances()

  const chartData = pendleData?.map(
    (
      { logoURI, protocolURI, name, underlyingApy, impliedApy, type, chain },
      i
    ) => ({
      data: {
        name,
        logoURI,
        protocolURI,
        type,
      },
      underlyingAPR: underlyingApy * 100,
      autocompoundedAPY: impliedApy * 100,
      deposits: vaultBalances?.at(i)?.tvl || 0,
      holdings: vaultBalances?.at(i)?.balance || 0,
      network: chain.name,
    })
  )

  return (
    <div className="p-12">
      {chartData ? (
        <DataTable columns={columns} data={chartData} vaultTable />
      ) : (
        <Skeleton className="w-full h-[300px]" />
      )}
    </div>
  )
}
