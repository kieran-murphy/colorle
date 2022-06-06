import React from 'react'
import {IoColorPaletteOutline} from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='w-full h-20 bg-nav flex flex-row'>
        <h1 className="text-2xl p-5 text-blue-100">
            Color-le 
        </h1>
        {/* <h1 className="text-2xl py-6 text-blue-100">
            <IoColorPaletteOutline width={30}/>
        </h1> */}
        
    </div>
  )
}

export default Navbar