import React from 'react'
// import lemon from "../assets/Images/lemon.jpg"
import { mainimg } from '../Img'


const Baner3 = () => {
  return (
    <>
      <div className='w-auto px-10'>
        <img src={mainimg.baner2} alt="Baner" className='lg:w-full lg:h-60 md:h-auto md:w-full sm:w-full sm:h-full my-10'/>
      </div>
    </>
  )
}

export default Baner3