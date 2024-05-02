// import logo from './logo.svg';
// import './App.css';
// import LoginForm from './components/login_form/login_form';
// import './components/login_form.css';
// import LoginForm from './components/login_form';
// import SignUp from './components/signup';
// import './components/signup.css';
// import WelcomePage from './components/welcomepg';
// import './components/welcomepg.css';

// function App() {
//   return (
//     <div>
//       {/* <LoginForm/> */}
//       {/* <SignUp/> */}
//       <WelcomePage/>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/login_form';
import SignUp from './components/signup';
import WelcomePage from './components/welcomepg';
// import Contact from './Contact';
// import NotFound from './NotFound';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage/>} />
        <Route path="/login" element={<LoginForm/>}/>
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/welcomepg" element={<WelcomePage/>}/>
        {/* <Route component={NotFound} /> This route will render if no other route matches */}
      </Routes>
    </Router>
  );
};

export default App;

