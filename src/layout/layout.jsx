import { Outlet } from 'react-router-dom';
import NavBar from '../components/navBar/NavBar';

export default function Layout() {
  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  );
}
