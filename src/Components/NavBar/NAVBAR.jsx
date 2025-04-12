import React from 'react'
import LOGO from "./LOGO.jsx"
import NAVLINKS from "./NAVLINKS.jsx"
import LOGIN from "./LOGIN.jsx";


const NAVBAR = () => {
  return (
    <nav 
      className="sticky top-0 z-[30] md:z-[20] flex-wrap mx-auto p-8 h-[240px]"
      style={{
      background: 'linear-gradient(360deg, rgba(67, 227, 115, 0) 0%, rgba(12, 43, 0, 0.88) 100%)',
      }}
    > 
      <div className='flex w-full justify-between'>
        <LOGO />

        <NAVLINKS />

        <LOGIN />

      </div>
    </nav>
  )
}

export default NAVBAR
