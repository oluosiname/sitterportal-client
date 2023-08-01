import { useReducer } from 'react';
import { FormValue } from './Form';

enum FormActionKind {
  INPUT_CHANGE = 'INPUT_CHANGE',
  FORM_SUBMITTED = 'FORM_SUBMITTED',
  FORM_SUBMITTING = 'FORM_SUBMITTING',
}

interface Payload {
  name: string;
  value: FormValue;
}

interface FormAction {
  type: FormActionKind;
  payload: Payload;
}

type ArbitaryObject = { [key: string]: FormValue };

export interface FormState {
  data: ArbitaryObject;
}

const formReducer = (state: FormState, action: FormAction) => {
  const { type, payload } = action;

  console.log({ state });

  switch (type) {
    case FormActionKind.INPUT_CHANGE:
      console.log(payload, type);
      return {
        ...state,
        data: { ...state.data, [payload.name]: payload.value },
      };

    default:
      return state;
  }
};

export const useForm = (initialInput: ArbitaryObject) => {
  const [formState, dispatch] = useReducer(formReducer, { data: initialInput });

  const inputHandler = (payload: Payload) => {
    dispatch({ type: FormActionKind.INPUT_CHANGE, payload });
  };

  return { formState, inputHandler };
};
