import { Address, erc20Abi } from 'viem'
import { useAccount, useReadContract } from 'wagmi'

export const useTokenBalance = (tokenAddress: Address | undefined) => {
  const { address: walletAddress } = useAccount()
  const { data: balance } = useReadContract({
    address: tokenAddress,
    functionName: 'balanceOf',
    abi: erc20Abi,
    args: [walletAddress as Address],
    query: {
      enabled: !!walletAddress && !!tokenAddress,
    },
  })
  return balance || 0n
}
