import React from 'react';
import LoginForm from '../components/LoginForm'
import '../styles/style.css'

const Login = () => {
  return (
    <>
      <h1 className='has-text-light'>Login</h1>
      <LoginForm classStyle='has-text-light' />
    </>
  );
};

export default Login;
