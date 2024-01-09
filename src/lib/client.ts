import { ApolloClient, InMemoryCache } from '@apollo/client/core'

import { createUploadLink } from 'apollo-upload-client'
import { getCookie } from './storage'

const token = getCookie('vendure.token')
const channelToken = getCookie('channel.token')

export const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_URL}/admin-api`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${token}`,
    'vendure-token': channelToken ?? '',
  },
  link: createUploadLink({
    uri: `${process.env.NEXT_PUBLIC_URL}/admin-api`,
    headers: {
      Authorization: `Bearer ${token}`,
      'vendure-token': channelToken ?? '',
    },
  }),
})
