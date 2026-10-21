import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, PhoneCall, ShieldCheck, Flame, Sparkles } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import './CTASection.css';

export const CTASection = () => {
  return (
    <section className="home-cta-full-section">
      <div className="container">
        <ScrollReveal animation="scale-up" duration={700}>
          <div className="home-cta-box glass-card">
            {/* Ambient Ember Glow Backing */}
            <div className="cta-ambient-glow" />

            <ScrollReveal animation="fade-down" delay={100}>
              <span className="cta-trust-badge">
                <ShieldCheck size={16} className="text-emerald" /> Global Engineering Partner
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={200}>
              <h2 className="cta-heading">
                Ready to Elevate Your <span className="highlight-forge">Component Supply Chain?</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={300}>
              <p className="cta-lead-text">
                Submit your CAD engineering models or 2D technical drawings. Our application team will review design-for-manufacturability and provide an official quotation within 24–48 hours.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={400}>
              <div className="home-cta-btn-group">
                <Link to="/contact">
                  <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                    Request an RFQ / Quote
                  </Button>
                </Link>
                <a href="tel:+911762281144">
                  <Button variant="secondary" size="lg" icon={<PhoneCall size={18} />}>
                    Direct Engineering Line
                  </Button>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
