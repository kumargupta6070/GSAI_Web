import React, { useState } from 'react';
import { MapPin, Navigation, ExternalLink, Layers } from 'lucide-react';
import './MapEmbed.css';

export const MapEmbed = () => {
  const [mapType, setMapType] = useState('roadmap'); // 'roadmap' | 'satellite'

  // Derabassi GSA Plant coordinates
  const lat = 30.5898;
  const lng = 76.8436;

  const mapSrc = `https://maps.google.com/maps?q=${lat},${lng}+(GSA+Industries+India+Pvt+Ltd)&t=${mapType === 'satellite' ? 'k' : 'm'}&z=14&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="map-embed-wrapper glass-card">
      <div className="map-top-bar">
        <div className="facility-meta">
          <MapPin size={18} className="text-orange" />
          <span className="facility-title">GSA Industries (India) Pvt. Ltd. — Manufacturing Unit</span>
          <span className="gps-pill">GPS: 30.5898° N, 76.8436° E</span>
        </div>

        <div className="map-controls">
          <button 
            type="button"
            className={`map-toggle-btn ${mapType === 'roadmap' ? 'active' : ''}`}
            onClick={() => setMapType('roadmap')}
          >
            Roadmap
          </button>
          <button 
            type="button"
            className={`map-toggle-btn ${mapType === 'satellite' ? 'active' : ''}`}
            onClick={() => setMapType('satellite')}
          >
            <Layers size={13} /> Satellite
          </button>
          <a
            href={`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`}
            target="_blank"
            rel="noopener noreferrer"
            className="directions-btn"
          >
            <Navigation size={14} /> Open GPS
          </a>
        </div>
      </div>

      <div className="iframe-container">
        <iframe
          title="GSA Industries Factory Location"
          src={mapSrc}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
};

export default MapEmbed;
