import React, { useState } from 'react'

const Login = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [message , setMessage] = useState("");
  
  
    const signin=() =>
    {
      setMessage("Loading");
      if(email==='b@b' && password==='b')
      {
        setTimeout(()=>{
          setMessage("Login Sucessfull !")
        },3000);
      }
      else{
        setTimeout(()=>{
          setMessage("Invalid Credentials!");
        },3000)
      }
    }
    
    return (
      <div>
        <h1>Login</h1>
        <input type="email" placeholder='Enter Email' onChange={(e)=>setEmail(e.target.value)}/>
  
        <br /> <br/>
        <input type="password"placeholder='Enter Password' onChange={(e)=>setPassword(e.target.value)}/>
        <br /> <br />
        <button onClick={signin}>Login</button>
        <p>{message}</p>
      </div>
    )
}

export default Login