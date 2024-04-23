'use client'

import Image from 'next/image'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useAccount } from 'wagmi'

import { Button } from '@/components/ui/button'

import { truncateAddress } from '@/lib/utils'

export const Navbar = () => {
  const { open } = useWeb3Modal()
  const { isConnected, address } = useAccount()
  return (
    <div className="flex p-4 justify-between">
      <div className="flex gap-1">
        <Image src="/brand/logo.png" width={40} height={40} alt="logo" />
        <Image
          src="/brand/wordmark.svg"
          width={177}
          height={40}
          alt="wordmark"
        />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-0.5">
          <Button variant="ghost">ABOUT</Button>
          <Button variant="ghost">COMMUNITY</Button>
          {!isConnected ? (
            <Button className="group" onClick={() => open()}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                className="h-6 w-6 group-hover:h-8 group-hover:w-8"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M2.63104 5.5C2.63104 4.25736 3.6384 3.25 4.88104 3.25H19.881C21.1237 3.25 22.131 4.25736 22.131 5.5V8V16V18.5C22.131 19.7426 21.1237 20.75 19.881 20.75H4.88104C3.6384 20.75 2.63104 19.7426 2.63104 18.5V5.5ZM20.631 5.5V7.25H13.1245C12.8826 7.25 12.6424 7.28899 12.4129 7.36546L12.1695 7.4466C11.2508 7.75286 10.631 8.61267 10.631 9.58114V14.4189C10.631 15.3873 11.2508 16.2471 12.1695 16.5534L12.4129 16.6345C12.6424 16.711 12.8826 16.75 13.1245 16.75H20.631V18.5C20.631 18.9142 20.2953 19.25 19.881 19.25H4.88104C4.46683 19.25 4.13104 18.9142 4.13104 18.5V5.5C4.13104 5.08579 4.46683 4.75 4.88104 4.75H19.881C20.2953 4.75 20.631 5.08579 20.631 5.5ZM13.1245 15.25H20.631V8.75H13.1245C13.0438 8.75 12.9638 8.763 12.8873 8.78849L12.6439 8.86963C12.3376 8.97171 12.131 9.25832 12.131 9.58114V14.4189C12.131 14.7417 12.3376 15.0283 12.6439 15.1304L12.8873 15.2115C12.9638 15.237 13.0438 15.25 13.1245 15.25ZM15.131 11.25C14.7168 11.25 14.381 11.5858 14.381 12C14.381 12.4142 14.7168 12.75 15.131 12.75H17.631C18.0453 12.75 18.381 12.4142 18.381 12C18.381 11.5858 18.0453 11.25 17.631 11.25H15.131Z"
                  fill="#1F1F1D"
                />
              </svg>
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
