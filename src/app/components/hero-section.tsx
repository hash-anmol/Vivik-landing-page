"use client"
import * as React from 'react'
import Link from 'next/link'

import { WhiteGradientBlob } from "./white-gradient-blob"

function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-8 overflow-hidden">
    {/* // <section className="main-bg hero-bg relative w-full min-h-[80vh] flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-0 px-4 md:px-16 py-8 overflow-hidden"> */}

      <WhiteGradientBlob />
      <div className="relative z-10 flex-1 flex flex-col justify-center md:mt-[60px] md:ml-[-20px]">
        {/* Left: Headline and Subtext */}
        <h1 className="font-black tracking-tight text-2xl md:text-4xl leading-snug md:leading text-black mb-4" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 700}}>
          Find people <span role="img" aria-label="Handshake">🤝</span> nearby<br />
          who care about <span role="img" aria-label="Glitter Heart">💖</span><br />
          what you care about
        </h1>
        <p className="text-lg md:text-xl text-black font-normal mb-6" style={{fontFamily: 'Inter, sans-serif'}}>
          Join the VIVIK community and be the first to experience real friendships offline.<br />
          Click below to get started!
        </p>
        <Link href="/join-vivik">
          <button
            className="w-full md:w-auto px-7 py-3 rounded-full bg-black text-white font-extrabold text-lg shadow-lg transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:text-black active:scale-95 active:bg-yellow-400 active:text-black focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center gap-2"
            tabIndex={0}
            aria-label="Join VIVIK"
          >
            Join VIVIK <span className="text-lg" role="img" aria-label="rocket">🚀</span>
          </button>
        </Link>
      </div>
      {/* Video: Responsive Google Drive embed for both desktop and mobile */}
      <div className="relative z-10 flex-1 flex justify-center items-center md:mt-[0px] md:mr-[-20px] w-full">
        <div className="relative w-full max-w-xl h-[320px] md:h-[500px] rounded-2xl overflow-hidden border border-gray-300 shadow-md bg-black">
          <iframe
            src="https://drive.google.com/file/d/1nRonMxcS07QIF-sAn6ev2LIHsj79vVYp/preview"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full rounded-2xl"
            style={{ minHeight: 320, background: 'black' }}
            title="VIVIK Demo Video"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export { HeroSection }
