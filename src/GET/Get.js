// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';

// const Get = () => {

//   const [email, setEmail] = useState()
//   const [pass, setPassword] = useState()

//   const navigate = useNavigate()

//    const Login =()=>{
//     try {
//       const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "email": email,
//   "password": pass
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };

// fetch("https://test.maya555.store/learner/login", requestOptions)
//   .then((response) => response.json())
//   .then((result) => {
//     if(result.status == "001"){

//       localStorage.setItem("token", result.token)
//       toast(result.message) 

//       setTimeout(() => {
//         navigate('/Hello') 
//       }, 5000);
//     }else{
//       toast(result.message)
//     }

//   })
//   .catch((error) => console.error(error));

//     } catch (error) {

//     }
//    }


//   return (
//     <div>

//       <ToastContainer/>
// <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
// <input type='password' value={pass} onChange={(e)=>setPassword(e.target.value)}/>
// <button onClick={()=>{Login()}}>
//   Submit
// </button> 
//     </div>
//   )
// }

// export default Get







// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const Get = () => {
//   const [email,setEmail]=useState()
//   const [password,setPass]=useState()
//   const navi=useNavigate()
// const CallApi =()=>{
//   try {
//     const myHeaders = new Headers();
// myHeaders.append("Content-Type", "application/json");

// const raw = JSON.stringify({
//   "email": email,
//   "password": password
// });

// const requestOptions = {
//   method: "POST",
//   headers: myHeaders,
//   body: raw,
//   redirect: "follow"
// };
// fetch("https://test.maya555.store/learner/register", requestOptions)
//   .then((response) => response.json())
//   .then((result) => 
//   {
// if(result.status==='001'){
//   navi("/Hello")
// }
// else{
//   alert("faild")
// }
//   })
//   .catch((error) => console.error(error));
//   } catch (error) {

//   }
// }
//   return (
//     <div>
//       <div>
//         <input type='email' value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder='email' required/>
//         <input type='password'value={password} onChange={(e)=>{setPass(e.target.value)}}  placeholder='password' required/>
//         <button onClick={CallApi}>Verify</button>
//       </div>
//     </div>
//   )
// }

// export default Get


import React, { useState } from 'react'
const Get = () => {

    const addTask = () => {

        const [title, setTitle] = useState()
        const [description, setDescription] = useState()

        const token = localStorage.getItem("token")

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", 'Bearer ${token}');



        const raw = JSON.stringify({
            "title": title,
            "description": description
        });

        const reqOpt = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        }

        fetch("https://test.maya555.store/learner/add/task", reqOpt)
            .then(async (response) => {

                const res = await response.json()
                console.log(res);

                if (res.status == "001") {
                    alert("task added successfully")
                }

            })



            .catch(
                (error) => {
                    console.log(error);
                }
            )



    }

    return (
        <div>
            <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
            <input type="text" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
            <button onClick={addTask}>add task</button>
        </div>
    )
}

export default Get
