import React from 'react';
import './PageTransition.css';

export const PageTransition = ({ children, className = '' }) => {
  return (
    <div className={`page-transition-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default PageTransition;
