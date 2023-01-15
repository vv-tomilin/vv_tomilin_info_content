import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      {/* <div className="header-link bold mr-40">
        <Link className="header-link bold" to="/">
          Резюме
        </Link>
      </div> */}
      <div className="header-link bold ml-40">
        <Link className="header-link bold" to="/portfolio">
          Портфолио
        </Link>
      </div>
    </header>
  );
}

export default Header;
