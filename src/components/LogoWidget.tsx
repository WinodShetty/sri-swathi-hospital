import React from 'react';

interface LogoWidgetProps {
  className?: string;
  color?: string;
  size?: number;
}

export default function LogoWidget({ 
  className = "", 
  color = "#5A2D82", 
  size = 40 
}: LogoWidgetProps) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      width={size} 
      height={size}
      className={`inline-block select-none ${className}`}
      id="custom-maternity-logo"
    >
      {/* Outer elegant thin ring */}
      <circle 
        cx="50" 
        cy="50" 
        r="44" 
        fill="none" 
        stroke={color} 
        strokeWidth="2" 
        strokeDasharray="180 5"
        className="opacity-80"
      />
      
      {/* Hand-sculpted Mother and Baby vector path */}
      <path 
        d="M 52,24 
           C 43,24 38,29 36,36 
           C 34,44 42,48 40,56 
           C 38,62 31,64 31,70 
           C 31,76 39,78 48,78 
           C 62,78 72,68 72,54 
           C 72,36 64,24 52,24 Z" 
        fill="none" 
        stroke={color} 
        strokeWidth="2.5" 
        strokeLinecap="round"
      />
      
      {/* Mother's face profile curve */}
      <path 
        d="M 50,30
           C 47,33 47,38 49,42
           C 51,45 54,44 57,41"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Mother's closed eyelashes / eye - indicating serene peace */}
      <path 
        d="M 48.5,35 C 49,36 50,36.5 51,35.5" 
        fill="none" 
        stroke={color} 
        strokeWidth="1.5" 
        strokeLinecap="round"
      />
      
      {/* Baby cradled in arms */}
      <path 
        d="M 46,62 
           C 42,60 40,63 41,67 
           C 42,70 46,71 50,69 
           C 54,67 52,61 46,62 Z" 
        fill="none" 
        stroke={color} 
        strokeWidth="2.2" 
        strokeLinecap="round"
      />
      
      {/* Baby's head profile */}
      <circle 
        cx="44" 
        cy="58" 
        r="4" 
        fill="none" 
        stroke={color} 
        strokeWidth="2"
      />
      
      {/* Bonding connection line (arm support) */}
      <path 
        d="M 57,41
           C 60,49 58,58 55,62
           C 53,65 48,65 45,67"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
