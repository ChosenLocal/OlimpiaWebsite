import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

const poppins = Poppins({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.olimpiabiohazard.com'),
  title: {
    default: "24/7 Biohazard Cleanup Portland | Olimpia's",
    template: "%s | Olimpia's",
  },
  description:
    "Professional biohazard cleanup, crime scene cleanup, and restoration services in Portland Metro. 24/7 emergency response. Discreet, compassionate service.",
  keywords: [
    "biohazard cleanup",
    "crime scene cleanup",
    "Portland restoration",
    "emergency cleanup",
    "unattended death cleanup",
  ],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Olimpia's Biohazard & Restoration",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 1200,
        alt: "Olimpia's Biohazard & Restoration Logo",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "24/7 Biohazard Cleanup Portland | Olimpia's",
    description: "Professional biohazard cleanup, crime scene cleanup, and restoration services in Portland Metro. 24/7 emergency response.",
    images: ["/logo.png"],
  },
  generator: 'v0.app',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta charSet="UTF-8" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
