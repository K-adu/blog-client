import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './layout/layout';
import HomePage from './pages/HomePage';
import SignUp from './pages/signupPage/Signup';
import Login from './pages/loginPage/LoginPage';
import { UserContextProvider } from './components/context/UserContext';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/create" element={<SignUp />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
