'use client'

import { Close } from '@radix-ui/react-dialog'
import { useEffect, useRef } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useForm } from 'react-hook-form'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { useDisconnect } from 'wagmi'

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
import { Separator } from '@/components/ui/separator'
import { useToast } from '@/components/ui/use-toast'
import { WaitlistSignature } from '@/components/waitlist/WaitlistSignature'

import { addUser } from '@/lib/db/add-user'
import { WaitlistUser } from '@/lib/db/get-users'
import { formSchema } from '@/lib/schema'
import { useStateStore } from '@/lib/store'
import {
  findInsertPosition,
  formatCurrency,
  truncateAddress,
} from '@/lib/utils'

import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

export const WaitlistForm = ({
  users,
}: {
  users: WaitlistUser[] | undefined
}) => {
  const { toast } = useToast()
  const { open } = useWeb3Modal()
  const { signedAddress, setAllowModalClose, resetSignedAddress, setConfetti } =
    useStateStore()
  const { disconnectAsync } = useDisconnect()
  const [state, formAction] = useFormState(addUser, {
    title: '',
    description: '',
  })

  const totalAssets = signedAddress?.reduce((a, b) => a + b.value, 0)

  useEffect(() => {
    if (state.title && state.description) {
      toast({
        description: state.description,
        title: state.title,
        variant: state.title.includes('Error') ? 'destructive' : 'default',
      })
    }
    if (state.title !== 'Error' && state.title) {
      resetSignedAddress()
    }
    if (state.title === 'Success') {
      setConfetti(true)
    }
  }, [state])

  const formRef = useRef<HTMLFormElement>(null)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nickname: '',
      email: '',
      ...(state?.fields ?? {}),
    },
  })

  if (state.title === 'Success') {
    return (
      <div className="flex flex-col px-2 gap-4">
        <p className="text-[#FBFDFD]">
          Successfully added to the booster club! You will be notified when your
          time has come.
        </p>
        <Close>
          <Button>Close</Button>
        </Close>
      </div>
    )
  }

  return (
    <div className="flex flex-col px-2">
      <p className="font-bold text-[#C4C5C5] text-[26px]">USER</p>
      <Form {...form}>
        <form
          ref={formRef}
          action={formAction}
          onSubmit={(e) => {
            e.preventDefault()
            const formData = new FormData(formRef.current!)
            formData.append('address', JSON.stringify(signedAddress!))
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
            <p className="text-[#C4C5C5] text-[26px] font-bold">
              PROOF OF FUNDS
            </p>
            {!signedAddress ? (
              <>
                <p className="text-[#FBFDFD]">
                  Prove ownership of wallets to get priority access & benefits.
                  Total assets will be public.
                </p>
                <Button
                  variant="outline"
                  className="w-full text-[#F9F9F2]"
                  onClick={async () => {
                    setAllowModalClose(false)
                    await disconnectAsync()
                    open()
                  }}
                  type="button"
                >
                  Connect Wallet
                </Button>
              </>
            ) : (
              <div className="flex flex-col gap-1 text-[#FBFDFD]">
                {signedAddress.map(({ address, value }, i) => (
                  <div className="flex justify-between" key={i}>
                    <p>{truncateAddress(address)}</p>
                    <p>{formatCurrency(value)}</p>
                  </div>
                ))}
                <Separator />
                <div className="flex justify-between">
                  <p>Total Assets</p>
                  <p>{formatCurrency(totalAssets)}</p>
                </div>
                <Button
                  variant="outline"
                  className="w-full text-[#F9F9F2] mt-2"
                  onClick={async () => {
                    setAllowModalClose(false)
                    await disconnectAsync()
                    open()
                  }}
                  type="button"
                >
                  Add additional wallets
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-[#C4C5C5] text-[26px] font-bold">
              EXPECTED SPOT
            </p>
            <p className="text-[#5AFA12] font-bold text-[42px] leading-[0.9]">
              {totalAssets && users
                ? findInsertPosition(
                    users.map(({ networth }) => networth),
                    totalAssets
                  ) + 1
                : 'TBD'}
            </p>
            <SubmitButton />
          </div>
          <WaitlistSignature />
        </form>
      </Form>
    </div>
  )
}

const SubmitButton = () => {
  const { pending } = useFormStatus()
  const { signedAddress } = useStateStore()

  return (
    <Button
      type="submit"
      className="w-full"
      disabled={pending || !signedAddress}
    >
      Submit
    </Button>
  )
}
