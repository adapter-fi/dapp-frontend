'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useAccount } from 'wagmi'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { cn } from '@/lib/utils'

import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([
    { id: 'deposits', desc: true },
  ])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([
    { id: 'network', value: ['Arbitrum One', 'Ethereum'] },
  ])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnVisibility,
      columnFilters,
    },
  })
  const router = useRouter()

  const { isConnected } = useAccount()

  useEffect(() => {
    if (!isConnected) {
      table.getColumn('holdings')?.toggleVisibility(false)
    } else {
      table.getColumn('holdings')?.toggleVisibility(true)
      table.setSorting([{ id: 'holdings', desc: true }])
    }
  }, [isConnected])

  const networkFilter = table
    .getColumn('network')
    ?.getFilterValue() as any as string[]

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <button
            className={cn(
              'px-2 py-1 rounded-[4px] font-light uppercase flex gap-1 items-center',
              networkFilter?.includes('Arbitrum One')
                ? 'bg-[#F7F3F2] text-[#251609]'
                : 'text-[#F9F9F2] bg-transparent border border-[#F9F9F2] hover:bg-[#F7F3F2] hover:text-[#251609]'
            )}
            onClick={() =>
              networkFilter?.includes('Arbitrum One')
                ? table
                    .getColumn('network')
                    ?.setFilterValue(
                      networkFilter?.filter((value) => value !== 'Arbitrum One')
                    )
                : table
                    .getColumn('network')
                    ?.setFilterValue((value: string[] | undefined) => [
                      ...(value || []),
                      'Arbitrum One',
                    ])
            }
          >
            Arbitrum{' '}
            {networkFilter?.includes('Arbitrum One') && <X size={18} />}
          </button>
          <button
            className={cn(
              'px-2 py-1 rounded-[4px] font-light uppercase flex gap-1 items-center',
              networkFilter?.includes('Ethereum')
                ? 'bg-[#F7F3F2] text-[#251609]'
                : 'text-[#F9F9F2] bg-transparent border border-[#F9F9F2] hover:bg-[#F7F3F2] hover:text-[#251609]'
            )}
            onClick={() =>
              networkFilter?.includes('Ethereum')
                ? table
                    .getColumn('network')
                    ?.setFilterValue(
                      networkFilter?.filter((value) => value !== 'Ethereum')
                    )
                : table
                    .getColumn('network')
                    ?.setFilterValue((value: string[] | undefined) => [
                      ...(value || []),
                      'Ethereum',
                    ])
            }
          >
            Ethereum {networkFilter?.includes('Ethereum') && <X size={18} />}
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Search className="border rounded-[4px] p-2" size={36} />
          <Input
            placeholder="Search Vaults..."
            className="h-8 px-2 text-black"
            value={(table.getColumn('data')?.getFilterValue() as string) ?? ''}
            onChange={(event) =>
              table.getColumn('data')?.setFilterValue(event.target.value)
            }
          />
        </div>
      </div>

      <Table className="text-[16px]">
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && 'selected'}
                onClick={() =>
                  router.push(
                    `/vaults/${(
                      row.getValue('data') as {
                        name: string
                        type: string
                        protocolURI: string
                        logoURI: string
                      }
                    ).name
                      .replace(' (', '(')
                      .toLocaleLowerCase()}`
                  )
                }
                className="cursor-pointer hover:bg-[#3B3B39]"
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      {table.getPageCount() > 1 && (
        <div className="flex gap-2 justify-end items-center mt-8">
          <Button
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </Button>
          <p>
            Page {table.getState().pagination.pageIndex + 1} of{' '}
            {table.getPageCount()}
          </p>
          <Button
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </Button>
        </div>
      )}
    </div>
  )
}
