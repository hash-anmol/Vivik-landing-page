"use client"
import * as React from 'react'
import Link from 'next/link'
import { Cross2Icon, HamburgerMenuIcon } from '@radix-ui/react-icons'

function Header() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="w-full flex items-center justify-between px-4 md:px-12 py-4 sticky top-0 z-50 bg-black/100 backdrop-blur-md shadow-lg border-b border-black/10">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white text-2xl md:text-3xl tracking-tight" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 900}}>VIVIK</Link>
      </div>
      
      <div className="flex items-center gap-2 md:gap-4">
        {/* Mobile Menu Button */}
        <button
          className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-yellow-100 focus:outline-none focus:ring-2 focus:ring-black"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <HamburgerMenuIcon className="w-6 h-6" />
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-0 left-0 w-screen h-screen z-[9999] bg-black/60 flex items-center justify-center"
          onClick={() => setMenuOpen(false)}
        >
          <div
              className="bg-white rounded-2xl shadow-xl w-[90vw] max-w-md p-6 flex flex-col gap-6 max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
            <div className="flex items-center justify-between mb-4">
              <div className="text-2xl font-black">Menu</div>
              <button
                className="text-2xl p-2 rounded-full hover:bg-black/10"
                onClick={() => setMenuOpen(false)}
                aria-label="Close Menu"
              >
                <Cross2Icon className="w-6 h-6" />
              </button>
            </div>
            <Link href="/" className="text-lg font-medium py-2 text-black" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link href="/our-story" className="text-lg font-medium py-2 text-black" onClick={() => setMenuOpen(false)}>Our Story</Link>
            <Link href="/contact-us" className="text-lg font-medium py-2 text-black" onClick={() => setMenuOpen(false)}>Contact Us</Link>
            <Link href="/progress-board" className="text-lg font-medium py-2 text-black" onClick={() => setMenuOpen(false)}>Progress Board</Link>
          </div>
        </div>
      )}
    </header>
  )
}

export { Header }
