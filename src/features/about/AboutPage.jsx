import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Award, 
  Clock, 
  Target, 
  Compass, 
  Users, 
  CheckCircle2, 
  ArrowRight,
  Flame,
  Factory,
  Globe2
} from 'lucide-react';
import Button from '../../common/Button';
import ScrollReveal from '../../animations/ScrollReveal';
import TiltCard from '../../animations/TiltCard';
import { COMPANY_INFO, KEY_STATS } from '../../data/gsaData';
import './AboutPage.css';

const TIMELINE_EVENTS = [
  {
    year: '1988',
    title: 'Foundation of GSA Industries',
    description: 'Started operations in Punjab, India, as a focused precision engineering and component manufacturing unit for regional tractor and automotive assemblies.'
  },
  {
    year: '1996',
    title: 'Closed-Die Forging Expansion',
    description: 'Commissioned first heavy forging hammer and press line, expanding into high-integrity alloy steel blanks for heavy commercial vehicle drivelines.'
  },
  {
    year: '2004',
    title: 'Centrifugal Alfin Ring Breakthrough',
    description: 'Developed proprietary high-nickel austenitic Ni-Resist centrifugal casting line for diesel piston insert rings, replacing expensive foreign imports.'
  },
  {
    year: '2012',
    title: 'Multi-Axis CNC & VMC Machining Fleet',
    description: 'Invested heavily in automated Japanese CNC turning centers and 4-axis VMCs, transitioning GSA from a forging blank maker to a ready-to-assemble tier supplier.'
  },
  {
    year: '2018',
    title: 'IATF 16949:2016 Certification',
    description: 'Achieved the gold automotive standard certification and implemented Carl Zeiss CMM metrology inspection with Six Sigma Poka-Yoke error proofing.'
  },
  {
    year: 'Present',
    title: 'Global Export Leader in 20+ Countries',
    description: 'Exporting 2,500+ MT/month of precision forgings and Alfin rings to prestigious Tier-1 OEMs in Europe, North America, Southeast Asia, and India.'
  }
];

const VALUES = [
  {
    icon: <Target className="text-cyan" size={28} />,
    title: 'Micron-Level Precision',
    description: 'We do not compromise on tolerances. Our manufacturing processes are calibrated to sub-micron accuracy backed by Zeiss CMM verification.'
  },
  {
    icon: <ShieldCheck className="text-emerald" size={28} />,
    title: 'Zero Defect Culture',
    description: 'Adhering to strict IATF 16949 Six Sigma principles, continuous SPC data logging, and automated Poka-Yoke fixtures ensures flawless customer delivery.'
  },
  {
    icon: <Flame className="text-orange" size={28} />,
    title: 'Metallurgical Mastery',
    description: 'From high-nickel austenitic Ni-Resist alloys to micro-alloyed forging steels, our deep metallurgical science gives our components extreme fatigue endurance.'
  },
  {
    icon: <Users className="text-cyan" size={28} />,
    title: 'Customer-Centric Engineering',
    description: 'We work as an extension of our clients’ R&D teams, offering DFM (Design for Manufacturability) die simulation and rapid prototyping turnarounds.'
  }
];

