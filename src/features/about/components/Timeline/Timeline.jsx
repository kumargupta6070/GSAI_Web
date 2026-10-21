import React from 'react';
import { Clock } from 'lucide-react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { ABOUT_TIMELINE } from '../../data/aboutData';
import './Timeline.css';

export const Timeline = () => {
  return (
    <section className="section-spacing timeline-component-section">
      <div className="container">
        <SectionTitle
          tag="The Evolution"
          icon={<Clock size={14} />}
          title="35+ Years of"
          gradientWord="Technological Milestones"
          gradientType="primary"
          subtitle="How continuous reinvestment in high-end European &amp; Japanese machinery transformed GSA into an engineering leader."
        />

        <div className="timeline-spine-track">
          {ABOUT_TIMELINE.map((event, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
              <div className="timeline-node-row">
                <div className="timeline-year-badge">
                  <span className="mono-font">{event.year}</span>
                </div>
                <div className="timeline-card-box glass-card">
                  <h3 className="timeline-node-title">{event.title}</h3>
                  <p className="timeline-node-desc">{event.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
