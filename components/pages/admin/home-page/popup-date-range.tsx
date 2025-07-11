import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import { pl } from 'date-fns/locale';
import { cn } from '@/lib/utils';

interface PopupDateRangeProps {
  showFrom?: Date;
  showUntil?: Date;
  onShowFromChange: (date: Date | undefined) => void;
  onShowUntilChange: (date: Date | undefined) => void;
}

export function PopupDateRange({
  showFrom,
  showUntil,
  onShowFromChange,
  onShowUntilChange,
}: PopupDateRangeProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t">
      <div className="space-y-2">
        <Label>Data rozpoczęcia wyświetlania</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
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
            <Calendar mode="single" selected={showFrom} onSelect={onShowFromChange} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <Label>Data zakończenia wyświetlania</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={'outline'}
              className={cn(
                'justify-start text-left font-normal w-full',
                !showUntil && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {showUntil ? format(showUntil, 'PPP', { locale: pl }) : <span>Wybierz datę</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={showUntil}
              onSelect={onShowUntilChange}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
