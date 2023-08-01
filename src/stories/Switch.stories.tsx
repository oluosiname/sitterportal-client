import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Switch from '../components/Switch';
import { useArgs } from '@storybook/client-api';
import { FormValue } from '@/components/Form/Form';

const meta: Meta<typeof Switch> = {
  title: 'Components/FormControl/Switch',
  component: Switch,
  tags: ['autodocs'],
  args: {
    label: { on: 'On', off: 'Off' },
    name: 'terms',
    variant: 'primary',
  },
  decorators: [
    function Component(Story, ctx) {
      const [, updateArgs] = useArgs<typeof ctx.args>();

      const handleChange = (name: string, selectedValue: FormValue) => {
        const checkedValue = selectedValue as boolean;
        ctx.args.onChange?.(name, selectedValue);
        updateArgs({ checked: checkedValue });
      };

      return <Story args={{ ...ctx.args, onChange: handleChange }} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Switch>;

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
