import React, { useEffect } from 'react';
import CertificationGrid from './components/CertificationGrid/CertificationGrid';
import LabEquipment from './components/LabEquipment/LabEquipment';
import QualityProcess from './components/QualityProcess/QualityProcess';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import SectionTitle from '../../common/SectionTitle/SectionTitle';
import { setPageTitle } from '../../utils/seoMeta';
import { ShieldCheck } from 'lucide-react';
import './Quality.css';

export const Quality = () => {
  useEffect(() => {
    setPageTitle('Quality Assurance & Lab', 'IATF 16949:2016, ISO 9001, Zeiss 3D CMM metrology, and zero-defect culture at GSA Industries India Pvt Ltd.');
  }, []);

  return (
    <div className="quality-feature-page">
      <div className="container quality-breadcrumb-wrap">
        <Breadcrumb items={[{ label: 'Quality Assurance' }]} />
      </div>

      <section className="section-spacing quality-header-intro">
        <div className="container">
          <SectionTitle
            tag="Zero-Defect Culture"
            icon={<ShieldCheck size={14} />}
            title="World-Class Automotive &amp;"
            gradientWord="Industrial Metrology"
            gradientType="primary"
            subtitle="Quality at GSA is an unbroken chain of precision: from 28-element spectrometry to sub-micron Carl Zeiss 3D CMM scanning."
          />
        </div>
      </section>

      <CertificationGrid />
      <LabEquipment />
      <QualityProcess />
    </div>
  );
};

export default Quality;
