import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ className, error, ...props }, ref) => {
  return (
    <div>
      <input
        ref={ref}
        className={cn(
          'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});
Input.displayName = 'Input';

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string;
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ className, error, ...props }, ref) => {
  return (
    <div>
      <textarea
        ref={ref}
        className={cn(
          'w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-accent-green',
          error ? 'border-red-500' : 'border-gray-300',
          className
        )}
        {...props}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});
TextArea.displayName = 'TextArea';

export { Input, TextArea };
