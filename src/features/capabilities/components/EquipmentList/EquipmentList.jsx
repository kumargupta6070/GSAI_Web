import React from 'react';
import SectionTitle from '../../../../common/SectionTitle/SectionTitle';
import { EQUIPMENT_INVENTORY } from '../../data/capabilitiesData';
import { Cpu } from 'lucide-react';
import './EquipmentList.css';

export const EquipmentList = () => {
  return (
    <section className="section-spacing equipment-list-section">
      <div className="container">
        <SectionTitle
          tag="Machinery Inventory"
          icon={<Cpu size={14} />}
          title="Fleet Specifications &amp;"
          gradientWord="Technical Capacities"
          gradientType="primary"
          subtitle="World-class machinery sourced from Germany, Japan, USA, and Switzerland for maximum operational uptime."
        />

        <div className="equipment-table-card glass-card">
          <table className="equipment-data-table">
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
              {EQUIPMENT_INVENTORY.map((item, idx) => (
                <tr key={idx}>
                  <td className="equip-cat-cell font-bold">
                    <span className="equip-dot" /> {item.category}
                  </td>
                  <td className="equip-name-cell">{item.machine}</td>
                  <td className="mono-font equip-cap-cell">{item.capacity}</td>
                  <td>{item.make}</td>
                  <td><span className="equip-country-pill">{item.origin}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EquipmentList;
