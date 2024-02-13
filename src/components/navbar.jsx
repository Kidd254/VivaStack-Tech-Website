/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import AppLogo from './AppLogo';
import MenuLink from './menulink';
import '../assets/styles/NavBar.css';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <a className="navbar-brand" href="/">
        <AppLogo />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav container d-flex justify-content-around">
          <li className="nav-item">
            <a href="#" className="nav-link dec">
              <i className="bi bi-house-door" />
              <MenuLink url="/home" pageName="Home" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link dec">
              <i className="bi bi-person-fill" />
              <MenuLink url="/about_us" pageName="About Us" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text">
              <i className="bi bi-wrench" />
              <MenuLink url="/services" pageName="Services" />
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link text">
              <i className="bi bi-file-earmark-text" />
              <MenuLink url="/projects" pageName="Projects" />
            </a>
          </li>
          <li className="nav-item">
            <a href="tel:123456789" className="nav-link text">
              <i className="bi bi-phone" />
              <MenuLink url="/contacts" pageName="Contacts" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
