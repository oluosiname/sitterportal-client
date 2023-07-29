import React from 'react';

// import checkmark from '../../assets/images/check.svg';
import './styles.css';
export interface CheckBoxProps {
  /**
   * Name of the radio group (inherited from radio group)
   */
  name?: string;
  /**
   * Color scheme
   */
  variant: 'primary' | 'secondary';
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
  onChange: (val: string) => void;
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
  variant,
}: CheckBoxProps) => {
  const bgColor = disabled ? 'gray-300' : variant;
  const borderColor = disabled ? 'gray-300' : variant;

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={(e) => onChange(e.target.value)}
        className="absolute z-[-1] w-4 h-5 opacity-0 left-0 peer"
      />
      <label
        htmlFor={name}
        className={`ml-6 before:rounded before:border-2 before:border-solid before:border-gray-400 relative align-top mb-0 before:absolute before:block before:w-4 before:h-4 before:pointer-events-none before:content-[""] before:bg-white before:border-solid before:top-0.5 peer-checked:before:bg-${bgColor}  peer-checked:before:border-${borderColor}`}
      >
        {label}
      </label>
    </div>
  );
};

export default CheckBox;
