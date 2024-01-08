'use client'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'

const Theme = () => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="clear"
          size="icon"
          className="border border-black-10 dark:border-black-50 shadow-[0_0px_20px_-10px] shadow-black-10 dark:shadow-black-60"
        >
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 " />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 " />
          <span className="sr-only">Mudar tema</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-black border border-black-10 dark:border-black-50 shadow-[0_0px_20px_-10px] shadow-black-10 dark:shadow-black-60"
      >
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="focus:dark:bg-black-80 cursor-pointer"
        >
          Claro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="focus:dark:bg-black-80 cursor-pointer"
        >
          Escuro
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="focus:dark:bg-black-80 cursor-pointer"
        >
          Sistema
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Theme
