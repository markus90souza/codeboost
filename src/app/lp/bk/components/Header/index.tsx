import Image from 'next/image'
import bkBrand from '@/assets/bk/logo-bk-cupons.svg'
import heartIcon from '@/assets/bk/icon-heart.svg'
import userIcon from '@/assets/bk/icon-user.svg'
import menuIcon from '@/assets/bk/icon-menu.svg'
import { Container } from '../Container'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className="w-full h-[90px] flex items-center bg-bk-white ">
      <nav className="flex items-center justify-between w-full">
        <Container>
          <Image alt="bk" src={bkBrand} />

          <div className="flex items-center gap-[70px]">
            <ul className="hidden md:flex md:items-center md:gap-[77px]">
              <li>
                <Link href={'#'} className="flex items-center gap-3">
                  <Image alt="" src={userIcon} />
                  <span>Cadastre-se</span>
                </Link>
              </li>

              <li>
                <Link href={'#'} className="flex items-center gap-3">
                  <Image alt="" src={heartIcon} />
                  <span>Favoritos</span>
                </Link>
              </li>
            </ul>

            <button className="cursor-pointer">
              <Image alt="" src={menuIcon} />
            </button>
          </div>
        </Container>
      </nav>
    </header>
  )
}
