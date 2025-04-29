import * as React from 'react'

function TribeSection() {
  return (
    <section className="relative w-full bg-black py-16 px-4 md:px-0 flex flex-col items-center justify-center text-center overflow-hidden">
      
      <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-4" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 900}}>
        Ready to find your tribe? <span role="img" aria-label="Rocket">🚀</span>
      </h2>
      <p className="text-lg md:text-2xl text-white/80 font-normal mb-8 max-w-2xl" style={{fontFamily: 'Inter, sans-serif'}}>
        Launching soon near you!
      </p>
    </section>
  )
}

export { TribeSection }
