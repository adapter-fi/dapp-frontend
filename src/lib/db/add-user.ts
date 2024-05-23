'use server'

import { Address } from 'viem'

import { formSchema } from '@/lib/schema'
import { supabase } from '@/lib/supabase'
import { capitalizeFirstLetter, extractBetweenParentheses } from '@/lib/utils'

export type FormState = {
  description: string
  title: string
  fields?: Record<string, string>
}

export const addUser = async (
  prevState: FormState,
  data: FormData
): Promise<FormState> => {
  const values = Object.fromEntries(data)
  const validatedFields = formSchema.safeParse(values)
  const newAddresses: Address[] = JSON.parse(validatedFields.data?.address!)

  if (!validatedFields.success) {
    const fields: Record<string, string> = {}
    for (const key of Object.keys(values)) {
      fields[key] = values[key].toString()
    }
    return {
      description: `Invalid Form: ${validatedFields.error.issues.map((issue) => issue.message).concat(',')}`,
      title: 'Error',
      fields,
    }
  }

  try {
    const { data: newId, error: waitlistError } = await supabase
      .from('waitlist')
      .insert([
        {
          email: validatedFields.data.email.toLowerCase(),
          nickname: validatedFields.data.nickname.toLowerCase(),
        },
      ])
      .select('id')
      .single()

    if (
      waitlistError &&
      waitlistError.message.includes(
        'duplicate key value violates unique constraint'
      )
    ) {
      console.log(waitlistError)
      return {
        description: `${capitalizeFirstLetter(extractBetweenParentheses(waitlistError.details))} already exists`,
        title: 'Error',
      }
    } else if (waitlistError) {
      return {
        description: 'Please try again',
        title: 'Unknown Error',
      }
    }

    const { error: walletError } = await supabase
      .from('wallets')
      .insert(newAddresses.map((address) => ({ user: newId?.id, address })))

    if (walletError) {
      console.log(walletError)
      return {
        description: 'Please try again',
        title: 'Unknown Error',
      }
    }

    return { description: 'User added to waitlist!', title: 'Success' }
  } catch (error) {
    console.log(error)
    return { description: 'Please try again', title: 'Unknown Error' }
  }
}
