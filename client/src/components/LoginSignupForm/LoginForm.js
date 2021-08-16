import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { LOGIN_USER } from '../../utils/mutations'
import { validateEmail } from '../../utils/helpers';
import { LightText, ButtonMagenta } from '../../styles/style'
import { Form, FormField, FormLabel, FormControl, Input, Error } from './LoginSignupForm.styles'

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
     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
        <LightText>
          <FormField>
            <FormLabel>Email:</FormLabel>
            <FormControl>
              <Input
                id="email-login"
                type="email"
                placeholder="Your email address"
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              {!validateEmail(userFormData.email) && submitted && <Error>*Please enter a valid email address</Error>}
            </FormControl>
          </FormField>
          <FormField>
            <FormLabel>Password:</FormLabel>
            <FormControl>
              <Input
                id="password-login"
                type="password"
                placeholder="Your password"
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
            </FormControl>
          </FormField>
          <FormField>
            <FormControl>
            {userFormData.email && userFormData.password && <ButtonMagenta
                disabled={!(userFormData.email && userFormData.password)}
                type='submit'
              >
                Submit
              </ButtonMagenta>}
            </FormControl>
            {!userExist && submitted && <Error>*Incorrect email and/or password entered</Error>}
          </FormField>
        </LightText>
      </Form>
    </>
  );
};

export default LoginForm;
