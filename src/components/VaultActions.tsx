'use client'

import Image from 'next/image'
import { useState } from 'react'

import { BigIntInput } from '@/components/BigIntInput'

import { cn, formatCurrency, formatNumber, fromBigNumber } from '@/lib/utils'

import { Button } from './ui/button'

export const VaultActions = () => {
  const [state, setState] = useState<'deposit' | 'withdraw'>('deposit')
  const [amount, setAmount] = useState('')
  return (
    <div className="flex flex-col gap-6 py-6 items-center">
      <div className="flex gap-4 w-full justify-center">
        <button
          className={cn(
            'text-2xl font-bold px-4',
            state === 'deposit'
              ? 'border-b-2 border-[#F9F9F2]'
              : 'text-gray hover:text-[#F9F9F2]'
          )}
          onClick={() => setState('deposit')}
        >
          DEPOSIT
        </button>
        <button
          className={cn(
            'text-2xl font-bold px-4',
            state === 'withdraw'
              ? 'border-b-2 border-[#F9F9F2]'
              : 'text-gray hover:text-[#F9F9F2]'
          )}
          onClick={() => setState('withdraw')}
        >
          WITHDRAW
        </button>
      </div>
      <div className="flex gap-3">
        <div className="bg-[#1F1F1D] border border-[#3B3B39] rounded-[4px] p-4 flex flex-col w-[467px]">
          <div className="flex justify-between items-center w-full">
            <BigIntInput
              value={amount}
              onChange={(value) => setAmount(value)}
              placeholder="0.00"
            />
            <div className="flex flex-col font-light w-[128px]">
              <p className="text-gray">You pay</p>
              <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031"
                  alt="dai"
                  height={20}
                  width={20}
                />
                <p>{state === 'deposit' ? 'DAI' : 'aDAI'}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="text-sm flex items-center gap-1 font-light">
              <p className="text-gray">Balances: </p>
              <p>
                {formatNumber(100)} {state === 'deposit' ? 'DAI' : 'aDAI'}
              </p>
              <p className="text-gray">/ {formatCurrency(100)}</p>
            </div>
            <div className="flex gap-0.5 text-sm font-light">
              <button className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out">
                25%
              </button>
              <button className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out">
                50%
              </button>
              <button className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out">
                75%
              </button>
              <button className="px-2 py-0.5 border border-[#F9F9F2] rounded-[4px] hover:bg-[#F9F9F2] hover:text-[#0B0B0A] transition-colors duration-300 ease-in-out">
                MAX
              </button>
            </div>
          </div>
        </div>
        <Image src="/icons/divider.svg" height={136} width={32} alt="divider" />
        <div className="bg-[#1F1F1D] border border-[#3B3B39] rounded-[4px] p-4 flex flex-col w-[467px]">
          <div className="flex justify-between items-center w-full">
            <p className="text-[64px] font-bold">
              {formatNumber(fromBigNumber(amount))}
            </p>
            <div className="flex flex-col font-light w-[128px]">
              <p className="text-gray">You receive</p>
              <div className="border border-[#3B3B39] rounded-[4px] py-2 px-3 flex items-center gap-2">
                <img
                  src="https://cryptologos.cc/logos/multi-collateral-dai-dai-logo.png?v=031"
                  alt="dai"
                  height={20}
                  width={20}
                />
                <p>{state === 'deposit' ? 'aDAI' : 'DAI'}</p>
              </div>
            </div>
          </div>
          {state === 'deposit' && (
            <div className="flex justify-between items-center">
              <p className="text-sm font-light text-gray">
                aDai is the receipt token for your staked DAI
              </p>
            </div>
          )}
        </div>
      </div>
      <div className="w-fit">
        <Button className='w-[160px]'>{state.toUpperCase()}</Button>
      </div>
    </div>
  )
}
