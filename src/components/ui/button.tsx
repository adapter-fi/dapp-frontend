import * as React from 'react'

import { cn } from '@/lib/utils'

import { ArrowUpRight } from 'lucide-react'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon = undefined, variant = 'default', ...props }, ref) => {
    return (
      <button
        className={cn(
          'group relative flex h-10 px-2.5 py-2 items-center justify-center gap-1 tracking-[1.6px] rounded-[3.6px] transition-all duration-300 ease-in-out',
          variant === 'outline' &&
            'border border-[#F9F9F2] hover:border-transparent hover:shadow-xl hover:px-1',
          variant === 'default' && 'bg-[#F9F9F2] text-[#1F1F1D]',
          variant === 'ghost' && 'border-b border-transparent hover:border-b-[#F9F9F2] rounded-none', 
          className
        )}
        ref={ref}
        {...props}
      >
        {variant === 'outline' && icon ? (
          <>
            <div className="absolute left-1/2 -translate-x-1/2 group-hover:left-2 group-hover:translate-x-0 transition-all duration-300 ease-in-out">
              {props.children}
            </div>
            {icon && (
              <div className="absolute opacity-0 group-hover:opacity-100 right-2 transition-all duration-300 ease-in-out justify-self-end">
                {icon}
              </div>
            )}
          </>
        ) : (
          props.children
        )}
      </button>
    )
  }
)
Button.displayName = 'Button'

export { Button }
