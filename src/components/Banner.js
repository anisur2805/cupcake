import React from 'react'

function Banner() {
  return (
    <div className='bg-gray-500 flex text-center items-center justify-center flex-col h-[300px] text-white'>
      <h1 className='text-5xl font-semibold mb-2'>CukCuk</h1>
      <p className='max-w-2xl mx-auto text-[18px]'>Used by some of the world's largest companies, Next.js enables you to create high-quality web applications with the power of React components.</p>
      <button className='bg-white text-gray-500 px-4 py-2 rounded-lg mt-4'>Learn More</button>

  </div>
  )
}

export default Banner