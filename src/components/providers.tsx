'use client'

import { ActiveAdministratorProvider } from '@/app/contexts/active-administrator'
import { AuthProvider } from '@/app/contexts/auth'
import { SidebarProvider } from '@/app/contexts/sidebar'
import { client } from '@/lib/client'
import { ApolloProvider } from '@apollo/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

const Providers = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        retry: 2,
        staleTime: 5 * 1000,
      },
    },
  })

  return (
    <ApolloProvider client={client}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AuthProvider>
            <ActiveAdministratorProvider>
              <SidebarProvider>{children}</SidebarProvider>
            </ActiveAdministratorProvider>
          </AuthProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </ApolloProvider>
  )
}

export default Providers
