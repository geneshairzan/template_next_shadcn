import * as React from "react";
import { cn } from "@/lib/utils";

function Input({ className, type = "text", ...props }) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // base layout
        "h-9 w-full rounded-md border outline-none px-3 py-1 text-base md:text-sm",
        // default colors
        "border-gray-300 bg-transparent text-foreground transition-colors",
        // hover & focus states
        "hover:border-gray-400 focus:border-primary focus:ring-0",
        // disabled state
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}

export { Input };
