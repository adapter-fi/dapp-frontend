'use client'

import { ColumnDef } from '@tanstack/react-table'

import { cn, formatCurrency } from '@/lib/utils'

import { ArrowUp } from 'lucide-react'

export type Users = {
  name: string
  networth: number
  spot: number
}

export const columns: ColumnDef<Users>[] = [
  {
    accessorKey: 'spot',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center',
            !column.getIsSorted() ? 'text-gray -translate-x-[25px]' : 'text-white'
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
          SPOT
        </button>
      )
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center',
            !column.getIsSorted() ? 'text-gray -translate-x-[25px]' : 'text-white'
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
    accessorKey: 'networth',
    header: ({ column }) => {
      return (
        <button
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className={cn(
            'flex gap-2 items-center',
            !column.getIsSorted() ? 'text-gray -translate-x-[25px]' : 'text-white'
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
          NET WORTH
        </button>
      )
    },
    cell: ({ row }) => `${formatCurrency(row.getValue('networth'))}`,
  },
]
