import React from 'react';

export interface LabelProps {
  /**
   * name of input of the label
   */
  name: string;
  /**
   * display value of label
   */
  label: string;
  /**
   * Does associated input have error
   */
  error?: boolean;
}

const Label = ({ error, label, name }: LabelProps) => {
  return (
    <label
      htmlFor={name}
      className={`block font-semibold mb-2 text-base text-secondary ${
        error ? '!text-red-100' : ''
      }`}
    >
      {label}
    </label>
  );
};

export default Label;
