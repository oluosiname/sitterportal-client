import React from 'react';
import { Radio } from './Radio';

// argTypes: {
//   onClick: {
//     table: {
//       disable: true,
//     },
//   },
// },

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
  onChange: (val: string) => void;
  /**
   * Name of the radio group (inherited from radio group)
   */
  name?: string;
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
          onChange={onChange}
          variant={variant}
        />
      ))}
    </fieldset>
  );
};

export default RadioGroup;

// {
//   Children.map(children, (child) => {
//     if (!isValidElement(child)) {
//       return null;
//     }

//     const radio = child as ReactElement<PropsWithChildren<RadioProps>>;
//     return cloneElement(radio, {
//       ...radio.props,
//       checked: value === radio.props.value,
//       // onChange,
//     });
//   });
// }
