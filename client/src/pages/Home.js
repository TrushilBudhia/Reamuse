import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import '../styles/style.css'

const Home = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-navy'>
        <Container>
          <h1>Greetings Traveler</h1>
          <p>Welcome to the space of Remuse, where aliens have invaded and it is up to heroes like you to join the battle and defend against the enigmatic intentions of the space denizens through the challenge of puzzle games.</p>

          <Button className="mr-2">Login</Button>
          <Button>Signup</Button>
        </Container>

      </Jumbotron>
    </>
  );
};

export default Home;
