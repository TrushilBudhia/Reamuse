import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations'
import { validateEmail } from '../../utils/helpers';
import { LightText, ButtonMagenta, Error } from '../../styles/style'
import { Form, FormField, FormLabel, FormControl, Input } from './LoginSignupForm.styles'

const SignupForm = () => {
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
      // Setting a delay to account for page loading after a successful signup
      setTimeout(function () {
        setUserFormData({
          username: '',
          email: '',
          password: '',
        })
      }, 1000);

    } else {
      console.log('Something went wrong');
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
            <FormLabel>Username:</FormLabel>
            <FormControl>
              <Input
                id="username-signup"
                type="text"
                placeholder="Your username"
                name='username'
                onChange={handleInputChange}
                value={userFormData.username}
                required
              />
              {submitted && !userFormData.username && <Error>*Please enter a valid username</Error>}
            </FormControl>
          </FormField>
          <FormField>
            <FormLabel>Email:</FormLabel>
            <FormControl>
              <Input
                id="email-signup"
                type="email"
                placeholder="Your email address"
                name='email'
                onChange={handleInputChange}
                value={userFormData.email}
                required
              />
              {submitted && !validateEmail(userFormData.email) && <Error>*Please enter a valid email</Error>}
            </FormControl>
          </FormField>
          <FormField>
            <FormLabel>Password:</FormLabel>
            <FormControl>
              <Input
                id="password-signup"
                type="password"
                placeholder="Your password"
                name='password'
                onChange={handleInputChange}
                value={userFormData.password}
                required
              />
              {submitted && !userFormData.password && <Error>*Please enter a valid password</Error>}

            </FormControl>
          </FormField>
          <FormField>
            <FormControl>
              {userFormData.username && userFormData.email && userFormData.password && <ButtonMagenta
                disabled={!(userFormData.username && userFormData.email && userFormData.password)}
                type='submit'
              >
                Submit
              </ButtonMagenta>}
            </FormControl>
          </FormField>
        </LightText>
      </Form>
    </>
  );
};

export default SignupForm;
