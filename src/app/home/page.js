import Foods from '@/components/popular/Foods'
import PreviousPosts from '@/components/previous-posts'
import PreviousPost from '@/components/previous-posts/post'
import React from 'react'

const page = () => {
  return (
    <div className='my-4'>
      <Foods />
      <PreviousPosts />
    </div>
  )
}

export default page