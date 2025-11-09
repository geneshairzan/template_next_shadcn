"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import UI from "@ui";

export default function InputWrapper({ label, helperText, children }) {
  return (
    <div className="group w-full ">
      {/* Label changes color when input inside Row is focused */}
      <label className={cn("capitalize mb-1 block text-sm font-medium transition-colors", "text-gray-600 group-has-[input:focus]:text-primary")}>{label}</label>
      {children}
      <UI.Text variant="small" color="muted">
        {helperText}
      </UI.Text>
    </div>
  );
}
