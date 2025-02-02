// LoadingSpinner.js
import React from 'react';
import { RingLoader } from 'react-spinners';

const LoadingComponent = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <RingLoader color="#36d7b7" />
    </div>
  );
};

export default LoadingComponent;
