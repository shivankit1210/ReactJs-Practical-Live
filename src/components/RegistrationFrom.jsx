import React, { useState } from 'react'


const RegistrationFrom = () => {
  const [data,setdata] =useState({
    email:"",
    password:"",
    username:"",
    ConfirmPassword:"",
  });

  const HandleChange = (e)=>{
    const {name,value} = e.target;
    setdata({
      ...FormData,
      [name]:value,
    })

  
  }

  return (
    <div className='registrationForm'>
      <div className='bg-slate-200 h-[90vh] w-screen flex justify-center items-center flex-col'>
        <h1>{data.email}</h1>
        <form action="" className='w-[55vw] h-[60vh] bg-white  text-black md:h-[65vh] md:w-[25vw] rounded-md flex flex-col  px-5 p-5  '>
            <label className='font-semibold'  htmlFor="email">Email</label> 
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="email" name='email' value={data.email} onChange={HandleChange} /> <br />
            
            <label className='font-semibold'  htmlFor="username">Username</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="text" name='username' value={data.username}  onChange={HandleChange} /> <br />
            <label className='font-semibold'  htmlFor="password">Password</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="password" name='password' value={data.password} onChange={HandleChange} /> <br />
            <label className='font-semibold'  htmlFor="password">Confirm Password</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="ConfirmPassword" name='ConfirmPassword' value={data.password} onChange={HandleChange} />

            <div className='flex place-content-center items-center'>
            <button className='hover:bg-slate-800 w-28 m-2  hover:text-white md:p-1 rounded-sm md:w-52 bg-slate-900 text-white '  type='submit'>Register</button>

            </div>


        </form>

      </div>
    </div>
  )
}

export default RegistrationFrom