import React, { useState } from 'react';
import './signup.css';
import { createNewUser } from '../../services/signup';

export default function SignUp() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    age: '',
    education: '',
    college: '',
    work: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createNewUser(formData);
    console.log(formData);
  };

  return (
    <div className="register-container">
      <h2>Don't have an account?</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="fullName">Full Name *</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password *</label>
          <input
            type="password"
            id="password"
            name="password"
            required
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            id="age"
            name="age"
            required
            value={formData.age}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="education">Education</label>
          <input
            type="text"
            id="education"
            name="education"
            value={formData.education}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="college">College</label>
          <input
            type="text"
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="work">Work</label>
          <input
            type="text"
            id="work"
            name="work"
            value={formData.work}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-center">
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}
