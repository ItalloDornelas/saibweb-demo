import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface TextActionProps {
  children: ReactNode;
  size: string;
  className: string;
}

export function TextAction({
  children,
  size = 'sm',
  className,
}: TextActionProps) {
  return (
    <span
      className={clsx(
        'select-none md-max:uppercase',
        {
          'font-semibold text-black': !className,
          'text-xs': size === 'xs',
          'text-sm': size === 'sm',
          'text-base': size === 'md',
          'text-lg': size === 'lg',
          'text-xl': size === 'xl',
          'text-2xl': size === '2xl',
          'text-3xl': size === '3xl',
        },
        className
      )}
    >
      {children}
    </span>
  );
}

TextAction.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
};

TextAction.defaultProps = {
  className: '',
  size: 'md',
};
