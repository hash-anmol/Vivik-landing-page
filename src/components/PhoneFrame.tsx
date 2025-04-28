'use client';

import React from 'react';

interface PhoneFrameProps {
  children: React.ReactNode;
  className?: string;
}

const PhoneFrame: React.FC<PhoneFrameProps> = ({ children, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Phone outline */}
      <div className="relative w-[300px] h-[600px] bg-black rounded-[40px] p-3 shadow-xl">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-2xl z-20"></div>
        
        {/* Screen */}
        <div className="w-full h-full rounded-[32px] overflow-hidden bg-[#FFE743] relative">
          {/* Status bar */}
          <div className="absolute top-0 left-0 right-0 h-6 w-full z-10"></div>
          
          {/* Content */}
          <div className="h-full overflow-hidden">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhoneFrame; 