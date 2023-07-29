import type { Meta, StoryObj } from '@storybook/react';

import CheckBox from '../components/CheckBox';

const meta: Meta<typeof CheckBox> = {
  title: 'Components/FormControl/CheckBox',
  component: CheckBox,
  tags: ['autodocs'],
  args: {
    label: 'Whereas recognition of the inherent dignity',
    name: 'terms',
    variant: 'primary',
  },
};

export default meta;
type Story = StoryObj<typeof CheckBox>;

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
