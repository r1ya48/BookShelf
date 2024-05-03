import React,{useState,useEffect,useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './login_form.css';
import backgroundImage from'./main0.png';
const LoginForm=()=>{
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    const handleSignUpClick = () => {
        navigate('/signup');
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setTimeout(() => {
            navigate('/signup');
        },1000);
    };
    
    return(
        <div className='login'>
            <h1>Login</h1>
            <div className='abc'>
            <button className="btn">
                <h3>Continue With Google</h3></button>
            <button className='btn1'>
                <h3>Continue With PhoneNo.</h3>
            </button>
            <hr className='line'></hr>
            </div>
            <form>
                <div className='input-box'>
                    <input type='email' placeholder='Email Id*' required/>
                </div>
                <div className='input-box1'>
                    <input type='password' placeholder='Password*' required/>
                </div>
                    <center><button className='submit'>Login</button></center>
                    
                <div className='register-link'>
                    <p>Don't have an account?  <a href='#' onClick={handleSignUpClick}>SignUp</a></p>
                </div>
            </form>
        </div>
    );
};



export default LoginForm;