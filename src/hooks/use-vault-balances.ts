import { useQuery } from '@tanstack/react-query'
import { readContract } from '@wagmi/core'
import { zeroAddress } from 'viem'
import { useAccount } from 'wagmi'

import { config } from '@/lib/config'
import { vaultMap } from '@/lib/constants'
import { getSpotPrice } from '@/lib/queries/get-spot-price'
import { fromBigNumber } from '@/lib/utils'

import { vaultBaseAbi } from '@/codegen'

export const useVaultBalances = () => {
  const { address: walletAddress } = useAccount()
  const { data: vaultBalances } = useQuery({
    queryKey: ['vaultBalances', walletAddress],
    queryFn: () =>
      Promise.all(
        Object.values(vaultMap).map(
          async ({ vaultAddress, chain, depositAddress }, i) => {
            const underlyingPrice = await getSpotPrice(depositAddress)
            return {
              balance: walletAddress
                ? await readContract(config as any, {
                    address: vaultAddress,
                    abi: vaultBaseAbi,
                    functionName: 'balanceOf',
                    chainId: chain.id,
                    args: [walletAddress],
                  })
                    .then((balance) =>
                      readContract(config as any, {
                        address: vaultAddress,
                        abi: vaultBaseAbi,
                        functionName: 'previewRedeem',
                        chainId: chain.id,
                        args: [balance],
                      })
                    )
                    .then(
                      (underlyingBalance) =>
                        fromBigNumber(underlyingBalance) * underlyingPrice
                    )
                : 0,
              tvl: await readContract(config as any, {
                address: vaultAddress,
                abi: vaultBaseAbi,
                functionName: 'totalAssets',
                chainId: chain.id,
              }).then((tvl) => fromBigNumber(tvl) * underlyingPrice),
              vault: Object.keys(vaultMap)[i],
            }
          }
        )
      ),
  })

  return vaultBalances
}
