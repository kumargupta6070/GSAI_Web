import React from 'react';
import { Target, Compass } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { VISION_MISSION } from '../../data/aboutData';
import './VisionMission.css';

export const VisionMission = () => {
  return (
    <section className="section-spacing vision-mission-section bg-secondary-tint">
      <div className="container">
        <SectionTitle
          tag="Purpose &amp; Ambition"
          icon={<Target size={14} />}
          title="Guiding Principles for"
          gradientWord="Sustainable Growth"
          gradientType="orange"
          subtitle="How our vision drives engineering decisions and customer satisfaction."
        />

        <div className="vision-mission-grid">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="vm-card glass-card">
              <div className="vm-icon-bubble">
                <Compass size={28} className="text-cyan" />
              </div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">{VISION_MISSION.vision}</p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <div className="vm-card glass-card">
              <div className="vm-icon-bubble">
                <Target size={28} className="text-orange" />
              </div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">{VISION_MISSION.mission}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
