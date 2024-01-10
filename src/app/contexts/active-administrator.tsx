'use client'

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
  const { data, refetch, loading } = useActiveAdministratorQuery()

  const isSignedIn = !!data?.activeAdministrator?.id

  return (
    <ActiveAdministratorContext.Provider
      value={{
        data: data?.activeAdministrator,
        isLoading: loading,
        isSignedIn,
        refetch,
      }}
    >
      {children}
    </ActiveAdministratorContext.Provider>
  )
}
