import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import iconMap from './iconMap';

export interface IconProps {
  name: string;
  className: string;
}

const Icon = ({ name, className = 'text-primary' }: IconProps) => {
  return (
    <FontAwesomeIcon
      icon={iconMap[name]}
      className={className}
      fixedWidth
      size="lg"
    />
  );
};

export default Icon;
