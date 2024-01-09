import { useContext } from 'react'
import { SidebarContext } from '../contexts/sidebar'

export const useSidebar = () => {
  return useContext(SidebarContext)
}
