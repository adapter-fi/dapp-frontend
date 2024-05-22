'use client'

import { useEffect } from 'react'

import {
  useAccountEffect,
  useDisconnect,
  useSignMessage,
  useSwitchAccount,
} from 'wagmi'

import { useToast } from '@/components/ui/use-toast'

import { checkWaitlistAddress } from '@/lib/db/check-waitlist-address'
import { useStateStore } from '@/lib/store'

export const WaitlistSignature = () => {
  const { signMessageAsync } = useSignMessage()
  const { disconnect } = useDisconnect()
  const { addSignedAddress, signedAddress } = useStateStore()
  const { toast } = useToast()

  useAccountEffect({
    onConnect({ address }) {
      if (signedAddress?.includes(address)) {
        toast({
          variant: 'destructive',
          title: 'Error',
          description:
            'Address already submitted, please change wallet address',
        })
        disconnect()
        return
      }

      // Delay needed because wagmi needs some time to connect
      setTimeout(async () => {
        try {
          await signMessageAsync({
            message: 'Prove ownership of your account to join the waitlist',
          })
          const uniqueAddress = await checkWaitlistAddress(address!)
          if (uniqueAddress) {
            addSignedAddress(address)
          } else {
            toast({
              variant: 'destructive',
              title: 'Error',
              description: 'Address already submitted',
            })
          }
          disconnect()
        } catch (error) {
          disconnect()
          console.log(error)
        }
      }, 500)
    },
  })

  return null
}
