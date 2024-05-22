'use server'

import { supabase } from '@/lib/supabase'

export const checkWaitlistAddress = async (address: string) => {
  const { data, error } = await supabase
    .from('waitlist')
    .select('address')
    .ilike('address', `%${address}%`)
  console.log(data, error)
}
