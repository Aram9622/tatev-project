import Image from 'next/image'
import cofix from '@/public/images/partners/cofix.png'
import paul_1 from '@/public/images/sponsors2/Paul_Logo-01.svg'
import paul_2 from '@/public/images/sponsors2/Paul_Logo-02.svg'
export default function Testimonials() {
  return (
    <section className="relative" id="sponsor">

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
            <h2 className="h2 mb-4">Sponsor</h2>
          </div>

          {/* Items */}
          <div className="max-w-sm md:max-w-4xl mx-auto grid">

            {/* Item */}
            <div className="flex items-center justify-center py-2 col-span-2 md:col-auto">
              <a href="https://www.instagram.com/paul_armenia/" target='_blank'>
                <Image className="md:max-w-none mx-auto rounded" src={paul_1} width={250} alt="Cofix"  title='Paul depuis 1889' /></a>

                <a href="https://www.instagram.com/paul_armenia/" target='_blank'>
                <Image className="md:max-w-none mx-auto rounded" src={paul_2} width={250} alt="Cofix"  title='Paul LE CAFE' /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}