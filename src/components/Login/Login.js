import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'; 
import './Login.css';

export const Login = () => {
  const [login, setLogin] = useState(true); 
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

  };

  return (
    <div className='login' id='login'>
      <h1>Login</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="inputBox">
          <input name='name' placeholder='Nickname' />
        </div>
        <div className="inputBox">
          <input name='password' placeholder='Password' type='password' />
        </div>
        <Link to="/Achievements"> 
          <button className='reglog' name='reglog'>Login</button>    
        </Link>
      </form>
    </div>
  );
};
