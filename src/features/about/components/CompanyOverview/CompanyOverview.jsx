import React from 'react';
import { Factory, CheckCircle2 } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './CompanyOverview.css';

export const CompanyOverview = () => {
  return (
    <section className="section-spacing company-overview-section">
      <div className="container">
        <div className="company-overview-grid">
          <div className="overview-media">
            <ScrollReveal animation="scale-up">
              <TiltCard maxTilt={6}>
                <div className="overview-image-box glass-card">
                  <img src="/images/capabilities/cnc-machining.jpg" alt="GSA Manufacturing Campus" className="overview-img" />
                  <div className="overview-overlay-chip glass-card">
                    <Factory size={20} className="text-cyan" />
                    <div>
                      <strong>150,000+ Sq. Ft.</strong>
                      <span>Dappar, Punjab Manufacturing Plant</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>

          <div className="overview-content">
            <ScrollReveal animation="fade-up">
              <SectionTitle
                tag="Company Overview"
                icon={<Factory size={14} />}
                title="Three Decades of"
                gradientWord="Precision Metallurgy"
                gradientType="primary"
                align="left"
              />

              <p className="overview-lead-text">
                GSA Industries India Pvt Ltd operates from state-of-the-art manufacturing facilities in Punjab, India. Founded in 1988, our evolution from a specialized regional machine shop to an international Tier-1 supplier demonstrates our enduring commitment to precision engineering.
              </p>
              <p className="overview-body-text">
                Today, GSA operates comprehensive facilities including in-house CAD/CAM tool rooms, high-tonnage closed-die forging presses (1000T &amp; 2500T), automated continuous atmosphere heat treatment lines, multi-axis Japanese CNC turning and milling centers, and a climate-controlled Zeiss 3D CMM metrology laboratory.
              </p>

              <div className="overview-key-points">
                <div className="point-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Integrated manufacturing eliminates third-party risks</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>Certified to IATF 16949:2016, ISO 9001:2015 &amp; ISO 14001</span>
                </div>
                <div className="point-item">
                  <CheckCircle2 size={18} className="text-cyan" />
                  <span>2,500 MT/month forging throughput with induction billet heating</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview;
