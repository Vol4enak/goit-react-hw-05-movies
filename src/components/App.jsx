import Home from 'pages/Home';
import { Link, Route, Routes } from 'react-router-dom';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about</Link>
        </li>
      </ul>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<div> list about </div>} />
      </Routes>
    </div>
  );
};
