import React from 'react';

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Buy, Dress, Shine</h1>
        <p>Pearlstecy got you covered!</p>
        {children}
      </div>
    </div>
  );
}
