import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../utils/auth';
import '../styles/style.css'
import { ContentContainer, WelcomeContainer, WelcomeHeader, WelcomeParagraph, ButtonMagenta, ButtonBlue } from '../styles/style'

const Home = () => {
  return (
    <>
      <ContentContainer>
        <WelcomeContainer>
          <WelcomeHeader>GREETINGS TRAVELER</WelcomeHeader>
          <WelcomeParagraph>
            Welcome to the space of Remuse, where aliens have invaded and it is up to heroes like you to join the battle and defend against the enigmatic intentions of the space denizens through the challenge of puzzle games.
          </WelcomeParagraph>
          {!Auth.loggedIn() ? (
            <div>
              <Link to="/login">
                <ButtonMagenta>
                  Login / Signup
                </ButtonMagenta>
              </Link>
            </div>
          ) : (
            <Link to="/dashboard" className="flex-center">
            <ButtonBlue>
              Enter Challenge
            </ButtonBlue>
          </Link>
          )}
        </WelcomeContainer>

      </ContentContainer>
    </>
  );
};

export default Home;
