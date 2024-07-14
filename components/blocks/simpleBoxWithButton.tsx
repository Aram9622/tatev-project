import { inherits } from "util";
import Link from 'next/link'
import PaymentMethod from "@/public/images/payment-banner.jpeg"
import Image from 'next/image'

export default function simpleBoxWithButton({props}: any) {

    return (
      <section className="relative" >
  
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
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"  id="book"></div>
        <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="h2 mb-4">{props.section.title}</h2>
              <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-1 items-start md:max-w-1xl lg:max-w-none pt-10">
                <div>
                <Image
                  src={props.media}
                  width={1920}
                  height={400}
                  alt="Picture of the author"
                />
                </div>
              </div>
            </div>
            <div className="m-auto">
              
              <div className="text-center"> 
                  
                  <Link href={props.section.buttonLink} target='_blank' className={`py-[25px] px-[25px] font-extrabold text-2xl btn-sm text-white bg-[${props.section.buttonColor}] hover:bg-[${props.section.buttonHoverColor}] ml-3`}>
                    <span>{props.section.button}</span>
                  </Link>
              </div>
                
            </div>
      </section>
    )
  }