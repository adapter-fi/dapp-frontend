import { Address } from 'viem'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncateAddress = (address: Address | undefined) => {
  return `${address?.slice(0, 4)}...${address?.slice(-4)}`
}
