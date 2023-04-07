import { Link, Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/movies">about</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
