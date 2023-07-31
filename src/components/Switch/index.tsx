import React from 'react';

import classNames from 'classnames';

import { OnChange, Variant } from '@/types';

interface SwitchLabel {
  on: string;
  off?: string;
}

export interface SwitchProps {
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
  label: SwitchLabel;
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
const Switch = ({
  checked,
  disabled,
  label,
  name,
  onChange,
  variant = 'primary',
}: SwitchProps) => {
  const STYLES: { [key: string]: string } = {
    primary: 'peer-checked:bg-primary',
    secondary: 'peer-checked:bg-secondary',
    disabled:
      'peer-disabled:before:bg-gray-400  peer-checked:peer-disabled:bg-disabled peer-checked:peer-disabled:before:bg-red',
  };
  const className = classNames(STYLES[variant], STYLES.disabled);

  return (
    <label className="toggle">
      <input
        className="absolute invisible peer"
        type="checkbox"
        disabled={disabled}
        checked={checked}
        onChange={(e) => onChange?.(name, e.target.checked)}
      />
      {label.off && <span className="relative mr-2 top-0.5">{label.off}</span>}
      <span
        className={`transition-[background] duration-[0.25s] bg-gray-400 inline-block w-12 h-6 relative align-middle rounded-2xl before:block before:w-[1.125rem] before:bg-white before:content-[''] before:h-[1.125rem] before:absolute before:transition-[left] before:duration-[0.25s] before:rounded-[50%] before:left-1 before:top-[3px] after:content-['']  peer-checked:before:left-[1.6rem] ${className}`}
      ></span>
      <span className="relative ml-2 top-0.5">{label.on}</span>
    </label>
  );
};

export default Switch;
