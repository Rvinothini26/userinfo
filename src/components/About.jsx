import React from 'react'
import { Link } from 'react-router-dom'
function About() {
  return (
     <div>
       <div className='bg-cover bg-center h-[800px] md:h-[700px] flex flex-col justify-center items-center text-center px-4
     ' style={{backgroundImage:"url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzgtMDkta255OWZoM2IuanBn.jpg')"}}>
      <div className='border border-white w-200 p-8 rounded'>
       <h1 className='text-white font-bold text-xl'> This website securely stores your personal and account-related details.It allows you to manage your identity
        on our platform, update contact information, and customize preferences. We value your privacy- your data is protected
          and used only to enhance your experience.
        </h1>
        </div>
        <div className='mt-4'>
          <Link to='/' className='hover:underline text-white font-2xl px-4 '>Home</Link>
          <Link to='/user' className='hover:underline text-white font-2xl px-4'>User</Link>
        </div>
         </div>
          
       </div>
    
  )
}

export default About
