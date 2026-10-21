import React from 'react';
import './Card.css';

export const Card = ({
  children,
  variant = 'glass', // 'glass' | 'solid' | 'bordered'
  className = '',
  onClick,
  ...props
}) => {
  return (
    <div
      className={`gsa-card-root card-${variant} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
