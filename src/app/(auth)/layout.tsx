'use client'

import { Sidebar } from '@/components/sidebar'

import Header from '@/components/header'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { useSidebar } from '../hooks/sidebar'

export default function DashboardLayout({
  children,
}: {
  children?: React.ReactNode
}) {
  const { isOpen } = useSidebar()
  const pathName = usePathname()
  return (
    <div className="flex flex-row">
      <Sidebar />
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
