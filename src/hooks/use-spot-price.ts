import { useQuery } from '@tanstack/react-query'
import { Address } from 'viem'

import { getSpotPrice } from '@/lib/queries/get-spot-price'

export const useSpotPrice = (tokenAddress: Address | undefined) => {
  const { data: tokenPrice } = useQuery({
    queryKey: [tokenAddress, 'price'],
    queryFn: () => getSpotPrice(tokenAddress),
  })
  return tokenPrice || 0
}
