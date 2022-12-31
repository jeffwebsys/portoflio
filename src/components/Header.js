import React from 'react'
import { useState } from 'react'
import { MdOutlineLightMode } from 'react-icons/md'
import { BsCodeSlash } from 'react-icons/bs'

const Header = () => {
    
    const [darkMode, setDarkMode] = useState(false) ;

    const toggleDarkMode = () => {
    setDarkMode(!darkMode)
}

  return (
    <section style={{
        'backgroundColor': '#181824'
    }}>
    <nav className='flex justify-between font-bold py-5'>
    <div className='flex items-center'><span className='pr-2 text-xl'>jws</span><BsCodeSlash size={25}/></div>
             <div className='flex items-center'>
         <a href="#" className='text-white font-md'>Download <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-400'>CV</span></a>
        </div>
    </nav> 
    </section>
  )
}

export default Header