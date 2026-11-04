import React, { useEffect, useState } from 'react';
import './PageTransition.css';

export const PageTransition = ({ children, className = '' }) => {
  const [beamActive, setBeamActive] = useState(true);

  useEffect(() => {
    setBeamActive(true);
    const timer = setTimeout(() => {
      setBeamActive(false);
    }, 700);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`page-transition-wrapper ${className}`}>
      {beamActive && <div className="page-transition-beam" aria-hidden="true" />}
      <div className="page-transition-content">
        {children}
      </div>
    </div>
  );
};

export default PageTransition;
