import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, arbitrum } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'AdapterFi',
  description: 'Automated strategies for blue-chip DeFi products',
  url: 'https://adapter.fi',
  icons: ['TBD'],
}

const chains = [mainnet, arbitrum] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
