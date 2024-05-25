import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/waitlist/WaitlistModal'
import { columns } from '@/components/waitlist/columns'

import { discordUrl, twitterUrl } from '@/lib/constants'
import { getUsers } from '@/lib/db/get-users'
import { formatCurrency } from '@/lib/utils'

import { DataTable } from '@/app/(dapp)/vaults/data-table'

export default async function LandingPage() {
  const users = await getUsers()

  return (
    <div className="flex flex-col">
      <div className="bg-[#125AFA] w-screen md:h-[600px] h-[400px] relative overflow-clip">
        <img
          src="/brand/logo.svg"
          alt="logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:h-[528px] md:w-[528px] h-[300px] w-[300px]"
        />
        <img
          src="/misc/logo-outline.svg"
          alt="logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000000px] w-[4674px] scale-[0.65] md:scale-100"
        />
      </div>
      <div className="py-[48px] flex flex-col gap-2 items-center text-[#125AFA]">
        <p className="font-bold md:text-[88px] text-6xl md:leading-[72px]">
          ADAPTER.FI
        </p>
        <div className="flex gap-2 items-center">
          <a
            href={twitterUrl}
            rel="noreferrer noopener"
            target="_blank"
            className="hover:scale-110"
          >
            <Image
              src="/icons/x-blue.svg"
              alt="twitter"
              width={24}
              height={24}
            />
          </a>
          <a
            href={discordUrl}
            rel="noreferrer noopener"
            target="_blank"
            className="hover:scale-110"
          >
            <Image
              src="/icons/discord-blue.svg"
              alt="discord"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center px-4 md:px-0">
        <p className="font-bold md:text-[42px] text-3xl leading-[0.8] md:leading-none">
          BOOSTER CLUB OPEN
        </p>
        <p className="font-light text-center">
          Connect early, get the <b className="font-semibold">adapter boost</b>{' '}
          for your wallets. <br /> First in first served.
        </p>
        <WaitlistModal />
      </div>
      <div className="flex flex-col items-center gap-8 my-12 px-4 md:px-0">
        <div className="md:flex grid grid-cols-2 gap-4 md:gap-0 justify-between items-center md:w-[1000px]  md:px-12 relative">
          <div className="flex flex-col items-center">
            <p className="font-bold text-[42px] leading-[0.8]">
              {formatCurrency(users?.reduce((a, b) => a + b.networth, 0))}
            </p>
            <p className="text-[#565151] font-light text-sm">
              Users wallet balances
            </p>
          </div>
          <div className="flex flex-col items-center md:absolute md:left-1/2 md:-translate-x-1/2">
            <p className="font-bold text-[42px] leading-[0.8]">1.5X</p>
            <p className="text-[#565151] font-light text-sm">Boost</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="font-bold text-[42px] leading-[0.8]">
              {users?.length}
            </p>
            <p className="text-[#565151] font-light text-sm">Users</p>
          </div>
        </div>

        <div className="md:w-[1000px] w-full">
          <DataTable columns={columns} data={users as any} />
        </div>
      </div>
      <Footer scheme="dark" />
    </div>
  )
}
