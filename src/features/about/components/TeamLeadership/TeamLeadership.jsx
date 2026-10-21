import React from 'react';
import { Users } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { LEADERSHIP_TEAM } from '../../data/aboutData';
import './TeamLeadership.css';

export const TeamLeadership = () => {
  return (
    <section className="section-spacing leadership-component-section bg-secondary-tint">
      <div className="container">
        <SectionTitle
          tag="Executive Leadership"
          icon={<Users size={14} />}
          title="Guided by Industry"
          gradientWord="Veterans &amp; Innovators"
          gradientType="orange"
          subtitle="Our engineering leadership combines deep metallurgical experience with agile supply chain management."
        />

        <div className="leadership-cards-grid">
          {LEADERSHIP_TEAM.map((member, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
              <TiltCard maxTilt={8}>
                <div className="leader-card glass-card">
                  <div className="leader-avatar-circle">
                    <Users size={32} className="text-cyan" />
                  </div>
                  <h3 className="leader-name">{member.name}</h3>
                  <span className="leader-role-chip">{member.role}</span>
                  <p className="leader-bio">{member.bio}</p>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamLeadership;
