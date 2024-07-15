import VideoThumb from '@/public/images/banner.jpeg'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>Seasoned Speakers and the Topics
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6" id='home'>

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20" data-aos="zoom-y-out">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4 decoration-[#74ab74]" data-aos="zoom-y-out">NeurOn Talks</h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">is a must-attend conference for anyone passionate about personal development and brain capabilities.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <p className='text-xl text-gray-600 font-black'>NeurOn Talks 2 Soon...</p>
                </div>
              </div>
            </div>
          </div>
          {/* <Image
                src={VideoThumb}
                width={1920}
                height={400}
                alt="Picture of the author"
              /> */}
              <iframe width="1104" height="621" 
        src="https://www.youtube.com/embed/Jp5okNO9ymU" 
        title="NeurOn Talks | Brain and Neuroplasticity Conference" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" >
          
        </iframe>
        </div>

      </div>
    </section>
  )
}