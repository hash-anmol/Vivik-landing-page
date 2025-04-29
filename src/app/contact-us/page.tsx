'use client'
import * as React from 'react'
import Link from 'next/link'
import { Footer } from '../components/footer'

function ContactUsPage() {
  const [isLoading, setIsLoading] = React.useState(false)
  const [status, setStatus] = React.useState<null | 'success' | 'error'>(null)

  return (
    <>
      <main className="min-h-[70vh] flex flex-col items-center justify-center bg-white/90 px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-black text-black mb-3 text-center" style={{fontFamily: 'Archivo Black, sans-serif', fontWeight: 900}}>
          Contact Us
        </h1>
        <p className="text-lg md:text-xl text-black/80 mb-8 text-center max-w-xl">
          We'd love to hear from you! Fill out the form below or reach out via email or social media.
        </p>
        <form
          className="w-full max-w-md flex flex-col gap-4 bg-white rounded-2xl shadow-lg p-6 border border-black/10"
          autoComplete="off"
          aria-label="Contact form"
          onSubmit={async (e) => {
            e.preventDefault()
            setStatus(null)
            setIsLoading(true)
            const form = e.currentTarget
            const formData = new FormData(form)
            const name = formData.get('name')?.toString() ?? ''
            const email = formData.get('email')?.toString() ?? ''
            const message = formData.get('message')?.toString() ?? ''
            try {
              const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, message })
              })
              if (res.ok) {
                setStatus('success')
                form.reset()
              } else {
                setStatus('error')
              }
            } catch {
              setStatus('error')
            } finally {
              setIsLoading(false)
            }
          }}
        >
          <label htmlFor="contact-name" className="text-sm font-medium text-black/80">Name</label>
          <input id="contact-name" name="name" type="text" required className="px-4 py-2 rounded-md border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="Your name" />
          <label htmlFor="contact-email" className="text-sm font-medium text-black/80">Email</label>
          <input id="contact-email" name="email" type="email" required className="px-4 py-2 rounded-md border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400" placeholder="you@email.com" />
          <label htmlFor="contact-message" className="text-sm font-medium text-black/80">Message</label>
          <textarea id="contact-message" name="message" required className="px-4 py-2 rounded-md border border-black/10 bg-white text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 min-h-[100px] resize-y" placeholder="Type your message..." />
          <button
            type="submit"
            className="mt-2 px-6 py-3 rounded-full bg-black text-white font-extrabold text-base shadow-lg transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:text-black active:scale-95 active:bg-yellow-400 active:text-black focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-60 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center gap-2 justify-center"><svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" /></svg> Sending...</span>
            ) : 'Send Message'}
          </button>
          {status === 'success' && <div className="text-green-600 text-sm mt-2">Message sent! We'll get back to you soon.</div>}
          {status === 'error' && <div className="text-red-600 text-sm mt-2">Something went wrong. Please try again.</div>}
        </form>
        <div className="mt-8 text-center text-black/70 text-sm">
          Or email us: <a href="mailto:hello@vivik.in" className="underline hover:text-yellow-500">anmolmalik.oss@gmail.com</a>
        </div>
        <div className="mt-4 flex justify-center gap-6">
          <Link href="https://x.com/quillzen" aria-label="Twitter" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-yellow-400 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M22.46 5.92c-.8.36-1.66.6-2.56.71a4.48 4.48 0 0 0 1.97-2.48 9.03 9.03 0 0 1-2.85 1.09A4.49 4.49 0 0 0 12 9.54c0 .35.04.68.1 1A12.8 12.8 0 0 1 3.1 4.93a4.51 4.51 0 0 0 1.39 6.01c-.73-.02-1.41-.22-2-.55v.06a4.5 4.5 0 0 0 3.6 4.42c-.33.09-.67.14-1.03.14-.25 0-.49-.02-.73-.07.5 1.55 1.96 2.68 3.68 2.71A9.04 9.04 0 0 1 2 19.54c-.29 0-.57-.02-.85-.05A12.77 12.77 0 0 0 8.29 21.5c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.37-.02-.55.8-.57 1.5-1.3 2.05-2.12z"></path></svg>
          </Link>
          <Link href="https://instagram.com/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-yellow-400 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5 5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm6 1a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path></svg>
          </Link>
          <Link href="https://www.linkedin.com/in/anmolzenquill/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="text-black/70 hover:text-yellow-400 transition-colors">
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.29c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.29h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.18-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v4.74z"></path></svg>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default ContactUsPage
