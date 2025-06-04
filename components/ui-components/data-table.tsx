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

export function createColumn<T>(
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
  icon?: ReactNode;
  columns: ColumnDef<T>[];
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
  icon,
  columns,
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
      {searchbar ? (
        onSearch && (
          <div className="mb-4">
            <SearchBox onSearch={handleSearch} />
          </div>
        )
      ) : null}
      <div
        className={cn(
          "p-[1px] rounded-lg shadow-lg border border-gray-200 bg-white overflow-x-auto-hidden overflow-hidden", // Added overflow-hidden
          className
        )}
      >
        <Table className="relative overflow-x-hidden shadow-lg rounded-lg"> {/* Added rounded-lg */}
          <TableHeader className="bg-gray-200">
            <TableRow>
  {columns.map((column, idx) => (
    <TableHead
      key={column.header.toString()}
      className={cn(
        "text-center text-nowrap items-center text-xs font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap",
        idx === 0 && "rounded-tl-lg", // Top left
        idx === columns.length - 1 && !(onEdit || onDelete) && "rounded-tr-lg" // Top right if no actions
      )}
      style={
        idx === 0
          ? { borderTopLeftRadius: "0.5rem" }
          : idx === columns.length - 1 && !(onEdit || onDelete)
          ? { borderTopRightRadius: "0.5rem" }
          : undefined
      }
    >
      <div className="flex items-center justify-center">
        {icon && <div className="mr-2 text-black">{icon}</div>}
        {column.header}
      </div>
    </TableHead>
  ))}
  {(onEdit || onDelete) && (
    <TableHead
      className={cn(
        "w-[100px] text-center text-xs font-medium text-gray-500 uppercase rounded-tr-lg"
      )}
      style={{ borderTopRightRadius: "0.5rem" }}
    >
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
