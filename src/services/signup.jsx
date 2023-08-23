import axios from 'axios';
export async function createNewUser(data) {
  try {
    await axios.post('http://localhost:4000/auth/signin', data);
    alert('Signup Successful');
  } catch (error) {
    if (error.response.status === 406) {
      alert('Email already exist');
    } else {
      alert('Please enter valid information');
    }
  }
}
