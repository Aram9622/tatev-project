export const metadata = {
  title: 'Neuron Talks',
  description: 'Page description',
  image: '/public/images/banner1.jpg'
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Testimonials from '@/components/testimonials'
import Sponsor from '@/components/sponsore'
import About from '@/components/about'
import Map from '@/components/map'

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Features /> */}
      {/* <FeaturesBlocks /> */}
      <About />
      <Sponsor />
      <Testimonials />
      {/* <Map /> */}
    </>
  )
}
