import React from 'react'
import styled from "../Header/Header.module.css"
import Navbar1 from './Navbar1'
import Search from './Search'

const Header = () => {
  return (
    <div className='flex flex-row justify-between bg-yellow-100 border-solid border-black-900 w-full'>
      <div className={styled.lemonlogo}>LEMON</div>
      {/* <div><Search/></div> */}
      <div> <Navbar1/></div>
    </div>
  )
}

export default Header
