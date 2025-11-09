import { useState } from "react";

export default function ControlledCheckbox({ label = "I agree to the terms", value, onChange }) {
  return (
    <div className="flex items-center space-x-2">
      <input
        id="agree"
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
      />
      <label htmlFor="agree" className="text-sm font-medium text-gray-700">
        {label}
      </label>
    </div>
  );
}
