import React from 'react';
import { ShieldCheck, Award } from 'lucide-react';
import { HOME_CERTIFICATIONS } from '../../data/homeData';
import './CertificationsBar.css';

export const CertificationsBar = () => {
  return (
    <section className="cert-bar-section">
      <div className="container">
        <div className="cert-bar-wrapper glass-card">
          <div className="cert-bar-badge">
            <ShieldCheck size={20} className="text-emerald" />
            <span>Accreditations</span>
          </div>
          <div className="cert-bar-items">
            {HOME_CERTIFICATIONS.map((cert, idx) => (
              <div key={idx} className="cert-pill-item">
                <Award size={15} className="text-cyan" />
                <div>
                  <strong>{cert.name}</strong>
                  <span>{cert.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsBar;
