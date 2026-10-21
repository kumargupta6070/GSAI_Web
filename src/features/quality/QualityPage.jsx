import React from 'react';
import { Link } from 'react-router-dom';
import { useSnackbar } from '../../context/SnackbarContext';
import { 
  ShieldCheck, 
  Award, 
  CheckCircle2, 
  ArrowRight, 
  Download, 
  Eye, 
  FileCheck2, 
  Microscope, 
  Layers,
  Scale
} from 'lucide-react';
import Button from '../../common/Button';
import ScrollReveal from '../../animations/ScrollReveal';
import TiltCard from '../../animations/TiltCard';
import { QUALITY_STANDARDS } from '../../data/gsaData';
import './QualityPage.css';

const QUALITY_STAGES = [
  {
    step: '01',
    title: 'Raw Material Chemical & Spectrometry Verification',
    desc: 'Every incoming heat/batch of steel billets and pig iron undergoes 28-element chemical composition verification on our Thermo Optical Emission Spectrometer against mill test certificates.'
  },
  {
    step: '02',
    title: 'Infrared Pyrometer Controlled Induction Heating',
    desc: 'Automatic optical sorting gates instantly reject any billet that deviates by ±15°C from the forging temperature window, preventing overheating and decarburization.'
  },
  {
    step: '03',
    title: 'First-Piece & Hourly Grain Flow Forging Audit',
    desc: 'Micro-etched metallurgical macro-examination verifies continuous grain flow line integrity along high-stress fillets and absence of internal folds or cold shuts.'
  },
  {
    step: '04',
    title: 'Heat Treatment Hardness & Microstructure Survey',
    desc: 'Automated Rockwell and Vickers microhardness profiling ensures uniform martensitic/bainitic conversion with zero retained austenite in case-carburized parts.'
  },
  {
    step: '05',
    title: '100% Ultrasonic Bond Testing (Alfin Rings)',
    desc: 'Centrifugally cast Alfin insert rings pass through high-frequency ultrasonic transducers to verify 100% sound metallurgical bonding capability.'
  },
  {
    step: '06',
    title: 'Carl Zeiss CNC 3D CMM Final Metrology',
    desc: 'Sub-micron dimensional verification, true position, perpendicularity, concentricity, and profile accuracy documented in automated ISIR reports.'
  }
];

export const QualityPage = () => {
  const { showAlert } = useSnackbar();

  const handleDownloadCert = (certName) => {
    showAlert(`Downloading certified copy of ${certName} (PDF)...`, 'success');
  };

  return (
    <div className="quality-page-root">
      {/* Hero */}
      <section className="quality-hero-section">
        <div className="container">
          <div className="quality-hero-content">
            <span className="section-tag">
              <ShieldCheck size={14} /> Quality Assurance &amp; Metrology
            </span>
            <h1 className="quality-hero-title">
              IATF 16949 Certified <span className="text-gradient">Zero-Defect Culture</span>
            </h1>
            <p className="quality-hero-lead">
              Quality at GSA Industries is not an inspection department — it is an engineered discipline embedded into every furnace, press, tool, and CNC machine.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Showcase */}
      <section className="section-spacing certifications-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Award size={14} /> International Registrations
            </span>
            <h2 className="section-title">
              Automotive &amp; Industrial <span className="text-gradient">Accreditations</span>
            </h2>
            <p className="section-subtitle">
              Certified by leading global registrars, qualifying us as an approved Tier-1 OEM vendor.
            </p>
          </div>

          <div className="cert-cards-grid">
            {QUALITY_STANDARDS.map((cert, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <TiltCard maxTilt={8}>
                  <div className="cert-feature-card glass-card">
                    <div className="cert-top-bar">
                      <div className="cert-seal-badge">
                        <ShieldCheck size={28} className="text-cyan" />
                      </div>
                      <span className="cert-valid-tag">IATF Approved</span>
                    </div>

                    <h3 className="cert-name-text">{cert.name}</h3>
                    <h4 className="cert-title-sub">{cert.title}</h4>
                    <p className="cert-desc-text">{cert.description}</p>

                    <div className="cert-actions-bar">
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

      {/* Step-by-Step QA Process */}
      <section className="section-spacing qa-process-section bg-secondary-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <FileCheck2 size={14} /> Six-Stage Inspection Protocol
            </span>
            <h2 className="section-title">
              How We Guarantee <span className="text-gradient-orange">Sub-10 PPM Performance</span>
            </h2>
            <p className="section-subtitle">
              A rigid gatekeeping process from raw billet acceptance to finished component shipment.
            </p>
          </div>

          <div className="qa-stages-grid">
            {QUALITY_STAGES.map((stg, idx) => (
              <ScrollReveal key={stg.step} animation="fade-up" delay={idx * 80}>
                <div className="qa-stage-card glass-card">
                  <div className="stage-step-bubble mono-font">{stg.step}</div>
                  <h3 className="stage-title">{stg.title}</h3>
                  <p className="stage-desc">{stg.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Metrology Laboratory Highlights */}
      <section className="section-spacing metrology-section">
        <div className="container">
          <div className="metrology-grid">
            <div className="metrology-text">
              <span className="section-tag">
                <Microscope size={14} /> Climate-Controlled Laboratory
              </span>
              <h2>Carl Zeiss CNC 3D CMM &amp; Spectrometry Center</h2>
              <p>
                Operating in a temperature and humidity-stabilized environment (20°C ± 1°C), our metrology lab eliminates thermal expansion measurement errors.
              </p>
              <ul className="metrology-features-list">
                <li>
                  <CheckCircle2 size={18} className="text-cyan" />
                  <div>
                    <strong>Carl Zeiss Contura 3D CMM</strong>
                    <p>Volumetric scanning accuracy of 1.5 + L/350 µm with VAST continuous tactile probing</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-cyan" />
                  <div>
                    <strong>Thermo Optical Emission Spectrometer</strong>
                    <p>28-channel element analysis ensuring strict chemistry for Ni-Resist &amp; alloy steels</p>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-cyan" />
                  <div>
                    <strong>Taylor Hobson Surface Roughness &amp; Contourometer</strong>
                    <p>Evaluates sub-micron Ra, Rz, and complex groove profiles with digital tracer</p>
                  </div>
                </li>
              </ul>

              <div className="mt-4">
                <Link to="/contact?subject=Quality Lab Audit Request">
                  <Button variant="forge" size="md" icon={<ArrowRight size={16} />} iconPosition="right">
                    Request Quality Lab Audit Dossier
                  </Button>
                </Link>
              </div>
            </div>

            <div className="metrology-media">
              <TiltCard maxTilt={6}>
                <div className="metrology-img-card glass-card">
                  <img 
                    src="/images/precision_automotive_parts_1792597084158.jpg" 
                    alt="GSA Metrology and Quality Inspection" 
                    className="metrology-img" 
                  />
                  <div className="metrology-stat-chip glass-card">
                    <Scale size={20} className="text-emerald" />
                    <div>
                      <strong>99.98% Acceptance Rate</strong>
                      <span>Proven across 50M+ Delivered Parts</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="quality-cta-section">
        <div className="container">
          <div className="quality-cta-box glass-card">
            <h2>Need a Specific Quality PPAP or Material Test Report?</h2>
            <p>Our quality engineering team provides sample inspection reports, Gage R&amp;R, and full APQP documentation upon request.</p>
            <Link to="/contact">
              <Button variant="primary" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Connect with Quality Engineering
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default QualityPage;
