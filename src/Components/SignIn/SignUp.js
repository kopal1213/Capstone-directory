import * as React from 'react';
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Header from '../Products/Header';
import Footer from '../Products/Footer';
import { Button } from '@mui/material';
import {toast} from 'react-hot-toast'
import './signup.css'
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from'axios';
import {Grid} from '@mui/material';
import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

export default function SignUp() {

  const [firstName , setFirstName] = useState("");
  const [lastName , setLastName] = useState("");
  const [contactNumber , setContactNumber] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPassword , setConfirmPassword] = useState("");
  const [address , setAddress] = useState("");

  // const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const data = new FormData(e.currentTarget);

  //   const userData = {
  //     firstName: data.get("firstName"),
  //     lastName: data.get("lastName"),
  //     email: data.get("email"),
  //     password: data.get("password"),
  //     contactNumber: data.get("contactNumber")
  //   };

  //   try {
  //     // Make a POST request to the signup API endpoint
  //     const response = await axios.post("http://localhost:3001/api/v1/users", userData);

  //     console.log(response.data);

  //     localStorage.setItem("userData", JSON.stringify(userData));

  //     toast.success("Registered Successfully")
      
  //     // Redirect to the login page
  //     window.location.href = "/login"; 
  //   } catch (error) {
  //     console.error(error);
  //     toast.error("Something Went Wrong!")
  //     // Handle any errors that occurred during the API call
  //   }
  // };

  const handleSubmit =(event) => {
    event.preventDefault();
    window.location.href = "/login"
    toast.success("Registered Successfully");
  }

  const HandleSigninClick = (e) => {
    e.preventDefault();

    window.location.href = "/login";
  };

  
  return (
    <>
    
    {/* Navigation Bar */}
    <Header/>
    <div className="form-container">
    <form className="register" onSubmit={handleSubmit}> 

    {/* Sign up copy form with sign in */}

    <DialogTitle 
    className='title'
    >
      Sign Up
      </DialogTitle>
        <DialogContent>
          <TextField
            // autoFocus
            margin="normal"
            id="first"
            label="First Name"
            className='input'
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            variant="standard"
            fullWidth
            size="small"
          />
          <TextField
            autoFocus
            margin="normal"
            id="last"
            className='input'
            label="Last Name"
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            // autoFocus
            margin="normal"
            id="email"
            className='input'
            label="Email Address"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="standard"
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            className='input'
            id="contact"
            label="Contact"
            type="number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            margin="normal"
            id="password"
            className='input'
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="standard"
            fullWidth
          />
          <TextField
            autoFocus
            margin="normal"
            className='input'
            id="confirm"
            label="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            variant="standard"
            fullWidth
          />
          <br />
          <TextField
            autoFocus
            className='input'
            margin="normal"            
            id="address"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            type="text"
            variant="standard"
            fullWidth
          />
          <br />
        </DialogContent>
        <DialogActions>
        <Button 
         variant="contained" 
         color="info"
         className='btn'
         type='submit'
         onClick={() => {
          fetch("http://localhost:3001/api/v1/users", {
            method: "POST",
            body: JSON.stringify({
              firstName:firstName,
              lastName:lastName,
              email:email,
              password:password,
              contactNumber:contactNumber
            }), 
            headers:{
              "content-type":"application/json"
            }
          })
          console.log(firstName,lastName,email,contactNumber,password)
         }}
         >
            Continue
          </Button>
        </DialogActions>
        <Grid container justifyContent="center" >
              <Grid item>
                <Link href="#" variant="body2" onClick={HandleSigninClick}>
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
        </form>
        </div>

     {/* Footer */}
    <Footer/>

    </>
  );
}
