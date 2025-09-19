import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function Section({ as: Component = 'section', className, ...props }: SectionProps) {
  return (
    <Component
      className={cn('py-16 sm:py-24', className)}
      {...props}
    />
  );
}
