import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import './CTASection.css';

export const CTASection = () => {
  return (
    <section className="home-cta-full-section">
      <div className="container">
        <div className="home-cta-box glass-card">
          <span className="cta-trust-badge">
            <ShieldCheck size={16} className="text-emerald" /> Global Engineering Partner
          </span>
          <h2>Ready to Elevate Your Component Supply Chain?</h2>
          <p>
            Submit your CAD engineering models or 2D technical drawings. Our team will review design-for-manufacturability and provide an official quotation within 24–48 hours.
          </p>
          <div className="home-cta-btn-group">
            <Link to="/contact">
              <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Request an RFQ / Quote
              </Button>
            </Link>
            <a href="tel:+911762281144">
              <Button variant="outline" size="lg" icon={<PhoneCall size={18} />}>
                Direct Engineering Line
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
