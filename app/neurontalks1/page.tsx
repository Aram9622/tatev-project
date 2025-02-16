export const metadata = {
  title: 'Neuron Talks',
  description: 'Page description',
  image: '/public/images/banner1.jpg'
}

import Hero from '@/components/neurontalks1/hero'
import Features from '@/components/neurontalks1/features'
import Testimonials from '@/components/neurontalks1/testimonials'
import Sponsor from '@/components/neurontalks1/sponsore'
import About from '@/components/neurontalks1/about'
import Map from '@/components/neurontalks1/map'


export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      {/* <FeaturesBlocks /> */}
      <About />
      <Sponsor />
      <Testimonials />
      {/* <Map /> */}
    </>
  )
}
