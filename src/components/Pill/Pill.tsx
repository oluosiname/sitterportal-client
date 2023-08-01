import React from 'react';
import { Button } from '..';

interface PillProps {
  /**
   * Is this Pill selected?
   */
  selected?: boolean;
  /**
   * Pill contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}
const Pill = ({ selected = false, label }: PillProps) => {
  return (
    <Button
      style={selected ? 'primary' : 'secondary'}
      label={label}
      css="font-normal"
    />
  );
};

export default Pill;
