import React from 'react';
import './Button.css';

export const Button = ({
  children,
  variant = 'primary', // 'primary' | 'secondary' | 'outline' | 'forge' | 'ghost'
  size = 'md', // 'sm' | 'md' | 'lg'
  icon = null,
  iconPosition = 'left',
  className = '',
  onClick,
  disabled = false,
  type = 'button',
  ...props
}) => {
  return (
    <button
      type={type}
      className={`btn-base btn-${variant} btn-${size} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn-icon left">{icon}</span>}
      <span className="btn-content">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon right">{icon}</span>}
      <span className="btn-glow-overlay" />
    </button>
  );
};

export default Button;
