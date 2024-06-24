import { Address } from 'viem'
import { arbitrum, mainnet } from 'viem/chains'

import { vaultMap } from '@/lib/constants'

const chainMap = {
  [mainnet.id]: 'ethereum',
  [arbitrum.id]: 'arbitrum',
}

export const getSpotPrice = async (
  tokenAddress: Address | undefined,
  chainId: keyof typeof chainMap = 1
) => {
  if (!tokenAddress) throw new Error('No token Passed')

  // Karak overrides since no price feed
  if (tokenAddress === vaultMap['eETH (Karak)-1'].depositAddress) {
    tokenAddress = '0x35fA164735182de50811E8e2E824cFb9B6118ac2' // eETH
  } else if (tokenAddress === vaultMap['USDe (Karak)-1'].depositAddress) {
    tokenAddress = '0x4c9EDD5852cd905f086C759E8383e09bff1E68B3' // USDe
  }

  // Dyad override
  if (tokenAddress === vaultMap['DYAD-1'].depositAddress) {
    tokenAddress = '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48' // USDC
  }

  const response = await fetch(
    `https://coins.llama.fi/prices/current/${chainMap[chainId]}:${tokenAddress}?searchWidth=8h`
  )
  const result = await response.json()
  return (
    (result.coins[`${chainMap[chainId]}:${tokenAddress}`]?.price as number) ?? 0
  )
}
