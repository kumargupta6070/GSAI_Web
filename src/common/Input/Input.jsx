import React, { forwardRef } from 'react';
import './Input.css';

export const Input = forwardRef(({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  onBlur,
  required = false,
  error = '',
  icon = null,
  helperText = '',
  className = '',
  ...props
}, ref) => {
  return (
    <div className={`input-field-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label} {required && !label.includes('*') && <span className="text-orange">*</span>}
        </label>
      )}
      <div className="input-control-wrapper">
        {icon && <span className="input-leading-icon">{icon}</span>}
        <input
          ref={ref}
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={placeholder}
          required={required}
          className={`input-base-element ${icon ? 'has-leading-icon' : ''}`}
          {...props}
        />
      </div>
      {error ? (
        <span className="input-error-text">{error}</span>
      ) : helperText ? (
        <span className="input-helper-text">{helperText}</span>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
