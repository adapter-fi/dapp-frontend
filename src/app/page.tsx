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
      <div className="bg-[#125AFA] w-screen h-[600px] relative overflow-clip">
        <img
          src="/brand/logo.svg"
          alt="logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
          height={528}
          width={528}
        />
        <img
          src="/misc/logo-outline.svg"
          alt="logo"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000000px] w-[4674px]"
        />
      </div>
      <div className="py-[48px] flex flex-col gap-2 items-center text-[#125AFA]">
        <p className="font-bold text-[88px] leading-[72px]">ADAPTER.FI</p>
        <div className="flex gap-2 items-center">
          <a href={twitterUrl} rel="noreferrer noopener" target="_blank" className='hover:scale-110'>
            <Image
              src="/icons/x-blue.svg"
              alt="twitter"
              width={24}
              height={24}
            />
          </a>
          <a href={discordUrl} rel="noreferrer noopener" target="_blank" className='hover:scale-110'>
            <Image
              src="/icons/discord-blue.svg"
              alt="discord"
              width={40}
              height={40}
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="font-bold text-[42px]">BOOSTER CLUB OPEN</p>
        <p className="font-light text-center">
          Connect early, get the <b className='font-semibold'>adapter boost</b> for your wallets. <br />{' '}
          First in first served.
        </p>
        <WaitlistModal />
      </div>
      <div className="flex flex-col items-center gap-8 my-12">
        <div className="flex justify-between items-center w-[1000px] px-12 relative">
          <div className="flex flex-col items-center">
            <p className="font-bold text-[42px] leading-[0.8]">
              {formatCurrency(users?.reduce((a, b) => a + b.networth, 0))}
            </p>
            <p className="text-[#565151] font-light text-sm">
              Users wallet balances
            </p>
          </div>
          <div className="flex flex-col items-center absolute left-1/2 -translate-x-1/2">
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

        <div className="w-[1000px]">
          <DataTable columns={columns} data={users as any} />
        </div>
      </div>
      <Footer scheme="dark" />
    </div>
  )
}
