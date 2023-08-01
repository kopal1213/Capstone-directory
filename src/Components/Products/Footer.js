import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className='footer'>
      <h6 className='text-center' id='Footer'>
        All Rights Reserved &copy; upGrad-Eshop
      </h6>
      <p className="text-center">
        <Link to={'/about'} >About</Link>&nbsp;&nbsp;
        |
        &nbsp;&nbsp;<Link to={'/contact'} >Contact</Link>&nbsp;&nbsp;
        |
        &nbsp;&nbsp;<Link to={'/policy'} >Privacy Policy</Link>&nbsp;&nbsp;
      </p>
    </div>
    </>
  )
}
