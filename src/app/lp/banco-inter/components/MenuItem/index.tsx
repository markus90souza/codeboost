import { FC } from 'react'
import Image from 'next/image'

import arrowDown from '@/assets/banco-inter/arrow-down.svg'

type MenuItemProps = {
  name: string
}

export const MenuItem: FC<MenuItemProps> = ({ name }) => {
  return (
    <button className="flex items-center gap-3">
      <span className="font-bold text-white">{name}</span>
      <Image src={arrowDown} alt="" />
    </button>
  )
}
