import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import "./signup.css"
const SignUp = () => {
    const navigate = useNavigate()
    const [fade, setFade] = useState(false)
    const handleSignup =(e) => {
        e.preventDefault()
        setFade(true)
        setTimeout(()=> {
            navigate("/profile")
        },300)
    }
  return (
    <div className={`${fade ? "fade-out" : ""}`}>
        <p className='signup-heading'>Create your PopX account</p>
        <form className='main'>
            <div className="top">

            <div className='form-group'>
                <label className='required'>Full Name</label>
                <input placeholder= "Marry Doe" />
            </div>
            <div className='form-group'>
                <label className='required'>Phone number</label>
                <input placeholder= "Marry Doe" />
            </div>
            <div className='form-group' >
                <label className='required'>Email address</label>
                <input placeholder= "Marry Doe" />
            </div>
            <div className='form-group'>
                <label className='required'>Password</label>
                <input placeholder= "Marry Doe" />
            </div>
            <div className='form-group'>
                <label >Company name</label>
                <input placeholder= "Marry Doe" />
            </div>
            <div className='agency-question'>
                <div>
                    <p className='required'>Are you an Agency?</p>
                </div>
                <div className='agency-radio-btn'>
                    <label className='custom-radio'>
                    <input type='radio' name='agency' value="yes" checked/>
                    <div className='radio-mark'></div>
                    Yes
                </label>
                <label className='custom-radio'>
                    <input type='radio' name='agency' value="no" />
                    <div className='radio-mark'></div>
                    No
                </label>
                </div>
                
            </div>

            </div>
            <div className="bottom">
                <button 
                onClick={handleSignup}
                >Create Account</button>

            </div>
            


        </form>
        
    </div>
  )
}

export default SignUp