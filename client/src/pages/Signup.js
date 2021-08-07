import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import SignupForm from '../components/SignupForm'
import '../styles/style.css'

const Signup = () => {
  return (
    <>
      <h1>Signup</h1>
      <SignupForm />
    </>
  );
};

export default Signup;
