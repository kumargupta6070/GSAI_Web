import React, { useEffect } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import StatsSection from './components/StatsSection/StatsSection';
import AboutPreview from './components/AboutPreview/AboutPreview';
import CapabilitiesOverview from './components/CapabilitiesOverview/CapabilitiesOverview';
import ProductsShowcase from './components/ProductsShowcase/ProductsShowcase';
import IndustriesServed from './components/IndustriesServed/IndustriesServed';
import CertificationsBar from './components/CertificationsBar/CertificationsBar';
import CTASection from './components/CTASection/CTASection';
import { setPageTitle } from '../../utils/seoMeta';
import './Home.css';

export const Home = () => {
  useEffect(() => {
    setPageTitle('Home', 'GSA Industries India Pvt Ltd — World-Class Precision Engineering, Hot Forgings, and High-Nickel Alfin Rings.');
  }, []);

  return (
    <div className="home-feature-page">
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <CapabilitiesOverview />
      <ProductsShowcase />
      <IndustriesServed />
      <CertificationsBar />
      <CTASection />
    </div>
  );
};

export default Home;
