import React, { useState } from 'react';
import './createblog.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function CreateBlog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });

  const navigate = useNavigate(); // Access to the history object for navigation

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'http://localhost:4000/blogs/create',
        formData,
        {
          withCredentials: true,
        }
      );

      if (response.status === 201) {
        alert('Blog has been added successfully!');
        navigate('/'); // Redirect to the home page
      } else {
        alert('Blog creation failed. Please try again.');
      }
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Blog creation failed. Please try again.');
    }
  };

  return (
    <div className="container">
      <h2>Create a New Blog Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleInputChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
