import { ComponentProps, ReactNode } from 'react'

interface SocialButtonProps extends ComponentProps<'button'> {
  children: ReactNode
}

export function SocialButton({ children, ...props }: SocialButtonProps) {
  return (
    <button {...props} className="w-[50px] h-[50px] rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-100 hover:transition-colors">
      {children}
    </button>
  )
}