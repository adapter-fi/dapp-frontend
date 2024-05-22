'use server'

import { formSchema } from '@/lib/schema'
import { supabase } from '@/lib/supabase'
import { capitalizeFirstLetter, extractBetweenParentheses } from '@/lib/utils'

export type FormState = {
  description: string
  title: string
  fields?: Record<string, string>
  issues?: string[]
}

export const addUser = async (
  prevState: FormState,
  data: FormData
): Promise<FormState> => {
  const values = Object.fromEntries(data)
  const validatedFields = formSchema.safeParse(values)

  if (!validatedFields.success) {
    const fields: Record<string, string> = {}
    for (const key of Object.keys(values)) {
      fields[key] = values[key].toString()
    }
    return {
      description: 'Invalid Form',
      title: 'Error',
      fields,
      issues: validatedFields.error.issues.map((issue) => issue.message),
    }
  }

  try {
    const { error } = await supabase.from('waitlist').insert([
      {
        email: validatedFields.data.email.toLowerCase(),
        nickname: validatedFields.data.nickname.toLowerCase(),
        address: validatedFields.data.address.toLowerCase(),
      },
    ])
    if (
      error &&
      error.message.includes('duplicate key value violates unique constraint')
    ) {
      console.log(error)
      return {
        description: `${capitalizeFirstLetter(extractBetweenParentheses(error.details))} already exists`,
        title: 'Error',
      }
    } else if (error) {
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
