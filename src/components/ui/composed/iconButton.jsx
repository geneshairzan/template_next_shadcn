import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";
import Icon from "./icon";
import { Button } from "../button";

// This defines classes for both `variant` and `color`

export default function IconButton({ className, variant, color, name, size, loading, children, ...props }) {
  return (
    <Button className="" variant="outline">
      <Icon name={name} color={variant == "contained" ? "white" : color ?? "grey"} size={size} />
    </Button>
  );
}

export { buttonVariants };
