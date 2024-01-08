'use client'

import { ReactNode, createContext, useState } from 'react'

interface SidebarProps {
  children: ReactNode
}

type SidebarData = {
  isOpen: boolean
  currentMenu: string
  toggleMenu: (value: string) => void
  changeSidebarState: (state: boolean) => void
}

export const SidebarContext = createContext({} as SidebarData)

export const SidebarProvider = ({ children }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [currentMenu, setCurrentMenu] = useState<string>('')

  const toggleMenu = (value: string) => {
    if (currentMenu === value) return setCurrentMenu('')
    setCurrentMenu(value)
  }

  const changeSidebarState = (state: boolean) => {
    setIsOpen(state)
  }

  return (
    <SidebarContext.Provider
      value={{ isOpen, currentMenu, toggleMenu, changeSidebarState }}
    >
      {children}
    </SidebarContext.Provider>
  )
}
