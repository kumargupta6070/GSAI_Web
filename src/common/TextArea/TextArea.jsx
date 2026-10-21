import React from 'react';
import './TextArea.css';

export const TextArea = ({
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
    <div className={`textarea-field-group ${error ? 'has-error' : ''} ${className}`}>
      {label && (
        <label htmlFor={id || name} className="textarea-label">
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
        className="textarea-base-element"
        {...props}
      />
      {error ? (
        <span className="textarea-error-text">{error}</span>
      ) : helperText ? (
        <span className="textarea-helper-text">{helperText}</span>
      ) : null}
    </div>
  );
};

export default TextArea;
