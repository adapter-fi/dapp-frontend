import { Address } from 'viem'
import { mainnet, sepolia } from 'viem/chains'

import { testTokenAddress, testVaultAddress } from '@/codegen'

export const twitterUrl = 'https://x.com/Adapter_fi'
export const discordUrl = 'https://discord.gg/adapterfi'
export const telegramUrl = 'https://t.me/+HOHG2D4kXWMyNTEx'
export const githubUrl = 'https://github.com/adapter-fi'
export const docsUrl = 'https://adapter-fi.gitbook.io/adapter-finance'

export type SupportedVaults = 'eETH' | 'sUSDe'

interface VaultInfo {
  depositAddress: Address
  vaultAddress: Address
  migrationAddress: Address
  pendleMarketAddress?: Address
  logoURI: string
  protocolURI: string
  chainId: number
  type: string
}

// For Pendle migrationAddress is PT and depositAddress is underlying
export const vaultMap: Record<SupportedVaults, VaultInfo> = {
  eETH: {
    // depositAddress: '0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee',
    // migrationAddress: '0xc69ad9bab1dee23f4605a82b3354f8e40d1e5966',
    // vaultAddress: '0xTODO',
    depositAddress: testTokenAddress[sepolia.id],
    vaultAddress: testVaultAddress[sepolia.id],
    migrationAddress: testTokenAddress[sepolia.id],
    pendleMarketAddress: '0xf32e58f92e60f4b0a37a69b95d642a471365eae8',
    chainId: mainnet.id,
    logoURI:
      'https://assets.coingecko.com/coins/images/33049/standard/ether.fi_eETH.png?1700473063',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LST',
  },
  sUSDe: {
    // depositAddress: '0x9d39a5de30e57443bff2a8307a4256c8797a3497',
    // migrationAddress: '0x6c9f097e044506712b58eac670c9a5fd4bccef13',
    // vaultAddress: '0xTODO',
    depositAddress: testTokenAddress[sepolia.id],
    vaultAddress: testVaultAddress[sepolia.id],
    migrationAddress: testTokenAddress[sepolia.id],
    pendleMarketAddress: '0xd1d7d99764f8a52aff007b7831cc02748b2013b5',
    chainId: mainnet.id,
    logoURI:
      'https://assets.coingecko.com/coins/images/33669/standard/sUSDe-Symbol-Color.png?1716307680',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'Stable',
  },
}
