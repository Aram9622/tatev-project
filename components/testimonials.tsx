import Image from 'next/image'
import arpi_rose from '@/public/images/partners/arpi_rose.png'
import easypay from '@/public/images/partners/easypay.png'
import bonaqua from '@/public/images/partners/bonaqua.png'
import cinema_lab from '@/public/images/partners/CinemaLab.png'
import gotcha from '@/public/images/partners/Gotcha.png'
export default function Testimonials() {
  return (
    <section className="relative" id="partners">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-5">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-3 md:pt-10">
            <h2 className="h2 mb-4">Partners</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid gap-2 grid-cols-5 md:grid-cols-5">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://am.coca-colahellenic.com/en/our-24-7-portfolio/hydration/bonaqua" target='_blank'><Image className="md:max-w-none mx-auto rounded" src={bonaqua} width={150} height="39" alt="BonAqua"  title='BonAqua' /></a>
            </div>

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.easypay.am/hy" target='_blank'><Image className="md:max-w-none mx-auto rounded" src={easypay} width={150} height="39" alt="EasyPay" title="EasyPay"/></a>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.instagram.com/arpi_rose/" target='_blank'><Image className="md:max-w-none mx-auto rounded" src={arpi_rose} width={150} height="39" alt="Arpi Rose" title="Arpi Rose" /></a>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://linktr.ee/cinemalabstudios" target='_blank'><Image className="md:max-w-none mx-auto rounded" src={cinema_lab} width={150} height="39" alt="Cinema Lab" title="Cinema Lab" /></a>
            </div>
            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://gotcha.technology/" target='_blank'><Image className="md:max-w-none mx-auto rounded" src={gotcha} width={150} height="39" alt="Gotcha" title="Gotcha" /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}