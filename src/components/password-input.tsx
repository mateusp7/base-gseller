'use client'

import * as React from 'react'

import { Icons } from '@/components/icons'
import { Button } from '@/components/ui/button'
import { Input, type InputProps } from '@/components/ui/input'
import { cn } from '@/lib/utils'
import { cva } from 'class-variance-authority'

const inputVariants = cva(
  'w-full rounded-md border pr-10 border-black-10 bg-white font-semibold text-black !outline-none focus:border-primary focus:ring-transparent dark:bg-neutral-2 dark:text-white focus:border-primary hover:border-primary transition-all duration-200 ease-linear dark:bg-black dark:border-primary',
  {
    variants: {
      variant: {
        icons: 'ps-10 px-4 py-2 text-sm',
        default: 'px-4 py-2 text-sm',
        large: 'py-2.5 text-base',
        small: 'py-1.5 text-xs',
        success:
          'border-success bg-success/[0.08] text-success placeholder-success/70 focus:border-success',
        error:
          'border-danger bg-danger/[0.08] text-danger placeholder-danger/70 focus:border-danger',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, ...props }, ref) => {
    const [showPassword, setShowPassword] = React.useState(false)

    return (
      <div className="relative">
        <span className="absolute -translate-y-1/2 start-4 top-1/2">
          <Icons.lock className="w-4 h-4 text-black-60 dark:text-black-10" />
        </span>
        <Input
          type={showPassword ? 'text' : 'password'}
          className={cn(inputVariants({ variant, className }))}
          ref={ref}
          {...props}
        />
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
          onClick={() => setShowPassword((prev) => !prev)}
          disabled={props.value === '' || props.disabled}
        >
          {showPassword ? (
            <Icons.hide className="w-4 h-4" aria-hidden="true" />
          ) : (
            <Icons.view className="w-4 h-4" aria-hidden="true" />
          )}
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>
      </div>
    )
  }
)
PasswordInput.displayName = 'PasswordInput'

export { PasswordInput }
