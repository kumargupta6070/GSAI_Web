import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './AboutPreview.css';

export const AboutPreview = () => {
  return (
    <section className="section-spacing home-about-preview-section">
      <div className="container">
        <div className="about-preview-grid">
          <div className="preview-media-col">
            <ScrollReveal animation="scale-up">
              <TiltCard maxTilt={6}>
                <div className="preview-img-card glass-card">
                  <img 
                    src="/images/capabilities/cnc-machining.jpg" 
                    alt="GSA CNC Machining Plant" 
                    className="preview-img"
                  />
                  <div className="preview-stat-overlay glass-card">
                    <Factory size={22} className="text-cyan" />
                    <div>
                      <strong>150,000+ Sq. Ft.</strong>
                      <span>Fully Integrated Punjab Campus</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          <div className="preview-text-col">
            <ScrollReveal animation="fade-up">
              <SectionTitle
                tag="About GSA Industries"
                icon={<Factory size={14} />}
                title="Decades of Uncompromised"
                gradientWord="Precision Metallurgy"
                gradientType="primary"
                align="left"
              />

              <p className="preview-lead-p">
                Established in 1988, GSA Industries India Pvt Ltd has established itself as an authoritative Tier-1 supplier of critical powertrain and chassis components for automotive and heavy agricultural leaders worldwide.
              </p>
              <p className="preview-sub-p">
                We control the entire manufacturing lifecycle under one roof: from in-house CAD/CAM tooling and DEFORM 3D forging simulation, through closed-die press lines and continuous SCADA-monitored heat treatment, to multi-axis CNC finishing and Zeiss CMM validation.
              </p>

              <div className="preview-bullets-list">
                <div className="preview-bullet-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Sub-micron machining tolerances with in-process Renishaw probes</span>
                </div>
                <div className="preview-bullet-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Proprietary high-nickel centrifugal casting for Alfin insert rings</span>
                </div>
                <div className="preview-bullet-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Full PPAP Level 3, ISIR, Gage R&amp;R, and IMDS documentation</span>
                </div>
              </div>

              <div className="preview-cta-row">
                <Link to="/about">
                  <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    Discover Our Story &amp; Heritage
                  </Button>
                </Link>
                <Link to="/capabilities">
                  <Button variant="outline" size="md">
                    Explore Plant Capabilities
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
