import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './CapabilityCard.css';

export const CapabilityCard = ({ capability, index = 0 }) => {
  const isReverse = index % 2 === 1;

  return (
    <ScrollReveal animation="fade-up" delay={index * 120}>
      <div id={capability.id} className={`capability-card-row glass-card ${isReverse ? 'reverse' : ''}`}>
        <div className="cap-card-media-side">
          <TiltCard maxTilt={5}>
            <div className="cap-media-wrap">
              <img src={capability.image} alt={capability.title} className="cap-card-full-img" />
              <span className="cap-card-badge-pill">{capability.capacity}</span>
            </div>
          </TiltCard>
        </div>

        <div className="cap-card-body-side">
          <span className="cap-card-step-tag">Division {index + 1}</span>
          <h3 className="cap-card-main-title">{capability.title}</h3>
          <p className="cap-card-main-desc">{capability.description}</p>

          <div className="cap-card-equipments">
            <h4>Machinery &amp; Technology Highlights:</h4>
            <ul>
              {capability.equipment.map((eq, i) => (
                <li key={i}>
                  <CheckCircle2 size={16} className="text-cyan" />
                  <span>{eq}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="cap-card-action-bar">
            <Link to={`/contact?subject=Facility Inquiry: ${encodeURIComponent(capability.title)}`}>
              <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                Inquire for this Division
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default CapabilityCard;
