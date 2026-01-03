"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import UI from "@ui";
import Wrapper from "./_wraper";

export default function InputWithLabel({ label, className, prefix, suffix, helperText, type = "text", ...props }) {
  return (
    <Wrapper label={label} helperText={helperText}>
      <UI.Row
        spaced
        className={cn(
          "gap-2 h-9 w-full items-center rounded-md border px-3 py-1 transition-colors",
          "border-gray-300 bg-transparent text-foreground",
          "hover:border-gray-400 has-[input:focus]:border-primary",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
      >
        {prefix}
        <input
          type={type}
          data-slot="input"
          className={cn(
            // Input should be visually clean
            "flex-1 bg-transparent outline-none border-none focus:outline-none text-base md:text-sm"
          )}
          {...props}
          onChange={(e) => props.onChange && props.onChange(e.target.value)}
        />
        {suffix}
      </UI.Row>
    </Wrapper>
  );
}

export { InputWithLabel };
