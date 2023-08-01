import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import useOutsideClick from '../../hooks/use-outside-click';
import Label from '../atoms/Label';
import { OnChange } from '@/types';

export interface SelectOption {
  key: string;
  value: string;
}
export interface SelectProps {
  /**
   * name of select
   */
  name: string;
  /**
   * Array of values for the select input (should have properties key and value)
   */
  options: Array<SelectOption>;
  /**
   *  Currently selected option
   */
  value?: string;
  /**
   *  Placeholder test
   */
  placeholder?: string;
  /**
   *  Label for the select option
   */
  label?: string;
  /**
   *  Optional onChange handler
   */
  onChange?: OnChange;
}

const Select = ({
  options,
  label,
  value,
  name,
  placeholder,
  onChange,
}: SelectProps) => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((prev) => !prev);
  };

  const onSelect = (value: string) => {
    if (onChange) {
      onChange(name, value);
    }
    toggle();
  };

  const ref = useOutsideClick(() => setOpen(false));

  return (
    <div className="relative" ref={ref}>
      {label && <Label error={false} name={name} label={label} />}

      <div className="h-12 px-5 rounded-sm border border-solid border-gray-200 flex items-center">
        <div
          className="flex justify-between items-center h-full w-full text-secondaryDark cursor-pointer"
          onClick={toggle}
        >
          <div>{value || placeholder}</div>

          <FontAwesomeIcon
            icon={open ? faAngleUp : faAngleDown}
            className="text-secondaryDark"
          />
        </div>
        {open && (
          <div className="absolute border border-solid border-gray-200 top-full left-0 z-[10000] w-full bg-gray-100 p-2 jj-ff font-body max-h-[14.5rem] overflow-auto">
            {options.map(({ key, value }) => (
              <div
                key={key}
                onClick={() => onSelect(value)}
                className="cursor-pointer p-1.5 hover:bg-primary hover:bg-opacity-10 hover:text-secondaryDark hover:font-medium"
              >
                {value}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Select;
