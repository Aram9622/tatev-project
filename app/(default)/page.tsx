// ./app(default)/page.tsx
"use client";

import { metadata } from './metadata'; // Import the metadata
import Hero from '@/components/hero';
import Features from '@/components/features';
import Testimonials from '@/components/testimonials';
import Sponsor from '@/components/sponsore';
import About from '@/components/about';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SimpleBox from '@/components/blocks/simpleBox'
import SlideBoxAndImage from '@/components/blocks/slideBoxAndImage'
import ListText from '@/components/blocks/listTexts'
import BoxWithButton from '@/components/blocks/simpleBoxWithButton'
import SLideImage from '@/components/blocks/slideImage'
import { it } from 'node:test';

export default function Home() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios.get('http://localhost:8000/api/all').then(function(response){
      // console.log(response);
      setData(response.data);
    });
  }, []);

  // <Hero />
  //     <Features />
  //     <About />
  //     <Sponsor />
  //     <Testimonials />
  return (
    <>
    {
      data.map((item)=>{
        if(item["section"]["template"] == "simpleBox"){
          return <SimpleBox props={item}/>
        }
        if(item["section"]["template"] == "slideBoxAndImage"){
          return <SlideBoxAndImage props={item}/>
        }
        if(item["section"]["template"] == "listTexts"){
          return <ListText props={item}/>
        }
        if(item["section"]["template"] == "simpleBoxWithButton"){
          return <BoxWithButton props={item}/>
        }
        if(item["section"]["template"] == "slideImage"){
          return <SLideImage props={item} />
        }
      })
    }
      
    </>
  );
}