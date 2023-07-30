import React, {
  Children,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';
import { useForm } from './formReducer';

export interface FormProps {
  initialData: {};
  children: ReactNode;
}

export type FormValue = string | number | boolean;

export interface FieldProps {
  value?: FormValue;
  name: string;
  onChange?: (name: string, value: FormValue) => void;
}

const Form = ({ children, initialData }: FormProps) => {
  const { formState: state, inputHandler } = useForm(initialData);
  console.log({ state });

  const onChange = (name: string, value: FormValue) => {
    inputHandler({ name, value });
  };

  return (
    <form>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) {
          return null;
        }

        const field = child as ReactElement<PropsWithChildren<FieldProps>>;
        if (!Object.keys(initialData).includes(field.props.name)) {
          return null;
        }
        const value = state.data[field.props.name] as FormValue;
        return cloneElement(field, {
          ...field.props,
          value,
          onChange,
        });
      })}
    </form>
  );
};

export default Form;
