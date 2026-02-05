import { cn } from "@/utils/cn";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-none font-medium transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-secondary": variant === "primary",
            "border border-primary text-primary hover:bg-primary hover:text-white":
              variant === "outline",
            "text-primary hover:text-secondary bg-transparent": variant === "ghost",
            "h-9 px-4 text-sm": size === "sm",
            "h-12 px-8 text-base": size === "md",
            "h-14 px-10 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export { Button };
