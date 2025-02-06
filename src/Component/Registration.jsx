import React from 'react'
import { useState } from 'react'
import { IoMdEyeOff } from "react-icons/io";
import { IoMdEye } from "react-icons/io";

export const Registration = () => {
    const [user, setuser] = useState({
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        Phonenumber: ""


    })
    const [Showpassword, setShowpassword] = useState(false)
    const handleclick = (e) => {
        const { name, value } = e.target;
        setuser((prev) => ({ ...prev, [name]: value }))
    }
    const hanleSubmit = () => {
        event.preventDefault()
        console.log(user);

    }
    return (
        <>
            <div className='h-auto w-96 bg-white flex flex-col  m-auto  gap-2 shadow-xl'>

                <h1 className='text-center text-3xl text-blue-400 font-bold'>sign up</h1>
                <p className='p-2 text-sm text-center'>Plese fill in this from for create acount.</p>
                <form onSubmit={hanleSubmit} className=' p-3 flex flex-col gap-2'  >
                    <label htmlFor="firstName">FirstName</label>
                    <input
                        className='bg-slate-300'
                        type="text"
                        name='firstname'
                        required
                        placeholder='Firstname'
                        value={user.firstname}
                        onChange={handleclick}

                    />
                    <label htmlFor="lastname">Lastname</label>
                    <input
                        className='bg-slate-300'
                        type="text"
                        name='lastname'
                        required
                        placeholder='Lastname'
                        value={user.lastname}
                        onChange={handleclick}

                    />
                    <label htmlFor="email">Email</label>
                    <input
                        className='bg-slate-300'
                        type="text"
                        name='email'
                        required
                        placeholder='Email'
                        value={user.email}
                        onChange={handleclick}

                    />
                    <div className='flex flex-col'> <label htmlFor="password">Password</label>
                        <span className='flex flex-row'> 
                            <input
                                className='bg-slate-300 w-[380px]'
                                
                                type={Showpassword ? "text" : "password"}
                                name='password'
                                required
                                placeholder='Password'
                                value={user.password}
                                onChange={handleclick}

                            /> <span className='' onClick={() => setShowpassword(!Showpassword

                            )}>{Showpassword ? <IoMdEyeOff /> : <IoMdEye />}
                            </span>
                        </span>

                    </div>
                    <label htmlFor="Phonenumber">Phonenumber</label>
                    <input className='bg-slate-300'
                        type="phone"
                        name='Phonenumber'
                        required
                        placeholder='phone'
                        value={user.Phonenumber}
                        onChange={handleclick}

                    />
                    <p className='text-sm'>By creating an acount you agree <span className='text-blue-400'>Term and Condition?</span></p>
                    <button className='bg-green-500 rounded-lg' type='submit' onSubmit={hanleSubmit}>sign up</button>
                </form>
            </div>
        </>

    )
}
