import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../../data/navigationData';
import './Navbar.css';

export const Navbar = ({ mobile = false, onItemClick }) => {
  const location = useLocation();

  if (mobile) {
    return (
      <nav className="mobile-nav-list" aria-label="Mobile Navigation">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`mobile-nav-link ${isActive ? 'active' : ''}`}
              onClick={onItemClick}
            >
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="desktop-nav-menu" aria-label="Primary Navigation">
      {NAV_ITEMS.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-menu-link ${isActive ? 'active' : ''}`}
          >
            {item.label}
            {isActive && <span className="nav-active-pill" />}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;
