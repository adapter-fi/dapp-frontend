'use client'

import { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useForm } from 'react-hook-form'

import { useWeb3Modal } from '@web3modal/wagmi/react'

import { WaitlistSignature } from '@/components/WaitlistSignature'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'

import { addUser } from '@/lib/db/add-user'
import { formSchema } from '@/lib/schema'
import { useStateStore } from '@/lib/store'

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

export const WaitlistForm = () => {
  const { toast } = useToast()
  const { open } = useWeb3Modal()
  const { setAllowModalClose } = useStateStore()
  const [state, formAction] = useFormState(addUser, {
    title: '',
    description: '',
  })

  useEffect(() => {
    if (state.title && state.description) {
      toast({ description: state.description, title: state.title })
    }
  }, [state])

  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      email: '',
      address: '',
      ...(state?.fields ?? {}),
    },
  })

  return (
    <Form {...form}>
      <form
        ref={formRef}
        action={formAction}
        onSubmit={(e) => {
          e.preventDefault()

          // Need this since updating in WalletSignature doesn't link this for some reason
          const formData = new FormData(formRef.current!)
          formData.append('address', form.getValues().address)

          form.handleSubmit(() => {
            formAction(formData)
          })(e)
        }}
        className="space-y-[48px]"
      >
        <div className="flex flex-col gap-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder="theadapteranon@proton.me"
                    className="p-2"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is private. You&apos;ll be notified when your time has
                  come.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nickname"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nickname</FormLabel>
                <FormControl>
                  <Input
                    placeholder="theadapteranon"
                    className="p-2"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is public. Choose how you want to be seen on the
                  leaderboard.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#C4C5C5] text-[26px] font-bold">PROOF OF FUNDS</p>
          <p className="text-[#FBFDFD]">
            Prove ownership of wallets to get priority access & benefits. Total
            assets will be public. Connect more assets to get in first.
          </p>
          <Button
            variant="outline"
            className="w-full text-[#F9F9F2]"
            onClick={() => {
              setAllowModalClose(false)
              open()
            }}
            type="button"
          >
            Connect Wallet
          </Button>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-[#C4C5C5] text-[26px] font-bold">EXPECTED SPOT</p>
          <p className="text-[#5AFA12] font-bold text-[42px] leading-[0.9]">
            TBD
          </p>
          <SubmitButton />
        </div>
        <WaitlistSignature />
      </form>
    </Form>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" className="w-full" disabled={pending}>
      Submit
    </Button>
  )
}
