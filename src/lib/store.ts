import { Address } from 'viem'

import { create } from 'zustand'

interface StateStore {
  allowModalClose: boolean
  setAllowModalClose: (allow: boolean) => void
  signedAddress: Address[] | undefined
  addSignedAddress: (address: Address) => void
  resetSignedAddress: () => void
}

export const useStateStore = create<StateStore>((set) => ({
  allowModalClose: true,
  setAllowModalClose: (allow) => set({ allowModalClose: allow }),
  signedAddress: undefined,
  addSignedAddress: (address) =>
    set(({ signedAddress }) => ({
      signedAddress: [...(signedAddress || []), address],
    })),
  resetSignedAddress: () => set({ signedAddress: undefined }),
}))
