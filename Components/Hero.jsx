import React from 'react'
import hero2 from "../src/assets/hero-img-2.png"

const Hero = () => {
  return (
    <section className='max-w-7xl p-6  mx-auto bg-[#fbfbfb]'>
      <div className='flex border-b-2 border-b-gray-400 flex-col md:mt-20 xl:mt-0 flex-col-reverse items-center md:flex-row '>
      <div className='lg:ml-22  md:ml-10 ml-6'>
        <h2 style={{fontFamily: 'Poppins',color: "#94402c	"}} className='text-xl md:text-2xl lg:text-4xl font-bold'>GPA Calculation Made Easy</h2>
        <p className='text-xl mt-6'>Confused about your GPA? Stop guessing and start calculating! Seniculator makes it <span style={{fontFamily: "Schoolbell,cursive",color: "#bc4327"}} className='text-xl font-bold'>quick</span>, <span style={{fontFamily: "Schoolbell,cursive",color: "#5e9448"}} className='text-xl font-bold'>accurate</span>, and <span style={{fontFamily: "Schoolbell,cursive",color: "#84228a"}} className='text-xl font-bold '>stress-free </span>to find your GPA in just a few clicks. Whether you're prepping for scholarships, semester wrap-ups, or just keeping track, we’ve got your back. No sign-ups, no fuss.</p>
        <button style={{fontFamily: 'Poppins',color: "#4a3222"}} className='tracking-wide b-10 flex items-center gap-2 cursor-pointer font-bold px-8 py-3 bg-amber-200 border-amber-300 border-2 mt-5 rounded-full text-md mb-8'>Start Calculating <i class="ri-arrow-right-line"></i></button>
      </div>
      <img src={hero2} className='w-xs md:w-md lg:w-1/2 float-right mr-6' alt="" />
      </div>
    </section>
  )
}

export default Hero