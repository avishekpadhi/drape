import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import { cn } from "../../lib/utils";

export const buttonVariants = cva(
  "bg-primary text-white btn flex items-center gap-2",
  {
    variants: {
      variant: {
        default: "hover:shadow-md focus:outline-none",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md text-xs",
        lg: "h-11 px-8 rounded-md",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    return (
      <button
        {...props}
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);
