import * as React from "react"
import type { Metadata } from "next"
import { Inter, Archivo_Black } from "next/font/google"
import "./globals.css"


//loads inter font and sets it as a variable 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", //system font fallback
})

//loads archivo black font and sets it as a variable
const archivoBlack = Archivo_Black({
  variable: "--font-archivo-black",
  subsets: ["latin"],
  weight: "400",
  display: "swap", //system font fallback
})

//metadata for the page
export const metadata: Metadata = {
  title: "VIVIK – Find Friends with similar interests, near you",
  description: "VIVIK helps you discover real friends and meet them IRL. Be the first to try the Gen Z friendship app for India.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-lemon antialiased ${inter.variable} ${archivoBlack.variable}`}
        style={{
          // Optionally add a noise overlay using a pseudo-element in CSS or here
        }}
      >
        {/* Header for all pages */}
        {React.createElement(require('./components/header').Header)}
        {children}
      </body>
    </html>
  )
}
