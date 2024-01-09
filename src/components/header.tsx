'use client'

import { useSidebar } from '@/app/hooks/sidebar'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { Icons } from './icons'
import Theme from './theme'
import { Button } from './ui/button'

const Header = () => {
  const { changeSidebarState, isOpen } = useSidebar()
  const router = useRouter()

  useEffect(() => {
    const selector = document.querySelector(
      'ul.horizontal-menu a[href="' + window.location.pathname + '"]'
    )
    if (selector) {
      const all: any = document.querySelectorAll(
        'ul.horizontal-menu .nav-link.active'
      )
      for (let i = 0; i < all.length; i++) {
        all[0]?.classList.remove('active')
      }

      let allLinks = document.querySelectorAll('ul.horizontal-menu a.active')
      for (let i = 0; i < allLinks.length; i++) {
        const element = allLinks[i]
        element?.classList.remove('active')
      }
      selector?.classList.add('active')

      const ul: any = selector.closest('ul.sub-menu')
      if (ul) {
        let ele: any = ul.closest('li.menu').querySelectorAll('.nav-link')
        if (ele) {
          ele = ele[0]
          setTimeout(() => {
            ele?.classList.add('active')
          })
        }
      }
    }
  }, [router])

  return (
    <header className="sticky top-0 z-20 transition-all duration-300 ">
      <div className="shadow-sm">
        <div className="relative flex w-full items-center bg-white shadow-[5px_0_25px_0_rgba(94,92,154,0.1)] px-5 py-2.5 dark:bg-black">
          <div className="flex items-center justify-between gap-2 mr-2 horizontal-logo ">
            {!isOpen && (
              <>
                <Link href="/dashboard" className="flex items-center shrink-0">
                  <Image
                    src="/gseller_logo_full.png"
                    alt="logo"
                    width={150}
                    height={150}
                  />
                </Link>
                <Button
                  onClick={() => changeSidebarState(true)}
                  variant="clear"
                  type="button"
                  className="flex flex-none rounded-full border p-2 border-black-50 hover:border-primary hover:text-primary ml-2 dark:bg-black dark:text-white dark:hover:bg-black/60 "
                >
                  <Icons.doubleChevronRight className="ml-auto" />
                </Button>
              </>
            )}
          </div>
          <div className="flex justify-end items-center space-x-1.5 ml-auto sm:flex-1 sm:ml-0 lg:space-x-2">
            <Theme />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
