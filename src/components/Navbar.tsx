import { Link, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();

  const isHomeActive = location.pathname === '/';
  const isPeopleActive = location.pathname.startsWith('/people');

  return (
    <nav
      data-cy="nav"
      className="navbar is-fixed-top has-shadow"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link
            className={`navbar-item ${isHomeActive ? 'has-background-grey-lighter is-active' : ''}`}
            to="/"
          >
            Home
          </Link>

          <Link
            aria-current="page"
            className={`navbar-item ${isPeopleActive ? 'has-background-grey-lighter is-active' : ''}`}
            to="/people"
          >
            People
          </Link>
        </div>
      </div>
    </nav>
  );
};
