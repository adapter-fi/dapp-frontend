import { Address } from 'viem'
import { sepolia } from 'wagmi/chains'

import { testTokenAddress, testVaultAddress } from '@/codegen'

export const twitterUrl = 'https://x.com/Adapter_fi'
export const discordUrl = 'https://discord.gg/adapterfi'
export const telegramUrl = 'https://t.me/+HOHG2D4kXWMyNTEx'
export const githubUrl = 'https://github.com/adapter-fi'
export const docsUrl = 'https://adapter-fi.gitbook.io/adapter-finance'

type SupportedVaults = 'dai' | 'steth'

interface VaultInfo {
  depositAddress: Address
  vaultAddress: Address
}

export const vaultMap: Record<SupportedVaults, VaultInfo> = {
  dai: {
    depositAddress: testTokenAddress[sepolia.id],
    vaultAddress: testVaultAddress[sepolia.id],
  },
  steth: {
    depositAddress: '0x',
    vaultAddress: '0x',
  },
}
