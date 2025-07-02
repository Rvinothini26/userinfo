import React from 'react'
import { Link } from 'react-router-dom'
function Home() {
  return (
   <div>
      <div className='bg-cover bg-center h-[800px] md:h-[800px] flex flex-col justify-center items-center text-center px-4
     ' style={{backgroundImage:"url('https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm0zNzgtMDkta255OWZoM2IuanBn.jpg')"}}>
      <div className='backdrop-blur-md bg-pink/20 p-6 rounded max-w-2xl border border-white'>
      <h1 className='text-3xl md:text-5xl font-bold mb-4 text-pink-200 drop-shadow w-150'>Welcome to InfoStack</h1>
<p className='text-md md:text-lg mb-6 text-white drop-shadow'>"Where user information is stored, secured, and  turned into valuable insights for a more connected digital experience.</p>
     <button className='bg-blue-900 text-white px-6 py-3 rounded-xl hover:bg-blue-300 transition text-lg' >    <Link to='/user' className='hover:underline'>UserVault</Link></button>
      </div>
    </div> 
   </div>
  )
}

export default Home
