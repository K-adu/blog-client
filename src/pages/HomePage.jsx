import React, { useEffect, useState, createContext } from 'react';
import DisplayBlogs from '../components/blogs/DisplayBlogs';
import '../App.css';
import { fetchBlogs } from '../services/fetchblogs';

export const BlogContext = createContext({
  blogInfo: [],
  setBlogInfo: () => {},
});

export default function HomePage() {
  const [blogInfo, setBlogInfo] = useState([]);

  useEffect(() => {
    async function fetchAndSetBlogs() {
      try {
        const response = await fetchBlogs();
        if (response) {
          setBlogInfo(response);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    }

    fetchAndSetBlogs();
  }, []);

  return (
    <BlogContext.Provider value={{ blogInfo, setBlogInfo }}>
      <main className="main-content">
        <DisplayBlogs blogs={blogInfo} />
      </main>
    </BlogContext.Provider>
  );
}
