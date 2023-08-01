import React from 'react'
import './Home.css'
import { Button } from '@mui/material';
import logo from '../../Assets/logo.png'



export default function Home() {

    // const [openSign, setOpenSign] = useState(false)

  return (
    <div className='home'>

        <img 
        src={logo}
        alt="Logo"
        className='homeIcon'
         />

      <h1 className='home-heading'>Welcome To The <br/>
        UpGrad Eshop !!
      </h1>
      <br/><br/><br/><br/>

      {/* <!-- Button that are link to Sign Up and Login Page --> */}

      <div className='btn'>

      
      <Button color='success' href='/login' className='btn'>Sign In</Button>
      <Button color="success" href='/register' className='btn'>Sign Up</Button>
      
      </div>
      


      

    </div>
  )
}
