import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4'>
       <p className='text-center font-bold' title="Author">Made with Love by <Link className='text-red-600' to={"https://poetic-sprite-67f981.netlify.app/"}> Ankit Gupta</Link></p>
      </div>
    </footer>
  )
}

export default Footer