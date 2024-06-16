import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { erc20Abi, erc4626Abi } from 'viem'
import { arbitrum, mainnet } from 'viem/chains'
import { sepolia } from 'wagmi/chains'

import { adapterVaultAbi } from '@/lib/abi/AdapterVault'
import { pendleMigratorAbi } from '@/lib/abi/PendleMigrator'

export default defineConfig({
  out: 'src/codegen.ts',
  contracts: [
    {
      name: 'TestToken',
      abi: erc20Abi,
      address: {
        [sepolia.id]: '0xaeac5c6e686646530a1663374d51348c7b5167bd',
      },
    },
    {
      name: 'TestVault',
      abi: erc4626Abi,
      address: {
        [sepolia.id]: '0xbad8c366c0ae38d86bd130ab744ada19862facbd',
      },
    },
    {
      name: 'VaultBase',
      abi: adapterVaultAbi,
    },
    {
      name: 'PendleMigrator',
      abi: pendleMigratorAbi,
      address: {
        [mainnet.id]: '0x33376eE814558e305c6279C66117499757C6F92f',
        [arbitrum.id]: '0xd8cF5dce611A34589E876dF9bF1A89a39e9E5187',
      },
    },
    {
      name: 'EZEthVault',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0xB8D5D36A40019f79b6B70a1932805476B2aCa6eF',
        [mainnet.id]: '0x1099ac45b80059733F719C7Dedf5a8ffCf02aAa8',
      },
    },
    {
      name: 'RSEthVault',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0x4521B903d65103Cd6265F898fE4ac3243884273f',
        [mainnet.id]: '0xB8D5D36A40019f79b6B70a1932805476B2aCa6eF',
      },
    },
    {
      name: 'WEEthVault',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0xd1Ea80934222a21e330DAe9ad0354B4C139ae49F',
      },
    },
    {
      name: 'RSWethVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x4521B903d65103Cd6265F898fE4ac3243884273f',
      },
    },
    {
      name: 'eEthVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0xd1Ea80934222a21e330DAe9ad0354B4C139ae49F',
      },
    },
    {
      name: 'USDe',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0xE0229dCFa4D84998484a27Ba01B4c2e78B1F02D3',
      },
    },
    {
      name: 'sUSDe',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x10Efb86d59eB8Ae3d4a7966B4ab9Ceb97e96D212',
      },
    },
    {
      name: 'eEthKarakVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x3af0b7d4691c4bcf2e3f9daf8ea5a24960fc30eb',
      },
    },
    {
      name: 'USDeKarakVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0xA63B7542C546Ee2258010C44a5B94dbD80cA038f',
      },
    },
  ],
  plugins: [react()],
})
