import * as React from 'react'

import { Mask, MasksTypes } from '@/lib/mask'
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

interface IInput {
  mask?: MasksTypes
}

const inputVariants = cva(
  'w-full rounded border border-black-10 bg-white font-normal text-black !outline-none focus:border-primary focus:ring-transparent dark:border-black-50 dark:bg-neutral-2 dark:text-white focus:border-primary hover:dark:border-primary hover:border-primary transition-all duration-200 ease-linear dark:bg-black dark:border-primary',
  {
    variants: {
      variant: {
        default: 'px-4 py-2 text-sm',
        icons: 'ps-10 px-4 py-2 text-sm',
        large: 'py-2.5 text-base',
        small: 'py-1.5 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {}

export type InputInterfaceProps = IInput & InputProps

const Input = React.forwardRef<HTMLInputElement, InputInterfaceProps>(
  ({ className, type, variant, mask, onChange, ...props }, ref) => {
    const handleMask = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (mask) {
        const text = event.target.value
        const maskedText = Mask.format(mask, text)
        onChange?.(maskedText as any)
      }
    }
    return (
      <input
        type={type}
        onChange={mask ? handleMask : onChange}
        className={cn(inputVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = 'Input'

export { Input }
