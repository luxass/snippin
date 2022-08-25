import { cva } from 'class-variance-authority';
import type { VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import { HTMLAttributes, forwardRef } from 'react';

const styles = cva('button', {
  variants: {
    intent: {
      primary: ['bg-blue-500', 'text-white', 'border-transparent', 'hover:bg-blue-600'],
      secondary: ['bg-white', 'text-gray-800', 'border-gray-400', 'hover:bg-gray-100']
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4']
    }
  },
  compoundVariants: [{ intent: 'primary', size: 'medium', class: 'uppercase' }],
  defaultVariants: {
    intent: 'primary',
    size: 'medium'
  }
});

export type StyleProps = VariantProps<typeof styles>;
interface Props extends HTMLAttributes<HTMLInputElement>, StyleProps {}

export const Input = forwardRef<HTMLInputElement, Props>(({ className, intent, size, ...props }, ref) => {
  console.log(intent, size);
  
  return (
    <input
      className={clsx(
        `
        px-3 py-1 text-sm 
        rounded-md border 
        leading-7 
        outline-none 
        shadow-xs focus:ring-2 
        transition-all shadow-sm
        bg-white
        hover:bg-white
        focus:hover:bg-white
        focus:bg-white
        dark:bg-gray-550
        dark:hover:bg-gray-550
        dark:focus:bg-gray-800
        dark:focus:hover:bg-gray-800
        border-gray-100
        hover:border-gray-200
        focus:border-white
        dark:border-gray-500
        dark:hover:border-gray-500
        dark:focus:border-gray-900
        focus:ring-primary-100 
        dark:focus:ring-gray-550
        dark:text-white 
        placeholder-gray-300`,
        className
      )}
      ref={ref}
      {...(props as HTMLAttributes<HTMLInputElement>)}
    />
  );
});

Input.displayName = 'Input';
