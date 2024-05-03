import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
import { auth } from '../firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import backgroundImage from'./main0.png';

const SignUp=()=>{
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const signUp = (e) => {
        console.log("Creating user with: " + email + ", " + password);
        e.preventDefault()
       
        createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
              // Signed in
              const user = userCredential.user;
              console.log("Updating name to: " + firstName + lastName);
              updateProfile(auth.currentUser, {
                displayName: firstName + lastName
              })
              console.log(user);
              console.log("Success");
               navigate("/login")
              // ...
          })
          .catch((error) => {
              const errorCode = error.code;
              const errorMessage = error.message;
              console.log(errorCode, errorMessage);
              // ..
          });
      }

    return(
        <div className='signup'>
            <h1>SignUp</h1>
            {/* <div className='abc'>
            <button className="btn">
                <h3>Continue With Google</h3></button>
            <button className='btn1'>
                <h3>Continue With PhoneNo.</h3>
            </button>
            <hr className='line'></hr>
            </div> */}
            <form>
                {/* <h1>Login</h1> */}
                <div className='input-boxa'>
                    <input type='text' placeholder='First Name*' onChange={(e) => setFirstName(e.target.value)} required/>
                </div>
                <div className="input-box0">
                <input type='text' placeholder='Last Name*' onChange={(e) => setLastName(e.target.value)} required/>
                <input type='email' placeholder='Email Id*' onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className='input-boxb'>
                    <input type='password' placeholder='Password*' onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                    <center><button className='submit1' onClick={signUp}>SignUp</button></center>
                    
                {/* <div className='register-link'>
                    <p>Don't have an account?  <a href='#'>SignUp</a></p>
                </div> */}
            </form>
        </div>
    );
};

export default SignUp;