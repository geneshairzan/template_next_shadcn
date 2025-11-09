import clsx from "clsx";

export default function IconButton({ size = 24, color = "grey", name = "star", sx, ...props }) {
  function getColor() {
    if (["primary", "secondary"].some((prefix) => color.startsWith(prefix))) {
      return `text-${color}`;
    }
    if (["#", "rgb", "hsl"].some((prefix) => color.startsWith(prefix))) {
      return color;
    }
    return color;
  }

  return (
    <span
      className={clsx(
        "material-icons",
        getColor()
        // colorClass
      )}
      style={{
        fontSize: size,
        width: size,
        // color: inlineColor, // inline if hex/hsl/rgb
        color: getColor(), // inline if hex/hsl/rgb
        ...sx,
      }}
      {...props}
    >
      {name}
    </span>
  );
}
