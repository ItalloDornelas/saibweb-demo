import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface ButtonProps {
  [x: string]: any;
  className: string;
  disable?: boolean;
  variant?: string;
  children: ReactNode;
  title?: string;
}

export function Button({
  className,
  disable = false,
  variant = 'primary',
  children,
  title,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'flex items-center',
        'justify-center gap-1 py-1 px-3 h-9',
        'rounded-md text-base font-semibold',
        'hover:opacity-90 transition-all outline-none duration-75',
        'active:opacity-90 active:shadow-none active:translate-y-[3px] select-none md-max:uppercase',
        {
          'bg-gray-300 pointer-events-none text-black-200': disable,
          'bg-primary shadow-primary-500 shadow-button text-white':
            variant === 'primary' && !disable,
          'bg-secondary shadow-secondary-500 shadow-button text-white':
            variant === 'secondary' && !disable,
          'bg-tertiary shadow-tertiary-500 shadow-button text-white':
            variant === 'tertiary' && !disable,
          'bg-gray-100 shadow-white-500 shadow-button border border-white-700 text-black':
            variant === 'white' && !disable,
          'bg-white shadow-primary-200 shadow-button border border-primary text-primary':
            variant === 'outline' && !disable,
          'bg-primary shadow-primary-200 shadow-button text-white h-9':
            variant === 'submit' && !disable,
          '': variant === 'structure',
        },
        className
      )}
      type="button"
      title={title}
      disabled={disable}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  disable: PropTypes.bool,
  variant: PropTypes.oneOf([
    'primary',
    'secondary',
    'tertiary',
    'outline',
    'white',
    'submit',
    'structure',
  ]),
};

Button.defaultProps = {
  className: '',
  label: 'md',
  disable: false,
  variant: 'primary',
};
