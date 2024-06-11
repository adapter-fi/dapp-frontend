import { Address } from 'viem'

export const getSpotPrice = async (tokenAddress: Address | undefined) => {
  if (!tokenAddress) throw new Error('No token Passed')

  const response = await fetch(
    `https://coins.llama.fi/prices/current/ethereum:${tokenAddress}?searchWidth=8h`
  )
  const result = await response.json()
  return (result.coins[`ethereum:${tokenAddress}`]?.price as number) ?? 0
}
