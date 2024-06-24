import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { erc20Abi, erc4626Abi } from 'viem'
import { arbitrum, mainnet } from 'viem/chains'
import { sepolia } from 'wagmi/chains'

import { adapterVaultAbi } from '@/lib/abi/AdapterVault'
import { pendleAdapterAbi } from '@/lib/abi/PendleAdapter'
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
      name: 'PendleAdapter',
      abi: pendleAdapterAbi,
      address: {
        [mainnet.id]: '0x7D87e88aA7000fe8c2C3B450844A2dc3A2312919',
        [arbitrum.id]: '0x7D87e88aA7000fe8c2C3B450844A2dc3A2312919',
      },
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
        [arbitrum.id]: '0x1099ac45b80059733F719C7Dedf5a8ffCf02aAa8',
        [mainnet.id]: '0x945f0cf0DDb3A20a4737d3e1f3cA43DE9C185440',
      },
    },
    {
      name: 'EZEthVaultDeprecated',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0xB8D5D36A40019f79b6B70a1932805476B2aCa6eF',
      },
    },
    {
      name: 'RSEthVault',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0xe0229dcfa4d84998484a27ba01b4c2e78b1f02d3',
        [mainnet.id]: '0x9A7b4dDA01F1580CD8e4E4849A3532C34a4C4081',
      },
    },
    {
      name: 'RSEthVaultDeprecated',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0x4521B903d65103Cd6265F898fE4ac3243884273f',
      },
    },
    {
      name: 'RSWethVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0xe6cD0b7800cA3e297b8fBd7697Df9E9F6A27f0F5',
      },
    },
    {
      name: 'eEthVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x521362A7C33107cCAAd13274e9BD7D7B7EC48375',
        [arbitrum.id]: '0x10efb86d59eb8ae3d4a7966b4ab9ceb97e96d212',
      },
    },
    {
      name: 'eEthVaultDeprecated',
      abi: adapterVaultAbi,
      address: {
        [arbitrum.id]: '0xd1Ea80934222a21e330DAe9ad0354B4C139ae49F',
      },
    },
    {
      name: 'USDe',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x02593d7Af1A77e3b2e3FDac9601a28169bF5C966',
      },
    },
    {
      name: 'DYADVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0xBe687E1f0fa123B3068fA96E33F5AfEa04B8ae29',
      },
    },
    {
      name: 'sUSDe',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x87506fad05178F701e6E3bC9697c5AB264f5ffE6',
      },
    },
    {
      name: 'eEthKarakVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x2a35f99CC322626e48AC80aB3aF4C5DE2A910ef4',
      },
    },
    {
      name: 'USDeKarakVault',
      abi: adapterVaultAbi,
      address: {
        [mainnet.id]: '0x61F6A5687983D4a61283c65006c36DCdEC67853D',
      },
    },
  ],
  plugins: [react()],
})
