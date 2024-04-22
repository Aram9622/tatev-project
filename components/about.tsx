import { inherits } from "util";
import Link from 'next/link'

export default function About() {
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
  
        <div className="max-w-6xl mx-auto px-4 sm:px-6" id="about">
          <div className="py-12 md:py-20">
  
            {/* Section header */}
            <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h2 className="h2 mb-4">5 Reasons to Attend the Conference</h2>
            </div>
  
            {/* Items */}
            <div className="max-w-sm md:max-w-4xl mx-auto grid">
            <ol start={1} style={{ listStyleType: 'decimal' }}>
                <li className="text-xl text-gray-600 mb-8">Gain insights from experts in personal development and neuroscience on the latest advancements and trends.</li>
                <li className="text-xl text-gray-600 mb-8">Learn practical ways to apply neuroscience principles to enhance well-being, productivity, relationships, and personal growth.</li>
                <li className="text-xl text-gray-600 mb-8">Connect with a diverse community of professionals, researchers, and enthusiasts to build meaningful relationships and expand your network.</li>
                <li className="text-xl text-gray-600 mb-8">Invest in your well-being and happiness through personal growth and self-improvement, leading to greater fulfillment and resilience.</li>
                <li className="text-xl text-gray-600 mb-8">Enjoy engaging conversations, explore innovative ideas, and immerse yourself in an inspiring atmosphere at NeurOn Talks.</li>
            </ol>
            
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20"  id="ticket"></div>
        <div className="max-w-3xl mx-auto text-center pb-12">
              <h2 className="h2 mb-4">Get the tickets with <span className="text-[#7dec7d]">10,000 AMD</span> instead of 15,000 AMD till April 30</h2>
            </div>
            <div className="m-auto">
              
              <div className="text-center"> 
                  
                  <Link href="http://easyyy.am/NeurONTalks" target='_blank' className="py-[25px] px-[25px] font-extrabold text-2xl btn-sm text-white bg-[#7dec7d] hover:bg-[#76d076] ml-3">
                    <span>Get Your Ticket</span>
                  </Link>
                  <p className="mt-5 text-gray-600"><small className="mt-5"><span>Download the "EasyPay" app</span> <br /><span>Go the "Events" Section</span></small></p>
              </div>
                
            </div>
      </section>
    )
  }