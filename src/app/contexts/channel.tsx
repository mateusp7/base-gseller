import {
  GetActiveChannelQuery,
  useGetActiveChannelQuery
} from '@/utils/generated/graphql'
import { ReactNode, createContext, useEffect, useState } from 'react'

import { getCookie, setCookieValue } from '../../lib/storage'
import useAdministrator from '../hooks/administrator'
import { graphqlRequestClient } from '@/lib/graphql.request'

interface ContextProviderChannelProps {
  children: ReactNode
}

type ContextType = {
  channelSelected: string
  isLoadingActiveChannel: boolean
  activeChannel: GetActiveChannelQuery | undefined
  setChannelSelected: (channel: string) => void
  refetchActiveChannel: () => void
  handleSelectChannel: (channelToken: string) => void
}

export const ChannelContext = createContext<ContextType>({} as ContextType)

export const ChannelProvider = ({ children }: ContextProviderChannelProps) => {
  const requestClient = graphqlRequestClient()
  const { data: activeAdministrator } = useAdministrator()
  const {
    data: activeChannel,
    loading: isLoadingActiveChannel,
    refetch: refetchActiveChannel
  } = useGetActiveChannelQuery({
    context: requestClient
  })

  const [channelSelected, setChannelSelected] = useState('')

  const channelTokenInCookie = getCookie('channel.token')

  const handleSelectChannel = (channelToken: string) => {
    const channel =
      activeAdministrator &&
      activeAdministrator?.user.roles.flatMap(role =>
        role.channels.filter(channel => channel.token === channelToken)
      )

    if (channel?.[0].token) {
      setCookieValue('channel.token', channel[0].token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/'
      })
      setChannelSelected(channel[0].token)
    }
  }

  useEffect(() => {
    if (activeChannel) {
      setChannelSelected(activeChannel?.activeChannel.token)
      refetchActiveChannel()
    }
  }, [activeChannel, refetchActiveChannel])

  useEffect(() => {
    if (channelTokenInCookie) {
      setChannelSelected(channelTokenInCookie)
    }
  }, [channelTokenInCookie])

  const contextValue: ContextType = {
    activeChannel,
    isLoadingActiveChannel,
    channelSelected,
    setChannelSelected,
    refetchActiveChannel,
    handleSelectChannel
  }

  return (
    <ChannelContext.Provider value={contextValue}>
      {children}
    </ChannelContext.Provider>
  )
}
