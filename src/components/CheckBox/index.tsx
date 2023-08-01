import React from 'react';
import classNames from 'classnames';

import './styles.css';
import { OnChange, Variant } from '@/types';
export interface CheckBoxProps {
  /**
   * Name of the checkbox
   */
  name: string;
  /**
   * Color scheme
   */
  variant?: Variant;
  /**
   * Text to be displayed next to the checkbox button
   */
  label: string;
  /**
   * is checkbox currently selected
   */
  checked?: boolean;
  /**
   * Change handler
   */
  onChange?: OnChange;
  /**
   * Is checkbox disabled
   */
  disabled?: boolean;
}

const CheckBox = ({
  disabled,
  label,
  checked,
  name,
  onChange,
  variant = 'primary',
}: CheckBoxProps) => {
  const STYLES: { [key: string]: string } = {
    primary:
      'peer-checked:before:bg-primary peer-checked:before:border-primary',
    // primary:
    //   'peer-checked:before:bg-primary peer-checked:before:border-primary',
    secondary:
      'peer-checked:before:bg-secondary peer-checked:before:border-secondary',
    disabled:
      'before:border-disabled  peer-disabled:before:bg-gray-400  peer-checked:peer-disabled:before:border-disabled peer-disabled:peer-checked:before:bg-disabled',
  };
  const className = classNames(
    'peer-disabled:peer-checked:before:bg-red-100',
    'before:border-gray-400 ml-6 before:rounded before:border-2 before:border-solid relative align-top mb-0 before:absolute before:block before:w-4 before:h-4 before:pointer-events-none before:content-[""] before:bg-white before:border-solid before:top-0.5',
    STYLES[variant],
    STYLES.disabled
  );

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={(e) => onChange?.(name, e.target.checked)}
        className="absolute z-[-1] w-4 h-5 opacity-0 left-0 peer"
        disabled={disabled}
      />
      <label htmlFor={name} className={className}>
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
