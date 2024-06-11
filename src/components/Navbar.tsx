'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount, useEnsName } from 'wagmi'

import { Button } from '@/components/ui/button'

import { truncateAddress } from '@/lib/utils'

export const Navbar = () => {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const { data: ens } = useEnsName({ address })
  const pathname = usePathname()

  return (
    <div className="flex p-4 justify-between relative">
      <div className="flex gap-4 items-center">
        <Link href="/vaults">
          <Button variant="ghost">
            {pathname === '/vaults' && (
              <div className="h-[1px] w-full bg-[#125AFA] absolute top-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-[0] origin-left" />
            )}
            VAULTS
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button variant="ghost" className="group">
            {pathname === '/leaderboard' && (
              <div className="h-[1px] w-full bg-[#125AFA] absolute top-0 transition-all duration-500 ease-in-out scale-100 group-hover:scale-[0] origin-left" />
            )}
            LEADERBOARD
          </Button>
        </Link>
      </div>
      <Link href="/" className="absolute left-1/2 -translate-x-1/2">
        <Image src="/brand/logo.svg" height={40} width={40} alt="logo" />
      </Link>
      <div className="flex gap-4">
        {pathname === '/' ? (
          <Link href="/vaults">
            <Button>LAUNCH APP</Button>
          </Link>
        ) : (
          <div className="flex gap-2">
            <Button variant="ghost">ABOUT</Button>
            <Button variant="ghost">COMMUNITY</Button>
            {!isConnected ? (
              <Button onClick={() => open()}>
                <Image
                  src="/icons/wallet.svg"
                  height={24}
                  width={24}
                  alt="wallet"
                />
                CONNECT
              </Button>
            ) : (
              <Button
                variant="outline"
                onClick={() => open({ view: 'Account' })}
              >
                {ens || truncateAddress(address)}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
