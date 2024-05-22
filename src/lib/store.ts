import { create } from 'zustand'

interface StateStore {
  allowModalClose: boolean
  setAllowModalClose: (allow: boolean) => void
}

export const useStateStore = create<StateStore>((set) => ({
  allowModalClose: true,
  setAllowModalClose: (allow) => set({ allowModalClose: allow }),
}))
