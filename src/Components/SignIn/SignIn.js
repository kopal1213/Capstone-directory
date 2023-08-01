import * as React from 'react';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
// import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Header from '../Products/Header';
import Footer from '../Products/Footer';
import './signup.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useAuth } from '../Context/Auth';


export default function SignIn() {

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");

  const history = useNavigate();

  // useEffect(() => {
  //   localStorage.getItem("user-info")
  //   history("/products")
  // })

  async function login (){
    console.warn(email,password)

    const data = {email,password};
    let result = await fetch("http://localhost:3001/api/v1/auth" , {
      method: "POST",
      headers: {
        "Content-type" : "application/json",
        "Accept" : "application/json"
      },
      body: JSON.stringify(data)
    });
    result =await result.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    toast.success("Login Successfully")
    history("/products") 
     
  }
  

  return (
    <>
      <Header />
      <div className="form-container">
        <form action="" className="register" >
        <DialogTitle className='title'>Sign In</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, <br/>please enter your email address here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="loginMail"
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            margin="dense"
            id="loginPassword"
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            variant="standard"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
        <Button 
        variant="contained" 
        color="success"
        onClick={login}
                >
            Sign In
          </Button>
        </DialogActions>
        </form>
        </div>

        <Footer/>
    </>
  );
}
