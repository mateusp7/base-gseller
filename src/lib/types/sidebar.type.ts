import { ReactNode } from 'react'

export type SubItemsProps = {
  id: number
  href: string
  childrenName: string
  icon?: ReactNode
}

export interface SidebarOptionsProps {
  id: number
  principalName: string
  hasCollapsibleItems: boolean
  menuName?: string
  icon?: ReactNode
  subItems?: SubItemsProps[]
}
