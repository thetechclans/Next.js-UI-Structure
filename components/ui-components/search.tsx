"use client"

import type React from "react"

import { forwardRef } from "react"
import { cn } from "@/lib/utils"
import { Input, type InputProps } from "./input"
import { X, SearchIcon } from "lucide-react"
import { Button } from "./button"

export interface SearchProps extends Omit<InputProps, "onChange"> {
  onSearch?: (value: string) => void
  onChange?: (value: string) => void
  onClear?: () => void
  value?: string
}

const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({ className, onSearch, onChange, onClear, value = "", ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        onSearch?.(value)
      }
    }

    const handleClear = () => {
      onClear?.()
    }

    return (
      <div className={cn("relative", className)}>
        <SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          ref={ref}
          className={cn("pl-10 pr-10", className)}
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          type="search"
          {...props}
        />
        {value && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="absolute right-0 top-0 h-full w-10 rounded-l-none p-0"
            onClick={handleClear}
          >
            {/* <X className="h-4 w-4" /> */}
          </Button>
        )}
      </div>
    )
  },
)
Search.displayName = "Search"

export { Search }
