import React from 'react';
const LoadingSpinner = () => (
  <div className="text-center p-4">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-500"></div>
    <p>Loading...</p>
  </div>
);
export default LoadingSpinner;
