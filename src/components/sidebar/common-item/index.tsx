import { SubItemsProps } from '@/lib/types/sidebar.type'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface CommonItemProps {
  principalName: string
  subItems: SubItemsProps[]
}

export const CommonItem = ({ principalName, subItems }: CommonItemProps) => {
  const pathname = usePathname()

  console.log('pathname', pathname)

  return (
    <div>
      <h2 className="-mx-4 flex items-center px-7 py-2 font-bold uppercase text-black-60 dark:text-background-light">
        {principalName}
      </h2>
      {subItems.map((subItem) => (
        <Link
          href={subItem.href}
          key={subItem.id}
          className={`w-full mb-1 flex items-center overflow-hidden gap-2 whitespace-nowrap rounded-md p-2.5 group hover:bg-black-10/30 hover:dark:bg-black-80 ${
            pathname === subItem.href && 'bg-black-10/30 dark:bg-black-80'
          }`}
        >
          <div
            className={` group-hover:dark:text-background-light group-hover:text-primary transition-all ease-linear duration-100 ${
              pathname === subItem.href
                ? 'dark:text-background-light text-primary'
                : 'dark:text-black-10 text-black-80'
            }`}
          >
            {subItem.icon}
          </div>

          <span
            className={`text-sm pr-3 group-hover:text-primary  group-hover:dark:text-background-light transition-all ease-linear duration-100 ${
              pathname === subItem.href
                ? 'text-primary dark:text-background-light'
                : 'text-black dark:text-black-10'
            }`}
          >
            {subItem.childrenName}
          </span>
        </Link>
      ))}
    </div>
  )
}
