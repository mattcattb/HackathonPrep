import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='w-full h-[40px] bg-slate-800'>
      <div className='bg-slate-700 flex flex-col justify-normal'>
        <Link to="/">Home</Link>
        <Link to="/one">Page one</Link>
        <Link to="/two">Page two</Link>
      </div>
    </div>
  )
}
