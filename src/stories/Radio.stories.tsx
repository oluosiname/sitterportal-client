import type { Meta, StoryObj } from '@storybook/react';

import { Radio } from '../components/RadioGroup/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Components/FormControl/Radio',
  component: Radio,
  tags: ['autodocs'],
  args: {
    label: 'sex',
    name: 'sex',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {},
};

export const PrimarySelected: Story = {
  args: {
    checked: true,
  },
};

export const SecondarySelected: Story = {
  args: { checked: true, variant: 'secondary' },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const SelectedDisabled: Story = {
  args: { checked: true, disabled: true },
};
