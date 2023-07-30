import React from 'react';

interface TextFieldProps {
  /**
   * name of TextField
   */
  name: string;
  /**
   * Value of TextField
   */
  value?: string;
  /**
   * error message for when textfield is invalid
   */
  error?: string;
  /**
   * Text field label
   */
  disabled?: boolean;
  /**
   * Text field label
   */
  label: string;
  /**
   * Optional change handler
   */
  onChange?: (name: string, value: string) => void;
  /**
   * Icon to be displayed in Textfield
   */
  icon?: boolean;
  /**
   * Position of icon, either left or right
   */
  iconPosition?: 'left' | 'right';
  /**
   * Overriding css classes
   */
  css?: string;
}

const TextField = ({
  name,
  value = '',
  onChange,
  label,
  error,
  disabled,
  icon,
  iconPosition,
  css = '',
}: TextFieldProps) => {
  let inputCSSOverride = `${css} `;
  if (error) {
    inputCSSOverride += 'border-red-100 ';
  }
  return (
    <div>
      <label
        htmlFor={name}
        className={`block font-semibold mb-2 text-base text-secondary ${
          error ? '!text-red-100' : ''
        }`}
      >
        {label}
      </label>
      <input
        className={`border border-gray-200 py-3.5 px-5 rounded text-sm text-gray-300 transition duration-150 ease-out ease-in outline-none focus:border-primary focus:text-black-100 focus:background-white w-full ${inputCSSOverride}`}
        type="text"
        id={name}
        name={name}
        value={value}
        disabled={disabled}
        onChange={(e) => onChange && onChange(e.target.name, e.target.value)}
      />
    </div>
  );
};

export default TextField;
