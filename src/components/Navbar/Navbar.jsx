import React, { useState } from 'react'
import '../../assets/assets'
import { assets } from '../../assets/assets'
import './Navbar.css'
import { Link } from 'react-router-dom'


function Navbar({setLoginpop}) {

    const[menu, setMenu] = useState('home')

  return (
    <div className='navbar'>
        <div className="navbar-contents">
          <Link to='/' ><img className='logo-img' src={assets.logo}  /></Link>
            <ul>
                <Link to='/' onClick={()=>setMenu('home')} className={menu==='home'?'active':''}>Home</Link>
                <li onClick={()=>setMenu('about')} className={menu==='about'?'active':''}>about us</li>
                <li onClick={()=>setMenu('mobile')} className={menu==='mobile'?'active':''}>mobile-app</li>
                <li onClick={()=>setMenu('contact')} className={menu==='contact'?'active':''}>contact us</li>
            </ul>
            <div className="cart-section">
                <img className='search-icon' src={assets.search_icon}   />
               <Link to='/cart' > <img className='cart-icon' src={assets.basket_icon}   /></Link>
                 
                <button onClick={()=>setLoginpop(true)} className='signup-button' >sign-up</button>
                
            </div>
        </div>
        
    </div>
  )
}

export default Navbar