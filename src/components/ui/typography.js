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
  ...props
}) {
  // 👇 Variants control base typography styles
  const variantMap = {
    hero: "text-[36px]",
    title24: "text-[24px]",
    title: "text-[22px]",
    subtitle: "text-[18px]",
    body: "text-[16px]",
    small: "text-[14px]",
    caption: "text-[12px]",
    blockquote: "mt-6 border-l-2 pl-6 italic text-gray-700 dark:text-gray-300",
  };

  // 👇 Named color mapping
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-red-500",
    success: "text-green-500",
    default: "text-gray-800 dark:text-gray-200",
    muted: "text-gray-500",
    grey: "text-gray-800",
  };

  // 👇 Check if custom inline color
  const isCustomColor = /^#|rgb|hsl/.test(color);
  const colorClass = isCustomColor ? "" : colorMap[color] || `text-${color}`;
  return (
    <p
      className={clsx(
        "whitespace-nowrap //truncate",
        variantMap[variant],
        {
          "font-bold": bold,
          italic: variant !== "blockquote" && italic, // blockquote already italic
          underline,
          "text-center": center,
          "text-right": right,
        },
        colorClass,
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
}
