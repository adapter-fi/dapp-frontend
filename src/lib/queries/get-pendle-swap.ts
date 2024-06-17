import { Address } from 'viem'

const apiBaseUrl = 'https://api-v2.pendle.finance/sdk/api'

export const getPendleSwap = async ({
  chainId,
  receiver,
  market,
  amount,
  tokenOut,
  slippage,
}: {
  chainId: number
  receiver: Address
  market: Address
  amount: string
  tokenOut: Address
  slippage: number
}) => {
  const res = await fetch(
    `${apiBaseUrl}/v1/swapExactPtForToken?chainId=${chainId}&receiverAddr=${receiver}&marketAddr=${market}&amountPtIn=${amount}&tokenOutAddr=${tokenOut}&slippage=${slippage}`
  ).then((res) => res.json())

  return {
    minTokenOut: res.contractCallParams[3].minTokenOut,
    limit: res.contractCallParams[4],
  }
}
