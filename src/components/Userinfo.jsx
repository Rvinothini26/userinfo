import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Userinfo() {
  const[users,setUsers]=useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then((data)=>setUsers(data));
  },[]);
  return (
          
<div className='p-20 bg-cover bg-gray-400' >
  <h1 className='text-4xl fond-bold mb-6 text-center text-blue-900'>User Matrix</h1>
  <div className='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
    {
    users.map((user)=>(
      <div key={user.id} className='border rounded p-4 bg-gray-200 shadow hover:shadow-lg transition'>
       <h2 className='text-xl font-semibold text-blue-700'>{user.name}</h2> 
       <p className='text-gray-600'>Email :{user.email}</p>
       <p>Phone :{user.phone}</p>
       <p>Website :{user.website}</p>
       <p className='text-gray-900 font-semibold'>City:{user.address.city}</p>
        <button className='text-blue-900 font-semibold border border-gray rounded p-2 m-2' onClick={() => navigate(`/userdetails/${user.id}`)}>View details</button>
       </div>
    ))
  }
  </div>

</div>
  )
}

export default Userinfo
