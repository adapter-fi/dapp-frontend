import { defineConfig } from '@wagmi/cli'
import { react } from '@wagmi/cli/plugins'
import { erc20Abi, erc4626Abi } from 'viem'
import { sepolia } from 'wagmi/chains'

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
      abi: erc4626Abi,
    }
  ],
  plugins: [react()],
})
