import { vaultMap } from '@/lib/constants'

const apiBaseUrl = 'https://api-v2.pendle.finance/core'

interface PendleMarketResponse {
  underlyingApy: number
  impliedApy: number
}

export const getPendleMarketData = async () => {
  const markets = Object.values(vaultMap).map((vaultData, i) => ({
    ...vaultData,
    name: Object.keys(vaultMap)[i],
  }))

  const marketData: PendleMarketResponse[] = await Promise.all(
    markets.map(({ chain, pendleMarketAddress }) =>
      fetch(`${apiBaseUrl}/v1/${chain.id}/markets/${pendleMarketAddress}`).then(
        (res) => res.json()
      )
    )
  )

  return marketData.map(({ underlyingApy, impliedApy }, i) => ({
    underlyingApy,
    impliedApy,
    ...markets[i],
  }))
}
