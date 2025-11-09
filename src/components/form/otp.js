"use client";

import * as React from "react";

import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import Wrapper from "./_wraper";

export default function InputOTPControlled({ label, className, helperText, value, onChange, ...props }) {
  return (
    <Wrapper label={label} helperText={helperText}>
      <InputOTP maxLength={6} value={value} onChange={(v) => onChange(v)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </Wrapper>
  );
}
