import * as React from 'react'
import { Slot } from "@radix-ui/react-slot"

import { cn } from '@/lib/utils'

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  variant?: 'default' | 'outline' | 'ghost' | 'inverted' | 'secondary'
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, icon = undefined, variant = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          'group relative flex h-10 px-2.5 py-2 items-center justify-center gap-1 tracking-[1.6px] rounded-[3.6px] transition-all duration-300 ease-in-out data-[state=disabled]:grayscale-50 data-[state=disabled]:cursor-not-allowed',
          variant === 'outline' &&
            'border border-[#F9F9F2] hover:border-transparent hover:shadow-xl hover:px-1',
          variant === 'default' &&
            'bg-[#F9F9F2] text-[#1F1F1D] hover:bg-[#125AFA] border border-transparent hover:border-[#F9F9F2] hover:text-[#F9F9F2]',
          variant === 'inverted' &&
            'bg-[#1F1F1D] text-[#F9F9F2] hover:bg-[#125AFA]',
          variant === 'ghost' && 'border-transparent rounded-none',
          variant === 'secondary' &&
            'bg-transparent border border-[#1F1F1D] text-[#1F1F1D] hover:text-[#125AFA] hover:border-transparent',
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
        ) : variant === 'ghost' ? ( 
          <>
            {props.children}
            <div className="h-[1px] w-full bg-transparent group-hover:bg-[#F9F9F2] absolute bottom-0 transition-all duration-500 ease-in-out scale-[0] group-hover:scale-100 origin-left" />
          </>
        ) : (
          props.children
        )}
      </Comp>
    )
  }
)
Button.displayName = 'Button'

export { Button }
