import React from 'react'
import Header from './Header/Header'
import Baner from './Baner/Baner'
import Cards from './Cards/Cards'
import "bootstrap/dist/css/bootstrap.min.css"
import Juices from './Cards/Juices'
import Baner2 from './Baner/Baner2'
import Baner3 from './Baner/Baner3'
// import "../src/App.css"

const App = () => {
  return (
    <div className=''>
      {/* <h1>Pavan Vaishnav</h1>  */}
      <Header />
      {/* <Baner /> */}
      <h1 className='text-center m-4 p-2 bg-green-300'>Fruits</h1>
      <Baner2/>
      <Cards />
      <h1 className='text-center m-4 p-2 bg-green-300'>Juices</h1>
      <Baner3/>
      <Juices/>
    </div>
  )
}

export default App
