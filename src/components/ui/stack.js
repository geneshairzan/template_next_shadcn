import { twMerge } from "tailwind-merge";
import clsx from "clsx";

export default function Stack({ row = false, className = "", fs = false, spaced = false, center = false, onClick, children, style }) {
  const classes = twMerge(
    clsx(
      "flex",
      row ? "flex-row" : "flex-col",
      fs && "h-screen w-screen",
      spaced && "items-center justify-between",
      center && "items-center justify-center",
      onClick && "cursor-pointer",
      className
    )
  );

  return (
    <div className={classes} onClick={onClick} style={style}>
      {children}
    </div>
  );
}
