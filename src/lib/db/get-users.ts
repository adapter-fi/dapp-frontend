import { supabase } from '@/lib/supabase'

export type WaitlistUser = { spot: number; name: string; networth: number }

export const getUsers = async () => {
  const { data } = await supabase
    .from('waitlist')
    .select('nickname, email, wallets (address, value)')

  const formatted = data?.map(({ nickname, wallets }) => ({
    name: nickname,
    networth: wallets.reduce((acc, { value }) => acc + value, 0),
  }))

  const ordered = formatted?.sort((a, b) => b.networth - a.networth)

  return ordered?.map((data, i) => ({
    ...data,
    spot: i + 1,
  }))
}
