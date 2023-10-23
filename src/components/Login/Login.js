import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import './Login.css';

export const Login = () => {
  const [login, setLogin] = useState(false);
  const navigate = useNavigate(); 

  const handleSubmit = (e, type) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const auth = getAuth(); 

    if (type === "signup") {
      createUserWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/Achievements"); 
        })
        .catch((err) => {
          alert("Greska prilikom registrovanja / logiranja !");
          setLogin(true);
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((data) => {
          console.log(data, "authData");
          navigate("/Achievements"); 
        })
        .catch((err) => {
          alert("Greska prilikom registrovanja / logiranja !");
        });
    }
  };

  return (
    <div className='login' id='login'>
      <div className='row'>
        <div
          className={login === false ? "activeColor" : "pointer"}
          onClick={() => setLogin(false)}
        >
          Register
        </div>
        <div
          className={login === true ? "activeColor" : "pointer"}
          onClick={() => setLogin(true)}
        >
          Login
        </div>
      </div>
      <h1>{login ? "Login" : "Register"}</h1>
      <form onSubmit={(e) => handleSubmit(e, login ? 'signin' : 'signup')}>
        <input name='email' placeholder='Email' /><br />
        <input name='password' placeholder='Password' type='password' /><br /><br />
        <button name='reglog'>{login ? "Login" : "Register"}</button>
      </form>
    </div>
  );
}
