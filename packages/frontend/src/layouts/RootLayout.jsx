import React, { useState } from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar/Navbar'

const RootLayout = () => {

  const [hideOverlay, setHideOverlay] = useState(true)
  
  const toggleOverlay = () => {
    setHideOverlay(state => !state)
  }

  return (
    <>
      <div className='container'>
        <div id="overlay" className={hideOverlay ? 'hide' : ''}></div>
        <Navbar toggleOverlay={toggleOverlay} />
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout