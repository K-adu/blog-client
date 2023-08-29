import axios from 'axios';

export async function fetchBlogs() {
  const response = await axios.get('http://localhost:4000/blogs/', {
    withCredentials: true,
  });
  return response.data;
}
