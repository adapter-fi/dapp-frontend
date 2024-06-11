'use client'

import Image from 'next/image'

import { ColumnDef } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { ArrowUp } from 'lucide-react'

export type Vault = {
  data: {
    name: string
    type: string
    protocolURI: string
    logoURI: string
  }
  underlyingAPR: number
  autocompoundedAPY: number
  points: any
  holdings: any
  deposits: any
}

export const columns: ColumnDef<Vault>[] = [
  {
    accessorKey: 'data',
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
          VAULT
        </button>
      )
    },
    cell: ({ row }) => {
      const vaultData: Vault['data'] = row.getValue('data')
      return (
        <div className="flex gap-1 relative">
          <img src={vaultData.logoURI} height={48} width={48} alt="logo" />
          <Image
            src="/brand/logo.svg"
            height={16}
            width={16}
            alt="logo"
            className="absolute left-[-3px] top-[-3px]"
          />
          <div className="flex flex-col gap-1">
            <p>{vaultData.name}</p>
            <div className="flex items-center gap-0.5">
              <p className="px-1 rounded-[4px] bg-[#F9F9F2] text-[#125AFA]">
                {vaultData.type}
              </p>
              <img
                src={vaultData.protocolURI}
                height={24}
                width={24}
                alt="protocol"
              />
            </div>
          </div>
        </div>
      )
    },
  },
  {
    accessorKey: 'underlyingAPR',
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
          UNDERLYING APR
        </button>
      )
    },
    cell: ({ row }) => `${row.getValue('underlyingAPR')}%`,
  },
  {
    accessorKey: 'autocompoundedAPY',
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
          AUTOCOMPOUNDED APY
        </button>
      )
    },
    cell: ({ row }) => `${row.getValue('autocompoundedAPY')}%`,
  },
  // {
  //   accessorKey: 'points',
  //   header: ({ column }) => {
  //     return (
  //       <button
  //         onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
  //         className={cn(
  //           'flex gap-2 items-center ml-[-25px]',
  //           !column.getIsSorted() && 'text-gray'
  //         )}
  //       >
  //         <ArrowUp
  //           size={12}
  //           className={cn(
  //             'transition duration-300',
  //             column.getIsSorted() === 'desc' && 'rotate-180',
  //             !column.getIsSorted() && 'opacity-0'
  //           )}
  //         />
  //         POINTS
  //       </button>
  //     )
  //   },
  // },
  {
    accessorKey: 'holdings',
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
          YOUR DEPOSITS
        </button>
      )
    },
  },
  {
    accessorKey: 'deposits',
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
          TOTAL DEPOSITS
        </button>
      )
    },
  },
]
