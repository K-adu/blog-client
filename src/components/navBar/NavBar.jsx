import { Link } from 'react-router-dom';
import '../../App.css';
import '../user/UserDetails.css';
import UserDetails from '../user/UserDetails';
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { UserContext } from '../context/UserContext';

export default function NavBar() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    const userInfoFromStorage = localStorage.getItem('userInfo');
    if (userInfoFromStorage) {
      setUserInfo(JSON.parse(userInfoFromStorage));
    }
  }, []);

  const email = userInfo.email;
  console.log(userInfo);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="navbar">
          MyBlog
        </Link>
      </div>
      <div className="search-field">
        <input type="text" placeholder="Search..." />
      </div>
      {email ? ( // Use ternary operator for conditional rendering
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
          </div>
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
