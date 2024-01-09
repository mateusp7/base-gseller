'use client'

import { useSidebar } from '@/app/hooks/sidebar'
import { sidebarOptions } from '@/lib/site-config'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { Icons } from './icons'
import { CollapsibleItem } from './sidebar/collapsible-item'
import { CommonItem } from './sidebar/common-item'
import { Logout } from './sidebar/logout'
import { Button } from './ui/button'
import { ScrollArea } from './ui/scroll-area'

export const Sidebar = () => {
  const { changeSidebarState, isOpen } = useSidebar()

  return (
    <nav
      className={cn(
        'fixed bottom-0 top-0 z-50 h-full min-h-screen w-[260px] shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] transition-all-custom',
        !isOpen ? '-left-[260px]' : 'left-[0px]'
      )}
    >
      <div className="h-full bg-white dark:bg-black">
        <div className="flex items-center justify-between px-4 py-3">
          <Link
            href="/dashboard"
            className="flex items-center main-logo shrink-0"
          >
            <Image
              src="/gseller_logo_full.png"
              alt="logo"
              width={150}
              height={150}
            />
          </Link>
          <Button
            onClick={() => changeSidebarState(false)}
            variant="clear"
            type="button"
            className="flex flex-none rounded-full border p-2 border-black-50 hover:border-primary hover:text-primary ml-2 dark:bg-black dark:text-white dark:hover:bg-black/60 "
          >
            <Icons.doubleChevronRight className="ml-auto rotate-180" />
          </Button>
        </div>
        <ScrollArea className="h-[calc(100vh-80px)] ">
          <ul className="space-y-0.5 p-4 py-0 font-semibold ">
            {sidebarOptions.map((sidebarOption) => {
              if (sidebarOption.hasCollapsibleItems) {
                return (
                  <CollapsibleItem
                    key={sidebarOption.id}
                    icon={sidebarOption.icon}
                    principalName={sidebarOption.principalName}
                    subItems={sidebarOption?.subItems!}
                    menuName={sidebarOption?.menuName!}
                  />
                )
              }
              return (
                <CommonItem
                  key={sidebarOption.id}
                  principalName={sidebarOption.principalName}
                  subItems={sidebarOption?.subItems!}
                />
              )
            })}
            <div className="py-4">
              <Logout />
            </div>
          </ul>
        </ScrollArea>
      </div>
    </nav>
  )
}
