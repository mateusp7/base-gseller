import { z } from 'zod'
import { SearchSchema } from '../schemas/search-schema'

export type SearchData = z.infer<typeof SearchSchema>
