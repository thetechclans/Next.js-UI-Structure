import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const labelVariants = cva(
  "font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
  {
    variants: {
      labelColor: {
        default: "bg-default",
        primary: "bg-primary",
        transparent: "bg-transparent",
        foreground: "bg-foreground",
      },
      size: {
        default: "md",
        sm: "sm",
        md: "md",
        lg: "lg",
        xl: "xl",
        "2xl": "2xl",
        "3xl": "3xl",
        "4xl": "4xl",
        "5xl": "5xl",
        "6xl": "6xl",
        "7xl": "7xl",
      },
    },
    defaultVariants: {
      labelColor: "default",
      size: "md",
    },
  }
);

export interface LabelProps
  extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>,
    VariantProps<typeof labelVariants> {
  required?: boolean;
}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ className, color, size, labelColor, required, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className
      )}
      aria-required={required}
      {...props}
    >
      {props.children}
      {required && <span className="text-destructive ml-1">*</span>}
    </label>
  );
});
Label.displayName = "Label";

export { Label };
