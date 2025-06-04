import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import './login.css'

const Login = () => {
  const navigate = useNavigate()
  const [fade, setFade] = useState(false)

  const handleLogin = () => {
    setFade(true)
    setTimeout(()=>{
      navigate("/profile")
    },300)
  }
  return (
    <div className={`login-container ${fade ? "fade-out": ""}`}>
      <div className='login-content'>
        <p className='login-heading' >Signin to your PopX Account</p>
        <p className='login-p'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
        
        <div className='form-group'>
            <label> Email Address</label>
            <input placeholder='Enter email address' />
        </div>
        <div className='form-group' >
            <label> Email password</label>
            <input placeholder='Enter password' />
        </div>
        <button
        onClick={handleLogin}
        >Login</button>
    </div>
  )
}

export default Login