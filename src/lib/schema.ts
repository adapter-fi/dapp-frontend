import { z } from 'zod'

export const formSchema = z.object({
  nickname: z.string().min(3).max(50),
  email: z.string().email(),
  // address: z.string().regex(/^(0x)?[0-9a-fA-F]{40}$/).optional(),
  address: z.string().optional(),
})