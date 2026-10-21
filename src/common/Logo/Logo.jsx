import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';
import './Logo.css';

export const Logo = ({ size = 'md', className = '' }) => {
  return (
    <Link to="/" className={`brand-logo brand-logo-${size} ${className}`} aria-label="GSA Industries Home">
      <div className="logo-symbol">
        <span className="logo-letter">GSA</span>
        <span className="logo-spark"><Flame size={12} /></span>
      </div>
      <div className="logo-text-group">
        <span className="logo-title">GSA INDUSTRIES</span>
        <span className="logo-subtitle">INDIA PVT LTD</span>
      </div>
    </Link>
  );
};

export default Logo;
