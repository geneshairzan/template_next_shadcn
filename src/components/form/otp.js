"use client";

import * as React from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Wrapper from "./_wraper";

export default function InputOTPControlled({ label, length = 4, className, helperText, value, onChange, ...props }) {
  return (
    <div className="flex items-center">
      <Wrapper label={label} helperText={helperText}>
        <InputOTP maxLength={length} value={value} onChange={(v) => onChange(v)}>
          <InputOTPGroup>
            {[...Array(length)].map((_, index) => (
              <InputOTPSlot index={index} />
            ))}
          </InputOTPGroup>
        </InputOTP>
      </Wrapper>
    </div>
  );
}
