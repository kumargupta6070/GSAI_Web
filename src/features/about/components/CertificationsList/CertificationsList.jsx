import React from 'react';
import { Award, ShieldCheck, Download } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { useSnackbar } from '../../../../context/SnackbarContext';
import { QUALITY_STANDARDS } from '../../../../data/gsaData';
import './CertificationsList.css';

export const CertificationsList = () => {
  const { showAlert } = useSnackbar();

  const handleDownload = (certName) => {
    showAlert(`Downloading accredited certificate for ${certName} (PDF)...`, 'success');
  };

  return (
    <section className="section-spacing certifications-list-section">
      <div className="container">
        <SectionTitle
          tag="Global Standards"
          icon={<ShieldCheck size={14} />}
          title="Certified Under Rigorous"
          gradientWord="International Accreditations"
          gradientType="primary"
          subtitle="GSA Industries adheres to zero-defect protocols audited by global registrar bodies."
        />

        <div className="cert-list-grid">
          {QUALITY_STANDARDS.map((cert, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 90}>
              <div className="cert-list-card glass-card">
                <div className="cert-list-top">
                  <div className="cert-icon-frame">
                    <Award size={24} className="text-cyan" />
                  </div>
                  <span className="cert-chip-badge">{cert.name}</span>
                </div>
                <h3 className="cert-title-heading">{cert.title}</h3>
                <p className="cert-desc-copy">{cert.description}</p>
                <div className="cert-btn-wrap">
                  <Button
                    variant="outline"
                    size="sm"
                    icon={<Download size={14} />}
                    onClick={() => handleDownload(cert.name)}
                  >
                    Download Certificate
                  </Button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsList;
