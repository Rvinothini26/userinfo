
import React from 'react'
import Navbar from './components/Navbar'
import { Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import UserDetails from './components/UserDetails';
import User from './components/Userinfo';

function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
       <Route path ='/' element={<Home/>} />
                <Route path='/about' element={<About/>} />
                <Route path='/user' element={<User/>}/>
                <Route path='/userdetails/:id' element={<UserDetails />} /> 
     </Routes>
    
    </div>
  )
}

export default App
