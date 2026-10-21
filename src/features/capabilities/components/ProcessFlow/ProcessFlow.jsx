import React from 'react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import { PROCESS_FLOW_STEPS } from '../../data/capabilitiesData';
import { Layers } from 'lucide-react';
import './ProcessFlow.css';

export const ProcessFlow = () => {
  return (
    <section className="section-spacing process-flow-section bg-secondary-tint">
      <div className="container">
        <SectionTitle
          tag="Manufacturing Process Flow"
          icon={<Layers size={14} />}
          title="From Concept to"
          gradientWord="Automotive Tier Assembly"
          gradientType="orange"
          subtitle="Our 6-phase unbroken manufacturing lifecycle ensures high grain integrity and zero defect delivery."
        />

        <div className="process-flow-grid">
          {PROCESS_FLOW_STEPS.map((step, idx) => (
            <ScrollReveal key={step.step} animation="fade-up" delay={idx * 80}>
              <div className="process-step-card glass-card">
                <div className="step-num-pill mono-font">{step.step}</div>
                <h3 className="step-name">{step.title}</h3>
                <p className="step-detail">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFlow;
