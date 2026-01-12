import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import Wrapper from "./_wraper";

export default function DatePicker({ value, onChange, label, helperText, className, disablePast = false, disableFuture = false }) {
  const [date, setDate] = React.useState(value || undefined);

  const handleSelect = (newDate) => {
    if (!newDate) return;
    setDate(newDate);
    onChange?.(newDate);
  };

  const today = new Date();

  return (
    <Wrapper label={label} helperText={helperText}>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline" className={cn("w-full justify-start text-left font-normal", !date && "text-muted-foreground", className)}>
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "d MMMM yyyy") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>

        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={handleSelect}
            initialFocus
            disabled={(d) => {
              if (disablePast && d < today) return true;
              if (disableFuture && d > today) return true;
              return false;
            }}
          />
        </PopoverContent>
      </Popover>
    </Wrapper>
  );
}
