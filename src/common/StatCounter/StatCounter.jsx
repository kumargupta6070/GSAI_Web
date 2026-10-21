import React from 'react';
import CounterUp from '../../animations/CounterUp';
import './StatCounter.css';

export const StatCounter = ({
  value,
  suffix = '+',
  prefix = '',
  label,
  description = '',
  className = ''
}) => {
  return (
    <div className={`stat-counter-unit ${className}`}>
      <div className="stat-counter-number-wrapper">
        <CounterUp
          target={value}
          suffix={suffix}
          prefix={prefix}
          className="stat-counter-value text-gradient"
        />
      </div>
      <h4 className="stat-counter-label">{label}</h4>
      {description && <p className="stat-counter-desc">{description}</p>}
    </div>
  );
};

export default StatCounter;
