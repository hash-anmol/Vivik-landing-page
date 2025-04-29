'use client'

import * as React from 'react'

/**
 * A form that allows users to submit their email address
 * to get notified when the app is launched.
 */
function EmailSignupForm() {
  const [email, setEmail] = React.useState('')
  const [status, setStatus] = React.useState<null | 'success' | 'error'>(null)
  const [isLoading, setIsLoading] = React.useState(false)
  const [alreadySubmitted, setAlreadySubmitted] = React.useState(false)

  // When the component mounts, check if the user has already submitted their email address.
  // If they have, set the `alreadySubmitted` state to true.
  React.useEffect(() => {
    // Check if the email was already submitted
    const stored = localStorage.getItem('vivik_email_signup')
    if (stored) setAlreadySubmitted(true)
  }, [])

  // When the form is submitted, send a POST request to the Google Forms API
  // with the email address as the form data.
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus(null)
    setIsLoading(true)
    try {
      // The Google Forms API requires a POST request with the form data
      // encoded as a URL-encoded string.
      await fetch(
        'https://docs.google.com/forms/d/e/1FAIpQLSfBbqS_VYwIxDKaY1gMZuJHsaKZpP99h48idMqqHrKqXCKpdw/formResponse',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: `entry.964934136=${encodeURIComponent(email)}`
        }
      )
      setStatus('success')
      setEmail('')
      setAlreadySubmitted(true)
      localStorage.setItem('vivik_email_signup', '1')
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form className="flex flex-col gap-2 w-full max-w-lg" autoComplete="off" aria-label="Get notified form" onSubmit={handleSubmit}>
      <label htmlFor="hero-email" className="sr-only">Enter your email to get notified</label>
      <div className="flex flex-col md:flex-row w-full gap-3 md:gap-2">
        <input
          id="hero-email"
          type="email"
          autoComplete="email"
          required
          className="w-full md:w-auto flex-1 px-4 py-3 md:px-5 md:py-2.5 rounded-full border-2 border-black bg-white text-black placeholder-black/50 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 text-base md:text-lg transition-all"
          placeholder="Your email ✨"
          aria-label="Email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isLoading || alreadySubmitted}
        />
        <button
          type="submit"
          className="w-full md:w-auto px-5 py-3 md:px-7 md:py-2.5 rounded-full bg-black text-white font-extrabold text-base md:text-lg shadow-lg transition-all hover:-translate-y-1 hover:bg-yellow-400 hover:text-black active:scale-95 active:bg-yellow-400 active:text-black focus:outline-none focus:ring-2 focus:ring-black flex items-center justify-center gap-2"
          tabIndex={0}
          disabled={isLoading || !email || alreadySubmitted}
        >
          {isLoading ? 'Sending...' : <>Get notified <span className="text-lg" role="img" aria-label="rocket">🚀</span></>}
        </button>
      </div>
      <span className="block text-xs text-black/60 pl-1 mt-2">No spam, just good vibes when we launch! <span role="img" aria-label="sparkles">✨</span></span>
      {(status === 'success' || alreadySubmitted) && <div className="text-green-600 text-xs mt-2">Thank you! Your email has been recieved and you&apos;ll be notified at launch.</div>}
      {status === 'error' && <div className="text-red-600 text-xs mt-2">Something went wrong. Please try again.</div>}
    </form>
  )
}

export { EmailSignupForm }
