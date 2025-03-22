import React from 'react'
import lemon from "../assets/Images/lemon.jpg"
import { mainimg } from '../Img'
import Carousel from 'react-bootstrap/Carousel';

const Baner = () => {
  return (
    <>
      {/* <div className='w-auto'>
        <img src={mainimg.heroimg} alt="Baner" className='lg:w-full lg:h-210 md:h-auto md:w-full sm:w-full sm:h-full my-10'/>
      </div> */}


      <Carousel className='lg:w-7xl h-auto md:w-3xl sm:w-2xl xs:w:xs xl:w-xl item-center justify-center'>
      {/* <Carousel.Item>
        <img src={mainimg.c1} alt="heroimg"  className='w-7xl h-auto'/>
      </Carousel.Item>
      <Carousel.Item>
        <img src={mainimg.c2} alt="heroimg"  className='w-7xl h-auto'/>
      </Carousel.Item> */}
      <Carousel.Item className='w-full px-10'>
        <img src={mainimg.c3} alt="heroimg"  className='lg:w-full lg:h-60 md:h-auto md:w-auto sm:w-auto sm:h-auto m-2'/>
      </Carousel.Item>
      {/* <Carousel.Item className='w-full x-10'>
        <img src={mainimg.c4} alt="heroimg"  className='lg:w-full lg:h-60 md:h-auto md:w-auto sm:w-auto sm:h-auto m-2'/>
      </Carousel.Item>
       */}
    </Carousel>
    </>
  )
}

export default Baner