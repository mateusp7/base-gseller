'use client'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@gseller-monorepo/data-table'
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

import { createQueryString } from '@/utils/create-query-string'
import { PaginationButtons } from '@gseller-monorepo/pagination'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  totalItems: number
  isLoading: boolean
  noDataFoundMessage: string
  showPagination?: boolean
  skeletonLoading?: ReactNode
}

export function DataTable<TData, TValue>({
  columns,
  data,
  totalItems,
  isLoading,
  noDataFoundMessage,
  showPagination = true,
  skeletonLoading
}: DataTableProps<TData, TValue>) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const pathname = usePathname()

  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

  const page = searchParams.get('page') ?? '1'
  const perPage = searchParams.get('per_page') ?? '10'

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    autoResetPageIndex: false,
    manualPagination: true,
    pageCount: Math.ceil(totalItems / Number(perPage)),
    state: {
      pagination: {
        pageIndex: Number(page),
        pageSize: Number(perPage)
      },
      sorting,
      columnFilters
    },
    initialState: {
      pagination: { pageIndex: Number(page), pageSize: Number(perPage) }
    }
  })

  useEffect(() => {
    if (page === '1') {
      router.push(
        `${pathname}?${createQueryString({
          page: 1,
          per_page: perPage ?? null
        })}`
      )
    }
  }, [page, pathname, perPage, router])

  return (
    <div>
      <div className="overflow-hidden border rounded-md border-gray dark:border-black-80">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
                  return (
                    <TableHead key={header.id} className="last:text-right">
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
            {isLoading && (
              <TableRow>
                <TableCell colSpan={columns.length}>
                  <div className="flex flex-col gap-4">{skeletonLoading}</div>
                </TableCell>
              </TableRow>
            )}
            {!isLoading &&
              table?.getRowModel()?.rows?.length !== 0 &&
              table.getRowModel()?.rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            {!isLoading && table?.getRowModel()?.rows?.length === 0 && (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  {noDataFoundMessage}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {showPagination && (
        <div className="flex items-center justify-end py-4 space-x-2">
          <PaginationButtons
            hrefToPreviousButton={`${pathname}?${createQueryString({
              page: Number(page) - 1,
              per_page: perPage ?? null
            })}`}
            hrefToNextButton={`${pathname}?${createQueryString({
              page: Number(page) + 1,
              per_page: perPage ?? null
            })}`}
            isLoading={isLoading}
            page={page}
            pathname={pathname}
            perPage={perPage}
            totalItems={totalItems}
            className="justify-end"
          />
        </div>
      )}
    </div>
  )
}
