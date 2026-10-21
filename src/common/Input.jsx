import React from 'react';
import './Input.css';

export const Input = ({
  label,
  id,
  name,
  type = 'text',
  placeholder = '',
  value,
  onChange,
  required = false,
  error = '',
  icon = null,
  helperText = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`input-field-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label} {required && <span className="text-orange">*</span>}
        </label>
      )}
      <div className="input-control-wrapper">
        {icon && <span className="input-leading-icon">{icon}</span>}
        <input
          id={id || name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
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
};

export const Textarea = ({
  label,
  id,
  name,
  placeholder = '',
  value,
  onChange,
  required = false,
  error = '',
  rows = 4,
  helperText = '',
  className = '',
  ...props
}) => {
  return (
    <div className={`input-field-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id || name} className="input-label">
          {label} {required && <span className="text-orange">*</span>}
        </label>
      )}
      <textarea
        id={id || name}
        name={name}
        rows={rows}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="input-base-element textarea-element"
        {...props}
      />
      {error ? (
        <span className="input-error-text">{error}</span>
      ) : helperText ? (
        <span className="input-helper-text">{helperText}</span>
      ) : null}
    </div>
  );
};

export default Input;
