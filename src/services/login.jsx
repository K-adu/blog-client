import axios from 'axios';
export async function loginUser(data) {
  try {
    await axios.post('http://localhost:4000/auth/login', data, {
      withCredentials: true,
    });
    alert('user logged in success');
  } catch (error) {
    if (error.response.status === 406) {
      alert('logged in user failed');
    } else {
      alert('still have to handel this error');
    }
  }
}
