import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'

export const Logout = () => {
  return (
    <Button
      type="button"
      variant="clear"
      className="font-semibold absolute bottom-4 translate-x-[-50%] translate-y-[-50%] left-[50%] flex items-center gap-2"
    >
      <Icons.logout className="w-6 h-6 text-red-500" />
      <span className="text-red-500">Sair da conta</span>
    </Button>
  )
}
