import React from 'react';
import './SectionTitle.css';

export const SectionTitle = ({
  tag = '',
  icon = null,
  title,
  gradientWord = '',
  gradientType = 'primary', // 'primary' | 'orange' | 'cyan'
  subtitle = '',
  align = 'center', // 'center' | 'left'
  className = ''
}) => {
  return (
    <div className={`section-header-component ${align === 'left' ? 'align-left' : 'align-center'} ${className}`}>
      {tag && (
        <span className="section-tag-pill">
          {icon && <span className="tag-icon">{icon}</span>}
          <span>{tag}</span>
        </span>
      )}
      <h2 className="section-heading-text">
        {title}{' '}
        {gradientWord && (
          <span className={`text-gradient${gradientType === 'orange' ? '-orange' : gradientType === 'cyan' ? '-cyan' : ''}`}>
            {gradientWord}
          </span>
        )}
      </h2>
      {subtitle && <p className="section-subtitle-text">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
