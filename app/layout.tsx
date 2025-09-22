import type { Metadata } from 'next'
import { NavBar } from '@/components/NavBar'
import { Footer } from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Alpha Group Investment | Institutional Advisory, Investments & Digital Assets',
    template: '%s | Alpha Group Investment'
  },
  description: 'Institutional-grade advisory, venture co-investments, and digital asset assurance for forward-thinking organizations. Working with leaders like Kinetic, OKX, The Anomaly Network, NeosLegal, and Chainforce.tech.',
  keywords: ['institutional advisory', 'venture capital', 'digital assets', 'investment', 'compliance', 'blockchain'],
  authors: [{ name: 'Alpha Group Investment' }],
  creator: 'Alpha Group Investment',
  publisher: 'Alpha Group Investment',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://alpha-investments.vercel.app',
    siteName: 'Alpha Group Investment',
    title: 'Alpha Group Investment | Institutional Advisory, Investments & Digital Assets',
    description: 'Institutional-grade advisory, venture co-investments, and digital asset assurance for forward-thinking organizations.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Alpha Group Investment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alpha Group Investment | Institutional Advisory, Investments & Digital Assets',
    description: 'Institutional-grade advisory, venture co-investments, and digital asset assurance for forward-thinking organizations.',
    images: ['/og-image.jpg'],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
