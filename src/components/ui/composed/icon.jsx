import clsx from "clsx";

export default function IconButton({ size = 24, color = "grey", name = "star", sx, className, btn = false, ...props }) {
  const isCssColor = color.startsWith("#") || color.startsWith("rgb") || color.startsWith("hsl");

  const classColor = !isCssColor && ["primary", "secondary", "destructive", "error"].includes(color) ? `text-${color}` : null;

  return (
    <span
      className={clsx("material-icons hover:cursor-pointer", classColor, className)}
      style={{
        fontSize: btn ? 18 : size,
        width: size,
        ...(isCssColor && { color }),
        ...sx,
      }}
      {...props}
    >
      {name}
    </span>
  );
}
