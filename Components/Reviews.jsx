import React from 'react'
import hand from '../src/assets/hand.png'
import reviews from '../Constants/reviews'

const Reviews = () => {
  return (
    <section
      style={{ fontFamily: 'Poppins' }}
      className='max-w-7xl mx-auto px-8 py-10 '
    >
      <div className=''>
        <h2 className='text-2xl md:text-3xl font-bold text-center underline decoration-emerald-600'>
          Testimonials
        </h2>
        <p className='text-sm md:text-lg text-center text-emerald-800 mt-2'>
          "Voices That Validate Our Vision."
        </p>
      </div>

      <div
        style={{ fontFamily: 'Poppins' }}
        className='flex flex-wrap justify-center gap-6 mt-10 border-b-2 border-b-gray-400 w-full pb-16'
      >
        {reviews.map((rev, index) => (
          <div
            key={index}
            className='w-full sm:w-[300px] md:w-[320px] text-center flex flex-col justify-between items-center p-6 border border-neutral-200 rounded-2xl shadow-sm'
          >
            <p className='text-sm md:text-base leading-relaxed'>{rev.review}</p>

            <div className='flex items-center mt-5'>
              <img
                src={rev.image}
                alt=""
                className='h-10 w-10 rounded-full object-cover'
              />
              <div className='text-left ml-3'>
                <h3 className='font-semibold text-sm md:text-base'>{rev.name}</h3>
                <p className='text-xs text-gray-500'>- {rev.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Reviews
