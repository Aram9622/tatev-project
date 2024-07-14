import { useState, useRef, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import Image from 'next/image';

export default function Features({ props }: any) {
  const [tab, setTab] = useState<number>(4);
  const tabs = useRef<HTMLDivElement>(null);

  const heightFix = () => {
    if (tabs.current && tabs.current.parentElement) {
      tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`;
    }
  };

  useEffect(() => {
    heightFix();
  }, []);

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
            <h1 className="h2 mb-4">{props.section.title}</h1>
            <p className="text-xl text-gray-600">{props.section.description}</p>
          </div>

          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6" data-aos="fade-right">
              {/* Tabs buttons */}
              <div className="mb-8 md:mb-0">
                {props.modelData.map((item: any) => (
                  <div key={item.id}>
                    <a
                      className={`flex items-center justify-between text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${tab !== item.id ? 'bg-white shadow-md border-gray-200 hover:shadow-lg' : 'bg-gray-200 border-transparent'}`}
                      href="#0"
                      onClick={(e) => { e.preventDefault(); setTab(item.id); }}
                    >
                      <div>
                        <div className="font-bold leading-snug tracking-tight mb-1">{item.name + " " + item.l_name + (item.abbreviation ? " " + item.abbreviation : "")}</div>
                        <div className="text-gray-600">{item.position}</div>
                      </div>
                      <div className="flex justify-center items-center w-8 h-8 rounded-full flex-shrink-0 ml-3"></div>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* Tabs items */}
            <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1">
              <div className="transition-all">
                {props.modelData.map((item: any) => (
                  <Transition
                    key={item.id}
                    show={tab === item.id}
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
                      <Image className="md:max-w-none mx-auto rounded" src={item.avatar} width={500} height={462} alt="Features bg" />
                    </div>
                  </Transition>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
