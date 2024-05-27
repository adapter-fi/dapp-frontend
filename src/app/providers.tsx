'use client'

import React, { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import { State, WagmiProvider } from 'wagmi'

import { Confetti } from '@/components/Confetti'
import { Toaster } from '@/components/ui/toaster'
import { TooltipProvider } from '@/components/ui/tooltip'

import { config, projectId } from '@/lib/config'

import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

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
    <PostHogProvider client={posthog}>
      <WagmiProvider config={config} initialState={initialState}>
        <QueryClientProvider client={queryClient}>
          <TooltipProvider delayDuration={0}>
            {children}
            <Toaster />
            <Confetti />
          </TooltipProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </PostHogProvider>
  )
}
