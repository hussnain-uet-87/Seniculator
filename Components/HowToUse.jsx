import React from 'react'
import num1 from "../src/assets/number-one.png"
import num2 from "../src/assets/number-2.png"
import num3 from "../src/assets/number-3.png"
import handImage from "../src/assets/hand.png"

const HowToUse = () => {
  return (
    <section id='instructions' className='max-w-7xl mx-6 md:mx-12 scroll-mt-12 border-b-2 border-b-gray-400 p-6 pb-16  font-["Poppins"]' >
        <div className='flex items-center flex-col md:flex-row '>
            <div className='flex-1 items-center '>
                <h2 className='text-xl md:text-3xl text-left max-w-[350px] font-bold'>3 Easy Steps To Calculate Your GPA</h2>
                <p className='mt-6 max-w-[400px]'>Getting your GPA has never been easier. Just follow these simple steps and you're good to go </p>
                <div className='max-w-[500px] space-y-4 mt-6  flex flex-col'>
                    <div className='flex-1 flex items-center border-2 border-amber-400 bg-amber-100 p-3 md:p-5 rounded-3xl'>
                        <img style={{boxShadow: "0px 0px 5px 3px #fbbf24" }} className='h-[30px] md:h-[50px]  rounded-3xl shadow-2xl shadow-amber-800' src={num1} alt="" />
                        <div className='ml-4  text-sm'>
                        <h3 className='font-bold'>Enter Your Grades</h3>
                        <p>Select the grades you've earned for each subject or course.</p>
                        </div>
                    </div>
                    <div className='flex-1 flex items-center bg-fuchsia-100 border-2 border-fuchsia-400 p-3 md:p-5 rounded-3xl'>
                        <img style={{boxShadow: "0px 0px 5px 3px #e879f9" }} className='h-[30px] md:h-[50px]  rounded-3xl shadow-2xl shadow-amber-800' src={num2} alt="" />
                        <div className='ml-4  text-sm'>
                        <h3 className='font-bold'>Add Credit Hours</h3>
                        <p>Enter the number of credit hours for each corresponding course.</p>
                        </div>
                    </div>
                    <div  className='flex-1 flex items-center border-2 border-sky-400 bg-sky-100 p-3 md:p-5 rounded-3xl'>
                        <img style={{boxShadow: "0px 0px 5px 3px #7ed3f5" }} className='h-[30px] md:h-[50px] rounded-3xl shadow-2xl shadow-amber-800' src={num3} alt="" />
                        <div className='ml-4  text-sm'>
                        <h3 className='font-bold'>Click Calculate</h3>
                        <p>Instantly get your GPA — accurate, fast, and hassle-free.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex-1 mt-[50px] md:mt-0 ml-6 flex items-center justify-center'>
                <img src={handImage} className='lg:w-[400px] w-[250px]' alt="" />
            </div>
        </div>
    </section>
  )
}

export default HowToUse