// import axios from 'axios';
import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../../rudex/slices/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css'
function Login() {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const {user} = useSelector((state) => state.auth);

   useEffect(() => {
    if (user.status === 'Success') {
      redirect('/');
    }
  }, [isLoading, isError]);

  const { isLoading, isError, errorMessage } = useSelector(
    (state) => state.auth
  );

  const redirect = useNavigate();

 

  const dispatch = useDispatch();

  const loginHandler = async (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      alert('NEED EMAIL AND PASSWORD');
      return;
    }

    const data = {
      Email,
      Password
    };

    dispatch(login(data));
  };
  return (
    <form class="login" onSubmit={loginHandler}>
    <div >
        <h1 class="title">Log In</h1>
        <p className='my-3 text-red-500'>{isError ? errorMessage : ''}</p>
        <input type='text'
                value={Email}
                onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <input 
                value={Password}
                onChange={(e) => setPassword(e.target.value)} placeholder="Password" type="password" required />
         <button className=''>
               'Login
            </button>
        <a href="#">Forgot your password?</a>
        <p class="text">Don't have an account?</p>
        <button class="buttonShadow">Create new account</button>
    </div>
</form>

  )
}

export default Login