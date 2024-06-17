import { Address, Chain } from 'viem'
import { arbitrum, mainnet } from 'viem/chains'

import {
  eEthKarakVaultAddress,
  eEthVaultAddress,
  ezEthVaultAddress,
  rsEthVaultAddress,
  rsWethVaultAddress,
  sUsDeAddress,
  usDeAddress,
} from '@/codegen'

export const twitterUrl = 'https://x.com/Adapter_fi'
export const discordUrl = 'https://discord.gg/adapterfi'
export const telegramUrl = 'https://t.me/+HOHG2D4kXWMyNTEx'
export const githubUrl = 'https://github.com/adapter-fi'
export const docsUrl = 'https://adapter-fi.gitbook.io/adapter-finance'

export type SupportedVaults =
  | 'eETH-1'
  | 'sUSDe-1'
  | 'rsETH-1'
  | 'rswETH-1'
  | 'ezETH-1'
  | 'USDe-1'
  | 'eETH (Karak)-1'
  | 'USDe (Karak)-1'
  | 'ezETH-42161'
  | 'rsETH-42161'
  | 'eETH-42161'

interface VaultInfo {
  depositAddress: Address
  vaultAddress: Address
  migrationAddress: Address
  pendleMarketAddress?: Address
  logoURI: string
  protocolURI: string
  chain: Chain
  type: string
}

