import React from 'react';
import { ShieldCheck, Download } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { useSnackbar } from '../../../../context/SnackbarContext';
import { QUALITY_CERTS } from '../../data/qualityData';
import './CertificationGrid.css';

export const CertificationGrid = () => {
  const { showAlert } = useSnackbar();

  const handleDownloadCert = (certName) => {
    showAlert(`Downloading accredited certificate for ${certName} (PDF)...`, 'success');
  };

  return (
    <section className="section-spacing cert-grid-component-section">
      <div className="container">
        <SectionTitle
          tag="International Accreditations"
          icon={<ShieldCheck size={14} />}
          title="Certified Automotive &amp;"
          gradientWord="Industrial Quality Systems"
          gradientType="primary"
          subtitle="GSA Industries complies with the world's most stringent quality protocols, audited and approved by global registrars."
        />

        <div className="certs-matrix-grid">
          {QUALITY_CERTS.map((cert, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <TiltCard maxTilt={8}>
                <div className="cert-tile-card glass-card">
                  <div className="cert-tile-header">
                    <div className="cert-badge-frame">
                      <ShieldCheck size={28} className="text-cyan" />
                    </div>
                    <span className="cert-pill-status">IATF Approved</span>
                  </div>

                  <h3 className="cert-tile-name">{cert.name}</h3>
                  <h4 className="cert-tile-sub">{cert.title}</h4>
                  <p className="cert-tile-desc">{cert.description}</p>

                  <div className="cert-tile-action">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Download size={14} />}
                      onClick={() => handleDownloadCert(cert.name)}
                    >
                      Download Certificate (PDF)
                    </Button>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationGrid;
