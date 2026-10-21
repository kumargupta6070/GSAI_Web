import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { CAPABILITIES_DATA } from '../../../../data/gsaData';
import './CapabilitiesOverview.css';

export const CapabilitiesOverview = () => {
  return (
    <section className="section-spacing home-cap-overview-section">
      <div className="container">
        <SectionTitle
          tag="Integrated Manufacturing"
          icon={<Factory size={14} />}
          title="From Raw Billet to"
          gradientWord="Finished Assembly"
          gradientType="primary"
          subtitle="Discover GSA's vertically integrated infrastructure: in-house CAD/CAM tooling, closed-die presses, continuous heat treatment, and multi-axis CNC machining."
        />

        <div className="home-cap-grid">
          {CAPABILITIES_DATA.slice(0, 4).map((cap, idx) => (
            <ScrollReveal key={cap.id} animation="fade-up" delay={idx * 110}>
              <TiltCard maxTilt={6}>
                <div className="home-cap-card glass-card">
                  <div className="cap-card-media">
                    <img src={cap.image} alt={cap.title} className="cap-card-img" />
                    <div className="cap-capacity-tag">{cap.capacity}</div>
                  </div>
                  <div className="cap-card-content">
                    <h3 className="cap-card-title">{cap.title}</h3>
                    <p className="cap-card-desc">{cap.description}</p>
                    <ul className="cap-card-eq-list">
                      {cap.equipment.slice(0, 3).map((eq, i) => (
                        <li key={i}>
                          <CheckCircle2 size={15} className="text-cyan" />
                          <span>{eq}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={`/capabilities#${cap.id}`} className="cap-card-link">
                      <span>View Division Details</span>
                      <ArrowRight size={15} />
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/capabilities">
            <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              View All Manufacturing Capabilities &amp; Fleet
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesOverview;
