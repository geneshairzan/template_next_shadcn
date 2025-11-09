import { useState } from "react";
import Wrapper from "./_wraper";

export default function NumberInput({ label, className, prefix, suffix, helperText, type = "text", value, onChange, ...props }) {
  const formatDisplay = (val) => {
    if (!val) return "";
    return val.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const handleChange = (e) => {
    const plain = e.target.value.replace(/\D/g, ""); // remove commas and non-digits
    onChange(plain);
  };

  const handleBlur = () => {
    // optional: remove leading zeros
    if (value) onChange(String(parseInt(value, 10)));
  };

  return (
    <Wrapper label={label} helperText={helperText}>
      <input
        type="text"
        inputMode="numeric"
        value={formatDisplay(value)} // formatted display
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Enter amount"
        className={`w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
          value && "text-right"
        }`}
        {...props}
      />
    </Wrapper>
  );
}
