import VideoThumb from '@/public/images/banner.jpeg'
import ModalVideo from '@/components/modal-video'
import Image from 'next/image'

export default function Map() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6" id='home'>

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-10 md:pb-20" data-aos="zoom-y-out">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-3xl font-extrabold leading-tighter tracking-tighter mb-4 decoration-[#74ab74]" data-aos="zoom-y-out">The Conference Location</h1>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.359709015266!2d44.5111205!3d40.1788076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abdb0fd2c4079%3A0x1a97fb67b0724072!2sHoliday%20Inn%20Yerevan%20-%20Republic%20Square%2C%20an%20IHG%20Hotel!5e0!3m2!1sen!2sam!4v1713213915187!5m2!1sen!2sam" 
          width="100%" height="450"  loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>
    </section>
  )
}