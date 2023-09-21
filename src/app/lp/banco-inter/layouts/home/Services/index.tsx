import { FC } from 'react'
import Image from 'next/image'
import { Container } from '../../../components/Container'

import phoneIcon from '@/assets/banco-inter/icon-phone.svg'
import solutionsIcon from '@/assets/banco-inter/icon-solutions.svg'
import optionsIcon from '@/assets/banco-inter/icon-options.svg'
import cardIcon from '@/assets/banco-inter/icon-card.svg'
import phone from '@/assets/banco-inter/phone.png'

export const Services: FC = () => {
  return (
    <section className="relative w-full h-[965px] flex items-center">
      <Container>
        <div className="flex-1 max-w-[594px] pt-32">
          <span className="uppercase mb-9 block text-sm font-bold text-lp-inter-primary-orange">
            Serviços exclusivos
          </span>

          <h2 className="leading-tight mb-6 font-bold text-lp-inter-primary-gray text-[56px]">
            Gerencie suas finanças sem sair de casa
          </h2>

          <p className="text-lg max-w-[594px] mb-16 text-lp-inter-secondary-gray">
            Veja como você pode cuidar das suas finanças pelo app Itaú de forma
            segura, rápida e o melhor no conforto de sua casa
          </p>

          <ul className="flex flex-col items-start gap-9">
            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-b-lp-inter-gray-opacity">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={phoneIcon} alt="" />
              </div>

              <p className="flex-1 pr-2 text-lp-inter-text-gray">
                Acompanhe sua conta, fazer transferências e pagamentos onde
                estiver
              </p>
            </li>

            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-b-lp-inter-gray-opacity">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={solutionsIcon} alt="" />
              </div>

              <p className="flex-1 pr-2 text-lp-inter-text-gray">
                Acompanhe sua conta, fazer transferências e pagamentos onde
                estiver
              </p>
            </li>

            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-b-lp-inter-gray-opacity">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={optionsIcon} alt="" />
              </div>

              <p className="flex-1 pr-2 text-lp-inter-text-gray">
                Acompanhe sua conta, fazer transferências e pagamentos onde
                estiver
              </p>
            </li>

            <li className="flex items-center gap-10 pb-9 border-b-[1px] border-b-lp-inter-gray-opacity">
              <div className="w-7 h-7 flex items-center justify-center">
                <Image src={cardIcon} alt="" />
              </div>

              <p className="flex-1 pr-2 text-lp-inter-text-gray">
                Acompanhe sua conta, fazer transferências e pagamentos onde
                estiver
              </p>
            </li>
          </ul>
        </div>
        <div className="pt-32 z-10">
          <Image src={phone} alt="" className="translate-x-[-50%]" />
        </div>
      </Container>

      <div className="bg-lp-inter-phone-gray h-full absolute top-0 right-0 w-[32%] z-0" />
    </section>
  )
}
