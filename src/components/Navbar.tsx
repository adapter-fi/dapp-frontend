'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

import { Button } from '@/components/ui/button'

import { cn, truncateAddress } from '@/lib/utils'

export const Navbar = () => {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  const pathname = usePathname()

  return (
    <div className="flex p-4 justify-between">
      <div className="flex gap-4 items-center">
        <Link href="/" className="flex gap-1">
          <Image src="/brand/logo.png" width={40} height={40} alt="logo" />
          <Image
            src="/brand/wordmark.svg"
            width={177}
            height={40}
            alt="wordmark"
          />
        </Link>
        <Link href="/vaults">
          <Button
            variant="ghost"
            className={cn(
              pathname === '/vaults' && 'border-t border-t-[#125AFA]'
            )}
          >
            VAULTS
          </Button>
        </Link>
        <Link href="/leaderboard">
          <Button
            variant="ghost"
            className={cn(
              pathname === '/leaderboard' && 'border-t border-t-[#125AFA]'
            )}
          >
            LEADERBOARD
          </Button>
        </Link>
      </div>

      <div className="flex gap-4">
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
            <Button variant="outline" onClick={() => open({ view: 'Account' })}>
              {truncateAddress(address)}
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
