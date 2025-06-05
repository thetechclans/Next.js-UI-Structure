"use client"

import * as React from "react"
import { ChevronDown } from "lucide-react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { cva, VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Pagination } from "./pagination"
import { PaginatedNav } from "../ui-components/pagination"

const Accordion = AccordionPrimitive.Root

const accordionTriggerVariants = cva(
  "flex flex-1 text-md text-gray-600 items-center justify-between py-4 font-medium [&[data-state=open]>svg]:rotate-180",
  {
    variants: {
      transition: {
        default: "transition-transform duration-300",
        fade: "transition-opacity duration-500 ease-in-out",
        slide: "transition-transform duration-300 ease-in-out",
        scale: "transition-transform transform-gpu duration-200 ease-in-out hover:scale-105",
        bounce: "transition-transform duration-300 ease-out hover:animate-bounce",
      },
    },
    // defaultVariants: {
    //   transition: "default",
    // },
  }
)

export interface AccordionTriggerProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>,
    VariantProps<typeof accordionTriggerVariants> {
  children?: React.ReactNode
  icon?: React.ReactNode
}

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  AccordionTriggerProps
>(({ className, children, icon, transition, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(accordionTriggerVariants({ transition }), className)}
      {...props}
    >
      {children}
      {icon ?? (
        <ChevronDown className="ml-2 h-4 w-4 rotate-0 shrink-0 transition-transform duration-200" />
      )}
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = "AccordionTrigger"

export interface AccordionContentProps
  extends React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content> {
  children?: React.ReactNode
}

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  AccordionContentProps
>(({ className, children, ...props }, ref) => (
  <>
    <AccordionPrimitive.Content
      ref={ref}
      className="overflow-hidden w-full text-sm text-gray-700 transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
   
  </>
))
AccordionContent.displayName = "AccordionContent"

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
