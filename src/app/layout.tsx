import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/lib/config'
import { cn } from '@/lib/utils'

import '@/app/globals.css'
import Providers from '@/app/providers'

const primary = localFont({
  src: [
    {
      path: '../lib/fonts/PPNikkeiMaru-Light.otf',
      weight: '300',
    },
    {
      path: '../lib/fonts/PPNikkeiMaru-Regular.otf',
      weight: '400',
    },
    {
      path: '../lib/fonts/PPNikkeiMaru-Ultrabold.otf',
      weight: '700',
    },
  ],
  variable: '--font-primary',
})

export const metadata: Metadata = {
  title: 'AdapterFi',
  description: 'Automated strategies for blue-chip DeFi protocols',
  openGraph: {
    title: 'AdapterFi',
    description: 'Automated strategies for blue-chip DeFi protocols',
    url: 'https://adapter.fi',
    siteName: 'AdapterFi',
    images: [
      {
        url: 'https://adapter.fi/brand/logo.png',
        width: 1200,
        height: 1200,
        alt: 'AdapterFi',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={cn(primary.variable, 'font-sans')}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  )
}
