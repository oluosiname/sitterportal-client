import { FormValue } from '@/components/Form/Form';

export type { default as style } from './style';

export type Variant = 'primary' | 'secondary' | 'tertiary';

export type OnChange = (name: string, value: FormValue) => void;
