// SignUp.js
import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../signupPage/signup.css';
import { loginUser } from '../../services/login';
import { UserContext } from '../../components/context/UserContext';
import axios from 'axios';
export default function Login() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
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
    try {
      await loginUser(formData);
      const response = await axios.get('http://localhost:4000/user/profile', {
        withCredentials: true,
      });
      setUserInfo(response.data); // Update userInfo with the data from the API
      console.log(response.data);

      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="register-container">
      <h2>LOGIN</h2>
      <form className="register-form" onSubmit={handleSubmit}>
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

        <div className="form-group text-center">
          <button type="submit">signin</button>
        </div>
      </form>
    </div>
  );
}
