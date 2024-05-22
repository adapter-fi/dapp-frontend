'use client'

import { useAccountEffect, useDisconnect } from 'wagmi'

export const DisableAutoconnect = () => {
  const { disconnect } = useDisconnect()
  useAccountEffect({
    onConnect({ isReconnected, address }) {
      if (isReconnected) {
        disconnect()
        return
      }
    },
  })
  return null
}
