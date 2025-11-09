import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const poppins = Poppins({
  weight: ['600', '700'],
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.olimpiasbiohazard.com'),
  title: {
    default: 'Olimpia\'s Biohazard & Restoration | 24/7 Emergency Cleanup Portland',
    template: '%s | Olimpia\'s Biohazard'
  },
  description: 'Professional biohazard cleanup, crime scene cleanup, and restoration services in Portland Metro. 24/7 emergency response. Discreet, compassionate service.',
  keywords: ['biohazard cleanup', 'crime scene cleanup', 'Portland restoration', 'emergency cleanup', 'unattended death cleanup'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.olimpiasbiohazard.com',
    siteName: 'Olimpia\'s Biohazard & Restoration',
  },
  twitter: {
    card: 'summary_large_image',
  },
  verification: {
    google: 'TBD', // Add Google Search Console verification
  },
  robots: {
    index: true,
    follow: true,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  )
}
