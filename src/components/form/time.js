// NativeTimeInput.jsx
import React from "react";
import Wrapper from "./_wraper";

export default function NativeTimeInput({ label, helperText, value = "", onChange, className = "" }) {
  // value should be "HH:MM" or "".
  return (
    <Wrapper label={label} helperText={helperText}>
      <input
        type="time"
        value={value}
        onChange={(e) => onChange?.(e.target.value)} // plain "HH:MM"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </Wrapper>
  );
}
