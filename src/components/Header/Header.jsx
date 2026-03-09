import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className={`top-bar ${isSticky ? 'hide' : ''}`}>
        <div className="container d-flex justify-content-end gap-4">
          <NavLink className="nav-link" to="/activate-your-sim">
           Activate Your SIM
          </NavLink>
          <NavLink className="nav-link" to="/top-up">
           Top Up
          </NavLink>
          <NavLink className="nav-link" to="/switch-and-save">
           Switch & Save
          </NavLink>
          <NavLink className="nav-link" to="/contact">
           Contact Us
          </NavLink>
          <NavLink className="nav-link" to="/support">
           Support
          </NavLink>
          <a href="#">International Calls</a>
        </div>
      </div>

      {/* Main Header */}
      <nav className={`navbar navbar-expand-lg main-header ${isSticky ? 'sticky' : ''}`}>
        <div className="container">
          {/* Logo */}
          <a className="navbar-brand" href="/">
            <img src="/images/logo.png" alt="Zoiko" height="50" />
          </a>

          {/* Menu */}
         <ul className="navbar-nav mx-auto gap-4 align-items-center">
  <li className="nav-item">
    <NavLink className="nav-link" to="/plans">
      Zoiko Plans
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/business-deals">
      Business Deals
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/devices">
      Devices
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/animals-music">
      Animals & Music
    </NavLink>
  </li>

  <li className="nav-item">
    <NavLink className="nav-link" to="/about-us">
      About Us
    </NavLink>
  </li>
</ul>
          {/* Right icons */}
          <div className="d-flex align-items-center gap-3">
            <i className="bi bi-search"></i>
            <i className="bi bi-cart"></i>
            <button className="btn btn-login"><NavLink  to="/login">
           Login
          </NavLink></button>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent jump when header becomes fixed */}
      {isSticky && <div className="header-spacer"></div>}
    </>
  );
}

export default Header;