import React from 'react'
import { Button } from '@mui/material'
import "./Navbar.css"
import { Navigate, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const Navigate =useNavigate()
  return (
     <div className='nav-bar'>
      <div className="nav">
       <div className='first'><img src="/images/logo-logomark.png" alt="" /></div>
       <div className='secn'>
        <Button className='btns' onClick={()=>Navigate("/")} >Home</Button>
        <Button className='btns'>Adoutus</Button>
        <Button className='btns'>ContactUs</Button>
        <img src="/images/user.jpg" alt="" />
        <Button variant='outlined'>LOGOUT</Button>
       </div>
      </div>
    </div>
  )
}

export default Navbar
