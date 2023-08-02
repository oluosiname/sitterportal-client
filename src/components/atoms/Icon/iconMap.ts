import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const iconMap: { [key: string]: IconDefinition } = {
  checkMark: faCircleCheckRegular,
  close: faXmark,
} as const;

export default iconMap;
