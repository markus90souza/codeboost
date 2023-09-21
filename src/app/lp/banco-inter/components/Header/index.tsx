import Image from 'next/image'

import brand from '@/assets/banco-inter/logo.svg'
import userIcon from '@/assets/banco-inter/icon-user.svg'
import { MenuItem } from '../MenuItem'
import { Search } from '../Search'
import { Container } from '../Container'

export const Header = () => {
  return (
    <header className="relative flex items-center w-full h-20 bg-lp-inter-primary-orange ">
      <div className="bg-lp-inter-primary-blue h-full absolute top-0 right-0 w-[19%] z-0" />
      <Container>
        <div className="flex flex-1 justify-between">
          <div className="flex items-center gap-14">
            <Image src={brand} alt="" />

            <ul className="flex items-center gap-12">
              <li>
                <MenuItem name={'Para você'} />
              </li>

              <li>
                <MenuItem name={'Para Empresas'} />
              </li>

              <li>
                <MenuItem name={'Serviços'} />
              </li>

              <li>
                <MenuItem name={'Ajuda'} />
              </li>
            </ul>
          </div>

          <Search />
        </div>
        <button className="flex z-10 items-center gap-4 bg-lp-inter-primary-blue h-20 px-4  ">
          <Image src={userIcon} alt="" />
          <span className="font-bold text-white">Acessar conta</span>
        </button>
      </Container>
    </header>
  )
}
