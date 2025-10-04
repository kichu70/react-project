import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import {useAuth} from  "../../Context/Auth"
import "./Login.css"

const Login = () => {
  const {login}= useAuth();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")

    const handleLogin =()=>{
        login(username,password)
    }
  return (
    <div className='login'>
        <h1>Login Page</h1>
      <div className="login-sub">
                <TextField
          error
          id="standard-error"
          label="username"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}

          variant="standard"
        />
                <TextField
          error
          id="standard-error"
          label="password"
          onChange={(e)=>setPassword(e.target.value)}
          value={password}
          variant="standard"
        />
        <Button variant='contained' onClick={handleLogin}> login</Button>
      </div>
    </div>
  )
}

export default Login
