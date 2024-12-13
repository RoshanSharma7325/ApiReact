import React from 'react'

const HomeDeta = () => {
  const LogOut= ()=>{
    const myHeaders = new Headers();
    // let token = localStorage.getItem('token')
myHeaders.append("Authorization", `Bearer ${localStorage.getItem('token')}`);

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("http://localhost:7001/learner/logout", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    if(result.status==='001'){
      localStorage.removeItem('token')
      
    }
  })
  .catch((error) => console.error(error));
  }
  return (
    <div>
      <button onClick={LogOut}>LogOut</button>
    </div>
  )
}

export default HomeDeta
