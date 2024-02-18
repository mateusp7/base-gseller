import { GraphQLClient } from 'graphql-request'
import { getCookie } from './storage'

export const graphqlRequestClient = () => {
  const languageCode = 'pt_BR'

  const endpoint =
    `${process.env.NEXT_PUBLIC_URL}/admin-api?languageCode=${languageCode}` ||
    'http://localhost:3000/admin-api'

  const token = getCookie('vendure.token')
  const channelToken = getCookie('channel.token')

  return new GraphQLClient(endpoint, {
    headers() {
      return {
        ...(channelToken ? { 'vendure-token': channelToken! } : {}),
        ...(token ? { Authorization: `Bearer ${token}` } : {})
      }
    }
  })
}
