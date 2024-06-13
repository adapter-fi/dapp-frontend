'use client'

import { useQuery } from '@tanstack/react-query'
import { useAccount } from 'wagmi'

import { Skeleton } from '@/components/ui/skeleton'

import { getPendleMarketData } from '@/lib/queries/get-pendle-market-data'
import { formatPercentage } from '@/lib/utils'

import { columns } from '@/app/(dapp)/vaults/columns'
import { DataTable } from '@/app/(dapp)/vaults/data-table'

export const VaultsChart = () => {
  const { data: pendleData } = useQuery({
    queryKey: ['pendleData'],
    queryFn: () => getPendleMarketData(),
  })

  const { address: walletAddress } = useAccount()

  const chartData = pendleData?.map(
    ({ logoURI, protocolURI, name, underlyingApy, impliedApy, type }) => ({
      data: {
        name,
        logoURI,
        protocolURI,
        type,
      },
      underlyingAPR: underlyingApy * 100,
      autocompoundedAPY: impliedApy * 100,
      deposits: 0,
      holdings: 0,
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
