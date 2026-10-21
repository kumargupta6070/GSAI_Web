import React from 'react';
import StatCounter from '../../../../common/StatCounter/StatCounter';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { HOME_STATS } from '../../data/homeData';
import './StatsSection.css';

export const StatsSection = () => {
  return (
    <section className="home-stats-strip-section">
      <div className="container">
        <div className="stats-strip-card glass-card">
          {HOME_STATS.map((stat, idx) => (
            <ScrollReveal key={idx} animation="fade-up" delay={idx * 90} className="stat-strip-col">
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                description={stat.description}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
