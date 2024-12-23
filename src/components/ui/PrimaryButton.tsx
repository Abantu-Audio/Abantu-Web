import * as React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ButtonProps } from "@/components/ui/button"

export interface PrimaryButtonProps extends ButtonProps {
  fullWidth?: boolean;
  withArrow?: boolean;
}

export function PrimaryButton({ 
  className, 
  fullWidth = false,
  withArrow = false,
  size = "lg",
  children,
  ...props 
}: PrimaryButtonProps) {
  return (
    <Button
      size={size}
      className={cn(
        "bg-[#6F459F] hover:bg-[#6F459F]/90 text-white border-2 border-[#403554] shadow-[0_4px_0_0_rgba(51,51,51,1)] max-w-[200px]",
        fullWidth ? "w-full" : "sm:w-auto",
        className
      )}
      {...props}
    >
      {children}
      {withArrow && (
        <svg
          className="ml-2 w-5 h-5 md:w-6 md:h-6"
          fill="currentColor"
          viewBox="0 0 28 15"
        >
          <path d="M1.027 7.757L21.973 7.757L17.973 3.757L19.973 1.757L26.973 8.757L19.973 15.757L17.973 13.757L21.973 9.757L1.027 9.757V7.757Z" />
        </svg>
      )}
    </Button>
  )
} 