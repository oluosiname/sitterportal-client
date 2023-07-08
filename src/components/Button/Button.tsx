import React from 'react';
import classNames from 'classnames';
import { style } from '@/types';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  style?: style;
  /**
   * How large should the button be?
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Should the button span the full width of it's container
   */
  full?: boolean;
}

const SIZES = {
  sm: 'py-1.5 px-6',
  md: 'py-2.5 px-9',
  lg: 'py-2.5 px-9',
};

const STYLES = {
  primary: 'bg-primary text-secondary hover:bg-primaryDark',
  secondary: 'bg-secondary text-white hover:bg-primary hover:text-secondary',
  tertiary: 'bg-white text-secondary hover:bg-primary',
};

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  style = 'primary',
  size = 'md',
  full,
  label,
  ...props
}: ButtonProps) => {
  const sizeStyle = SIZES[size];

  const className = classNames(
    'rounded-md text-base font-bold',
    sizeStyle,
    STYLES[style],
    { 'w-full': full }
  );
  return (
    <button type="button" className={className} {...props}>
      {label}
    </button>
  );
};
