import React from 'react';
import { Award, Flame, Globe2, ShieldCheck } from 'lucide-react';
import StatCounter from '../../../../common/StatCounter/StatCounter';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { HOME_STATS } from '../../data/homeData';
import './StatsSection.css';

const ICONS = {
  award: <Award size={22} className="text-orange" />,
  flame: <Flame size={22} className="text-amber" />,
  globe: <Globe2 size={22} className="text-cyan" />,
  shield: <ShieldCheck size={22} className="text-emerald" />
};

export const StatsSection = () => {
  return (
    <section className="home-stats-strip-section">
      <div className="container">
        <TiltCard maxTilt={4}>
          <div className="stats-strip-card glass-card">
            {HOME_STATS.map((stat, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100} className="stat-strip-col">
                <div className="stat-icon-wrapper">
                  {ICONS[stat.iconType] || <Award size={22} className="text-orange" />}
                </div>
                <StatCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  label={stat.label}
                  description={stat.description}
                />
              </ScrollReveal>
            ))}
          </div>
        </TiltCard>
      </div>
    </section>
  );
};

export default StatsSection;
