import * as React from 'react'
import Link from 'next/link'

function Footer() {
  return (
    <footer className="w-full bg-black pt-8 pb-4 px-4 md:px-16 flex flex-col gap-4">
      {/* Main row: logo left, social right */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-start md:items-start gap-1">
          <span className="font-black text-2xl tracking-tight text-white" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 900}}>VIVIK</span>
          <span className="text-xs text-white/70 mt-1">© 2025 Vivik. All rights reserved.</span>
        </div>
        <nav className="flex items-center gap-6 text-white">
          <Link href="https://x.com/quillzen" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.92c-.8.36-1.66.6-2.56.71a4.48 4.48 0 0 0 1.97-2.48 9.03 9.03 0 0 1-2.85 1.09A4.49 4.49 0 0 0 12 9.54c0 .35.04.68.1 1A12.8 12.8 0 0 1 3.1 4.93a4.51 4.51 0 0 0 1.39 6.01c-.73-.02-1.41-.22-2-.55v.06a4.5 4.5 0 0 0 3.6 4.42c-.33.09-.67.14-1.03.14-.25 0-.49-.02-.73-.07.5 1.55 1.96 2.68 3.68 2.71A9.04 9.04 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.77 12.77 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.37-.02-.55.8-.57 1.5-1.3 2.05-2.12z"></path></svg>
          </Link>
          <Link href="https://instagram.com/quilledzen" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
          </Link>
          <Link href="https://linkedin.com/in/anmolzenquill" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 transition-colors">
            <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"></path></svg>
          </Link>
        </nav>
      </div>

    </footer>
  )
}

export { Footer }
