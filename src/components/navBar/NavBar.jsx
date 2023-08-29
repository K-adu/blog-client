import { Link } from 'react-router-dom';
import '../../App.css';
import '../user/UserDetails.css';
import UserDetails from '../user/UserDetails';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function NavBar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(async () => {
    const userInfoFromStorage = await localStorage.getItem('userInfo');
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
  }, []);
  // let email = null;:
  // if (userInfo.email) {
  //   email = userInfo.email;
  //   email = null;
  // }
  console.log(userInfo);
  async function logout() {
    try {
      await axios.post('http://localhost:4000/auth/logout', '', {
        withCredentials: true,
      });
      localStorage.clear();
      setUserInfo(null);
    } catch (error) {
      // Handle the error (e.g., display an error message to the user)
      console.error('Logout failed:', error);
    }
  }

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="name">
          Bloog
        </Link>
      </div>
      <div className="search-field">
        <input type="text" placeholder="Search..." />
      </div>
      {userInfo && userInfo.email ? ( // Use ternary operator for conditional rendering
        <>
          <div className="user-profile">
            <img
              src="https://via.placeholder.com/50" // Placeholder image for the user profile
              alt="User Profile"
            />
            <UserDetails fullName={userInfo.fullName} email={userInfo.email} />
          </div>
          <div className="auth-buttons">
            <Link to="/create">
              <button>Create New Post</button>
            </Link>
            <Link to="/myblogs">
              <button>My blogs</button>
            </Link>
          </div>{' '}
          <Link to="/" onClick={logout} className="name">
            Logout
          </Link>
        </>
      ) : (
        <div className="auth-buttons">
          <Link to="/login">
            <button>Login</button>
          </Link>
          <Link to="/signup">
            <button>Signup</button>
          </Link>
        </div>
      )}
    </nav>
  );
}
