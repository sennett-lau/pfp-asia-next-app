import '@/components/common/Header'
import Header from '@/components/common/Header'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })
const geomanist = localFont({
  src: [
    {
      path: '../font/geomanist-regular-webfont.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-geomanist',
})

export const metadata: Metadata = {
  title: 'HOME | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
  description:
    'PFPAsia is a 10K PFP project, with next-gen asset REDT Protocol. You can take a snapshot of this eye-catching PFPAsia avaters.',
  applicationName: 'PFPAsia Official Website',
  authors: [
    { name: 'PFPAsia' },
    { name: 'Sennett Lau (Capyyy)', url: 'https://sennettlau.me' },
  ],
  generator: 'Next.js',
  keywords: [
    'PFPAsia',
    'REDT Protocol',
    '10K PFP project',
    'NFT',
    'Web3',
    'REDT0',
    'REDT1',
    'token',
    'crypto',
    'ERC1111',
    'ERC7629',
  ],
  viewport: 'width=device-width, initial-scale=1.0',
  alternates: {
    canonical: 'https://pfpasia.com/',
    languages: {
      'en-US': 'https://pfpasia.com/',
    },
  },
  icons: ['https://pfpasia.com/assets/logo-pack/logo_128.png'],
  openGraph: {
    title: 'HOME | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
    description:
      'PFPAsia is a 10K PFP project, with next-gen asset REDT Protocol. You can take a snapshot of this eye-catching PFPAsia avaters.',
    images: [
      {
        url: 'https://pfpasia.com/assets/banner-pack/dan-banner-1.png',
        alt: 'PFPAsia',
        width: 3840,
        height: 2160,
      },
    ],
  },
  twitter: {
    title: 'HOME | PFPAsia - 10K PFP project with next-gen asset REDT Protocol',
    images: {
      url: 'https://pfpasia.com/assets/banner-pack/dan-banner-1.png',
      alt: 'PFPAsia',
      width: 3840,
      height: 2160,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${geomanist.variable} ${inter.className}`}>
        <Header />
        <main className='flex min-h-screen flex-col items-center justify-between'>
          {children}
        </main>
      </body>
    </html>
  )
}
