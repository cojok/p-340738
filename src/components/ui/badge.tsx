
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
        // Adding new color variants based on the image
        purple: "border-transparent bg-[#E5DEFF] text-[#626293] hover:bg-[#d9d0ff]",
        yellow: "border-transparent bg-[#FEF7CD] text-[#7A740F] hover:bg-[#f8edab]",
        orange: "border-transparent bg-[#FEC6A1] text-[#95461F] hover:bg-[#fdb989]",
        green: "border-transparent bg-[#F2FCE2] text-[#3F7119] hover:bg-[#e8f8d3]",
        blue: "border-transparent bg-[#D3E4FD] text-[#0F4388] hover:bg-[#c0d8fc]",
        pink: "border-transparent bg-[#FFDEE2] text-[#A13950] hover:bg-[#ffc2c9]",
        peach: "border-transparent bg-[#FDE1D3] text-[#9B5233] hover:bg-[#fcd3bf]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
