import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const buttonClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';

const variants = {
  primary: 'bg-accent-green text-white hover:bg-green-600 focus:ring-green-500',
  secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
  outline: 'border border-accent-green text-accent-green hover:bg-accent-green hover:text-white focus:ring-green-500',
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof variants;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = 'primary', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={cn(buttonClasses, variants[variant], className)}
      {...props}
    />
  );
});
Button.displayName = 'Button';

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: keyof typeof variants;
}

const ButtonLink = forwardRef<HTMLAnchorElement, ButtonLinkProps>(({ className, variant = 'primary', href, ...props }, ref) => {
  return (
    <Link href={href} ref={ref} className={cn(buttonClasses, variants[variant], className)} {...props} />
  );
});
ButtonLink.displayName = 'ButtonLink';

export { Button, ButtonLink };
