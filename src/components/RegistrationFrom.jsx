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
      ...data,
      [name]:value,
    })
  }

  //Handle error during validation
  const [error,setError]= useState("");

 // form validation
  const handleSubmit=(e)=>{
  e.preventDefault();
  if(data.password != data.ConfirmPassword ){
   setError("Password does not match!");
   return;
  }
  alert("Form succesfully Submit")
  console.log("submitted")
  
  setError("");

  setdata({
    username: '',
    email: '',
    password: '',
    ConfirmPassword: '',
  });
  }




  return (
    <div className='registrationForm'>
      
      <div className='bg-slate-200 h-[90vh] w-screen   flex justify-center items-center flex-col'>
      <p className='text-slate-500 px-5 py-2 text-sm md:text-sm  text-center'>I built this mini registration form to get hands-on experience with handling user input and validating forms in React. I wanted to learn how to manage form state effectively, handle real-time feedback like password matching, and control form submission with user-friendly error messages.</p>
        <form onSubmit={handleSubmit} className='w-[55vw] h-[60vh] bg-white  text-black md:h-[62vh] md:w-[25vw] rounded-md flex flex-col  px-5 p-5  '>
            <label className='font-semibold'  htmlFor="email">Email</label> 
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="email" name='email' value={data.email} onChange={HandleChange} /> <br />
            
            <label className='font-semibold'  htmlFor="username">Username</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="text" name='username' value={data.username}  onChange={HandleChange} /> <br />

            <label className='font-semibold'  htmlFor="password">Password</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="password" name='password' value={data.password} onChange={HandleChange} /> <br />

            <label className='font-semibold'  htmlFor="password">Confirm Password</label>
            <input className='border-b-1 border-l-0 border-r-1 border-t-0 border-slate-600 border text-slate-600 font-light  outline-none rounded-md  px-1 py-1 ' type="Password" name='ConfirmPassword' value={data.ConfirmPassword} onChange={HandleChange} />

            <div className='flex place-content-center items-center flex-col'>
            <button className='hover:bg-slate-800 w-28 m-2 md:m-5  hover:text-white md:p-1 rounded-sm md:w-52 bg-slate-900 text-white '  type='submit'>Register</button>
            {error && <p className='text-red-500'>{error}</p>}

            </div>


        </form>

      </div>
    </div>
  )
}

export default RegistrationFrom