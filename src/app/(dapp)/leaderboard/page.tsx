import { Suspense } from 'react'

import { Metric } from '@/components/Metric'

import { columns } from '@/app/(dapp)/leaderboard/columns'
import { DataTable } from '@/app/(dapp)/leaderboard/data-table'


export default async function LeaderboardPage() {
  const leaderboard = await fetch(
    'https://adapterfi.index.biggestlab.io/leaderboard/',
    {
      headers: {
        Authorization: `Bearer ${process.env.ADAPTER_API_KEY}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    }
  )
    .then((res) => res.json())
    .then((data) =>
      data.map(
        ({
          points,
          address,
          rank,
        }: {
          points: number
          address: string
          rank: number
        }) => ({ points, name: address, rank })
      )
    )

  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] border border-[#0E47C5] px-12 pt-12 pb-4 flex flex-col justify-between">
        <div className="flex flex-col">
          <p className="text-2xl font-bold">LEADERBOARD</p>
          <p className="text-gray font-light mt-[-8px]">
            Use Adapter and earn points
          </p>
        </div>
        {/* <div className="grid grid-cols-4 w-full">
          <Metric label="Your Points" amount={420} />
          <Metric label="Your Rank" amount={420} />
          <Metric label="Loyalty Boost" amount={'4.1X'} />
          <Metric label="Total Points" amount={'100M'} />
        </div> */}
      </div>
      <p className="px-12 pt-12 text-[69px] font-bold">COMING SOON</p>
      <p className="px-12">
        Your points are accumulated and tracked from Day 1, leaderboard coming
        soon.
      </p>
      <div className="p-12">
        <Suspense>
          <DataTable columns={columns} data={leaderboard} />
        </Suspense>
      </div>
    </div>
  )
}
