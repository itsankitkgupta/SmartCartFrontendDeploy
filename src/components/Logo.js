import React from 'react';

const SmartCartLogo = () => {
  return (
    <svg
      width="200"
      height="100"
      viewBox="0 0 400 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Define gradients */}
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#c70039" /> {/* Darker red */}
          <stop offset="50%" stopColor="#ff5733" /> {/* Mid red */}
          <stop offset="100%" stopColor="#ff6b6b" /> {/* Lighter red */}
        </linearGradient>
      </defs>

      {/* Background */}
      <rect width="400" height="100" fill="#fff" />

      {/* Text */}
      <text
        x="30"
        y="70"
        fontFamily="Verdana"
        fontSize="60"
        fontWeight="bold"
        fill="url(#grad1)" // Apply gradient fill to the entire text
      >
        SmartCart
      </text>
    </svg>
  );
};

export default SmartCartLogo;
