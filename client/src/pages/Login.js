import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import LoginForm from '../components/LoginForm'
import '../styles/style.css'

const Login = () => {
  return (
    <>
      <h1>Login</h1>
      <LoginForm className="bg-navy" />
    </>
  );
};

export default Login;
