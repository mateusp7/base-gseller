'use client'

import { Sidebar, useSidebar } from 'gseller-sidebar'

import Header from '@/components/header'
import { sidebarOptions } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import useAdministrator from '../hooks/administrator'
import { useAuthContext } from '../hooks/auth'

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const { isOpen } = useSidebar()
  const { logout } = useAuthContext()
  const { refetch } = useAdministrator()

  const logoutUser = () => {
    logout()
    refetch()
  }

  return (
    <div className="flex flex-row">
      <Sidebar
        onLogout={logoutUser}
        sidebarOptions={sidebarOptions}
        src="/gseller_logo_full.png"
      />

      <div
        className={cn(
          'flex flex-col w-full transition-all duration-300 ease-linear',
          isOpen ? 'lg:ml-[260px]' : 'lg:ml-[0px]'
        )}
      >
        <Header />

        <div className="w-full min-h-screen bg-background-light dark:bg-background-dark p-6">
          {children}
        </div>
      </div>
    </div>
  )
}
