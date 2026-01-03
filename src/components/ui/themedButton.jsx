import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Spinner } from "./spinner";

// This defines classes for both `variant` and `color`
const buttonVariants = cva(
  "w-full transition-opacity cursor-pointer capitalize inline-flex gap-2 items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        contained: "text-white",
        outlined: "border",
        text: "bg-transparent shadow-none",
      },
      color: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 border-primary",
        secondary: "bg-secondary  hover:bg-secondary/80 border-secondary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 border-destructive",
        default: "bg-muted text-foreground hover:bg-muted/80 border-muted",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    compoundVariants: [
      {
        variant: "outlined",
        color: "primary",
        class: "bg-transparent text-primary border border-primary hover:bg-primary/10",
      },
      {
        variant: "text",
        color: "primary",
        class: "bg-transparent text-primary hover:bg-primary/10",
      },
      {
        variant: "outlined",
        color: "secondary",
        class: "bg-transparent text-secondary border border-secondary hover:bg-secondary/10",
      },
      {
        variant: "text",
        color: "secondary",
        class: "bg-transparent text-secondary hover:bg-secondary/10",
      },
    ],
    defaultVariants: {
      variant: "contained",
      color: "primary",
      size: "default",
    },
  }
);

export function Button({ className, variant, color, size, loading, children, ...props }) {
  return (
    <button className={cn(buttonVariants({ variant, color, size, className }))} {...props}>
      {loading && <Spinner />}
      {children}
    </button>
  );
}

export { buttonVariants };
