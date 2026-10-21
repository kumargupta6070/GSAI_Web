import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Flame, 
  Truck, 
  Tractor, 
  HardHat, 
  Train, 
  Fuel,
  Award
} from 'lucide-react';
import Button from '../../common/Button';
import ScrollReveal from '../../animations/ScrollReveal';
import TiltCard from '../../animations/TiltCard';
import { INDUSTRIES_DATA } from '../../data/gsaData';
import './IndustriesPage.css';

const INDUSTRY_ICONS = {
  automotive: <Truck size={32} className="text-cyan" />,
  agriculture: <Tractor size={32} className="text-orange" />,
  'heavy-engineering': <HardHat size={32} className="text-amber" />,
  'railways-marine': <Train size={32} className="text-cyan" />,
  'energy-oil-gas': <Fuel size={32} className="text-emerald" />
};

export const IndustriesPage = () => {
  return (
    <div className="industries-page-root">
      {/* Hero */}
      <section className="industries-hero-section">
        <div className="container">
          <div className="industries-hero-content">
            <span className="section-tag">
              <Compass size={14} /> Market Sectors
            </span>
            <h1 className="industries-hero-title">
              Powering <span className="text-gradient">Mission-Critical Sectors</span> Globally
            </h1>
            <p className="industries-hero-lead">
              From heavy-duty diesel truck engines and combine harvesters to subsea flow valves and railway transmissions, GSA components endure where ordinary parts fail.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-spacing industries-content-section">
        <div className="container">
          <div className="industries-cards-stack">
            {INDUSTRIES_DATA.map((ind, idx) => (
              <ScrollReveal key={ind.id} animation="fade-up" delay={idx * 100}>
                <div className="industry-master-card glass-card">
                  <div className="industry-icon-strip">
                    <div className="ind-icon-box">
                      {INDUSTRY_ICONS[ind.id] || <Compass size={32} className="text-cyan" />}
                    </div>
                    <span className="ind-badge-chip">{ind.badge}</span>
                    <span className="ind-stats-chip mono-font">{ind.stats}</span>
                  </div>

                  <div className="industry-main-body">
                    <h2 className="ind-title">{ind.title}</h2>
                    <p className="ind-desc">{ind.description}</p>

                    <div className="ind-components-box">
                      <h4>Typical Critical Components Supplied:</h4>
                      <div className="ind-highlights-tags">
                        {ind.highlights.map((h, i) => (
                          <div key={i} className="ind-tag-pill">
                            <CheckCircle2 size={15} className="text-cyan" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="ind-card-footer">
                      <Link to={`/contact?industry=${encodeURIComponent(ind.title)}`}>
                        <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                          Discuss {ind.title} RFQ
                        </Button>
                      </Link>
                      <Link to="/products">
                        <Button variant="outline" size="sm">
                          Browse Parts for this Sector
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="industries-cta-section">
        <div className="container">
          <div className="ind-cta-card glass-card">
            <h2>Custom Metallurgical Solutions for Specialized Sectors</h2>
            <p>Don't see your specific sector listed? Our engineering team designs custom closed-die dies and forging alloys for unique OEM requirements.</p>
            <Link to="/contact">
              <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Consult with Applications Engineering
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustriesPage;
