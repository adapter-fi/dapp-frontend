'use client'

import { ReactNode } from 'react'

import { useWeb3Modal } from '@web3modal/wagmi/react'
import { Chain } from 'viem'
import { mainnet } from 'viem/chains'
import { useAccount } from 'wagmi'

import { Button } from '@/components/ui/button'

export const NetworkGate = ({
  children,
  supportedChain = mainnet,
}: {
  children: ReactNode
  supportedChain?: Chain
}) => {
  const { open } = useWeb3Modal()
  const { chain, isConnected } = useAccount()
  if (!isConnected) {
    return <Button onClick={() => open()}>Connect Wallet</Button>
  }

  if (chain?.id !== supportedChain.id) {
    return (
      <Button onClick={() => open({ view: 'Networks' })}>
        Switch to {supportedChain.name}
      </Button>
    )
  }

  return <>{children}</>
}
