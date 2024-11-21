import React, { useState } from 'react'
import './LoginForm.css'
import { assets } from '../assets/assets'

function LoginForm({setLoginpop}) {

const[form, setForm] = useState('sign up')

  return (
    <div className='form-popup'>
        <form className='form-container'>
            <div className="form-head">
                 <h2>{form}</h2>
                 <img onClick={()=>setLoginpop(false)} src={assets.cross_icon}  />
            </div>
            <div className="form-details">
                {form==='sign up'?<input type="text" placeholder='username' required/>:<></>}
                <input type="text" placeholder='enter email' required/>  
                <input type="password" placeholder='enter password' required/>  
            </div>
                 <button>{form==='sign up'?'Create Account':'Login'}</button>
             <div className="checkbox">
                <input type="checkbox" required/>
                <p>By continuing, i agree to the use of terms & policy.</p>
             </div>

              {form==='sign up'?<p>Login to your account? <span className='form-signup-click' onClick={()=>setForm('login in')}>click here</span> </p>
                 :<p>Create your account? <span className='form-signup-click' onClick={()=>setForm('sign up')}>click here</span></p>}  
            
        </form>
    </div>
  )
}

export default LoginForm