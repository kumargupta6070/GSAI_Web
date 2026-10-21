import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Truck, Tractor, HardHat, Train, Fuel, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { INDUSTRIES_DATA } from '../../../../data/gsaData';
import './IndustriesServed.css';

const ICONS = {
  automotive: <Truck size={26} className="text-cyan" />,
  agriculture: <Tractor size={26} className="text-orange" />,
  'heavy-engineering': <HardHat size={26} className="text-amber" />,
  'railways-marine': <Train size={26} className="text-cyan" />,
  'energy-oil-gas': <Fuel size={26} className="text-emerald" />
};

export const IndustriesServed = () => {
  return (
    <section className="section-spacing home-industries-section">
      <div className="container">
        <SectionTitle
          tag="Market Sectors"
          icon={<Compass size={14} />}
          title="Mission-Critical Reliability for"
          gradientWord="Demanding Sectors"
          gradientType="primary"
          subtitle="Our forgings and Alfin rings are engineered for zero-failure performance across automotive, off-highway, locomotive, and energy infrastructures."
        />

        <div className="home-industries-grid">
          {INDUSTRIES_DATA.map((ind, idx) => (
            <ScrollReveal key={ind.id} animation="fade-up" delay={idx * 80}>
              <div className="home-ind-card glass-card">
                <div className="ind-header-bar">
                  <div className="ind-icon-circle">
                    {ICONS[ind.id] || <Compass size={24} className="text-cyan" />}
                  </div>
                  <span className="ind-badge-small">{ind.badge}</span>
                </div>

                <h3 className="ind-card-title">{ind.title}</h3>
                <p className="ind-card-desc">{ind.description}</p>

                <div className="ind-chips-row">
                  {ind.highlights.slice(0, 3).map((h, i) => (
                    <span key={i} className="ind-chip">
                      <CheckCircle2 size={12} className="text-cyan" /> {h}
                    </span>
                  ))}
                </div>

                <Link to={`/industries#${ind.id}`} className="ind-explore-link">
                  <span>Explore Applications</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-5">
          <Link to="/industries">
            <Button variant="outline" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
              View Detailed Sector Capabilities
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;
