import React from 'react'

function Footer() {
  return (
    <div className=" bg-gray-500 py-5 mt-9">
    <div className="max-w-7xl text-white mx-auto px-4 text-sm text-center">
      All Rights Reserved @ CukCuk {new Date().getFullYear()}
    </div>
  </div>
  )
}

export default Footer