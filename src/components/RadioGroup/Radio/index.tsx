import React from 'react';
import './styles.css';
import classNames from 'classnames';

export interface RadioProps {
  /**
   * Name of the radio group (inherited from radio group)
   */
  name?: string;
  /**
   * Color scheme
   */
  variant: 'primary' | 'secondary';
  /**
   * Text to be displayed next to the radio button
   */
  label: string;
  /**
   * Value of the radio button
   */
  value: string;
  /**
   * is radio currently selected
   */
  checked?: boolean;
  /**
   * Change handler
   */
  onChange: (value: string) => void;
  /**
   * Is radio disabled
   */
  disabled?: boolean;
}

export const Radio = ({
  label,
  name,
  value,
  checked,
  disabled,
  variant,
  onChange,
}: RadioProps) => {
  const id = `${name}-${value}`;

  const STYLES = {
    primary:
      'after:bg-white peer-checked:before:border-primary peer-checked:before:bg-primary',
    secondary:
      'after:bg-white peer-checked:before:border-secondary peer-checked:before:bg-secondary',
    disabled:
      'peer-disabled:before:border-disabled peer-disabled:peer-checked:after:bg-white peer-disabled:before:bg-gray-400 peer-disabled:peer-checked:before:bg-disabled',
  };

  const className = classNames(
    'inline-block h-5 relative cursor-pointer before:left-0 before:top-1 after:w-1.5 after:h-1.5 after:scale-0 align-bottom mb-0 px-[30px] py-0 before:w-4 before:h-4 before:border-2 before:border-solid after:left-[5px] after:top-[9px]',
    { 'before:border-gray-400': !checked },
    STYLES[variant],
    STYLES.disabled
  );

  return (
    <div className="mx-0 my-4 radioWrapper">
      <input
        type="radio"
        id={id}
        name={value}
        value={value}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="peer hidden"
        disabled={disabled}
      />
      <label htmlFor={id} className={className}>
        {label}
      </label>
    </div>
  );
};
