import clsx from "clsx";

export default function IconButton({ size = 24, color = "grey", name = "star", sx, ...props }) {
  const colorMap = {
    primary: "text-primary",
    secondary: "text-secondary",
    error: "text-red-500",
    success: "text-green-500",
    grey: "text-gray-500",
  };

  let colorClass = "";
  let inlineColor = undefined;

  // Detect if it's a CSS color (hex, rgb, hsl, etc.)
  const isCssColor =
    typeof color === "string" &&
    (/^#([0-9A-F]{3}){1,2}$/i.test(color) || // hex
      /^rgb/.test(color) || // rgb/rgba
      /^hsl/.test(color)); // hsl/hsla

  if (isCssColor) {
    // apply directly as inline color
    inlineColor = color;
  } else if (colorMap[color]) {
    // use mapped tailwind class (primary, secondary, etc.)
    colorClass = colorMap[color];
  } else if (/^[a-z]+(-\d{3})?$/.test(color)) {
    // tailwind color like "red-500"
    colorClass = `text-${color}`;
  } else {
    // fallback to default grey
    colorClass = colorMap.grey;
  }

  return (
    <span
      className={clsx("material-icons", colorClass)}
      style={{
        fontSize: size,
        width: size,
        color: inlineColor, // inline if hex/hsl/rgb
        ...sx,
      }}
      {...props}
    >
      {name}
    </span>
  );
}
