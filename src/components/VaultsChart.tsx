'use client'

import { useQuery } from '@tanstack/react-query'

import { Skeleton } from '@/components/ui/skeleton'

import { useVaultBalances } from '@/hooks/use-vault-balances'

import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'

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
