import { Address, formatUnits, parseUnits } from 'viem'

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const getLocale = () => {
  return typeof navigator !== 'undefined' ? navigator.language : 'en-US'
}

export const truncateAddress = (address: Address | undefined) => {
  return `${address?.slice(0, 4)}...${address?.slice(-4)}`
}

export const fromBigNumber = (
  number: bigint | string | undefined,
  decimals = 18
) => {
  if (!number || number === '.' || number === '0.') return 0
  if (typeof number === 'string') number = BigInt(number)
  return parseFloat(formatUnits(number, decimals))
}

export const toBigNumber = (number: number | string, decimals = 18) => {
  if (!number) return BigInt(0)
  return parseUnits(`${number}`, decimals)
}

export const formatNumber = (amount: number | string, decimals = 2): string => {
  const locale = getLocale()
  const numberForm = parseFloat(`${amount}`)

  return new Intl.NumberFormat([locale, 'en-US'], {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(numberForm)
}

export const formatCurrency = (amount: string | number = 0, decimals = 2): string => {
  const locale = getLocale()

  return new Intl.NumberFormat([locale, 'en-US'], {
    style: 'currency',
    currency: 'USD',
    currencyDisplay: 'symbol',
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount as number)
}

export const formatPercentage = (
  amount: number | string,
  decimals = 2
): string => {
  return `${formatNumber(amount, decimals)}%`
}