import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from '../components/RadioGroup';
import { useArgs } from '@storybook/client-api';
import { FormValue } from '@/components/Form/Form';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof RadioGroup> = {
  title: 'Components/FormControl/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    label: 'sex',
    name: 'sex',
    options: [
      { label: 'Male', value: 'male' },
      { label: 'Female', value: 'female' },
    ],
  },
  argTypes: {
    onChange: {
      table: {
        disable: true,
      },
    },
  },

  decorators: [
    function Component(Story, ctx) {
      const [, updateArgs] = useArgs<typeof ctx.args>();

      const handleChange = (name: string, selectedValue: FormValue) => {
        const castSelectedValue = selectedValue as string;
        ctx.args.onChange?.(name, selectedValue);
        updateArgs({ value: castSelectedValue });
      };

      return <Story args={{ ...ctx.args, onChange: handleChange }} />;
    },
  ],
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
export const Primary: Story = {
  args: {
    variant: 'primary',
    value: 'male',
  },
};
export const Secondary: Story = {
  args: {
    variant: 'secondary',
    value: 'female',
  },
};
