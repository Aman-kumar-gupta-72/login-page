import React, { useState } from 'react'
import { AiOutlineCheckCircle } from "react-icons/ai";
import { FaRegCircle } from "react-icons/fa";

const Login = () => {
    const [user, setuser] = useState({
        username: "",
        password: ""
    })
    const [check, setcheck] = useState(false)
    
    const handleclick = (e) => {
        const { name, value } = e.target;
        setuser((prev) => ({ ...prev, [name]: value }))
    }

    const handlesubmit=(event)=>{
        event.preventDefault();
        console.log(user);
        setuser({
            username:"",
            password:""
        })
        
    }

    return (
        <>
            <div className='h-[400px] w-[400px] m-auto flex items-center  bg-blue-800'>
                <form className='h-[300px] w-[300px] m-auto  bg-red-400 flex flex-col gap-3 p-2 rounded-tl-[30%] rounded-br-3xl' onSubmit={handlesubmit}>
                    <h1 className='text-center  text-3xl font-bold' >login</h1>
                    <input className='mt-5  rounded-md'
                        type="text"
                        name="username"
                        placeholder='username'
                        value={user.username}
                        onChange={handleclick} />
                    <input className='mt-2 rounded-md'
                        type="password"
                        name="password"
                        placeholder='pasword'
                        value={user.password}
                        onChange={handleclick} />


                    <div className='flex flex-row gap-10 mt-8 '>
                        <label>
                            <input
                                type="checkbox"
                                checked={check}
                                onChange={() => setcheck(!check)}
                            />
                            Remember Me
                        </label>
                        <button onClick={()=>{setuser.password("")}} >forget password</button>
                    </div>
                    <div className='flex flex-col'>
                    <button className='text-2xl font-bold bg-green-300 text-blue-600'onSubmit={handlesubmit} >login</button>
                    <p className='text-center text-sm'>Don't have acount?<span className='text-indigo-700 '>Register here</span></p>
                    </div>
                </form>
            </div>
        </>
    )
}
export default Login;
