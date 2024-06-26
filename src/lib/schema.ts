import { z } from 'zod'

export const formSchema = z.object({
  nickname: z
    .string()
    .regex(
      /^[a-zA-Z0-9_]+$/,
      'Invalid characters. Only letters, numbers, and underscore allowed. Nickname must be between 3-20 characters.'
    )
    .min(3)
    .max(20),
  email: z.string().email(),
  address: z.string().optional(),
})
