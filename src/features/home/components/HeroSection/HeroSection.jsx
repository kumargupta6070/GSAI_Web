import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight, Layers, Flame, Cpu, Globe2, Award } from 'lucide-react';
import Button from '../../../../common/Button/Button';
import ParticleEmber from '../../../../animations/ParticleEmber/ParticleEmber';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import './HeroSection.css';

export const HeroSection = () => {
  return (
    <section className="home-hero-section">
      <ParticleEmber />
      <div className="home-hero-overlay" />

      <div className="container home-hero-container">
        <div className="home-hero-content">
          <ScrollReveal animation="fade-up" delay={100}>
            <div className="home-hero-badge">
              <span className="live-dot-wrapper">
                <span className="live-dot" />
                <span className="live-dot-ring" />
              </span>
              <span className="badge-txt">IATF 16949:2016 Certified World-Class Precision</span>
              <span className="badge-sub">Global OEM Tier Supplier</span>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={200}>
            <h1 className="home-hero-title">
              High-Precision <span className="text-gradient">Forgings</span> &amp; <br />
              Austenitic <span className="text-gradient-orange">Alfin Rings</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={300}>
            <p className="home-hero-desc">
              GSA Industries India Pvt Ltd delivers sub-micron engineered closed-die forgings, high-nickel Alfin piston insert rings, and CNC-machined components to automotive, commercial, and agricultural leaders across 20+ countries.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={400}>
            <div className="home-hero-actions">
              <Link to="/contact">
                <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Submit RFQ / Inquiry
                </Button>
              </Link>
              <Link to="/products">
                <Button variant="secondary" size="lg" icon={<Layers size={18} />}>
                  Explore Products
                </Button>
              </Link>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fade-up" delay={500}>
            <div className="home-hero-metrics-bar">
              <div className="metric-pill">
                <Flame size={15} className="text-orange" />
                <span>2,500 MT/Mo Capacity</span>
              </div>
              <div className="metric-pill">
                <Cpu size={15} className="text-cyan" />
                <span>Sub-Micron CNC Turning</span>
              </div>
              <div className="metric-pill">
                <ShieldCheck size={15} className="text-emerald" />
                <span>100% Ultrasonic Bonded</span>
              </div>
              <div className="metric-pill">
                <Globe2 size={15} className="text-cyan" />
                <span>20+ Export Destinations</span>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="home-hero-visual">
          <ScrollReveal animation="scale-up" delay={350}>
            <TiltCard maxTilt={8}>
              <div className="hero-plant-card glass-card">
                <img 
                  src="/images/hero/hero-plant.jpg" 
                  alt="GSA Industries High Precision Forging Plant" 
                  className="hero-plant-img"
                />
                <div className="hero-plant-caption">
                  <span className="caption-tag"><span className="pulse-indicator" /> Heavy Forging Press Line</span>
                  <h4>Computer-Aided Hot Forging</h4>
                  <p>Closed-die forging up to 25 kg single-piece weight</p>
                </div>
                <div className="hero-heritage-badge glass-card">
                  <Award size={22} className="text-orange" />
                  <div>
                    <strong>35+ Years</strong>
                    <span>Excellence Since 1988</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