// For Pendle migrationAddress is PT and depositAddress is underlying
export const vaultMap: Record<SupportedVaults, VaultInfo> = {
  'eETH-1': {
    depositAddress: '0xcd5fe23c85820f7b72d0926fc9b05b43e359b7ee',
    migrationAddress: '0xc69ad9bab1dee23f4605a82b3354f8e40d1e5966',
    vaultAddress: eEthVaultAddress[mainnet.id],
    pendleMarketAddress: '0xf32e58f92e60f4b0a37a69b95d642a471365eae8',
    chain: mainnet,
    logoURI:
      'https://assets.coingecko.com/coins/images/33049/standard/ether.fi_eETH.png?1700473063',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LST',
  },
  'sUSDe-1': {
    depositAddress: '0x9d39a5de30e57443bff2a8307a4256c8797a3497',
    migrationAddress: '0x6c9f097e044506712b58eac670c9a5fd4bccef13',
    vaultAddress: sUsDeAddress[mainnet.id],
    pendleMarketAddress: '0xd1d7d99764f8a52aff007b7831cc02748b2013b5',
    chain: mainnet,
    logoURI:
      'https://assets.coingecko.com/coins/images/33669/standard/sUSDe-Symbol-Color.png?1716307680',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'Stable',
  },
  'rsETH-1': {
    depositAddress: '0xa1290d69c65a6fe4df752f95823fae25cb99e5a7',
    migrationAddress: '0xb05cabcd99cf9a73b19805edefc5f67ca5d1895e',
    vaultAddress: rsEthVaultAddress[mainnet.id],
    pendleMarketAddress: '0x4f43c77872db6ba177c270986cd30c3381af37ee',
    chain: mainnet,
    logoURI:
      'https://assets.coingecko.com/coins/images/33800/standard/Icon___Dark.png?1702991855',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'rswETH-1': {
    depositAddress: '0xfae103dc9cf190ed75350761e95403b7b8afa6c0',
    migrationAddress: '0x5cb12d56f5346a016dbba8ca90635d82e6d1bcea',
    vaultAddress: rsWethVaultAddress[mainnet.id],
    pendleMarketAddress: '0xa9355a5d306c67027c54de0e5a72df76befa5694',
    chain: mainnet,
    logoURI:
      'https://assets.coingecko.com/coins/images/34489/standard/rswETH_Icon.png?1706865484',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'ezETH-1': {
    depositAddress: '0xbf5495efe5db9ce00f80364c8b423567e58d2110',
    migrationAddress: '0xf7906f274c174a52d444175729e3fa98f9bde285',
    vaultAddress: ezEthVaultAddress[mainnet.id],
    pendleMarketAddress: '0xd8f12bcde578c653014f27379a6114f67f0e445f',
    chain: mainnet,
    logoURI:
      'https://assets.coingecko.com/coins/images/34753/standard/Ezeth_logo_circle.png?1713496404',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'USDe-1': {
    depositAddress: '0x4c9edd5852cd905f086c759e8383e09bff1e68b3',
    migrationAddress: '0xa0021ef8970104c2d008f38d92f115ad56a9b8e1',
    vaultAddress: usDeAddress[mainnet.id],
    pendleMarketAddress: '0x19588f29f9402bb508007feadd415c875ee3f19f',
    chain: mainnet,
    logoURI:
      'https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/787d0128-9d3a-498d-a5b3-a6941fc5c1d3.svg',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'Stable',
  },
  'eETH (Karak)-1': {
    depositAddress: '0x2dabcea55a12d73191aece59f508b191fb68adac',
    migrationAddress: '0x5e9e4bfd81c8c03f8289b827c9b92332789b6fe1',
    vaultAddress: eEthKarakVaultAddress[mainnet.id],
    pendleMarketAddress: '0x18bafcabf2d5898956ae6ac31543d9657a604165',
    chain: mainnet,
    logoURI:
      'https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/8ded2234-6bec-4ac4-ac49-509c33d22331.svg',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'USDe (Karak)-1': {
    depositAddress: '0xbe3ca34d0e877a1fc889bd5231d65477779aff4e',
    migrationAddress: '0x791c1e9d38029092e8ad1e252d0bb97261809a2c',
    vaultAddress: eEthKarakVaultAddress[mainnet.id],
    pendleMarketAddress: '0x1bcbdb8c8652345a5acf04e6e74f70086c68fefc',
    chain: mainnet,
    logoURI:
      'https://storage.googleapis.com/prod-pendle-bucket-a/images/uploads/055d863f-4d2f-4ca6-b8d2-1d626b4dce0e.svg',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'Stable',
  },
  'ezETH-42161': {
    depositAddress: '0x2416092f143378750bb29b79ed961ab195cceea5',
    migrationAddress: '0x8ea5040d423410f1fdc363379af88e1db5ea1c34',
    vaultAddress: ezEthVaultAddress[arbitrum.id],
    pendleMarketAddress: '0x5e03c94fc5fb2e21882000a96df0b63d2c4312e2',
    chain: arbitrum,
    logoURI:
      'https://assets.coingecko.com/coins/images/34753/standard/Ezeth_logo_circle.png?1713496404',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'rsETH-42161': {
    depositAddress: '0x4186bfc76e2e237523cbc30fd220fe055156b41f',
    migrationAddress: '0xafd22f824d51fb7eed4778d303d4388ac644b026',
    vaultAddress: rsEthVaultAddress[arbitrum.id],
    pendleMarketAddress: '0x6ae79089b2cf4be441480801bb741a531d94312b',
    chain: arbitrum,
    logoURI:
      'https://assets.coingecko.com/coins/images/33800/standard/Icon___Dark.png?1702991855',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
  'eETH-42161': {
    depositAddress: '0x35751007a407ca6feffe80b3cb397736d2cf4dbe',
    migrationAddress: '0x1c27ad8a19ba026adabd615f6bc77158130cfbe4',
    vaultAddress: eEthVaultAddress[arbitrum.id],
    pendleMarketAddress: '0x952083cde7aaa11ab8449057f7de23a970aa8472',
    chain: arbitrum,
    logoURI:
      'https://assets.coingecko.com/coins/images/33049/standard/ether.fi_eETH.png?1700473063',
    protocolURI:
      'https://www.pendle.finance/uploads/wp-content/uploads/2022/brandguide/logos/light-png/blue.png',
    type: 'LRT',
  },
}
