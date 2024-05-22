'use client'

import React, { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { State, WagmiProvider } from 'wagmi'

import { DisableAutoconnect } from '@/components/DisableAutoconnect'
import { TooltipProvider } from '@/components/ui/tooltip'

import { config, projectId } from '@/lib/config'
import { Toaster } from '@/components/ui/toaster'

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
})

export default function Providers({
  children,
  initialState,
}: {
  children: ReactNode
  initialState?: State
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider delayDuration={0}>
          {children}
          <DisableAutoconnect />
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}
