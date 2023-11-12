import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../stylesheets/signup-form.css';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isEmailValid = (email) => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const isPasswordValid = (password) => {
    return password.length >= 8; // Adjust the minimum password length as needed
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isEmailValid(email)) {
      setSubmitMessage('Invalid Email Format');
      setIsLoading(false);
      return;
    } else if (!isPasswordValid(password)) {
      setSubmitMessage('Invalid Password Length');
      setIsLoading(false);
      return;
    } else if (password !== confirmPassword) {
      setSubmitMessage('Passwords do not match');
      setIsLoading(false);
      return;
    }

    const role = "User";

    const signupFormData = {
      name,
      email,
      password,
      confirmPassword,
      role
    };

    try {
      const response = await axios.post('https://ccdbapi.onrender.com/api/users/signup', signupFormData);

      if (response.status === 201) {
        setSubmitMessage('Account created successfully!');
        navigate('/login');
      } else {
        setSubmitMessage('Error: Unexpected response status code');
      }
    } catch (error) {
      console.error('API Error:', error);
      setSubmitMessage('Error creating the account');
    }

    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setIsLoading(false);
  };

  return (
    <div className="signupFormContainer">
      <h3>Create Account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <br />
          <input
            type="text"
            name='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your Name..."
            autoComplete="name"
            required
          />
        </div>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email..."
            autoComplete="email"
            required
          />
        </div>
        <div>
          <label>Create Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Create your Password..."
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <label>Confirm Password</label>
          <br />
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Re-enter Your Password..."
            autoComplete="new-password"
            required
          />
        </div>
        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'Sign Up'}
          </button>
        </div>
        <div className='submitMsg'>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
        <div>
          <NavLink to="/login">Already Registered? Login Here</NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignupForm;
