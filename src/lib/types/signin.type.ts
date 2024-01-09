import { z } from 'zod'
import { SigninSchema } from '../schemas/signin.schema'

export type SigninData = z.infer<typeof SigninSchema>
