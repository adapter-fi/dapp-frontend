import { Address } from 'viem'

import { create } from 'zustand'

interface StateStore {
  allowModalClose: boolean
  setAllowModalClose: (allow: boolean) => void
  signedAddress: { address: Address; value: number }[] | undefined
  addSignedAddress: ({
    address,
    value,
  }: {
    address: Address
    value: number
  }) => void
  resetSignedAddress: () => void
  confetti: boolean
  setConfetti: (confetti: boolean) => void
  amount: string
  setAmount: (amount: string) => void
}

export const useStateStore = create<StateStore>((set) => ({
  allowModalClose: true,
  setAllowModalClose: (allow) => set({ allowModalClose: allow }),
  signedAddress: undefined,
  addSignedAddress: ({ address, value }) =>
    set(({ signedAddress }) => ({
      signedAddress: [...(signedAddress || []), { address, value }],
    })),
  resetSignedAddress: () => set({ signedAddress: undefined }),
  confetti: false,
  setConfetti: (confetti) => set({ confetti }),
  amount: '',
  setAmount: (amount) => set({ amount }),
}))
