import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Layers, Cpu, ShieldCheck, Factory } from 'lucide-react';
import './SearchBar.css';

const SEARCHABLE_ITEMS = [
  { id: '1', title: 'High-Nickel Alfin Insert Rings', category: 'Products', type: 'alfin', url: '/products?search=alfin', desc: 'Austenitic high-nickel cast iron rings for heavy-duty diesel pistons' },
  { id: '2', title: 'Hot & Warm Precision Forgings', category: 'Products', type: 'forged', url: '/products?search=forged', desc: 'Closed-die forgings from 0.2 kg to 25 kg in alloy & carbon steel' },
  { id: '3', title: 'Automotive Engine & Gearbox Components', category: 'Products', type: 'auto', url: '/products?search=automotive', desc: 'Connecting rods, gears, shafts, steering knuckles & flanges' },
  { id: '4', title: 'Agricultural Machinery Implements', category: 'Products', type: 'agri', url: '/products?search=agri', desc: 'High-wear tillage blades, rotor shafts, hub spindles for tractors' },
  { id: '5', title: 'CNC & VMC Precision Machining', category: 'Capabilities', type: 'machining', url: '/capabilities#cnc', desc: 'Multi-axis Japanese & German CNC turning & milling centers' },
  { id: '6', title: 'Closed-Die Forging Hammer & Press Lines', category: 'Capabilities', type: 'forging', url: '/capabilities#forging', desc: 'Forging press lines up to 2500T with induction billet heating' },
  { id: '7', title: 'Continuous Atmosphere Heat Treatment', category: 'Capabilities', type: 'heattreat', url: '/capabilities#heattreat', desc: 'SCADA-controlled continuous hardening, tempering, normalizing & annealing' },
  { id: '8', title: 'IATF 16949 & ISO 9001:2015 Certifications', category: 'Quality', type: 'quality', url: '/quality', desc: 'Global automotive quality standard registration & certifications' },
  { id: '9', title: 'Zeiss CNC Coordinate Measuring Machine (CMM)', category: 'Quality', type: 'metrology', url: '/quality#cmm', desc: 'Sub-micron 3D dimensional verification and profilometry' },
  { id: '10', title: 'Metallurgical Lab & Spectrometry', category: 'Quality', type: 'metallurgy', url: '/quality#spectro', desc: 'Optical emission spectrometer for real-time elemental composition' },
  { id: '11', title: 'Custom Tool Design & CAD/CAM Simulation', category: 'Capabilities', type: 'tooling', url: '/capabilities#cadcam', desc: 'In-house die tooling design with DEFORM 3D forging simulation' },
  { id: '12', title: 'Request an RFQ / Quote Online', category: 'Contact', type: 'contact', url: '/contact', desc: 'Upload drawings and submit specifications directly to GSA sales engineering' }
];

export const SearchBar = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle Ctrl+K shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent can toggle
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === '' 
    ? SEARCHABLE_ITEMS.slice(0, 6)
    : SEARCHABLE_ITEMS.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.desc.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );

  const handleSelect = (url) => {
    navigate(url);
    onClose();
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Products': return <Layers size={16} className="text-cyan" />;
      case 'Capabilities': return <Factory size={16} className="text-orange" />;
      case 'Quality': return <ShieldCheck size={16} className="text-emerald" />;
      default: return <Cpu size={16} className="text-cyan" />;
    }
  };

  return (
    <div className="search-modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="search-modal-card glass-card" onClick={(e) => e.stopPropagation()}>
        {/* Input Bar */}
        <div className="search-input-wrapper">
          <Search size={22} className="search-modal-icon" />
          <input
            ref={inputRef}
            type="text"
            className="search-modal-input"
            placeholder="Search products, capabilities, specs, alloys (e.g. Alfin, Forging, CMM)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {query && (
            <button className="search-clear-btn" onClick={() => setQuery('')}>
              <X size={16} />
            </button>
          )}
          <span className="search-esc-badge">ESC</span>
        </div>

        {/* Results List */}
        <div className="search-results-list">
          {filtered.length === 0 ? (
            <div className="search-empty-state">
              <p>No results found for "{query}".</p>
              <span>Try searching for "Alfin", "Forging", "Machining", or "Quality".</span>
            </div>
          ) : (
            <>
              <div className="search-results-header">
                {query.trim() === '' ? 'Popular Suggestions' : `Found ${filtered.length} matches`}
              </div>
              {filtered.map(item => (
                <div
                  key={item.id}
                  className="search-result-row"
                  onClick={() => handleSelect(item.url)}
                  role="button"
                  tabIndex={0}
                >
                  <div className="search-row-icon">
                    {getCategoryIcon(item.category)}
                  </div>
                  <div className="search-row-content">
                    <div className="search-row-title-bar">
                      <span className="search-row-title">{item.title}</span>
                      <span className="search-row-badge">{item.category}</span>
                    </div>
                    <p className="search-row-desc">{item.desc}</p>
                  </div>
                  <ArrowRight size={16} className="search-row-arrow" />
                </div>
              ))}
            </>
          )}
        </div>

        {/* Search Modal Footer */}
        <div className="search-modal-footer">
          <span>Navigate with mouse or click item to view</span>
          <span className="search-hint-key">GSA Precision Directory</span>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
