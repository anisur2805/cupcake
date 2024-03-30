import Foods from '@/components/popular/Foods'
import PreviousPosts from '@/components/previous-posts'
import PreviousPost from '@/components/previous-posts/post'
import React from 'react'
import Loader from '../loader/page'

const page = () => {
  return (
    <div className='my-4'>
      <Foods />
      <PreviousPosts />
      <Loader />
    </div>
  )
}

export default page