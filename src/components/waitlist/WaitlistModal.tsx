'use client'

import { useEffect, useState } from 'react'

import { useWeb3ModalState } from '@web3modal/wagmi/react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { WaitlistForm } from '@/components/waitlist/WaitlistForm'

import { WaitlistUser } from '@/lib/db/get-users'
import { useStateStore } from '@/lib/store'

export const WaitlistModal = ({
  users,
}: {
  users: WaitlistUser[] | undefined
}) => {
  const [open, setOpen] = useState(false)
  const { allowModalClose, setAllowModalClose, setConfetti } = useStateStore()
  const { open: web3modalOpen } = useWeb3ModalState()

  useEffect(() => {
    if (!web3modalOpen) {
      setAllowModalClose(true)
    }
  }, [web3modalOpen])

  return (
    <Dialog
      open={open}
      onOpenChange={(open) => {
        if (open || (!open && allowModalClose)) {
          setOpen(open)
          if (!open) {
            setConfetti(false)
          }
        }
      }}
    >
      <DialogTrigger asChild>
        <Button variant="inverted" className="h-16 w-[330px]">
          JOIN THE BOOSTER CLUB
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
          <p className="text-white font-bold">JOIN THE BOOSTER CLUB</p>
        </div>

        <WaitlistForm users={users} />
      </DialogContent>
    </Dialog>
  )
}
