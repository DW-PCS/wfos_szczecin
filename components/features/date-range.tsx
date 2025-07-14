import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/cn';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';

interface DateRangeProps {
  showFrom?: Date;
  showUntil?: Date;
  onShowFromChange: (date: Date | undefined) => void;
  onShowUntilChange: (date: Date | undefined) => void;
}

export function DateRange({
  showFrom,
  showUntil,
  onShowFromChange,
  onShowUntilChange,
}: DateRangeProps) {
  const handleStartDateChange = (date: Date | undefined) => {
    onShowFromChange(date);

    if (date && showUntil && showUntil < date) {
      onShowUntilChange(undefined);
    }
  };

  const getEndDateDisabled = (date: Date) => {
    if (showFrom && date < showFrom) {
      return true;
    }

    return false;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
      <div className="space-y-2">
        <Label>Data rozpoczęcia wyświetlania</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'justify-start text-left font-normal w-full',
                !showFrom && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {showFrom ? format(showFrom, 'PPP', { locale: pl }) : <span>Wybierz datę</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={showFrom} onSelect={handleStartDateChange} />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Data zakończenia wyświetlania</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                'w-full justify-start text-left font-normal',
                !showUntil && 'text-muted-foreground'
              )}
            >
              {showUntil ? format(showUntil, 'PPP', { locale: pl }) : <span>Wybierz datę</span>}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={showUntil}
              onSelect={onShowUntilChange}
              disabled={getEndDateDisabled}
              captionLayout="dropdown"
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
