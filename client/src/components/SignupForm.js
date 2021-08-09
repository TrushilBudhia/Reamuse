import React, { useState } from 'react';
// import { Form, Alert } from 'react-bootstrap';
import Auth from '../utils/auth';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations'
import { validateEmail } from '../utils/helpers';
import '../styles/style.css'
import { LightText, ButtonMagenta } from '../styles/style.jsx'

const SignupForm = (classStyle) => {
  // Set initial form state
  const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
  // Set state for form validation
  const [validated] = useState(false);
  // Set state of submitted
  const [submitted, setSubmitted] = useState(false);

  // Setting up mutation
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // Checking if form has everything
    const form = event.currentTarget;
    console.log('form', form);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      // Adding user with the inputted informtion
      const { data } = await addUser({
        variables: { ...userFormData },
      });
      console.log('data', data);

      // Authenticating login with the token
      Auth.login(data.addUser.token);
      if (error) {
        throw new Error('Something went wrong!');
      }
    } catch (err) {
      console.log('Registration error');
      console.error(err);
    }

    if (userFormData.username && validateEmail(userFormData.email) && userFormData.password) {
      // sets valid to true if all the input fields are valid
      // Valid being true allows the success message to be displayed
      setUserFormData({
        username: '',
        email: '',
        password: '',
      });
    } else {
      console.log('Something went wrong');
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
            <label className="label">Username:</label>
            <p className="control">
              <input
                className="input"
                id="username-signup"
                type="text"
                placeholder="Your username"
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              {submitted && !userFormData.username && <span id="name-error" className="has-text-danger my-4 is-block">*Please enter a valid username</span>}
            </p>
          </div>
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
              {submitted && !validateEmail(userFormData.email) && <span id="email-error" className="has-text-danger my-4 is-block">*Please enter a valid email</span>}
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
              {submitted && !userFormData.password && <span id="password-error" className="has-text-danger my-4 is-block">*Please enter a valid password</span>}

            </p>
          </div>
          <div className="field">
            <p className="control">
              {userFormData.username && userFormData.email && userFormData.password && <ButtonMagenta
                className="button-magenta"
                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                type='submit'
              >
                Submit
              </ButtonMagenta>}
            </p>
          </div>
        </LightText>
      </form>
    </>
  );
};

export default SignupForm;
