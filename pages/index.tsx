import { Inter } from '@next/font/google';
import "swiper/css/bundle";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Mousewheel, Pagination } from "swiper";
import NavBar from "$components/navbar/navBar";
import Banner from "$components/banner/banner";
import BottomPanel from "$components/bottomPanel";
import Skills from "$components/skills";
import Qualification from "$components/qualification";
import Contact from "$components/contact";
import Projects from "$components/projects";


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex w-full h-full'>
      <div className="flex overflow-y-hidden flex-col w-full">
        <NavBar />
        <div className="flex flex-col">
          <Banner />
          <Skills />
          <Qualification />
          <Projects />
          <Contact />
        </div>
        <BottomPanel />
      </div>
    </div>
  )
}


