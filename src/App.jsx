
import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Profile from './components/Profile'



function App() {
  

  return (
    <>
      <div className='main-container'>
        
        <Routes>
          <Route path='/' element = {<Home />} />
          <Route path='/login' element ={<Login />} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/profile' element={<Profile/>} />

        </Routes>
        

      </div>
        
      
      
    </>
  )
}

export default App
