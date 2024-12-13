import React, { useState }from 'react'

const Login = () => {
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  const regesterapi = ()=>{
  try {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "email": email,
  "password": password
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("https://test.maya555.store/learner/login", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    console.log(result)
    if(result.status== "001"){

    }

    

    })
  
  .catch((error) => console.error(error));
  } catch (error) {
    
  }

  }
  
  return (
    <div>
       <input value={email} onChange={(e)=>setEmail(e.target.value)} type='email' placeholder='enter your email'/>
      <input value={password} onChange={(e)=>setPassword(e.target.value)} type='password' placeholder='enter your password'/>
      <button onClick={regesterapi}>submit</button>
    </div>
  )
}

export default Login
