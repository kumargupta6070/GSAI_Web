import React from 'react';
import './GlowBorder.css';

export const GlowBorder = ({ children, className = '', glowColor = 'cyan' }) => {
  return (
    <div className={`glow-border-card glow-${glowColor} ${className}`}>
      <div className="glow-border-gradient" />
      <div className="glow-border-content">
        {children}
      </div>
    </div>
  );
};

export default GlowBorder;
