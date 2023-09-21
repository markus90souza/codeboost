import { FC } from 'react'
import Image from 'next/image'
import { Container } from '../../../components/Container'

import woman from '@/assets/banco-inter/woman.png'
import appleStoreIcon from '@/assets/banco-inter/btn-apple-store.svg'
import googleStoreIcon from '@/assets/banco-inter/btn-google-play.svg'
import arrowDown from '@/assets/banco-inter/arrow-down.svg'

export const Hero: FC = () => {
  return (
    <section className="w-full h-[704px] bg-lp-inter-bghero bg-no-repeat bg-cover bg-center">
      <Container>
        <div className="flex-1 max-w-[500px] ">
          <h1 className="font-bold text-7xl text-white mb-4">
            Tenha seu banco na palma da sua mão.
          </h1>

          <p className="text-white text-xl mb-8 max-w-[408px]">
            Todas as operações que você precisa em um só lugar. Simples,
            completo e feito pra você
          </p>

          <div className="flex gap-4 mb-24">
            <button>
              <Image src={googleStoreIcon} alt="" />
            </button>

            <button>
              <Image src={appleStoreIcon} alt="" />
            </button>
          </div>

          <button className="flex items-center gap-3">
            <Image src={arrowDown} alt="" />
            <span className="font-bold text-white text-sm">
              Continue explorando
            </span>
          </button>
        </div>

        <Image src={woman} alt="" className="-mr-10" />
      </Container>
    </section>
  )
}
