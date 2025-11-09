import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Wrapper from "./_wraper";

export default function InputSelectExample({ label, helperText, options = [], value, onChange, className }) {
  return (
    <Wrapper label={label} helperText={helperText}>
      <Select
        value={value?.id?.toString() ?? null} // controlled value
        onValueChange={(val) => {
          const selected = options.find((opt) => opt.id.toString() === val);
          onChange?.(selected || null);
        }}
      >
        <SelectTrigger className={`w-full ${className || ""}`}>
          <SelectValue placeholder="Select option" />
        </SelectTrigger>
        <SelectContent>
          {options.map((opt, ix) => (
            <SelectItem key={ix} value={opt.id.toString()}>
              {opt.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </Wrapper>
  );
}
