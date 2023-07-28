import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import './style/signup.css';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission here, if needed.
    // You can access the email and password using 'email' and 'password' variables.
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div>
      <div className="main">
        <Navbar />
        <div className="fluid-container">
          <form className="container signup" onSubmit={handleSubmit}>
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              className="form-control"
              id="email"
              placeholder="Enter your email"
              onChange={handleEmailChange}
              value={email}
              required
              style={{ width: "85%", marginBottom: "10px" }}
            />

            <label htmlFor="password">Password: </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              onChange={handlePasswordChange}
              value={password}
              required
              style={{ width: "85%", marginBottom: "10px" }}
            />

            <input type="submit" className="register btn btn-primary" value="LogIn" />
            <p>New User? <NavLink to="/signup">SignUp</NavLink></p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
