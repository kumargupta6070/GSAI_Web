import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Plane, 
  Train, 
  Ship, 
  ShieldCheck, 
  ExternalLink 
} from 'lucide-react';
import ScrollReveal from '../../../../animations/ScrollReveal/ScrollReveal';
import TiltCard from '../../../../animations/TiltCard/TiltCard';
import { CONTACT_METADATA } from '../../data/contactData';
import './ContactInfo.css';

export const ContactInfo = () => {
  return (
    <div className="contact-info-container">
      {/* Primary Plant Location */}
      <ScrollReveal animation="fade-up" delay={100}>
        <TiltCard maxTilt={5}>
          <div className="info-block plant-location-card glass-card">
            <div className="info-block-header">
              <div className="icon-badge">
                <MapPin size={22} className="text-orange" />
              </div>
              <div>
                <h4>Manufacturing Plant &amp; HQ</h4>
                <span className="badge-pill">Main Facility</span>
              </div>
            </div>
        <p className="address-text">
          <strong>GSA Industries (India) Pvt. Ltd.</strong><br />
          Village Samgoli, Tehsil Derabassi,<br />
          Distt. SAS Nagar (Mohali), Punjab – 140507, India
        </p>
        <a 
          href="https://maps.google.com/?q=GSA+Industries+India+Pvt+Ltd+Derabassi" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="directions-link"
        >
          <span>Get Driving Directions</span>
          <ExternalLink size={14} />
        </a>
      </div>
    </TiltCard>
  </ScrollReveal>

  {/* Direct Departments */}
  <ScrollReveal animation="fade-up" delay={180}>
    <TiltCard maxTilt={5}>
      <div className="info-block glass-card">
        <div className="info-block-header">
          <div className="icon-badge">
            <Mail size={22} className="text-cyan" />
          </div>
          <div>
            <h4>Direct Department Desks</h4>
            <span className="subtitle-text">Dedicated points of contact</span>
          </div>
        </div>

        <div className="departments-list">
          {CONTACT_METADATA.departments.map((dept, idx) => (
            <div key={idx} className="department-item">
              <span className="dept-name">{dept.name}</span>
              <div className="dept-contacts">
                <a href={`mailto:${dept.email}`} className="dept-link">
                  <Mail size={13} /> {dept.email}
                </a>
                <a href={`tel:${dept.phone.replace(/[^0-9+]/g, '')}`} className="dept-link">
                  <Phone size={13} /> {dept.phone}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </TiltCard>
  </ScrollReveal>

  {/* Logistics & Proximity */}
  <ScrollReveal animation="fade-up" delay={260}>
    <TiltCard maxTilt={5}>
      <div className="info-block glass-card">
        <div className="info-block-header">
          <div className="icon-badge">
            <Plane size={22} className="text-forge" />
          </div>
          <div>
            <h4>Global Logistics &amp; Transit Hubs</h4>
            <span className="subtitle-text">Fast international and domestic connectivity</span>
          </div>
        </div>

        <div className="logistics-grid">
          <div className="logistic-card">
            <Plane size={18} className="text-orange" />
            <div>
              <strong>Chandigarh Airport (IXC)</strong>
              <p>~25 km / 35 minutes via NH-7 highway corridor</p>
            </div>
          </div>
          <div className="logistic-card">
            <Train size={18} className="text-cyan" />
            <div>
              <strong>Railhead Connections</strong>
              <p>Ambala Cantt Junction &amp; Chandigarh Junction</p>
            </div>
          </div>
          <div className="logistic-card">
            <Ship size={18} className="text-emerald" />
            <div>
              <strong>Export ICD Hubs</strong>
              <p>ICD Dappar &amp; ICD Ludhiana for sea freight containers</p>
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  </ScrollReveal>

  {/* Operations Hours */}
  <ScrollReveal animation="fade-up" delay={340}>
    <TiltCard maxTilt={5}>
      <div className="info-block hours-card glass-card">
        <div className="info-block-header">
          <div className="icon-badge">
            <Clock size={22} className="text-amber" />
          </div>
          <div>
            <h4>Operational Hours</h4>
            <span className="badge-pill active">Production 24/7</span>
          </div>
        </div>
        <p className="hours-detail">
          <strong>Corporate Office:</strong> Monday – Saturday, 9:00 AM – 6:30 PM IST<br />
          <strong>Manufacturing Plants:</strong> 3-Shift Continuous Forge &amp; Foundry Operations
        </p>
      </div>
    </TiltCard>
  </ScrollReveal>
</div>
  );
};

export default ContactInfo;
