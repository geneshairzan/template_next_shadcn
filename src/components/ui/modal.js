import React from "react";
import Stack from "./stack";

export default function FullscreenModal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" onClick={() => onClose()}>
      {children}
    </div>
  );
}

export function ModalContainer({ children, variant = "auto" }) {
  const variantClasses = {
    auto: "w-auto min-w-[480px]",
    wide: "w-[80%] h-[80%] ",
    fixed: "w-[960px]",
  };

  return (
    <div className={`relative h-80 p-2 bg-white dark:bg-neutral-900 overflow-auto z-20 ${variantClasses[variant]}`} onClick={(e) => e.stopPropagation()}>
      {children}
    </div>
  );
}
