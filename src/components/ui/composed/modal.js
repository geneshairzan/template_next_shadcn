import React, { useEffect } from "react";
import Stack from "./stack";

export default function FullscreenModal({
  open,
  onClose = () => {},
  children,
  variant = "default",
  slideFrom = "center", // left | right | bottom | center
}) {
  // ESC key close
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center
        ${variant === "drawer" ? "justify-end" : "justify-center"}
        bg-black/70 backdrop-blur-sm
        transition-opacity duration-300
        ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <ModalContainer open={open} variant={variant} slideFrom={variant == "drawer" && slideFrom == "center" ? "right" : slideFrom}>
        {/* 🔑 heavy content ONLY renders when open */}
        {open && children}
      </ModalContainer>
    </div>
  );
}

function ModalContainer({ children, variant, slideFrom, open }) {
  const sizeClasses = {
    default: "w-full max-w-[320px]",
    full: "w-[80%] h-[80%]",
    drawer: "w-[320px] h-full",
  };

  const slideClasses = {
    left: open ? "translate-x-0" : "-translate-x-full",
    right: open ? "translate-x-0" : "translate-x-full",
    bottom: open ? "translate-y-0" : "translate-y-full",
    center: open ? "opacity-100 scale-100" : "opacity-0 scale-95",
  };

  return (
    <Stack
      onClick={(e) => e.stopPropagation()}
      className={`
        relative z-20 p-6 gap-4
        bg-white dark:bg-neutral-900
        overflow-auto
        transition-all duration-300 ease-out
        ${sizeClasses[variant]}
        ${slideClasses[slideFrom]}
      `}
    >
      {children}
    </Stack>
  );
}
