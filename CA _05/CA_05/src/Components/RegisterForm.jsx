// RegisterForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

const RegisterForm = ({ onRegister }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
    // Reset error for the changed field
    setFormErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform validation here
    const errors = validateForm();
    setFormErrors(errors);
    
    if (Object.values(errors).every(error => error === '')) {
      onRegister(formData);
    } else {
      alert('Please fill in the form correctly.');
    }
  };

  const validateForm = () => {
    const errors = {
      name: '',
      email: '',
      password: '',
      repeatPassword: '',
    };

    // Name validation
    if (formData.name.length < 3 || formData.name.length > 30) {
      errors.name = 'Name should be between 3 and 30 characters.';
    }

    // Email validation
    if (!formData.email.includes('@')) {
      errors.email = 'Invalid email address.';
    }

    // Password validation
    if (formData.password.length < 10 || !/[!@#$%^&*(),.?":{}|<>]/.test(formData.password)) {
      errors.password = 'Password should be at least 10 characters long with at least one special character.';
    }

    // Repeat Password validation
    if (formData.repeatPassword !== formData.password) {
      errors.repeatPassword = 'Passwords do not match.';
    }

    return errors;
  };

  return (
    <div id="register-form-container">
      <div className="register-form">
        <h2>Register Form</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            <span>{formErrors.name}</span>
          </label>
          <br />
          <label>
            Email:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
            <span>{formErrors.email}</span>
          </label>
          <br />
          <label>
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} />
            <span>{formErrors.password}</span>
          </label>
          <br />
          <label>
            Repeat Password:
            <input type="password" name="repeatPassword" value={formData.repeatPassword} onChange={handleChange} />
            <span>{formErrors.repeatPassword}</span>
          </label>
          <br />
          <button type="submit" disabled={!Object.values(formErrors).every(error => error === '')}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
