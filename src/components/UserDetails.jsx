
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function Userdetails() {
  const {id} = useParams();
  const[users, setUsers] = useState(null);

  useEffect(() => { //mount
     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res)=>res.json())
    .then((data)=>setUsers(data));
  }, [id]) //unmount
 
const showAlert=()=>{
  alert("This is an alert message to user");
}
  if(!users) return <p>Loading...</p>
  return (
    <div className='bg-gray-300  bg-center h-[500px] md:h-[700px] flex  justify-center items-center text-center px-4'>
      

      <div className=' border border-black-500  bg-gray-200 w-xl h-1/2 flex flex-col justify-center items-center text-center rounded-2xl'>
        
        <h1 className='text-4xl font-semibold'>{users.name}</h1>
        <div className='text-gray-900 font-bold p-4'>
        <h3> Email :{users.email}</h3> 
        <h4> Phone  :{users.phone}</h4>
        <p>Website  :{users.website}</p>
        <p>Company Name:{users.company.name}</p>
        <h3 className='text-blue-700 text-xl '>Address</h3>
        <p>Street  :{users.address.street}</p>
        <p>City    :{users.address.city}</p>
        <p>Zip-code :{users.address.zipcode}</p>
        <button className='outline rounded p-2 mt-2 text-blue-500'onClick={showAlert} >Message</button>
        </div>
          <Link to='/user' className='hover:underline text-blue-600'>User</Link>
      </div>
    </div>
  )
}

export default Userdetails