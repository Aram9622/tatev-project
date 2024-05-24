'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import tatev from '@/public/images/speakers/speaker1.jpg'
import babken from '@/public/images/speakers/speaker2.jpg'
import lucy from '@/public/images/speakers/speaker3.jpeg'
import tamara from '@/public/images/speakers/speaker4.jpg'
import anna from '@/public/images/speakers/speaker5.jpg'
import FeaturesElement from '@/public/images/features-element.png'
import Link from 'next/link'

export default function Features() {
  
  const [tab, setTab] = useState<number>(4)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, []) 

  return (
    <section className="relative" id='speakers'>
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      {/* <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div> */}
      <div className="absolute left-0 right-0 m-auto w-fit p-px transform -translate-y-1/2">
        <p></p>
      <Link href="https://docs.google.com/forms/d/e/1FAIpQLSdXEzXldCX0h6gGsuZRXU24GvQ9StOnagrVJswGLstaaB0Ehw/viewform" target='_blank' className="btn-sm text-center text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3">
        <span>Register Here</span>
        <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
        </svg>
      </Link>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Seasoned Speakers and the Topics </h1>
            <p className="text-xl text-gray-600">Each of the speakers has a unique & science-based topic.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <p className="text-xl text-gray-600"></p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {/* tatev */}
                <a
                  className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 4 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(4); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Tatevik Kishoyan</div>
                    <div className="text-gray-600">Organizer|Neuromarketing & its connection to Neuroplasticity. </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ml-3">
                  </div>
                </a>
                {/* anna */}
                <a
                  className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 5 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(5); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Anna Gevorgyan</div>
                    <div className="text-gray-600">
                      <p>CEO & Co-founder of Gotcha.</p>
                      <p>Micro-emotion recognition with AI.</p>
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ml-3">
                  </div>
                </a>
                {/* babken */}
                <a
                  className={`flex items-center text-lg p-5 justify-between rounded border transition duration-300 ease-in-out mb-3 ${tab !== 1 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(1); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Babken Hovhannisyan Ph.D.</div>
                    <div className="text-gray-600">Rapid processes occurring in the human brain as a result of external stimuli.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8  rounded-full  flex-shrink-0 ml-3">
                
                  </div>
                </a>
                {/* lucy */}
                <a
                  className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 3 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(3); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Lucy Nomler</div>
                    <div className="text-gray-600">Psychology-Driven Marketing.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full  flex-shrink-0 ml-3">
                  </div>
                </a>
                {/* tamara */}
                {/* <a
                  className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== 2 ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                  href="#0"
                  onClick={(e) => { e.preventDefault(); setTab(2); }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">Tamara Ohanjanyan</div>
                    <div className="text-gray-600">Popular Science.</div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ml-3">
                  </div>
                </a> */}
                
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs}>
                  {/* Item 1 */}
                  <Transition
                    show={tab === 1}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={babken} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 2 */}
                  <Transition
                    show={tab === 2}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={tamara} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 3 */}
                  <Transition
                    show={tab === 3}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={lucy} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                  {/* Item 4 */}
                  <Transition
                    show={tab === 4}
                    appear={true}
                    className="w-full"
                    enter="transition ease-in-out duration-700 transform order-first"
                    enterFrom="opacity-0 translate-y-16"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in-out duration-300 transform absolute"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 -translate-y-16"
                    beforeEnter={() => heightFix()}
                    unmount={false}                     
                  >
                    <div className="relative inline-flex flex-col">
                      <Image className="md:max-w-none mx-auto rounded" src={tatev} width={500} height="462" alt="Features bg" />
                    </div>
                  </Transition>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}