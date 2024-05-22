'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import { useWeb3ModalState } from '@web3modal/wagmi/react'

import { WaitlistForm } from '@/components/WaitlistForm'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

import { useStateStore } from '@/lib/store'

export default function LandingPage() {
  const [open, setOpen] = useState(false)
  const { allowModalClose, setAllowModalClose } = useStateStore()
  const { open: web3modalOpen } = useWeb3ModalState()

  useEffect(() => {
    if (!web3modalOpen) {
      setAllowModalClose(true)
    }
  }, [web3modalOpen])

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
          <Image
            src="/icons/twitter-blue.svg"
            alt="twitter"
            width={40}
            height={40}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="font-bold text-[42px]">WAITLIST OPEN</p>
        <p className="font-light text-center">
          Connect early, get exclusive benefits based on your wallets. <br />{' '}
          First in first served.
        </p>
        <Dialog
          open={open}
          onOpenChange={(open) => {
            if (open || (!open && allowModalClose)) {
              setOpen(open)
            }
          }}
        >
          <DialogTrigger asChild>
            <Button variant="inverted" className="h-16 w-[330px]">
              JOIN THE WAITLIST
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="flex items-center gap-1 pt-3.5">
              <img
                src="/brand/logo-inverted.svg"
                height={24}
                width={24}
                alt="logo"
              />
              <p className="text-white font-bold">JOIN THE WAITLIST</p>
            </div>
            <div className="flex flex-col px-2">
              <p className="font-bold text-[#C4C5C5] text-[26px]">USER</p>
              <WaitlistForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  )
}
