import React from 'react'
import "./profile.css"
import camera from "../assets/camera.svg"
import Ellipse114 from "../assets/Ellipse114.png"
const Profile = () => {
  return (
    <div className='profile-container'>
        <div className='profile-top' >
            <p>Account Settings</p>
        </div>
        <div className='profile-middle'>
          <div className='profile-pic-wrapper'>
            <img src={Ellipse114} className='Ellipse14' />
            <img src={camera} className='camera' />

          </div>
          <div>
             <p className='profile-name'>Marry Doe</p>
          <p className='profile-email'>Marry@Gmail.Com</p>
          </div>
         

        </div>
        <div className='profile-bottom'>
        <p>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam</p>

        </div>
        
        <div className='dotted-border'></div>

    </div>
    
  )
}

export default Profile