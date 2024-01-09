import { SubItemsProps } from '@/lib/types/sidebar.type'
import Link from 'next/link'

interface CommonItemProps {
  principalName: string
  subItems: SubItemsProps[]
}

export const CommonItem = ({ principalName, subItems }: CommonItemProps) => {
  return (
    <div>
      <h2 className="-mx-4 flex items-center px-7 py-2 font-bold uppercase text-black-60 dark:text-background-light">
        {principalName}
      </h2>
      {subItems.map((subItem) => (
        <Link
          href={subItem.href}
          key={subItem.id}
          className="w-full mb-1 flex items-center overflow-hidden gap-2 whitespace-nowrap rounded-md p-2.5 group hover:bg-black-10/30 hover:dark:bg-black-80"
        >
          <div className="dark:text-black-10 group-hover:dark:text-background-light text-black-80 group-hover:text-primary transition-all ease-linear duration-100">
            {subItem.icon}
          </div>

          <span className="text-black text-sm pr-3 group-hover:text-primary dark:text-black-10 group-hover:dark:text-background-light transition-all ease-linear duration-100">
            {subItem.childrenName}
          </span>
        </Link>
      ))}
    </div>
  )
}
