import React from 'react';
import { Microscope, CheckCircle2, Scale } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { LAB_EQUIPMENT_DATA } from '../../data/qualityData';
import './LabEquipment.css';

export const LabEquipment = () => {
  return (
    <section className="section-spacing lab-equipment-component-section">
      <div className="container">
        <div className="lab-split-grid">
          <div className="lab-text-col">
            <SectionTitle
              tag="Metrology Infrastructure"
              icon={<Microscope size={14} />}
              title="Climate-Controlled"
              gradientWord="3D Metrology Center"
              gradientType="primary"
              align="left"
              subtitle="Maintained at 20°C ± 1°C to eliminate environmental thermal expansion, ensuring zero dimensional variation."
            />

            <div className="lab-items-stack">
              {LAB_EQUIPMENT_DATA.map((eq, idx) => (
                <div key={idx} className="lab-equipment-item">
                  <CheckCircle2 size={18} className="text-cyan mt-1" />
                  <div>
                    <h4 className="eq-name">{eq.name}</h4>
                    <p className="eq-spec mono-font">{eq.spec}</p>
                    <p className="eq-role">{eq.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lab-media-col">
            <ScrollReveal animation="scale-up">
              <TiltCard maxTilt={6}>
                <div className="lab-img-card glass-card">
                  <img src="/images/products/precision-parts.jpg" alt="Metrology Center" className="lab-img" />
                  <div className="lab-acceptance-chip glass-card">
                    <Scale size={20} className="text-emerald" />
                    <div>
                      <strong>99.98% Acceptance Rate</strong>
                      <span>Validated across 50M+ Delivered Parts</span>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabEquipment;
