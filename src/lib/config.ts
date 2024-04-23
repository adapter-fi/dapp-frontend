import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const projectId = process.env.NEXT_PUBLIC_WALLETCONNECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'AdapterFi',
  description: 'TBD',
  url: 'https://adapter.fi',
  icons: ['TBD'],
}

const chains = [mainnet, sepolia] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
})
