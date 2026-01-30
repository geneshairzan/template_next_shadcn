import { Button } from "../button";
import Icon from "./icon";

export function ThemedButton({ children, icon, ...props }) {
  return (
    <Button {...props}>
      {icon && <Icon name={icon} btn />}
      {children}
    </Button>
  );
}
