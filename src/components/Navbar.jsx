import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div >
  <nav className='bg-blue shadow-md fixed w-full top-0 z-50'>
        
   <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 '>
    <div className='flex  justify-between h-16 items-center '>
        <div className='text-2xl font-semibold text-white'>InfoStack</div>
     <div className='space-x-6 text-white text-xl'>
    <Link to='/' className='hover:underline  '>Home</Link>
    <Link to='/about'className='hover:underline'>About</Link>
    <Link to='/user' className='hover:underline'>User</Link>
{/*     <Link to='/userdetails'className='hover:underline'>UserDetails</Link> */}
    </div>
    </div>
    </div>
    </nav>
   </div>
  
  )
}

export default Navbar
