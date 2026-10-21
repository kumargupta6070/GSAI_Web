import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { 
  Sun, 
  Moon, 
  Search, 
  Menu, 
  X, 
  PhoneCall, 
  ShieldCheck, 
  ArrowRight,
  Flame
} from 'lucide-react';
import Button from './Button';
import './Header.css';

const NAV_ITEMS = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Capabilities', path: '/capabilities' },
  { label: 'Industries', path: '/industries' },
  { label: 'Quality', path: '/quality' },
  { label: 'Contact', path: '/contact' }
];

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

  // Close mobile menu on route change
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
              <ShieldCheck size={14} /> IATF 16949 & ISO 9001:2015 Certified
            </span>
            <span className="top-banner-divider">|</span>
            <span className="top-banner-text">Global Precision Forging & Machining Excellence</span>
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
          {/* Logo */}
          <Link to="/" className="brand-logo" aria-label="GSA Industries Home">
            <div className="logo-symbol">
              <span className="logo-letter">GSA</span>
              <span className="logo-spark"><Flame size={12} /></span>
            </div>
            <div className="logo-text-group">
              <span className="logo-title">GSA INDUSTRIES</span>
              <span className="logo-subtitle">INDIA PVT LTD</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" aria-label="Primary Navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link ${isActive ? 'active' : ''}`}
                >
                  {item.label}
                  {isActive && <span className="nav-active-pill" />}
                </Link>
              );
            })}
          </nav>

          {/* Action Buttons: Search, Theme Toggle, RFQ CTA */}
          <div className="header-actions">
            {/* Search Trigger */}
            <button 
              className="action-icon-btn" 
              onClick={onOpenSearch}
              aria-label="Open search"
              title="Search products and capabilities (Ctrl + K)"
            >
              <Search size={18} />
            </button>

            {/* Theme Toggle */}
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

            {/* Quote CTA Button */}
            <div className="header-cta-desktop">
              <Link to="/contact">
                <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                  Request RFQ
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Trigger */}
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
            <div className="mobile-nav-links">
              {NAV_ITEMS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`mobile-nav-item ${isActive ? 'active' : ''}`}
                  >
                    <span>{item.label}</span>
                    <ArrowRight size={16} className="mobile-nav-arrow" />
                  </Link>
                );
              })}
            </div>

            <div className="mobile-nav-footer">
              <Link to="/contact" className="mobile-rfq-btn">
                <Button variant="forge" size="md" className="w-full">
                  Request a Quote
                </Button>
              </Link>
              <div className="mobile-contact-info">
                <p>📍 Dappar, Derabassi, Punjab, India</p>
                <p>📞 +91 1762 281144</p>
                <p>✉️ info@gsainds.com</p>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
