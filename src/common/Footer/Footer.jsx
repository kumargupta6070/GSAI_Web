import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';
import { 
  ShieldCheck, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowRight, 
  Send,
  Award,
  Globe2,
  CheckCircle2,
  Flame
} from 'lucide-react';
import Button from '../Button/Button';
import Logo from '../Logo/Logo';
import { QUICK_LINKS } from '../../data/navigationData';
import { SITE_METADATA } from '../../data/siteMetadata';
import './Footer.css';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { showAlert } = useSnackbar();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showAlert('Please enter a valid email address.', 'warning');
      return;
    }
    showAlert('Subscription confirmed. Thank you.', 'success');
    setEmail('');
  };

  return (
    <footer className="main-footer">
      {/* Pre-footer Industrial Banner */}
      <div className="footer-cta-banner">
        <div className="container">
          <div className="footer-cta-box glass-card">
            <div className="footer-cta-text">
              <span className="badge-cert">
                <Flame size={14} /> Ready to Upgrade Your Supply Chain?
              </span>
              <h3>Need Custom Precision Forgings or Alfin Rings?</h3>
              <p>Connect directly with our engineering &amp; tooling experts for rapid prototyping &amp; high-volume production RFQs.</p>
            </div>
            <div className="footer-cta-actions">
              <Link to="/contact">
                <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Request an RFQ Quote
                </Button>
              </Link>
              <a href="tel:+911762281144">
                <Button variant="outline" size="lg">
                  Speak to Engineering
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="footer-content-section">
        <div className="container footer-grid">
          {/* Col 1: Brand & Certifications */}
          <div className="footer-col brand-col">
            <Logo size="md" />
            <p className="footer-description">
              Pioneering precision hot forging, high-nickel austenitic Alfin rings, and CNC-machined components for global Tier-1 automotive, agricultural, and heavy engineering OEMs since decades.
            </p>
            <div className="footer-cert-badges">
              <div className="cert-chip">
                <ShieldCheck size={16} className="text-emerald" />
                <span>IATF 16949:2016 Certified</span>
              </div>
              <div className="cert-chip">
                <Award size={16} className="text-cyan" />
                <span>ISO 9001:2015 &amp; ISO 14001</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links">
              <li><Link to="/"><ArrowRight size={14} /> Home</Link></li>
              <li><Link to="/about"><ArrowRight size={14} /> Company Profile &amp; Story</Link></li>
              <li><Link to="/products"><ArrowRight size={14} /> Product Engineering Portfolio</Link></li>
              <li><Link to="/capabilities"><ArrowRight size={14} /> Forging &amp; Machining Facilities</Link></li>
              <li><Link to="/industries"><ArrowRight size={14} /> Industry Sectors Served</Link></li>
              <li><Link to="/quality"><ArrowRight size={14} /> Quality &amp; Metrology Lab</Link></li>
              <li><Link to="/contact"><ArrowRight size={14} /> Contact &amp; RFQ Center</Link></li>
            </ul>
          </div>

          {/* Col 3: Core Products & Solutions */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Solutions</h4>
            <ul className="footer-links">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path}>
                    <CheckCircle2 size={14} /> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Corporate Headquarters & Newsletter */}
          <div className="footer-col">
            <h4 className="footer-heading">Manufacturing HQ</h4>
            <div className="footer-contact-details">
              <div className="contact-item">
                <MapPin size={18} className="contact-icon text-orange" />
                <span>{SITE_METADATA.address.plant1}</span>
              </div>
              <div className="contact-item">
                <Phone size={18} className="contact-icon text-cyan" />
                <a href={`tel:${SITE_METADATA.phone}`}>{SITE_METADATA.phone} / {SITE_METADATA.phoneAlt}</a>
              </div>
              <div className="contact-item">
                <Mail size={18} className="contact-icon text-cyan" />
                <a href={`mailto:${SITE_METADATA.email}`}>{SITE_METADATA.email}</a>
              </div>
            </div>

            <div className="footer-newsletter">
              <span className="newsletter-title">Engineering Bulletins</span>
              <p className="newsletter-subtitle">Get metallurgical updates &amp; case studies.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-bar">
        <div className="container footer-bottom-container">
          <p className="copyright-text">
            © {new Date().getFullYear()} GSA Industries India Pvt Ltd. All Rights Reserved.
          </p>
          <div className="footer-bottom-meta">
            <span className="made-in-india">
              <Globe2 size={14} /> Exporting to 20+ Countries Worldwide
            </span>
            <span className="footer-bottom-divider">•</span>
            <span>Engineered with Precision in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
