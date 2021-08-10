import React, { useState } from "react";
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import { useSpring, animated } from "react-spring";
import '../styles/style.css'

const LoginSignupForm = () => {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(true);
  const loginProps = useSpring({
    display: login ? `block` : `none`  // Login form display set to block if login is true
  });
  const signupProps = useSpring({
    display: signup ? `block` : `none`, // Signup form display set to block if signup is true 
  });

  const loginButtonProps = useSpring({
    borderBottom: login
      ? "3px solid #ff1080"
      : "0px solid transparent", //Animate bottom border of login button
  });
  const signupButtonProps = useSpring({
    borderBottom: signup
      ? "3px solid #ff1080"
      : "0px solid transparent", //Animate bottom border of signup button
  });

  function signupClicked() {
    setSignup(true);
    setLogin(false);
  }
  function loginClicked() {
    setLogin(true);
    setSignup(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="tab-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginButton"
          style={loginButtonProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={signupClicked}
          id="signupButton"
          style={signupButtonProps}
        >
          Sign Up
        </animated.button>
      </div>
      <div className="form-group">
        <animated.div action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.div>
        <animated.div action="" id="registerform" style={signupProps}>
          <SignupForm />
        </animated.div>
      </div>
    </div>
  );
}

export default LoginSignupForm;
