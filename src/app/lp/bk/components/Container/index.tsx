import { cn } from '@/lib/utils'
import { FC, HTMLAttributes, ReactNode } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full max-w-[1191px] mx-auto px-4 flex items-center justify-between',
        className,
      )}
    >
      {children}
    </div>
  )
}
