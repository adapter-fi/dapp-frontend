import { Metric } from '@/components/Metric'

import { DataTable } from '@/app/(dapp)/vaults/data-table'
import { Points, columns } from '@/app/(dapp)/leaderboard/columns'

const fakeData: Points[] = [
  {
    rank: 1,
    name: '0xa85724f7122dE7AD30CEAB290109e961dA24F269',
    value: 100000,
    points: 100000,
  },
  {
    rank: 2,
    name: '0xa85724f7122dE7AD30CEAB290109e961dA24F269',
    value: 100000,
    points: 90000,
  },
  {
    rank: 3,
    name: '0xa85724f7122dE7AD30CEAB290109e961dA24F269',
    value: 100000,
    points: 80000,
  },
  {
    rank: 4,
    name: '0xa85724f7122dE7AD30CEAB290109e961dA24F269',
    value: 100000,
    points: 70000,
  },
  {
    rank: 5,
    name: '0xa85724f7122dE7AD30CEAB290109e961dA24F269',
    value: 100000,
    points: 60000,
  },
]

export default function LeaderboardPage() {
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
      {/* <div className="p-12">
        <DataTable columns={columns} data={fakeData} />
      </div> */}
    </div>
  )
}
