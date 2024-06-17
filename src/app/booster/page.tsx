import Image from 'next/image'

import { Footer } from '@/components/Footer'
import { WaitlistModal } from '@/components/waitlist/WaitlistModal'
import { columns } from '@/components/waitlist/columns'

import { discordUrl, githubUrl, twitterUrl } from '@/lib/constants'
import { getUsers } from '@/lib/db/get-users'
import { formatCurrency } from '@/lib/utils'

import { DataTable } from '@/app/(dapp)/3093aa6df97b839999cbd94a1b71b0fcb3240940fc3f8ec565eb2292e40f910e/data-table'

import { Github } from 'lucide-react'
import { Timer } from '@/components/Timer'

export default async function LandingPage() {
  const users = await getUsers()

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="flex flex-col items-center">
        <div className="bg-[#125AFA] w-screen h-[40dvh] max-h-[600px] relative overflow-clip">
          <img
            src="/brand/booster-logo.svg"
            alt="logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 h-[80%] w-[80%]"
          />
          {/* <img
            src="/misc/logo-outline.svg"
            alt="logo"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 max-w-[1000000px] w-[4674px] h-[90%]"
          /> */}
        </div>
        <div className="py-[48px] flex flex-col gap-2 items-center text-[#125AFA]">
          <p className="font-bold md:text-[88px] text-6xl md:leading-[72px]">
            ADAPTER.FI
          </p>
          <p className="md:text-3xl text-xl font-medium px-4 text-center text-[#565151]">
            Automated Strategies for Blue-Chip DeFi Products
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
            <a
              href={githubUrl}
              rel="noreferrer noopener"
              target="_blank"
              className="hover:scale-110"
            >
              <Github size={26} className="text-[#125AFA]" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center px-4 md:px-0">
          <p className="font-bold md:text-[42px] text-3xl leading-[0.8] md:leading-none">
            BOOSTER CLUB OPEN
          </p>
          <p className="font-light text-center">
            Connect early, get the{' '}
            <b className="font-semibold">adapter boost</b> for your wallets.
          </p>
          <WaitlistModal users={users}/>
        </div>
        <div className="flex flex-col items-center gap-8 my-12 px-4 md:px-0">
          <div className="md:flex grid md:grid-cols-4 gap-4 md:gap-0 justify-between items-center md:w-[1000px]  md:px-12 relative">
            <div className="flex flex-col items-center">
              <p className="font-bold text-[42px] leading-[0.8]">
                {formatCurrency(users?.reduce((a, b) => a + b.networth, 0))}
              </p>
              <p className="text-[#565151] font-light text-sm">
                Users wallet balances
              </p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-[42px] leading-[0.8]">1.5X</p>
              <p className="text-[#565151] font-light text-sm">Boost</p>
            </div>
            <div className="flex flex-col items-center">
              <p className="font-bold text-[42px] leading-[0.8]">
                {users?.length}
              </p>
              <p className="text-[#565151] font-light text-sm">Users</p>
            </div>
            <div className="flex flex-col items-center">
              <Timer />
              <p className="text-[#565151] font-light text-sm">Time left to join</p>
            </div>
          </div>

          <div className="md:w-[1000px] w-full">
            <DataTable columns={columns} data={users as any} />
          </div>
        </div>
        <div className="flex flex-col items-center py-12 gap-2 px-4">
          <p className="text-[42px] font-bold leading-[0.8]">PARTNERS</p>
          <p className="font-light text-[#565151]">
            Adapter maintains strong relationship with its partners to ensure the
            best possible services to its users.
          </p>
          <div className="flex flex-wrap gap-8">
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1621033017337843713/loDsYCJr_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="pendle"
              />
              <p>Pendle</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1628968703911145473/_lB7zEtS_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="swell"
              />
              <p>Swell</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1774331469122736129/iSCd1rGu_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="karak"
              />
              <p>Karak</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1748000232783147008/JgHFApFy_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="etherfi"
              />
              <p>Ether.fi</p>
            </div>
            {/* <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1550517197189140481/cUrfy43k_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="redacted"
              />
              <p>Redacted</p>
            </div> */}
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1656222978919784449/eQgwPTaY_400x400.png"
                className="rounded-full h-[80px]"
                alt="balancer"
              />
              <p>Balancer</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1719718670610427904/IwyLpOfL_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="kelp"
              />
              <p>Kelp</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="https://pbs.twimg.com/profile_images/1715232040319160320/LNbYHlBA_400x400.jpg"
                className="rounded-full h-[80px]"
                alt="Renzo"
              />
              <p>Renzo</p>
            </div>
          </div>
        </div>
      </div>

      <Footer scheme="dark" />
    </div>
  )
}
