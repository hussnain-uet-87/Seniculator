import React from 'react'

const Feature = () => {
  return (
    <section id='features' className='max-w-7xl mx-auto mt-16 px-6 mb-10 scroll-mt-24' >
        <div className='flex flex-col border-b-2 border-b-gray-400 pb-20  px-20 lg:flex-row lg:space-x-10 items-center'>
            <div className='flex-1 mb-6 md:mb-0' style={{fontFamily: 'Poppins , sans-serif'}}>
                <h2 className='text-5xl mb-4'>We Built A Digital Experience</h2>
                <p>Designed to be fast, intuitive, and effortless <br /> — because your time matters.</p>
            </div>
            <div className='mt-4 min-w-[280px] flex-1 p-6 bg-amber-100 border-2 border-amber-400 rounded-2xl'>
                <h2 className='text-2xl md:text-3xl mb-4'>Instant GPA Calculation</h2>
                <p >Just select your grades, credit hours, and hit calculate. Seniculator gives you accurate GPA results in seconds — no math degree required.</p>
            </div>
            <div className='mt-4 min-w-[280px] flex-1 p-6 bg-fuchsia-100 border-2 border-fuchsia-400 rounded-2xl '>
                <h2 className='text-2xl md:text-3xl mb-4'>Flexible <br /> & User-Friendly</h2>
                <p>Whether you're on a laptop  or checking from your phone between classes, Seniculator is built to work seamlessly on any device.</p>
            </div>
        </div>
    </section>
  )
}

export default Feature