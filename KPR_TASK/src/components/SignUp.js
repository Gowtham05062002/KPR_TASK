import React, { useState } from 'react';
import axios from 'axios';
import './style/signup.css';
import Navbar from './Navbar';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
  const [name, setName] = useState('');
  const [nameError, setNameError] = useState('');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // form validation
  const validateUser = () => {
    let setError = false;
    const errors = {};
    const phonePattern = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (name.length < 5 || name.length > 20) {
      setNameError('Username must have 5-20 characters..!!');
      setError = true;
    }

    if (!emailPattern.test(email)) {
      setEmailError('Enter a valid email address..!!');
      setError = true;
    }

    if (!phonePattern.test(phone)) {
      setPhoneError('Enter a valid phone number');
      setError = true;
    }

    if (!passwordPattern.test(password)) {
      setPasswordError(
        'Password must contain 8-10 characters, at least one uppercase alphabet, one lowercase alphabet, one digit, and one special character..!!'
      );
      setError = true;
    }
    return setError;
  };

  // onSubmit handler
  const onSubmit = (e) => {
    e.preventDefault();

    const err = validateUser();
    if (!err) {
      const dataSubmitted = {
        username: name,
        email: email,
        phone: phone,
        password: password,
      };

      axios
        .post('http://localhost/app/signup', dataSubmitted)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));

      setName('');
      setEmail('');
      setPhone('');
      setPassword('');
    } else {
      if (nameError.length > 0) alert(`${nameError}`);
      if (emailError.length > 0) alert(`${emailError}`);
      if (phoneError.length > 0) alert(`${phoneError}`);
      if (passwordError.length > 0) alert(`${passwordError}`);

      setNameError('');
      setPasswordError('');
      setEmailError('');
      setPhoneError('');
    }
  };

  return (
    <div className="main">
      <Navbar />
      <div className="fluid-container">
        <form className="container signup" onSubmit={onSubmit}>
          <label htmlFor="username">UserName : </label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
            style={{ width: '85%', marginBottom: '10px' }}
          />

          <label htmlFor="email">Email : </label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            style={{ width: '85%', marginBottom: '10px' }}
          />

          <label htmlFor="phone">Contact No. : </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            placeholder="Enter your contact number"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
            required
            style={{ width: '85%', marginBottom: '10px' }}
          />

          <label htmlFor="password">PassWord : </label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            style={{ width: '85%', marginBottom: '10px' }}
          />

          <input type="submit" className="register btn btn-primary" value="SignUp" />
          <p>
            Already registered? <NavLink to="/signin">SignIn</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
