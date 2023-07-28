import React from 'react';
import './styles.css';

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
  onChange: (val: string) => void;
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
  const checkedColor = disabled ? 'gray-400' : variant;
  const defaultColor = disabled ? 'gray-400' : 'gray-300';
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
      />
      <label
        htmlFor={id}
        className={`inline-block h-5 relative cursor-pointer align-bottom mb-0 px-[30px] py-0 before:w-5 before:h-5 before:border-2 before:border-solid before:border-${defaultColor} before:left-0 before:top-0.5 after:w-2.5 after:h-2.5 after:scale-0 after:left-[5px] after:top-[7px] after:bg-${checkedColor} peer-checked:before:border-${checkedColor}`}
      >
        {label}
      </label>
    </div>
  );
};
