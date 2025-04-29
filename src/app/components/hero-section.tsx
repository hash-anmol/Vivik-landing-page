"use client"
import * as React from 'react'
import Image from 'next/image'

import { WhiteGradientBlob } from "./white-gradient-blob"
import { EmailSignupForm } from "./email-signup-form"

function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-8 overflow-hidden">
    {/* // <section className="main-bg hero-bg relative w-full min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-8 overflow-hidden"> */}

      <WhiteGradientBlob />
      <div className="relative z-10 flex-1 flex flex-col justify-center md:mt-[60px] md:ml-[-20px]">
        {/* Left: Headline and Subtext */}
        <h1 className="font-black tracking-tight text-2xl md:text-4xl leading-snug md:leading-tight text-black mb-4" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 700}}>
          Find people <span role="img" aria-label="Handshake">🤝</span> nearby<br />
          who care about <span role="img" aria-label="Glitter Heart">💖</span><br />
          what you care about
        </h1>
        <p className="text-lg md:text-xl text-black font-normal mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
          A place where you can connect with people<br />
          who share your interests and passions
        </p>

        {/* Email Component */}
        <EmailSignupForm />
      </div>
      
      {/* Cards: Overlapping images for PC view */}
      <div className="relative z-10 flex-1 hidden md:flex justify-center items-center md:mt-[0px] md:mr-[-20px]">
        <div className="relative h-[400px] md:h-[500px] w-full max-w-xl">
          <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-2xl overflow-hidden border border-gray-300 shadow-md">
            <Image
              src="/images/Screenshot 2025-04-29 at 1.22.18 AM.png"
              alt="My Crews UI"
              fill
              className="object-cover rounded-2xl"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/Text Behind Image (5).png"
              alt="Thank you Viviks"
              fill
              className="object-cover rounded-2xl"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
      {/* Mobile: Overlapping images */}
      <div className="relative z-10 w-full flex justify-center items-center md:hidden mt-[-10px]">
        <div className="relative h-[320px] w-full max-w-[340px]">
          <div className="absolute top-0 right-0 w-[90%] h-[90%] rounded-2xl overflow-hidden border border-gray-300 shadow-md">
            <Image
              src="/images/Screenshot 2025-04-29 at 1.22.18 AM.png"
              alt="My Crews UI"
              fill
              className="object-cover rounded-2xl"
              sizes="100vw"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-[70%] h-[70%] rounded-2xl overflow-hidden border-4 border-white shadow-lg">
            <Image
              src="/images/Text Behind Image (5).png"
              alt="Thank you Viviks"
              fill
              className="object-cover rounded-2xl"
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
