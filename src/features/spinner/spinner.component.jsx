import React from 'react';
import './spinner.styles.scss';

const Spinner = () => {
  const x = 5;
  return (
    <div className="spinner-container">
      <div className="spinner black" />
      <div className="spinner red" />
    </div>
  );
};

export default Spinner;
