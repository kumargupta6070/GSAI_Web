import React, { useEffect } from 'react';
import CapabilityCard from './components/CapabilityCard/CapabilityCard';
import ProcessFlow from './components/ProcessFlow/ProcessFlow';
import EquipmentList from './components/EquipmentList/EquipmentList';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { ALL_CAPABILITIES } from './data/capabilitiesData';
import { setPageTitle } from '../../utils/seoMeta';
import { Factory } from 'lucide-react';
import './Capabilities.css';

export const Capabilities = () => {
  useEffect(() => {
    setPageTitle('Manufacturing Capabilities', 'Advanced closed-die press lines, continuous heat treatment, and multi-axis CNC machining at GSA Industries India Pvt Ltd.');
  }, []);

  return (
    <div className="capabilities-feature-page">
      <div className="container capabilities-breadcrumb-wrap">
        <Breadcrumb items={[{ label: 'Capabilities' }]} />
      </div>

      <section className="section-spacing capabilities-top-section">
        <div className="container">
          <SectionTitle
            tag="Infrastructure &amp; Technology"
            icon={<Factory size={14} />}
            title="Integrated Precision"
            gradientWord="Forging &amp; Machining Ecosystem"
            gradientType="primary"
            subtitle="Explore our 150,000+ sq. ft. campus equipped with heavy press lines, CNC cells, and continuous atmosphere heat treatment."
          />

          <div className="capabilities-cards-wrapper">
            {ALL_CAPABILITIES.map((cap, idx) => (
              <CapabilityCard key={cap.id} capability={cap} index={idx} />
            ))}
          </div>
        </div>
      </section>

      <ProcessFlow />
      <EquipmentList />
    </div>
  );
};

export default Capabilities;
