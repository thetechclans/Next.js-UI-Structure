// components/ui/data-table.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { ReactNode, useState } from "react";
import SearchBox from "./search";
import { cn } from "@/lib/utils";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "../ui/dropdown-menu";
import { PaginatedNav } from "./pagination";

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

interface DataTableProps<T> {
  data: T[];
  icon?: ReactNode;
  columns: ColumnDef<T>[];
  keyField: keyof T;
  onEdit?: (item: T) => void;
  onDelete?: (id: any) => void;
  className?: string;
  pagination?: {
    currentPage: number;
    pageCount: number;
    hasNext?: boolean;
    hasPrevious?: boolean;
    onPageChange: (page: number) => void;
  };
  onSearch?: (query: string) => void;
  initialSearchQuery?: string;
  showdropdown?: boolean;
}

function truncateText(
  text: React.ReactNode,
  maxLength: number
): React.ReactNode {
  if (typeof text !== "string") return text;
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

export function DataTable<T extends any>({
  data,
  icon,
  columns,
  keyField,
  onEdit,
  onDelete,
  className,
  pagination,
  onSearch,
  initialSearchQuery,
  showdropdown,
}: DataTableProps<T>) {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className="space-y-4">
      {onSearch && (
        <div className="mb-4">
          <SearchBox onSearch={handleSearch} />
        </div>
      )}
      <div
        className={cn(
           "p-[1px] rounded-lg shadow-lg border border-gray-200 bg-white overflow-x-auto-hidden",
          className
        )}
      >
        <Table className="relative overflow-x-hidden shadow-lg">
          <TableHeader className="bg-gray-200 border-gray-400">
            <TableRow className="border-b border-gray-200 hover:bg-gray-50">
              {columns.map((column) => (
                <TableHead
                  key={column.header.toString()}
                  className="w-[100px] text-center items-center rounded-tl-xl text-xs font-medium border border-gray-300 text-gray-500 uppercase tracking-wider whitespace-nowrap"
                >
                  {column.header}   <span className="ml-1">{icon}</span>
                </TableHead>
              ))}
              {(onEdit || onDelete) && (
                <TableHead className="w-[100px] text-center border border-gray-300 text-xs font-medium text-gray-500 uppercase">
                  Actions
                </TableHead>
              )}
            </TableRow>
          </TableHeader>
          <TableBody className="bg-white divide-y divide-gray-200">
            {data.map((item, index) => (
              <TableRow
                key={index}
                className="transition-colors hover:bg-gray-50"
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.header.toString()}
                    className={cn(
                      "px-6 py-4 max-w-[200px] h-[60px] border border-gray-50 whitespace-nowrap overflow-hidden text-ellipsis text-center text-sm text-gray-900 truncate",
                      column.className
                    )}
                  >
                    {typeof column.accessor === "function"
                      ? truncateText(column.accessor(item), 50)
                      : truncateText(String(item[column.accessor]), 50)}
                  </TableCell>
                ))}
                {(onEdit || onDelete) && (
                  <TableCell className="w-[fit-content] border border-gray-50 text-center text-sm font-medium">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="bg-gray-200 h-9 rounded-lg text-gray-600">
                      Procedure<ChevronDown className="relative -rotate-90" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="space-y-1 w-[fit-content] bg-gray-200 border-none focus:border-none ">
                      {showdropdown && (
                        <>
                          {onEdit && (
                            <DropdownMenuItem onClick={() => onEdit(item)} className="hover:bg-gray-100">
                              Edit
                            </DropdownMenuItem>
                          )}
                          {onDelete && (
                            <DropdownMenuItem
                              onClick={() => onDelete(item[keyField])}
                              className="text-red-600"
                            >
                              Delete
                            </DropdownMenuItem>
                          )}
                        </>
                      )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
{pagination && (
  <PaginatedNav
    currentPage={pagination.currentPage}
    pageCount={pagination.pageCount}
    onPageChange={pagination.onPageChange}
  />
)}


    </div>
  );
}
