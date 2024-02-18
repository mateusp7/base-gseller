import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from '@apollo/client/core'
import { setContext } from '@apollo/client/link/context'

import { getCookie } from './storage'

const httpLink = createHttpLink({
  uri: `${process.env.NEXT_PUBLIC_URL}/admin-api`
})

const authLink = setContext((_, { headers }) => {
  const token = getCookie('vendure.token')
  const channelToken = getCookie('channel.token')

  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${token}`,
      'vendure-token': channelToken ?? ''
    }
  }
})

const cache = new InMemoryCache()

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
})
