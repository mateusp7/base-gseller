'use client'

import useAdministrator from '@/app/hooks/administrator'
import { useAuthContext } from '@/app/hooks/auth'
import { Icons } from '@/components/icons'
import { useRouter } from 'next/navigation'

export const Logout = () => {
  const router = useRouter()
  const { logout } = useAuthContext()
  const { refetch: refetchActiveAdministrator } = useAdministrator()

  const handleLogout = () => {
    logout()
    refetchActiveAdministrator()
    router.push('/login')
  }

  return (
    <button
      type="button"
      onClick={handleLogout}
      className="font-semibold flex items-center gap-2 mt-auto pl-2"
    >
      <Icons.logout className="w-6 h-6 text-red-500" />
      <span className="text-red-500">Sair da conta</span>
    </button>
  )
}
