import React from 'react';
import { FileCheck2 } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { QUALITY_PROCESS_STAGES } from '../../data/qualityData';
import './QualityProcess.css';

export const QualityProcess = () => {
  return (
    <section className="section-spacing quality-process-component-section bg-secondary-tint">
      <div className="container">
        <SectionTitle
          tag="Zero Defect Protocol"
          icon={<FileCheck2 size={14} />}
          title="Six-Stage Continuous"
          gradientWord="Inspection Gateway"
          gradientType="orange"
          subtitle="A rigid gatekeeping workflow from raw ingot chemistry to automated coordinate metrology."
        />

        <div className="quality-steps-grid">
          {QUALITY_PROCESS_STAGES.map((stg, idx) => (
            <ScrollReveal key={stg.step} animation="fade-up" delay={idx * 80}>
              <TiltCard maxTilt={8}>
                <div className="quality-stage-node glass-card">
                  <div className="stage-num-badge mono-font">{stg.step}</div>
                  <h3 className="stage-node-title">{stg.title}</h3>
                  <p className="stage-node-desc">{stg.desc}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityProcess;
