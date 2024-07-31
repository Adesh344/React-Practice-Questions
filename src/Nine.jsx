import React from 'react'
import {BrowserRouter,Link ,Route, Routes} from 'react-router-dom'
import Home from './forRoutes/Home'
import Contect from './forRoutes/Contect'
import About from './forRoutes/About'



function Nine() {



  return (
    <BrowserRouter>
      <nav>
      <ul>
        <li>
          <Link to='/'>Home </Link>
        </li>
        <li>
          <Link to='/about'>About </Link>
        </li>
        <li>
          <Link to='/ct'>Contact </Link>
        </li>
      </ul>
    </nav>
   
        <Routes >

        <Route path='/' element={<Home/>}> </Route>
        <Route path='/ct' element={<Contect/>}> </Route>
        <Route path='/about' element={<About/>}> </Route>

        </Routes>    
    </BrowserRouter>
  )
}

export default Nine