import { z } from 'zod'

export const SigninSchema = z.object({
  username: z.string(),
  password: z.string(),
  rememberMe: z.boolean().default(false),
})
