'use client';

import { forwardRef, useId } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { Input, type InputProps } from "./input";
import React from "react";

export interface FormFieldProps extends InputProps {
  label?: string;
  required?: boolean;
  helperText?: string;
  className?: string;
  startIcon?: React.ReactNode; // Add support for Lucide icons
}

const FormField = forwardRef<HTMLInputElement, FormFieldProps>(
  ({ className, label, required = false, helperText, error, id, startIcon, ...props }, ref) => {
    const reactId = useId();
    const inputId = id || `input-${reactId}`;

    return (
      <div className={cn("space-y-1 mb-2", className)}>
        {label && (
          <Label htmlFor={inputId} required={required} aria-required={required}>
            {label}
          </Label>
        )}
        <div className="relative">
          {startIcon && React.isValidElement(startIcon) && (
            <div className="absolute inset-y-0 left-3 flex items-center">
              {React.cloneElement(
                startIcon as React.ReactElement<any>,
                {
                  className: cn(
                    (startIcon as React.ReactElement<any>).props.className,
                    "h-5 w-5 text-muted-foreground"
                  )
                }
              )}
            </div>
          )}
          <Input
            id={inputId}
            ref={ref}
            error={error}
            className={cn({
              "pl-10": startIcon,
            })}
            {...props}
          />
        </div>
        {helperText && !error && (
          <p className="text-xs text-muted-foreground">{helperText}</p>
        )}
      </div>
    );
  }
);

FormField.displayName = "FormField";

export { FormField };