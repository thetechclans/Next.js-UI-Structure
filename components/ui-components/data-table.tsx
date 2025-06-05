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
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "../ui/dropdown-menu";
import { PaginatedNav } from "./pagination";

export interface ColumnDef<T> {
  header: string;
  accessor: keyof T | ((item: T) => React.ReactNode);
  className?: string;
}

export default function createColumn<T>(
  header: string,
  accessor: keyof T | ((item: T) => React.ReactNode)
) {
  return {
    header,
    accessor,
  };
}

interface DataTableProps<T> {
  data: T[];
  columns: ColumnDef<T>[];
  icon?: ReactNode;
  keyField: keyof T;
  searchbar?: boolean;
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
  columns,
  icon,
  keyField,
  onEdit,
  onDelete,
  className,
  pagination,
  onSearch,
  searchbar,
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
      {searchbar
        ? onSearch && (
            <div className="mb-4">
              <SearchBox onSearch={handleSearch} />
            </div>
          )
        : null}
      <div
        className={cn(
          "w-full max-w-[95vw] border rounded-lg overflow-x-hidden mx-auto text-style",
          className
        )}
      >
        <div className="overflow-x-hidden">
          <Table className="w-full min-w-[600px]">
            <TableHeader className="bg-gray-100">
              <TableRow>
                {columns.map((column, idx) => (
                  <TableHead
                    key={column.header}
                    className={cn(
                      "px-3 py-2 text-xs font-medium text-gray-600 border-r border-gray-200 uppercase whitespace-nowrap",
                      idx === 0 && "rounded-tl-lg",
                      idx === columns.length - 1 &&
                        !(onEdit || onDelete) &&
                        "rounded-tr-lg"
                    )}
                  >
                    <div className="flex items-center justify-center text-xs space-x-1">
                      {column.header}
                      {icon && <span className="ml-1">{icon}</span>}
                    </div>
                  </TableHead>
                ))}
                {(onEdit || onDelete) && (
                  <TableHead className="px-3 py-2 w-[80px] text-xs font-medium text-center text-gray-600 uppercase whitespace-nowrap rounded-tr-lg">
                    Actions
                  </TableHead>
                )}
              </TableRow>
            </TableHeader>
            <TableBody className="bg-white divide-y divide-gray-200">
              {data.map((item) => (
                <TableRow
                  key={String(item[keyField])}
                  className="transition-colors hover:bg-gray-50"
                >
                  {columns.map((column) => (
                    <TableCell
                      key={`${item[keyField]}-${column.header}`}
                      className={cn(
                        "px-3 py-2 text-sm text-gray-700 text-center border border-t-none border-gray-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]",
                        column.className
                      )}
                      title={
                        typeof column.accessor === "function"
                          ? String(column.accessor(item))
                          : String(item[column.accessor])
                      }
                    >
                      {typeof column.accessor === "function"
                        ? truncateText(String(column.accessor(item)), 30)
                        : truncateText(String(item[column.accessor]), 30)}
                    </TableCell>
                  ))}
                  {(onEdit || onDelete) && (
                    <TableCell className="px-3 py-2 text-sm text-gray-700 text-center border border-t-none border-gray-50 whitespace-nowrap overflow-hidden text-ellipsis max-w-[180px]">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            // size="sm"
                            className="h-7 px-2 text-gray-600 hover:bg-gray-200"
                          >
                            {/* <span className="sr-only"></span> */}
                            Procedure
                            <ChevronDown className="h-3.5 w-3.5" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent
                          align="end"
                          className="w-40 bg-white shadow-md"
                        >
                          {onEdit && (
                            <DropdownMenuItem
                              onClick={() => onEdit(item)}
                              className="text-sm cursor-pointer hover:bg-gray-100"
                            >
                              Edit
                            </DropdownMenuItem>
                          )}
                          {onDelete && (
                            <DropdownMenuItem
                              onClick={() => onDelete(item[keyField])}
                              className="text-sm cursor-pointer text-red-600 hover:bg-red-50"
                            >
                              Delete
                            </DropdownMenuItem>
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
