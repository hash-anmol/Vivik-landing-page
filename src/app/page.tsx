'use client';

import { useState } from 'react';
import Image from 'next/image';
import PlaceholderGenerator from '@/components/PlaceholderGenerator';
import MobileView from '@/components/MobileView';
import PhoneFrame from '@/components/PhoneFrame';

export default function Home() {
  const [email, setEmail] = useState('');
  const [showMobileMockup, setShowMobileMockup] = useState(false);

  return (
    <>
      {/* Mobile View - Only visible on mobile devices */}
      <div className="md:hidden">
        <MobileView email={email} setEmail={setEmail} />
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex md:flex-col min-h-screen">
        {/* Header section - Desktop */}
        <header className="flex justify-between items-center p-4 md:p-8">
          <div className="flex items-center">
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
              <path d="M22.4 5.6C22.4 8.4 20.3 10.5 17.5 10.5C14.7 10.5 12.6 8.4 12.6 5.6C12.6 2.8 14.7 0.7 17.5 0.7C20.3 0.7 22.4 2.8 22.4 5.6Z" fill="black"/>
              <path d="M10.5 5.6C10.5 8.4 8.4 10.5 5.6 10.5C2.8 10.5 0.7 8.4 0.7 5.6C0.7 2.8 2.8 0.7 5.6 0.7C8.4 0.7 10.5 2.8 10.5 5.6Z" fill="black"/>
              <path d="M22.4 17.5C22.4 20.3 20.3 22.4 17.5 22.4C14.7 22.4 12.6 20.3 12.6 17.5C12.6 14.7 14.7 12.6 17.5 12.6C20.3 12.6 22.4 14.7 22.4 17.5Z" fill="black"/>
              <path d="M10.5 17.5C10.5 20.3 8.4 22.4 5.6 22.4C2.8 22.4 0.7 20.3 0.7 17.5C0.7 14.7 2.8 12.6 5.6 12.6C8.4 12.6 10.5 14.7 10.5 17.5Z" fill="black"/>
              <path d="M16.1 5.6L6.9 17.5" stroke="black" strokeWidth="1.4" strokeLinecap="round"/>
              <path d="M6.97 5.5978L16.03 17.5978" stroke="black" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span className="text-xl font-bold">VIVIK</span>
          </div>
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowMobileMockup(!showMobileMockup)}
              className="text-black border border-black rounded-full px-4 py-2 text-sm font-medium flex items-center hover:bg-black hover:text-white transition-colors"
            >
              {showMobileMockup ? "Hide" : "Show"} Mobile View
            </button>
            <button className="text-white bg-black rounded-full px-5 py-2.5 text-sm font-medium">
              Menu
            </button>
          </div>
        </header>

        {/* Main content with exact layout from image */}
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Mobile mockup overlay */}
          {showMobileMockup && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={() => setShowMobileMockup(false)}>
              <div onClick={(e) => e.stopPropagation()}>
                <PhoneFrame>
                  <MobileView email={email} setEmail={setEmail} />
                </PhoneFrame>
              </div>
            </div>
          )}

          {/* Central content container */}
          <div className="flex flex-col items-center text-center mt-10 md:mt-16 mb-10">
            <div className="max-w-5xl">
              {/* Main heading with exact layout matching the image */}
              <div className="header-text text-5xl sm:text-6xl md:text-7xl leading-none mb-6">
                <div>FIND PEOPLE NEARBY <span className="inline-block">❤️</span></div>
                <div className="flex flex-wrap justify-center items-center">
                  WHO CARE ABOUT WHAT YOU
                  {/* <div className="inline-flex mx-3 my-1">
                    <div className="w-12 h-12 rounded-full bg-orange-300 flex items-center justify-center text-white font-bold border-2 border-white">P1</div>
                    <div className="w-12 h-12 rounded-full bg-blue-300 flex items-center justify-center text-white font-bold border-2 border-white -ml-2">P2</div>
                  </div> */}
                
                </div>
                <div><span className="inline-block mr-3"></span>🔥 CARE ABOUT</div>
              </div>
            

              {/* Email signup form */}
              <div className="w-full max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-4 py-3 border border-black rounded-full focus:outline-none"
                  />
                  <button className="px-5 py-3 bg-black text-white rounded-full font-medium transition-transform hover:scale-105 whitespace-nowrap">
                    Get notified
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Image grid exactly matching the reference image */}
          <div className="relative w-full h-[420px] md:h-[480px] mt-16 mb-4">
            {/* Left image */}
            <div className="absolute left-0 bottom-0 w-[22%] h-[92%] rounded-tr-2xl overflow-hidden">
              <Image 
                src="/images/Portrait Image 31360887.jpg"
                alt="Outdoor scene"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            
            {/* Center left image */}
            <div className="absolute left-[24%] bottom-0 w-[18%] h-[70%] rounded-t-2xl overflow-hidden">
              <Image 
                src="/images/Portrait Image 31360892.jpg"
                alt="Person"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            
            {/* Center image */}
            <div className="absolute left-[44%] -translate-x-1/2 bottom-0 w-[22%] h-[100%] rounded-t-2xl overflow-hidden">
              <Image 
                src="/images/india to china linkedin.jpeg"
                alt="Person in garden"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            
            {/* Center right image */}
            <div className="absolute left-[68%] -translate-x-1/2 bottom-0 w-[18%] h-[80%] rounded-t-2xl overflow-hidden">
              <Image 
                src="/images/Portrait Image 31360909.jpg"
                alt="Person portrait"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
            
            {/* Right image */}
            <div className="absolute right-0 bottom-0 w-[22%] h-[92%] rounded-tl-2xl overflow-hidden">
              <Image 
                src="/images/Portrait Image 2150570603.jpg"
                alt="Urban view"
                fill
                style={{ objectFit: 'cover' }}
                className="w-full h-full"
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
