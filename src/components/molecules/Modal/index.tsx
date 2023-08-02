import React from 'react';
import { ModalProps } from './types';

import Icon from '../../atoms/Icon';
import Button from '../../Button';
import classNames from 'classnames';

const Modal = ({
  align = 'left',
  body,
  closeable,
  icon,
  isVisible = true,
  onClose,
  action,
  title,
  variant = 'primary',
}: ModalProps) => {
  const iconClassName = `text-${
    variant === 'secondary' ? 'primary' : 'secondary'
  }`;
  const headingFontColors = {
    primary: 'text-secondary',
    secondary: 'text-primaryDark',
    tertiary: 'text-secondary',
  };

  const alignment = `text-${align}`;

  const modalBgColors = {
    primary:
      'bg-primary shadow-[0px_0px_2px_rgba(230,230,230,0.12),0px_20px_20px_rgba(0,0,0,0.08)]',
    secondary:
      'bg-secondary shadow-[0px_0px_2px_rgba(230,230,230,0.12),0px_20px_20px_rgba(0,0,0,0.08)]',
    tertiary:
      'bg-white shadow-[0px_0px_2px_rgba(0,0,0,0.12),0px_20px_20px_rgba(0,0,0,0.08)]',
  };
  const headingClassNames = classNames(
    'font-semibold mb-2',
    headingFontColors[variant]
  );

  const confirmButtonStyle = variant === 'secondary' ? 'primary' : 'secondary';

  const modalClassNames = classNames(
    'max-w-[90%] absolute -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4 max-auto inset-x-0 w-[650px] border px-8 py-8 pt-10  flex flex-col justify-center items-center gap-6   rounded-lg border-solid border-grey-400',
    modalBgColors[variant],
    alignment
  );

  const iconWrapperClassNames = classNames(
    'px-4 py-5 rounded-lg bg-gray-500 flex items-center justify-center hidden md:block',
    variant === 'secondary' && 'bg-transparent'
  );

  return (
    <div>
      {isVisible && (
        <div className="fixed w-full h-full bg-backdrop z-[2] cursor-pointer inset-0">
          <div className={modalClassNames}>
            {closeable && onClose && (
              <div className="absolute right-1.5 top-1.5">
                <Icon name="close" className="text-red-100" />
              </div>
            )}
            <div className=" flex flex-row items-start gap-3 relative p-0">
              {icon && align === 'left' && (
                <div className={iconWrapperClassNames}>
                  <Icon name={icon} className={iconClassName} />
                </div>
              )}
              <div className="">
                <h3 className={headingClassNames}>{title}</h3>
                <p
                  className={
                    variant === 'secondary' ? 'text-primary' : 'text-muted'
                  }
                >
                  {body}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap w-full gap-2 md:gap-10 mt-4">
              {closeable && onClose && (
                <Button
                  label="Cancel"
                  style={variant === 'tertiary' ? 'primary' : 'tertiary'}
                  full
                  onClick={onClose}
                />
              )}
              <Button
                label="Confirm"
                style={confirmButtonStyle}
                full
                onClick={action}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
