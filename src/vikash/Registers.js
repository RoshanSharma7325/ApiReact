import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Registers = () => {
    let navigate=useNavigate()
    let [email, FunEmail] = useState('')
    let [passowrd, FunPass] = useState('')

    const Api = (e) => {
        e.preventDefault()

        try {
            const myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            const raw = JSON.stringify({
                "email": email,
                "password": passowrd
            });

            const requestOptions = {
                method: "POST",
                headers: myHeaders,
                body: raw,
                redirect: "follow"
            };

            fetch("https://test.maya555.store/learner/register", requestOptions)
                .then((response) => response.json())
                .then((result) =>{
                    if(result.status==='001'){
                        navigate('/login')
                    }
                    else{
                        console.log("FAILD");
                    }
                })
                .catch((error) => console.error(error));
        } catch (error) {

        }
    }   
    return (
        <div>


            <form onSubmit={Api}>
                <input type='email' value={email} onChange={(e) => { FunEmail(e.target.value) }} placeholder='enter your email' required />
                <input type='password' value={passowrd} onChange={(e) => { FunPass(e.target.value) }} placeholder='enter your password' required />
                <button type='submit'>add</button>
            </form>


        </div>
    )
}

export default Registers
