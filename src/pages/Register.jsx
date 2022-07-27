import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUser } from '../auth/firebase'

const Register = () => {
  const navigate=useNavigate()
  const [firstName,setFirstName]=useState()
  const [lastName,setLastName]=useState()
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()


  const handleSubmit=(e)=>{
    e.preventDefault()
    const displayName = `${firstName} ${lastName}`;
    createUser(email,password,navigate,displayName)
  }

  return (
    <div className='d-flex justify-content-center gap-3 p-1'>
      <div className="form-image d-none d-md-block">
        <img src={"https://picsum.photos/800/800"} alt="sample-movie" />
      </div>
      <div className='register-form p-1'>
        <h1 className='form-title display-3 text-center fw-bold text-danger'>Register</h1>
        <form id='register' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name" className='form-label fw-bold'>First Name</label>
            <input type="text" id='first-name' className='form-control' placeholder='Please Enter Your First Name' required
            onChange={(e)=>setFirstName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name" className='form-label fw-bold'>Last Name</label>
            <input type="text" id='last-name' className='form-control' placeholder='Please Enter Your Last Name' required
             onChange={(e)=>setLastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className='form-label fw-bold'>Email</label>
            <input type="email" id='email' className='form-control' placeholder='Please Enter Your Email Address'required
             onChange={(e)=>setEmail(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className='form-label fw-bold'>Password</label>
            <input type="password" id='password' className='form-control' placeholder='Please Enter Your Password' required
             onChange={(e)=>setPassword(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <input type="submit" value="Register" className='btn btn-primary form-control'/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register