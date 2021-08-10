// see SignupForm.js for comments
import React, { useState } from 'react';
// import { Form, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations'
import { validateEmail } from '../utils/helpers';
import '../styles/style.css'
import { LightText, ButtonMagenta, Error } from '../styles/style.jsx'

const LoginForm = () => {
  const [userFormData, setUserFormData] = useState({ email: '', password: '' });
  const [validated] = useState(false);
  // Set state of submitted
  const [submitted, setSubmitted] = useState(false);
  // Set state of userExist
  const [userExist, setUserExist] = useState(false);
  // Setting up mutation
  const [loginUser, { error }] = useMutation(LOGIN_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // Check if form has everything
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
  console.log('form', form);

    try {
      const { data } = await loginUser({
        variables: { ...userFormData },
      });
      console.log('data', data);
      // Authenticating login with the token
      Auth.login(data.loginUser.token);
      setUserExist(true);
      if (error) {
        console.log('Login error');
        throw new Error('Something went wrong!');
      }
    } catch (err) {
      // If the request to retrieve the email from the database fails, setUserExist to false
      setUserExist(false);
      console.error(err);
    }

    if (userExist && validateEmail(userFormData.email) && userFormData.password) {
      // sets valid to true if all the input fields are valid
      // Valid being true allows the success message to be displayed
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    } else {
      console.log('incorrect login details');
    }
    // Sets submitted to true
    // Will display any error spans if there are input fields that do not have a value
    setSubmitted(true);
  };

  return (
    <>
     <form className="form" noValidate validated={validated} onSubmit={handleFormSubmit}>
        <LightText>
          <div className="field">
            <label className="label">Email:</label>
            <p className="control">
              <input
                className="input"
                id="email-signup"
                type="email"
                placeholder="Your email address"
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              {!validateEmail(userFormData.email) && submitted && <Error>*Please enter a valid email address</Error>}
            </p>
          </div>
          <div className="field">
            <label className="label">Password:</label>
            <p className="control">
              <input
                className="input"
                id="password-signup"
                type="password"
                placeholder="Your password"
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
            </p>
          </div>
          <div className="field">
            <p className="control">
            {userFormData.email && userFormData.password && <ButtonMagenta
                className="button-style button-magenta"
                disabled={!(userFormData.email && userFormData.password)}
                type='submit'
              >
                Submit
              </ButtonMagenta>}
            </p>
            {!userExist && submitted && <Error>*Incorrect email and/or password entered</Error>}
          </div>
        </LightText>
      </form>
    </>
  );
};

export default LoginForm;
