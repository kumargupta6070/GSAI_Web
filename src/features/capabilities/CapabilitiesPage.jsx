import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Factory, 
  Flame, 
  Cpu, 
  Wrench, 
  CheckSquare, 
  ArrowRight, 
  CheckCircle2, 
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';
import Button from '../../common/Button';
import ScrollReveal from '../../animations/ScrollReveal';
import TiltCard from '../../animations/TiltCard';
import { CAPABILITIES_DATA } from '../../data/gsaData';
import './CapabilitiesPage.css';

const MACHINERY_FLEET = [
  { category: 'Forging Presses & Hammers', machine: 'Closed-Die Forging Press', capacity: '2,500 Tons', make: 'National / Ajax Heavy Line', origin: 'USA / Europe' },
  { category: 'Forging Presses & Hammers', machine: 'Mechanical Forging Press', capacity: '1,600 Tons', make: 'Eumuco High Speed', origin: 'Germany' },
  { category: 'Forging Presses & Hammers', machine: 'Double-Frame Drop Hammers', capacity: '1.5 Ton to 3 Ton', make: 'Bêché Counterblow', origin: 'Germany' },
  { category: 'Induction Heating', machine: 'Billet Heating Furnaces', capacity: '1,200 kW (1,500 kg/hr)', make: 'Inductotherm Optical Sorter', origin: 'USA / India' },
  { category: 'CNC Machining', machine: 'Vertical Machining Centers (4-Axis)', capacity: '800 x 500 x 600 mm', make: 'Doosan / Mazak', origin: 'Japan / Korea' },
  { category: 'CNC Machining', machine: 'CNC Turning Centers', capacity: 'Dia 500 mm x 600 mm', make: 'Mori Seiki / Haas', origin: 'Japan / USA' },
  { category: 'Heat Treatment', machine: 'Continuous Mesh Belt Line', capacity: '1,500 kg / Hour', make: 'Wellman / SCADA Integrated', origin: 'UK / India' },
  { category: 'Metrology Lab', machine: 'CNC Coordinate Measuring Machine', capacity: 'Accuracy: 1.5 + L/350 µm', make: 'Carl Zeiss Contura 3D', origin: 'Germany' },
  { category: 'Metallurgical Lab', machine: 'Optical Emission Spectrometer', capacity: '28 Element Channels', make: 'Thermo Fisher ARL', origin: 'Switzerland' }
];

export const CapabilitiesPage = () => {
  return (
    <div className="capabilities-page-root">
      {/* Hero */}
      <section className="capabilities-hero-section">
        <div className="container">
          <div className="capabilities-hero-content">
            <span className="section-tag">
              <Factory size={14} /> World-Class Infrastructure
            </span>
            <h1 className="capabilities-hero-title">
              Advanced <span className="text-gradient">Forging, Machining &amp; Metallurgy</span>
            </h1>
            <p className="capabilities-hero-lead">
              Our 150,000+ sq. ft. campus in Punjab houses state-of-the-art closed-die presses, high-speed multi-axis CNC cells, and continuous atmosphere heat treatment facilities capable of producing 2,500 MT of precision components monthly.
            </p>
          </div>
        </div>
      </section>

      {/* Facilities Breakdown */}
      <section className="section-spacing facility-details-section">
        <div className="container">
          <div className="facility-cards-list">
            {CAPABILITIES_DATA.map((cap, idx) => (
              <div key={cap.id} id={cap.id} className="facility-item-row">
                <ScrollReveal animation={idx % 2 === 0 ? 'slide-left' : 'slide-right'}>
                  <div className={`facility-grid-card glass-card ${idx % 2 === 1 ? 'reverse-order' : ''}`}>
                    <div className="facility-media-box">
                      <img src={cap.image} alt={cap.title} className="facility-img" />
                      <div className="facility-badge-tag">{cap.capacity}</div>
                    </div>
                    <div className="facility-info-box">
                      <span className="facility-sub-tag">Facility Division {idx + 1}</span>
                      <h2 className="facility-title">{cap.title}</h2>
                      <p className="facility-desc">{cap.description}</p>

                      <div className="facility-equipment-block">
                        <h4>Machinery &amp; Technology Highlights:</h4>
                        <ul className="facility-equipment-list">
                          {cap.equipment.map((eq, i) => (
                            <li key={i}>
                              <CheckCircle2 size={16} className="text-cyan" />
                              <span>{eq}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="facility-cta-row">
                        <Link to={`/contact?subject=Facility Inquiry: ${encodeURIComponent(cap.title)}`}>
                          <Button variant="forge" size="sm" icon={<ArrowRight size={15} />} iconPosition="right">
                            Inquire for this Division
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Machinery Fleet Table */}
      <section className="section-spacing fleet-table-section bg-secondary-tint">
        <div className="container">
          <div className="section-header">
            <span className="section-tag">
              <Cpu size={14} /> Equipment Inventory
            </span>
            <h2 className="section-title">
              Key <span className="text-gradient">Machinery Fleet</span> Specifications
            </h2>
            <p className="section-subtitle">
              Transparent manufacturing capabilities with globally sourced machinery from Germany, Japan, USA, and Switzerland.
            </p>
          </div>

          <div className="table-responsive-wrapper glass-card">
            <table className="machinery-table">
              <thead>
                <tr>
                  <th>Division / Category</th>
                  <th>Machine Designation</th>
                  <th>Operating Capacity / Envelope</th>
                  <th>Make / Model</th>
                  <th>Origin</th>
                </tr>
              </thead>
              <tbody>
                {MACHINERY_FLEET.map((item, idx) => (
                  <tr key={idx}>
                    <td className="table-cat-cell">
                      <span className="cat-bullet" /> {item.category}
                    </td>
                    <td className="table-name-cell font-bold">{item.machine}</td>
                    <td className="mono-font table-cap-cell">{item.capacity}</td>
                    <td>{item.make}</td>
                    <td><span className="country-chip">{item.origin}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="capabilities-cta-section">
        <div className="container">
          <div className="cap-cta-box glass-card">
            <h2>Looking for Custom Forging or Machining Contract?</h2>
            <p>Upload your 2D/3D component drawings (STEP, IGES, PDF) to get instant DFM feasibility and commercial quotation.</p>
            <Link to="/contact">
              <Button variant="forge" size="lg" icon={<ArrowRight size={18} />} iconPosition="right">
                Submit Engineering RFQ
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapabilitiesPage;
