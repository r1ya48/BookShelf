import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './main2.png';
import './welcomepg.css';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';
import { BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";

const WelcomePage = () => {
    const navigate = useNavigate();

    const handleLoginCLick = () => {
        navigate('/login');
    };
    const logOut = () => {
      signOut(auth).then(() => {
        navigate('/login');
      }).catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage)
      });
    }

  return (
    <div className='wel'>
      <div className='web'>
        <h1>Welcome to Our Website</h1>
        <p>
        "Welcome to "BookShelf", your gateway to a world of stories, knowledge, and imagination.
        Dive into our vast collection of books spanning genres from classics to contemporary bestsellers, and embark on an enriching journey with every turn of the page."
        </p>
        <button className='bttn' onClick={handleLoginCLick}>Login</button>
      </div>
      <div className='image'>
        <img src={backgroundImage} alt="Welcome" className='image'/>
        
      </div>
      {/* <button className='bttn'>Login</button> */}
    </div>
  );
};

export default WelcomePage;