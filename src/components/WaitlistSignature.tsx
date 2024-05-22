'use client'

import { useFormContext } from 'react-hook-form'

import { useAccountEffect, useDisconnect, useSignMessage } from 'wagmi'

import { checkWaitlistAddress } from '@/lib/db/check-waitlist-address'

export const WaitlistSignature = () => {
  const { signMessageAsync } = useSignMessage()
  const { disconnect } = useDisconnect()
  const { setValue } = useFormContext()

  useAccountEffect({
    onConnect({ address }) {
      // Delay needed because wagmi needs some time to connect
      setTimeout(async () => {
        try {
          await signMessageAsync({
            message: 'Prove ownership of your account to join the waitlist',
          })
          setValue('address', address)
          await checkWaitlistAddress(address!)
        } catch (error) {
          console.log(error)
        }
      }, 500)
    },
  })

  return null
}
