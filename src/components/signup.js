import React from 'react';
import { useNavigate } from "react-router-dom";
import './signup.css';
import backgroundImage from'./main0.png';

const SignUp=()=>{
    const navigate = useNavigate();

    const handleLoginCLick = () =>{
        navigate('/login');
    };
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
                    <input type='text' placeholder='First Name*' required/>
                </div>
                <div className="input-box0">
                <input type='text' placeholder='Last Name*' required/>
                <input type='email' placeholder='Email Id*' required/>
                </div>
                <div className='input-boxb'>
                    <input type='password' placeholder='Password*' required/>
                </div>
                    <center><button className='submit1' onClick={handleLoginCLick}>SignUp</button></center>
                    
                {/* <div className='register-link'>
                    <p>Don't have an account?  <a href='#'>SignUp</a></p>
                </div> */}
            </form>
        </div>
    );
};

export default SignUp;