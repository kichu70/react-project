import React from 'react'
import { Button } from '@mui/material'
import "./Navbar.css"
const Navbar = () => {
  return (
     <div className='nav-bar'>
      <div className="nav">
       <div className='first'><img src="" alt="" /></div>
       <div className='secn'>
        <Button className='btns'>Home</Button>
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
