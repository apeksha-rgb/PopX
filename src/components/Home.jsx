import React from 'react'
import { useState } from 'react'
import "./home.css"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const navigate = useNavigate()
  const [fade, setFade] = useState(false)
  const handleCreate =() => {
    setFade(true)
    setTimeout(()=>{
      navigate("/signup")
    },300)
  } 
  const handleLogin = () => {
    setFade(true)
    setTimeout(() => {
      navigate("/login")
    },300)
  }
  return (
    <div>
      <div className={`home-container ${fade ? 'fade-out' : ""}`} >
        <div className='main-content'>
        <p className='heading'>Welcome to PopX</p>
        <p className='content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className='button-container'>
          <button className='btn-primary'
          onClick={handleCreate}
          >Create Account</button>
          <button 
          className='btn-secondary'
          onClick={handleLogin}
          >Already Registered? Login</button>
        </div>
        
    </div>

    </div>
    
  )
}

export default Home