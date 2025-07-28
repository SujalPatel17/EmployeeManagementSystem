import React, { useState } from 'react'

const Login = () => {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")



    const submitHandler =(e)=>{
        e.preventDefault()
        console.log("Email is,", email)
        console.log("Password is ", password)

        setemail('')
        setpassword('')
    }

  return (
        <div className='flex h-screen w-screen items-center justify-center'>
      <div className='border-2 border-emerald-600 p-20 rounded'>
        <form 
        onSubmit={(e)=>{
            submitHandler(e)
        }}
        className='flex flex-col items-center justify-center'>
          <input value={email} onChange={(e)=>{
            setemail(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email' />
          <input value={password} onChange={(e)=>{
            setpassword(e.target.value)
          }}
          required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-4 px-5 mt-4 rounded-full placeholder:text-gray-400' type='password' placeholder='Password' />
          <button  className='text-white outline-none w-full hover:bg-emerald-700 font-semibold bg-emerald-600 text-xl py-3 px-3 mt-8 rounded-full placeholder:text-white'>Log  in</button>
        </form>
      </div>

    </div> 
  )
}

export default Login