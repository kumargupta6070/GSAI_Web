import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  ArrowRight 
} from 'lucide-react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.css';

export const Header = ({ onOpenSearch }) => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      {/* Top Utility Bar */}
      <div className="top-banner-bar">
        <div className="container top-banner-container">
          <div className="top-banner-left">
            <span className="badge-cert">
              <ShieldCheck size={14} /> IATF 16949 &amp; ISO 9001:2015 Certified
            </span>
            <span className="top-banner-divider">|</span>
            <span className="top-banner-text">Global Precision Forging &amp; Alfin Rings</span>
          </div>
          <div className="top-banner-right">
            <a href="tel:+911762281144" className="top-banner-link">
              <PhoneCall size={13} /> +91 1762 281144
            </a>
            <span className="top-banner-divider">|</span>
            <a href="mailto:info@gsainds.com" className="top-banner-link">
              info@gsainds.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Glass Header */}
      <header className={`main-header ${scrolled ? 'header-scrolled' : ''}`}>
        <div className="container header-container">
          <Logo />

          <div className="header-nav-wrapper">
            <Navbar />
          </div>

          <div className="header-actions">
            <button 
              className="action-icon-btn" 
              onClick={onOpenSearch}
              aria-label="Open search"
              title="Search products and capabilities (Ctrl + K)"
            >
              <Search size={18} />
            </button>

            <button
              className="action-icon-btn theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? (
                <Moon size={18} className="theme-icon moon-icon" />
              ) : (
                <Sun size={18} className="theme-icon sun-icon" />
              )}
            </button>

            <div className="header-cta-desktop">
              <Link to="/contact">
                <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                  Request RFQ
                </Button>
              </Link>
            </div>

            <button
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-nav-content">
            <Navbar mobile onItemClick={() => setMobileMenuOpen(false)} />
            <div className="mobile-nav-footer">
              <Link to="/contact" className="mobile-rfq-btn">
                <Button variant="forge" size="md" className="w-full">
                  Request an RFQ
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