export const AboutPage = () => {
  return (
    <div className="about-page-root">
      {/* Hero Header */}
      <section className="about-hero-section">
        <div className="container">
          <div className="about-hero-content">
            <ScrollReveal animation="fade-up">
              <span className="section-tag">
                <Compass size={14} /> Our Heritage &amp; Vision
              </span>
              <h1 className="about-hero-title">
                Three Decades of <span className="text-gradient">Forging Excellence</span> &amp; Innovation
              </h1>
              <p className="about-hero-lead">
                GSA Industries India Pvt Ltd has grown from a humble machine shop in 1988 to a globally recognized IATF 16949 certified leader in high-precision hot forgings, high-nickel Alfin rings, and finished CNC-machined components.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Story & Facility Section */}
      <section className="section-spacing about-story-section">
        <div className="container">
          <div className="about-story-grid">
            <div className="story-media-column">
              <ScrollReveal animation="scale-up">
                <TiltCard maxTilt={6}>
                  <div className="story-img-card glass-card">
                    <img 
                      src="/images/cnc_machining_center_1792597041619.jpg" 
                      alt="GSA Industries CNC Center" 
                      className="story-main-img" 
                    />
                    <div className="story-stat-badge glass-card">
                      <Factory size={22} className="text-cyan" />
                      <div>
                        <strong>150,000+ Sq. Ft.</strong>
                        <span>Ultra-Modern Punjab Plant</span>
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </ScrollReveal>
            </div>

            <div className="story-text-column">
              <ScrollReveal animation="fade-up">
                <span className="section-tag">
                  <Factory size={14} /> Integrated Manufacturing Facility
                </span>
                <h2>End-to-End Control Over Every Single Grain &amp; Micron</h2>
                <p>
                  Located in the industrial belt of Dappar (Derabassi, Punjab, India), GSA Industries operates a sprawling 150,000+ sq. ft. vertically integrated manufacturing facility.
                </p>
                <p>
                  By housing all critical capabilities under one roof — <strong>in-house CAD/CAM tool design</strong>, <strong>closed-die hammer &amp; press forging</strong>, <strong>SCADA continuous heat treatment</strong>, and <strong>multi-axis CNC turning</strong> — we eliminate third-party supply vulnerabilities and maintain uncompromised quality from raw steel billets to boxed assemblies ready for the customer’s assembly line.
                </p>

                <div className="story-highlights-list">
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <span>In-House Tool Room with DEFORM 3D Simulation</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <span>Induction Heating with Infrared Optical Sort Gates</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <span>Carl Zeiss CNC Coordinate Measuring Machine (CMM)</span>
                  </div>
                  <div className="highlight-item">
                    <CheckCircle2 size={18} className="text-cyan" />
                    <span>Full PPAP Level 3 and IMDS Material Compliance</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="section-spacing values-section bg-secondary-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Award size={14} /> The Principles That Drive Us
            </span>
            <h2 className="section-title">
              Our Core <span className="text-gradient">Engineering Values</span>
            </h2>
            <p className="section-subtitle">
              Every process, tolerance, and component we deliver is guided by our relentless pursuit of precision and integrity.
            </p>
          </div>

          <div className="values-grid">
            {VALUES.map((val, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 100}>
                <div className="value-card glass-card">
                  <div className="value-icon-box">{val.icon}</div>
                  <h3 className="value-title">{val.title}</h3>
                  <p className="value-desc">{val.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Historical Milestones Timeline */}
      <section className="section-spacing timeline-section">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Clock size={14} /> The Evolution
            </span>
            <h2 className="section-title">
              Milestones of <span className="text-gradient-orange">Continuous Innovation</span>
            </h2>
            <p className="section-subtitle">
              Discover how GSA Industries transformed over the last 35+ years into a world-class manufacturing powerhouse.
            </p>
          </div>

          <div className="timeline-track">
            {TIMELINE_EVENTS.map((event, idx) => (
              <ScrollReveal key={idx} animation="fade-up" delay={idx * 80}>
                <div className="timeline-item">
                  <div className="timeline-year-pill">
                    <span className="mono-font">{event.year}</span>
                  </div>
                  <div className="timeline-content-card glass-card">
                    <h3 className="timeline-event-title">{event.title}</h3>
                    <p className="timeline-event-desc">{event.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="about-cta-section">
        <div className="container">
          <div className="about-cta-card glass-card">
            <h2>Ready to Explore Our Product Catalog?</h2>
            <p>View technical specifications of our Alfin insert rings, hot forgings, and agricultural components.</p>
            <div className="about-cta-buttons">
              <Link to="/products">
                <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                  Browse Product Catalog
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Our Leadership Team
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
