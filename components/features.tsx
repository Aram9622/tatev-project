'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
// import tatev from '@/public/images/speakers/speaker1.jpg'
import babken from '@/public/images/speakers/speaker2.jpg'
import lucy from '@/public/images/speakers/speaker3.jpeg'
import anna from '@/public/images/speakers/speaker5.jpg'

import tatev from '@/public/images/speakers2/Tatev.png'
import aram from '@/public/images/speakers2/Aram.png'
import edgar from '@/public/images/speakers2/Edgar.png'
import nare from '@/public/images/speakers2/Nare.png'
import pavel from '@/public/images/speakers2/pavel.png'
import dr_tatev from '@/public/images/speakers2/dr_Tatev.png'

export default function Features() {
  const speakers = [
    {
      id: 4,
      name: "Tatevik Kishoyan",
      role: "Neuroplasticity| About the Book| Goal of the Conference.",
      image: tatev,
    },
    {
      id: 1,
      name: "Aram Hovsepyan",
      role: "Inner psychological image of health.",
      image: aram,
    },
    {
      id: 2,
      name: "Edgar Galstyan",
      role: "AI and Human Brain.",
      image: edgar,
    },
    {
      id: 3,
      name: "Nare Hambardzumyan",
      role: "AI in Brain Health | Neurology.",
      image: nare,
    },
    {
      id: 5,
      name: "Pavel Alfimov",
      role: "ADHD in daily life",
      image: pavel,
    },
    {
      id: 6,
      name: "DR Tatev Khachatryan",
      role: "Mental Health and Artificial Intelligence at the crossroads of science and technology.",
      image: dr_tatev,
    }
  ];
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
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <p className="text-xl text-gray-600"></p>
              </div>
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
              {speakers.map((speaker) => (
                <a
                  key={speaker.id}
                  className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
                    tab !== speaker.id
                      ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
                      : "bg-gray-200 border-transparent"
                  }`}
                  href="#speakers"
                  onClick={(e) => {
                    e.preventDefault();
                    setTab(speaker.id);
                    location.href = "#speakersList"
                  }}
                >
                  <div>
                    <div className="font-bold leading-snug tracking-tight mb-1">
                      {speaker.name}
                    </div>
                    <div className="text-gray-600">
                      {speaker.role.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                      ))}
                    </div>
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ml-3"></div>
                </a>
              ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                <div className="relative flex flex-col text-center lg:text-right" data-aos="zoom-y-out" ref={tabs} >
                {speakers.map((speaker) => (
                  <Transition
                    key={speaker.id}
                    show={tab === speaker.id}
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
                      <Image className="md:max-w-none mx-auto rounded" src={speaker.image} width={500} height={462} alt="Features bg" id="speakersList"/>
                    </div>
                  </Transition>
                ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}