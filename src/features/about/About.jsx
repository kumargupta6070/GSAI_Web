import React, { useEffect } from 'react';
import CompanyOverview from './components/CompanyOverview/CompanyOverview';
import VisionMission from './components/VisionMission/VisionMission';
import Timeline from './components/Timeline/Timeline';
import TeamLeadership from './components/TeamLeadership/TeamLeadership';
import CertificationsList from './components/CertificationsList/CertificationsList';
import Breadcrumb from '../../common/Breadcrumb/Breadcrumb';
import { setPageTitle } from '../../utils/seoMeta';
import './About.css';

export const About = () => {
  useEffect(() => {
    setPageTitle('About Us', 'Company profile, vision, leadership, and 35+ years of forging evolution at GSA Industries India Pvt Ltd.');
  }, []);

  return (
    <div className="about-feature-page">
      <div className="container about-breadcrumb-container">
        <Breadcrumb items={[{ label: 'About Us' }]} />
      </div>

      <CompanyOverview />
      <VisionMission />
      <Timeline />
      <TeamLeadership />
      <CertificationsList />
    </div>
  );
};

export default About;
