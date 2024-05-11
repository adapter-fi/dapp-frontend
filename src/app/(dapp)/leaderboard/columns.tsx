'use client'

import Image from 'next/image'

import { ColumnDef } from '@tanstack/react-table'
import { Address } from 'viem'

import { cn, formatCurrency, formatNumber } from '@/lib/utils'

import { ArrowUp } from 'lucide-react'

export type Points = {
  rank: number
  name: Address
  value: number
  points: number
}

export const columns: ColumnDef<Points>[] = [
  {
    accessorKey: 'rank',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center',
            !column.getIsSorted() && 'text-gray'
          )}
        >
          <ArrowUp
            size={12}
            className={cn(
              'transition duration-300',
              column.getIsSorted() === 'desc' && 'rotate-180',
              !column.getIsSorted() && 'opacity-0'
            )}
          />
          RANK
        </button>
      )
    },
    cell: ({ row }) => {
      const rank: number = row.getValue('rank')
      if (rank === 1) {
        return (
          <div className="flex items-center gap-1">
            <Image src="/icons/gold.svg" width={48} height={48} alt="gold" />
            <p>1</p>
          </div>
        )
      } else if (rank === 2) {
        return (
          <div className="flex items-center gap-1">
            <Image
              src="/icons/silver.svg"
              width={48}
              height={48}
              alt="silver"
            />
            <p>2</p>
          </div>
        )
      } else if (rank === 3) {
        return (
          <div className="flex items-center gap-1">
            <Image
              src="/icons/bronze.svg"
              width={48}
              height={48}
              alt="bronze"
            />
            <p>3</p>
          </div>
        )
      } else {
        return <p>{rank}</p>
      }
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center ml-[-25px]',
            !column.getIsSorted() && 'text-gray'
          )}
        >
          <ArrowUp
            size={12}
            className={cn(
              'transition duration-300',
              column.getIsSorted() === 'desc' && 'rotate-180',
              !column.getIsSorted() && 'opacity-0'
            )}
          />
          NAME
        </button>
      )
    },
  },
  {
    accessorKey: 'value',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center ml-[-25px]',
            !column.getIsSorted() && 'text-gray'
          )}
        >
          <ArrowUp
            size={12}
            className={cn(
              'transition duration-300',
              column.getIsSorted() === 'desc' && 'rotate-180',
              !column.getIsSorted() && 'opacity-0'
            )}
          />
          VALUE LOCKED
        </button>
      )
    },
    cell: ({ row }) => `${formatCurrency(row.getValue('value'))}`,
  },
  {
    accessorKey: 'points',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center ml-[-25px]',
            !column.getIsSorted() && 'text-gray'
          )}
        >
          <ArrowUp
            size={12}
            className={cn(
              'transition duration-300',
              column.getIsSorted() === 'desc' && 'rotate-180',
              !column.getIsSorted() && 'opacity-0'
            )}
          />
          POINTS
        </button>
      )
    },
    cell: ({ row }) => `${formatNumber(row.getValue('points'))}`,
  },
]
