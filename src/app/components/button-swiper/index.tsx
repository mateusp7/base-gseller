import { Button } from '@gseller-monorepo/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface ButtonSwiperProps {
  prevButtonClassname: string
  nextButtonClassname: string
}

export const ButtonSwiper = ({
  nextButtonClassname,
  prevButtonClassname
}: ButtonSwiperProps) => {
  return (
    <div className="flex items-center gap-4">
      <Button
        size="icon"
        variant="clear"
        className={`rounded-full border border-primary hover:bg-primary transition-all duration-200 group ${prevButtonClassname}`}
      >
        <ChevronLeft size={16} className="group-hover:text-white" />
      </Button>
      <Button
        size="icon"
        variant="clear"
        className={`rounded-full border border-primary hover:bg-primary transition-all duration-200 group ${nextButtonClassname}`}
      >
        <ChevronRight size={16} className="group-hover:text-white" />
      </Button>
    </div>
  )
}
