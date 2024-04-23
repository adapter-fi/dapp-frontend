import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { headers } from 'next/headers'

import { cookieToInitialState } from 'wagmi'

import { config } from '@/lib/config'

import '@/app/globals.css'
import Providers from '@/app/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AdapterFi',
  description: 'TBD',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const initialState = cookieToInitialState(config, headers().get('cookie'))
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers initialState={initialState}>{children}</Providers>
      </body>
    </html>
  )
}
