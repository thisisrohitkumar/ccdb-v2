import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios';
import '../stylesheets/login-form.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Use the useNavigate hook

  const isEmailValid = (email) => {
    // Basic email format validation using regular expression
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  // const isPasswordValid = (password) => {
  //   Minimum password length requirement
  //   return password.length >= 6;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!isEmailValid(email)) {
      setSubmitMessage('Invalid Email Format');
      setIsLoading(false);
      return;
    }

    const loginFormData = {
      email,
      password
    };

    try {
      const response = await axios.post('http://localhost:5000/api/users/login', loginFormData);

      if (response.status === 200) {
        setSubmitMessage('Login successful!');
        // Redirect to the home page or any other protected route
        navigate('/');
      } else {
        setSubmitMessage('Invalid email or password');
      }
    } catch (error) {
      console.error('API Error:', error);
      setSubmitMessage('Error submitting the form.');
    }

    // Clearing the form after submission
    setEmail('');
    setPassword('');
    setIsLoading(false);
  };

  return (
    <div className="loginFormContainer">
      <h3>Login as Student</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <br />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email..."
            required
          />
        </div>
        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your Password..."
            required
          />
        </div>

        <div>
          <button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging In...' : 'LOGIN'}
          </button>
        </div>
        <div className='submitMsg'>
          {submitMessage && <p>{submitMessage}</p>}
        </div>
        <div>
          <Link to="/signup">Not Registered? Sign Up Here</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
