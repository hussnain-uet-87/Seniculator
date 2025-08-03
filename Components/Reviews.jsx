import React from 'react'
import hand from '../src/assets/hand.png'
import reviews from '../Constants/reviews'

const Reviews = () => {
  return (
    <section style={{fontFamily: 'Poppins'}} className='  max-w-7xl mx-12 p-6 border-b-2 my-10 border-b-gray-400'>
        <div>
            <h2 className='text-xl lg:text-3xl font-bold text-center underline decoration-emerald-600 '>Testimonals</h2>
            <p className='text-md lg:text-lg text-center text-emerald-800 mt-1'>"Voices That Validate Our Vision."</p>
        </div>
        <div style={{fontFamily: 'Poppins'}} className='flex flex-wrap sm:text-sm items-center lg:flex-row justify-center mt-12 '>
            {reviews.map((rev,index)=>(

                <div className='flex tracking-wide m-2 text-center min-w-[250px] flex-col justify-center items-center p-8 max-w-sm border-2 border-neutral-200 rounded-2xl'>
                <p>{rev.review}</p>
                <div className='flex'>
                    <img src={rev.image} alt="" className='w-12 rounded-full mt-3' />
                    <div className='flex flex-col text-left ml-4 mt-4'>
                        <h3 className='font-bold'>{rev.name}</h3>
                        <p>- {rev.title}</p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Reviews