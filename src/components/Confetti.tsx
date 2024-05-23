'use client'

import { useViewportSize } from '@mantine/hooks'
import ReactConfetti from 'react-confetti'

import { useStateStore } from '@/lib/store'

export const Confetti = () => {
  const { width, height } = useViewportSize()
  const { confetti } = useStateStore()
  if (confetti) {
    return <ReactConfetti width={width} height={height} style={{zIndex: 100}} />
  }
  return null
}
