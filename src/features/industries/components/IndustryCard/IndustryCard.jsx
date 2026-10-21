import React from 'react';
import { Link } from 'react-router-dom';
import { Truck, Tractor, HardHat, Train, Fuel, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './IndustryCard.css';

const ICONS = {
  automotive: <Truck size={30} className="text-cyan" />,
  agriculture: <Tractor size={30} className="text-orange" />,
  'heavy-engineering': <HardHat size={30} className="text-amber" />,
  'railways-marine': <Train size={30} className="text-cyan" />,
  'energy-oil-gas': <Fuel size={30} className="text-emerald" />
};

export const IndustryCard = ({ industry, onOpenDetail }) => {
  return (
    <TiltCard maxTilt={6}>
      <div id={industry.id} className="ind-module-card glass-card">
      <div className="ind-card-top-header">
        <div className="ind-card-icon-frame">
          {ICONS[industry.id] || <Truck size={28} className="text-cyan" />}
        </div>
        <span className="ind-card-tag">{industry.badge}</span>
        <span className="ind-card-stat-pill mono-font">{industry.stats}</span>
      </div>

      <h3 className="ind-card-heading">{industry.title}</h3>
      <p className="ind-card-summary">{industry.description}</p>

      <div className="ind-card-components-matrix">
        <h4>Typical Critical Components Supplied:</h4>
        <div className="ind-pills-wrap">
          {industry.highlights.map((h, i) => (
            <span key={i} className="ind-comp-pill">
              <CheckCircle2 size={13} className="text-cyan" /> {h}
            </span>
          ))}
        </div>
      </div>

      <div className="ind-card-bottom-actions">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onOpenDetail(industry)}
        >
          View Technical Scope
        </Button>
        <Link to={`/contact?industry=${encodeURIComponent(industry.title)}`}>
          <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
            Sector RFQ
          </Button>
        </Link>
      </div>
    </div>
  </TiltCard>
  );
};

export default IndustryCard;
