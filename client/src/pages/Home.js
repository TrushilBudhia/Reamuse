import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../styles/style.css'

const Home = () => {
  return (
    <>
      <Jumbotron fluid className='text-light bg-clear'>
        <Container className="welcome-page">
          <h1>Greetings Traveler</h1>
          <p className="welcome-paragraph">Welcome to the space of Remuse, where aliens have invaded and it is up to heroes like you to join the battle and defend against the enigmatic intentions of the space denizens through the challenge of puzzle games.</p>
          {!Auth.loggedIn() ? (
            <div>
              <Link to="/login">
                <button className="button-style button-magenta mr-2">Login</button>
              </Link>
              <Link to="/signup">
                <button className="button-style button-magenta">Signup</button>
              </Link>
            </div>
          ) : (
            <p>Hello World</p>
          )}
          {/* <Button className="mr-2">Login</Button>
          <Button>Signup</Button> */}
        </Container>

      </Jumbotron>
    </>
  );
};

export default Home;
