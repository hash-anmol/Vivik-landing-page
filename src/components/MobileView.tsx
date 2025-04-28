'use client';

import { useState } from 'react';
import PlaceholderGenerator from './PlaceholderGenerator';

const MobileView = ({ email, setEmail }: { email: string; setEmail: (email: string) => void }) => {
  return (
    <div className="md:hidden flex flex-col min-h-screen overflow-hidden">
      {/* Mobile Header */}
      <header className="flex justify-between items-center p-4 relative z-10">
        <div className="flex items-center">
          <svg width="24" height="24" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
            <path d="M22.4 5.6C22.4 8.4 20.3 10.5 17.5 10.5C14.7 10.5 12.6 8.4 12.6 5.6C12.6 2.8 14.7 0.7 17.5 0.7C20.3 0.7 22.4 2.8 22.4 5.6Z" fill="black"/>
            <path d="M10.5 5.6C10.5 8.4 8.4 10.5 5.6 10.5C2.8 10.5 0.7 8.4 0.7 5.6C0.7 2.8 2.8 0.7 5.6 0.7C8.4 0.7 10.5 2.8 10.5 5.6Z" fill="black"/>
            <path d="M22.4 17.5C22.4 20.3 20.3 22.4 17.5 22.4C14.7 22.4 12.6 20.3 12.6 17.5C12.6 14.7 14.7 12.6 17.5 12.6C20.3 12.6 22.4 14.7 22.4 17.5Z" fill="black"/>
            <path d="M10.5 17.5C10.5 20.3 8.4 22.4 5.6 22.4C2.8 22.4 0.7 20.3 0.7 17.5C0.7 14.7 2.8 12.6 5.6 12.6C8.4 12.6 10.5 14.7 10.5 17.5Z" fill="black"/>
            <path d="M16.1 5.6L6.9 17.5" stroke="black" strokeWidth="1.4" strokeLinecap="round"/>
            <path d="M6.97 5.5978L16.03 17.5978" stroke="black" strokeWidth="1.4" strokeLinecap="round"/>
          </svg>
          <span className="text-xl font-bold">VIVIK</span>
        </div>
        <button className="text-white bg-black rounded-full px-4 py-2 text-sm font-medium">
          Menu
        </button>
      </header>

      {/* Mobile Content */}
      <div className="flex-1 flex flex-col items-center text-center px-4">
        <div className="pt-6 pb-6">
          <div className="header-text text-4xl leading-none">
            <div>A MEMORY <span className="inline-block">❤️</span></div>
            <div className="flex flex-wrap justify-center items-center">
              ROLL WITH 
              <div className="inline-flex mx-2 my-1">
                <div className="w-8 h-8 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold border border-white">P1</div>
                <div className="w-8 h-8 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold border border-white -ml-1">P2</div>
              </div>
              YOUR
            </div>
            <div><span className="inline-block mr-2">🔥</span> FRIENDS</div>
          </div>
          <p className="text-sm mt-1 mb-6">
            Find people nearby, who care about what you care about.
          </p>

          {/* Email signup form */}
          <div className="w-full">
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-black rounded-full focus:outline-none"
              />
              <button className="px-5 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105">
                Get notified
              </button>
            </div>
          </div>
        </div>

        {/* Mobile image grid - exactly matching the reference image */}
        <div className="w-full relative h-[300px] -mx-4 overflow-hidden">
          {/* Left image */}
          <div className="absolute left-0 bottom-0 w-[33%] h-[250px] rounded-tr-2xl overflow-hidden">
            <PlaceholderGenerator
              width={100}
              height={250}
              backgroundColor="#3F7CAC"
              text="Outdoor"
              className="w-full h-full"
            />
          </div>
          
          {/* Center left image */}
          <div className="absolute left-[30%] bottom-0 w-[25%] h-[180px] rounded-t-2xl overflow-hidden">
            <PlaceholderGenerator
              width={80}
              height={180}
              backgroundColor="#E09F3E"
              text="Person"
              className="w-full h-full"
            />
          </div>
          
          {/* Center image */}
          <div className="absolute left-[52%] bottom-0 w-[25%] h-[230px] rounded-t-2xl overflow-hidden">
            <PlaceholderGenerator
              width={80}
              height={230}
              backgroundColor="#9E2A2B"
              text="Friends"
              className="w-full h-full"
            />
          </div>
          
          {/* Right image */}
          <div className="absolute right-0 bottom-0 w-[25%] h-[200px] rounded-tl-2xl overflow-hidden">
            <PlaceholderGenerator
              width={80}
              height={200}
              backgroundColor="#540B0E"
              text="Park"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView; 