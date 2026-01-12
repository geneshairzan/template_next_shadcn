import clsx from "clsx";

export default function Text({
  variant = "body",
  bold = false,
  italic = false,
  underline = false,
  center = false,
  right = false,
  color = "default",
  children,
  className,
  sx,
  ellipsis = false,
  as: Component = "p",
  ...props
}) {
  const variantMap = {
    hero: "text-[2em] font-bold leading-tight",
    title: "text-[1.125em] leading-snug",
    body: "text-[1em] leading-relaxed",
    small: "text-[0.875em]",
    caption: "text-[0.75em] uppercase tracking-wider",
    blockquote: "mt-6 border-l-2 pl-6 italic text-gray-700 dark:text-gray-300",
  };

  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-red-500",
    success: "text-green-500",
    default: "text-gray-800 dark:text-gray-200",
    muted: "text-gray-400",
    grey: "text-gray-400",
  };

  const isCustomColor = color?.startsWith("#") || color?.startsWith("rgb(") || color?.startsWith("hsl(");

  return (
    <Component
      className={clsx(
        variantMap[variant] ?? variantMap.body,
        !isCustomColor && colorMap[color],
        {
          "font-bold": bold,
          italic: italic && variant !== "blockquote",
          underline,
          "text-center": center && !right,
          "text-right": right,
          "truncate block max-w-full": ellipsis,
        },
        className
      )}
      style={{
        color: isCustomColor ? color : undefined,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
