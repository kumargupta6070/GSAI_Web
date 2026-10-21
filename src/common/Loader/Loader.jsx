import React from 'react';
import './Loader.css';

export const Loader = ({ size = 'md', text = 'Loading Engineering Specs...' }) => {
  return (
    <div className={`loader-container loader-${size}`}>
      <div className="loader-ring">
        <div className="loader-spark" />
      </div>
      {text && <p className="loader-text mono-font">{text}</p>}
    </div>
  );
};

export default Loader;
