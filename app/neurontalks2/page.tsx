export const metadata = {
  title: 'NeurOn Talks 2',
  description: 'Page description',
  image: '/public/images/banner1.jpg'
}

import Hero from '@/components/neurontalks2/hero'
import Features from '@/components/neurontalks2/features'
import FeaturesBlocks from '@/components/neurontalks2/features-blocks'
import Testimonials from '@/components/neurontalks2/testimonials'
import Sponsor from '@/components/neurontalks2/sponsore'
import About from '@/components/neurontalks2/about'
import Map from '@/components/neurontalks2/map'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <FeaturesBlocks />
      <About />
      <Sponsor />
      <Testimonials />
      {/* <Map /> */}
    </>
  )
}
