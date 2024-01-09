import { useSidebar } from '@/app/hooks/sidebar'
import { Icons } from '@/components/icons'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { SubItemsProps } from '@/lib/types/sidebar.type'

import Link from 'next/link'
import { ReactNode } from 'react'
import AnimateHeight from 'react-animate-height'

interface CollapsibleItemProps {
  icon: ReactNode
  principalName: string
  menuName: string
  subItems: SubItemsProps[]
}

export const CollapsibleItem = ({
  icon,
  principalName,
  subItems,
  menuName,
}: CollapsibleItemProps) => {
  const { currentMenu, toggleMenu } = useSidebar()

  return (
    <Collapsible open={currentMenu === menuName}>
      <CollapsibleTrigger
        onClick={() => toggleMenu(menuName)}
        className="w-full mb-1 flex items-center justify-between overflow-hidden whitespace-nowrap rounded-md p-2.5 group "
      >
        <div className="flex items-center gap-2">
          <div className="dark:text-black-10 text-black-60 group-hover:text-primary transition-all ease-linear duration-100">
            {icon}
          </div>
          <span className=" text-sm pr-3 dark:text-background-light group-hover:text-primary transition-all ease-linear duration-100 text-black-60">
            {principalName}
          </span>
        </div>
        <Icons.chevronRight
          className={`w-5 h-5 group-hover:text-primary ${
            currentMenu === menuName ? 'rotate-90' : 'rotate-0'
          } transition-all ease-linear duration-100`}
        />
      </CollapsibleTrigger>
      <AnimateHeight
        duration={300}
        height={currentMenu === menuName ? 'auto' : 0}
      >
        <CollapsibleContent>
          <ul>
            {subItems.map((item) => (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="flex w-full items-center px-9 py-2.5 before:h-0.5 before:w-2 before:rounded before:bg-background-dark dark:text-black-10 before:dark:bg-background-light hover:text-primary hover:before:!bg-primary before:mr-2 dark:hover:text-primary text-sm transition-all ease-linear duration-100 text-black-60"
                >
                  {item.childrenName}
                </Link>
              </li>
            ))}
          </ul>
        </CollapsibleContent>
      </AnimateHeight>
    </Collapsible>
  )
}
