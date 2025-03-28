'use client'

import { useState, useRef, useEffect } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import tatev from '@/public/images/speakers2/Tatev.png'
import aram from '@/public/images/speakers2/Aram.png'
import edgar from '@/public/images/speakers2/Edgar.png'
import nare from '@/public/images/speakers2/Nare.png'
import pavel from '@/public/images/speakers2/pavel.png'
import dr_tatev from '@/public/images/speakers2/dr_Tatev.png'
import lusine from '@/public/images/speakers2/lusine.jpeg'
export default function Features() {
  const speakers = [
    {
      id: 4,
      name: "Tatevik Kishoyan",
      role: "Neuroplasticity| About the Book| Goal of the Conference",
      image: tatev,
    },
    {
      id: 3,
      name: "Nare Hambardzumyan",
      role: "AI in Brain Health | Neurology",
      image: nare,
    },
    {
      id: 1,
      name: "Dr. Aram Hovsepyan",
      role: "Inner psychological image of health",
      image: aram,
    },
    {
      id: 5,
      name: "Dr. Pavel Alfimov",
      role: "ADHD in daily life",
      image: pavel,
    },
    {
      id: 2,
      name: "Edgar Galstyan",
      role: "AI and Human Brain",
      image: edgar,
    },
    {
      id: 7,
      name: "Lusine Kanetsyan",
      role: "The Science of Influence",
      image: lusine,
    },
    {
      id: 6,
      name: "Dr. Tatev Khachatryan",
      role: "Mental Health and Artificial Intelligence at the crossroads of science and technology",
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
            <h1 className="h2 mb-4">Seasoned Speakers and the Topics</h1>
            <p className="text-xl text-gray-600">Each of the speakers has a unique & science-based topic.</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-3 md:gap-x-6">
            {/* Content */}
            {speakers.map((speaker) => (
                <div className="relative flex flex-col items-center bg-white rounded  mb-6">
                  <Image className="md:max-w-none mx-auto rounded w-[100%] shadow-md shadow-black" src={speaker.image} alt="Features bg" id={"speaker"+speaker.id}/>
                </div>
              ))}
            
          </div>

        </div>
      </div>
    </section>
  )
}