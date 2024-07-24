/* import React,{useState,useEffect} from 'react'

function Signup() {

    const [username,setUsername] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [isFormValid,setisFormValid] = useState(false);

    useEffect(() => {
        const isValid = username.trim() !== '' && password.trim() !== '' && email.trim() != '';
        setisFormValid(isValid);
    },[username,email,password]);
    
    const handleSubmit = (e) => {
        e.preventDefault();

        if(isFormValid) {
            console.log('Signup successful!');
            // Reset the form after successful signup
            setUsername('');
            setEmail('');
            setPassword('');
        } else {
            console.log('Please fill out all fields.');
        }  
    };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <br />
      <button type="submit" disabled={!isFormValid}>
        Sign Up
      </button>
    </form>
  );
}

export default Signup */



import React, { useState, useEffect } from 'react';

const Signup = () => {
  // Step 1: Define state variables for form fields and errors
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: '',
  });

  // Step 2: Define a useEffect to handle form validation
  useEffect(() => {
    // Validation logic for username
    if (formData.username.length < 3) {
      setErrors((prevErrors) => ({ ...prevErrors, username: 'Username must be at least 3 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, username: '' }));
    }

    // Validation logic for email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors((prevErrors) => ({ ...prevErrors, email: 'Invalid email address' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, email: '' }));
    }

    // Validation logic for password
    if (formData.password.length < 6) {
      setErrors((prevErrors) => ({ ...prevErrors, password: 'Password must be at least 6 characters' }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, password: '' }));
    }
  }, [formData]); // Run this effect whenever formData changes

  // Step 3: Define a function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Check if there are any errors
    if (Object.values(errors).some((error) => error !== '')) {
      console.log('Form has errors. Cannot submit.');
      return;
    }

    // If no errors, proceed with form submission logic
    console.log('Form submitted successfully!', formData);
    // Add your API call or other submission logic here
  };

  // Step 4: Define a function to handle form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Step 5: Render the form
  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
        <div className="error">{errors.username}</div>
      </div>

      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
        <div className="error">{errors.password}</div>
      </div>

      <button type="submit">Sign Up</button>
    </form>
  );
};

export default Signup;

