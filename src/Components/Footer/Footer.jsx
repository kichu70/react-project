
import React from 'react'
import "./Footer.css"
import { Button } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';

const Footer = () => {
  return (
    <div>
      <div className="ftr">
        <div><img src="/images/logo-logomark.png" alt="" /></div>
        <div>
            <Button>Home</Button>
            <Button>about</Button>
            <Button>Contact</Button>
        </div>
        <div>
            <Button><FacebookIcon/></Button>
            <Button><Twitter/></Button>
            <Button><Instagram/></Button>
            <Button><YouTube/></Button>
        </div>
        <div><p>© 2025 MyApp. All Rights Reserved.</p></div>
      </div>
    </div>
  )
}

export default Footer



