import React from 'react';
import SignupForm from '../components/SignupForm'
import '../styles/style.css'

const Signup = () => {
  return (
    <>
      <h1 className='has-text-light'>Signup</h1>
      <SignupForm classStyle='has-text-light' />
    </>
  );
};

export default Signup;
