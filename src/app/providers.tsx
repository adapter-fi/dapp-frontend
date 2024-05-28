'use client'

import { Analytics } from '@vercel/analytics/react'
import React, { ReactNode, useEffect, useState } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { State, WagmiProvider } from 'wagmi'
import { mainnet } from 'wagmi/chains'

import { Confetti } from '@/components/Confetti'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

import { config, projectId } from '@/lib/config'

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  defaultChain: mainnet,
})

export default function Providers({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={0}>
          {mounted && children}
          <Toaster />
          <Confetti />
          <Analytics />
        </TooltipProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
