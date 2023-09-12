import { FC, ReactNode } from 'react'

type ContainerProps = {
  children: ReactNode
}

export const Container: FC<ContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-[1246px] mx-auto px-4 flex items-center justify-between">
      {children}
    </div>
  )
}
