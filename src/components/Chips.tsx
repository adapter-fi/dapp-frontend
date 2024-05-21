'use client'

import { ReactNode, useState } from 'react'

import { Table } from '@tanstack/react-table'

import { cn } from '@/lib/utils'

import { X } from 'lucide-react'

export const Chips = ({ table }: { table: Table<any> }) => {
  const [active1, setActive1] = useState(false)
  const [active2, setActive2] = useState(false)
  return (
    <div className="flex gap-2">
      <button
        className={cn(
          'rounded-md px-2 py-1 hover:bg-[#F7F3F2] flex items-center gap-2 font-bold h-8',
          active1
            ? 'bg-[#F9F9F2] text-[#251609]'
            : 'bg-transparent text-[#F9F9F2] hover:text-[#251609] border border-[#F9F9F2]'
        )}
        onClick={() => {
          setActive1(!active1)
          setActive2(false)
          if (table.getColumn('data')?.getFilterValue() === 'Stable') {
            table.getColumn('data')?.setFilterValue(undefined)
          } else {
            table.getColumn('data')?.setFilterValue('Stable')
          }
        }}
      >
        Stable
        {active1 && <X size={16} />}
      </button>
      <button
        className={cn(
          'rounded-md px-2 py-1 hover:bg-[#F7F3F2] flex items-center gap-2 font-bold h-8',
          active2
            ? 'bg-[#F9F9F2] text-[#251609]'
            : 'bg-transparent text-[#F9F9F2] hover:text-[#251609] border border-[#F9F9F2]'
        )}
        onClick={() => {
          setActive2(!active2)
          setActive1(false)
          if (table.getColumn('data')?.getFilterValue() === 'LST') {
            table.getColumn('data')?.setFilterValue(undefined)
          } else {
            table.getColumn('data')?.setFilterValue('LST')
          }
        }}
      >
        LST
        {active2 && <X size={16} />}
      </button>
    </div>
  )
}
