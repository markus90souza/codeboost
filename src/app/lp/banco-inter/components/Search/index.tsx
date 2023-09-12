import Image from 'next/image'
import { FC } from 'react'

import searchIcon from '@/assets/icon-search.svg'

// type SearchProps = {}

export const Search: FC = () => {
  return (
    <div className="flex items-center gap-4">
      <Image src={searchIcon} alt="" />
      <input
        type="search"
        className="bg-transparent text-white outline-none placeholder:text-white"
        placeholder="Buscar"
      />
    </div>
  )
}
