import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { HOME_CERTIFICATIONS } from '../../data/homeData';
import './CertificationsBar.css';

export const CertificationsBar = () => {
  return (
    <section className="cert-bar-section">
      <div className="container">
        <ScrollReveal animation="fade-up" duration={600}>
          <div className="cert-bar-wrapper glass-card">
            <div className="cert-bar-badge">
              <ShieldCheck size={20} className="text-emerald" />
              <span>Accreditations</span>
            </div>
            <div className="cert-bar-items">
              {HOME_CERTIFICATIONS.map((cert, idx) => (
                <div key={idx} className="cert-pill-item">
                  <div className="cert-icon-circle">
                    <Award size={16} className="text-cyan" />
                  </div>
                  <div>
                    <strong>{cert.name}</strong>
                    <span>{cert.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CertificationsBar;
