'use server'

import { supabase } from '@/lib/supabase'

export const checkWaitlistAddress = async (address: string) => {
  const { data } = await supabase
    .from('wallets')
    .select('address')
    .ilike('address', `%${address}%`)

  return data!.length === 0
}
