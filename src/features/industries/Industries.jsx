import React, { useState, useEffect } from 'react';
import IndustryCard from './components/IndustryCard/IndustryCard';
import IndustryDetail from './components/IndustryDetail/IndustryDetail';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import ScrollReveal from '../../animations/ScrollReveal/ScrollReveal';
import { ALL_INDUSTRIES } from './data/industriesData';
import { setPageTitle } from '../../utils/seoMeta';
import { Compass } from 'lucide-react';
import './Industries.css';

export const Industries = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    setPageTitle('Industries Served', 'Automotive, agriculture, locomotive, and energy sectors supplied by GSA Industries India Pvt Ltd.');
  }, []);

  return (
    <div className="industries-feature-page">
      <div className="container industries-breadcrumb-wrap">
        <Breadcrumb items={[{ label: 'Industries' }]} />
      </div>

      <section className="section-spacing industries-main-section">
        <div className="container">
          <SectionTitle
            tag="Global Market Sectors"
            icon={<Compass size={14} />}
            title="Engineering Integrity Across"
            gradientWord="High-Stress Environments"
            gradientType="primary"
            subtitle="From commercial truck transmissions to heavy agricultural rotavators and locomotive powertrains."
          />

          <div className="industries-cards-container">
            {ALL_INDUSTRIES.map((ind, idx) => (
              <ScrollReveal key={ind.id} animation="fade-up" delay={idx * 80}>
                <IndustryCard
                  industry={ind}
                  onOpenDetail={(item) => setSelectedIndustry(item)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {selectedIndustry && (
        <IndustryDetail
          industry={selectedIndustry}
          isOpen={!!selectedIndustry}
          onClose={() => setSelectedIndustry(null)}
        />
      )}
    </div>
  );
};

export default Industries;
