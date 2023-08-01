import React from 'react';
import { Radio } from './Radio';
import { OnChange } from '@/types';

interface RadioOption {
  label: string;
  value: string;
}

export interface RadioGroupProps {
  /**
   * Color scheme of radio buttons
   */
  variant?: 'primary' | 'secondary';
  /**
   * Change handler
   */
  onChange?: OnChange;
  /**
   * Name of the radio group (inherited from radio group)
   */
  name: string;
  /**
   * current value of the radio group
   */
  value?: string;
  /**
   * Title of the radio group
   */
  label: string;
  /**
   * Options for the radio group
   */
  options: RadioOption[];
  /**
   * Overriding css classes
   */
  css?: string;
}

const RadioGroup = ({
  name,
  options,
  label,
  value,
  variant = 'primary',
  onChange,
}: RadioGroupProps) => {
  const handleRadioSelect = (value: string) => {
    onChange?.(name, value);
  };

  return (
    <fieldset>
      <legend>{label}</legend>
      {options.map((option, index) => (
        <Radio
          key={index}
          name={name}
          value={option.value}
          checked={value === option.value}
          label={option.label}
          onChange={handleRadioSelect}
          variant={variant}
        />
      ))}
    </fieldset>
  );
};

export default RadioGroup;
