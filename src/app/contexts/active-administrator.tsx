'use client'

import { graphqlRequestClient } from '@/lib/graphql.request'
import {
  ActiveAdministratorQuery,
  useActiveAdministratorQuery,
} from '@/utils/generated/graphql'
import { ReactNode, createContext } from 'react'

interface ActiveAdministratorProviderProps {
  children: ReactNode
}

type ActiveAdministratorContextData = {
  data: ActiveAdministratorQuery['activeAdministrator']
  isLoading: boolean
  isSignedIn: boolean
  refetch: () => void
}

export const ActiveAdministratorContext = createContext(
  {} as ActiveAdministratorContextData
)

export function ActiveAdministratorProvider({
  children,
}: ActiveAdministratorProviderProps) {
  const requestClient = graphqlRequestClient()

  const { data, refetch, isLoading } =
    useActiveAdministratorQuery(requestClient)

  const isSignedIn = !!data?.activeAdministrator?.id

  return (
    <ActiveAdministratorContext.Provider
      value={{
        data: data?.activeAdministrator,
        isLoading,
        isSignedIn,
        refetch,
      }}
    >
      {children}
    </ActiveAdministratorContext.Provider>
  )
}
