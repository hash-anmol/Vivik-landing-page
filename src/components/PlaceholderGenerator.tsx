'use client';

import React, { useEffect } from 'react';

interface PlaceholderGeneratorProps {
  width: number;
  height: number;
  backgroundColor: string;
  text: string;
  className?: string;
}

const PlaceholderGenerator: React.FC<PlaceholderGeneratorProps> = ({
  width,
  height,
  backgroundColor,
  text,
  className = '',
}) => {
  return (
    <div 
      className={`flex items-center justify-center ${className}`}
      style={{
        width,
        height,
        backgroundColor,
        color: getContrastColor(backgroundColor),
        fontSize: '1rem',
        fontWeight: 'bold',
        textAlign: 'center',
        borderRadius: '0.75rem',
        overflow: 'hidden'
      }}
    >
      {text}
    </div>
  );
};

function getContrastColor(hexColor: string): string {
  // Remove # if present
  hexColor = hexColor.replace('#', '');
  
  // Convert to RGB
  const r = parseInt(hexColor.substr(0, 2), 16);
  const g = parseInt(hexColor.substr(2, 2), 16);
  const b = parseInt(hexColor.substr(4, 2), 16);
  
  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  
  // Return black or white based on luminance
  return luminance > 0.5 ? '#000000' : '#ffffff';
}

export default PlaceholderGenerator; 