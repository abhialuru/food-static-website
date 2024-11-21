import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
 import Header from './components/Header/Header'
 import './index.css'
import { Outlet } from 'react-router-dom'
import LoginForm from './LoginForm/LoginForm'
 
function AppLayout() {

  const [loginpop, setLoginpop] = useState(false)

  return (
    
    <div className='applayout'>
      {loginpop?<LoginForm setLoginpop={setLoginpop} />:<></>}
       <Navbar setLoginpop={setLoginpop} />
       <Outlet/>
       </div>
  )
}

export default AppLayout;