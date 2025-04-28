import type { Metadata } from "next";
import { Geist, Geist_Mono, Anton, Dela_Gothic_One } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anton = Anton({
  weight: "400",
  variable: "--font-anton",
  subsets: ["latin"],
});

const delaGothic = Dela_Gothic_One({
  weight: "400",
  variable: "--font-dela-gothic",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vivik - Find People Nearby",
  description: "Find people nearby, who care about what you care about.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${anton.variable} ${delaGothic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
