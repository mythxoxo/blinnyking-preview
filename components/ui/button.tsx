import * as React from 'react';
import {cva, type VariantProps} from 'class-variance-authority';
import {cn} from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 cursor-pointer select-none outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: 'bg-primary text-white hover:bg-primary-hover hover:-translate-y-px',
        outline: 'border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white',
        ghost: 'border border-transparent bg-transparent text-text-muted hover:bg-surface hover:text-text'
      },
      size: {
        sm: 'px-4 py-2 text-sm',
        md: 'px-7 py-[14px] text-sm',
        lg: 'px-8 py-4 text-base'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({className, variant, size, ...props}, ref) => {
  return <button ref={ref} className={cn(buttonVariants({variant, size}), className)} {...props} />;
});

Button.displayName = 'Button';

export {Button, buttonVariants};
