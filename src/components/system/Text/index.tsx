import clsx from 'clsx';
import PropTypes from 'prop-types';
import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  size: string;
  className: string;
}

export function Text({ children, size = 'sm', className }: TextProps) {
  return (
    <span
      className={clsx(
        'select-none',
        {
          'text-black': !className,
          'text-xs font-semibold': size === 'xs',
          'text-sm font-semibold': size === 'sm',
          'text-base font-semibold': size === 'md',
          'text-lg font-semibold': size === 'lg',
          'text-xl font-semibold': size === 'xl',
          'text-2xl font-semibold': size === '2xl',
          'text-3xl font-semibold': size === '3xl',
        },
        className
      )}
    >
      {children}
    </span>
  );
}

Text.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']),
};

Text.defaultProps = {
  className: '',
  size: 'md',
};
