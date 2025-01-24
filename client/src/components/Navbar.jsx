import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full h-[40px] bg'>
      <div className='bg-slate-700 flex flex-row justify-normal'>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </div>
  )
}
