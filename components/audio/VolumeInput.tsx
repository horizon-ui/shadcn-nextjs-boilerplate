import { cn } from '@/lib/utils';
// import { Slider } from '../ui/slider';
import * as SliderPrimitive from '@radix-ui/react-slider';
import * as React from 'react';

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      'relative flex w-full touch-none select-none items-center',
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1 w-full grow overflow-hidden rounded-full bg-secondary dark:bg-zinc-900">
      <SliderPrimitive.Range className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-4 w-4 rounded-full border-2 border-primary bg-background bg-zinc-950 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:bg-white" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

interface VolumeInputProps {
  volume: number;
  onVolumeChange: (volume: any) => any;
}

export default function VolumeInput({
  volume,
  onVolumeChange,
}: VolumeInputProps) {
  return (
    <div className="relative left-0 right-0 h-1 w-full min-w-[140px] items-center">
      <Slider
        className="me-2 w-full"
        aria-label="slider-ex-2"
        defaultValue={[1]}
        value={[volume]}
        min={0}
        step={0.05}
        max={1}
        onValueChange={(val) => {
          onVolumeChange(val);
        }}
      />
    </div>
  );
}
