import { FC } from 'react'
import Link from 'next/link'
import { Container } from '../Container'
import Image from 'next/image'

import facebookIcon from '@/assets/bk/icon-facebook.svg'

import instagramIcon from '@/assets/bk/icon-instagram.svg'

import twitterIcon from '@/assets/bk/icon-twitter .svg'

import bkLogo from '@/assets/bk/logo-bk.svg'

export const Footer: FC = () => {
  return (
    <footer className="w-full flex flex-col bg-bk-brown items-center justify-center">
      <Container className={'pt-10 pb-24 flex flex-col sm:flex-row'}>
        <ul className="flex items-center gap-9 text-bk-white font-mono">
          <li>
            <Link href={'#'}>Fale conosco</Link>
          </li>

          <li>
            <Link href={'#'}>Nossas lojas</Link>
          </li>

          <li>
            <Link href={'#'}>Política de privacidade</Link>
          </li>

          <li>
            <Link href={'#'}>Site oficial</Link>
          </li>
        </ul>

        <div className="">
          <Image alt="" src={bkLogo} width={96} height={96} />
        </div>

        <ul className="flex items-center gap-8">
          <span className="text-bk-white font-mono">
            Acompanhe nas redes sociais
          </span>
          <div className=" flex items-center gap-6">
            <li>
              <Link
                href={'#'}
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image alt="" src={instagramIcon} />
              </Link>
            </li>

            <li>
              <Link
                href={'#'}
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image alt="" src={facebookIcon} />
              </Link>
            </li>

            <li>
              <Link
                href={'#'}
                className="w-6 h-6 flex items-center justify-center"
              >
                <Image alt="" src={twitterIcon} />
              </Link>
            </li>
          </div>
        </ul>
      </Container>

      <div className="flex items-center justify-center py-3">
        <span className="text-bk-white">
          TM & © {new Date().getFullYear()} Burger King Corporation. Todos os
          direitos reservados.
        </span>
      </div>
    </footer>
  )
}
