import React from 'react';
const MapView = ({ coordinates }) => (
  <iframe
    width="100%"
    height="300"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    src={`https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}&z=15&output=embed`}
  ></iframe>
);
export default MapView;
