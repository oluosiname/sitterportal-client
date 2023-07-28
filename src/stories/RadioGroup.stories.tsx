import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import RadioGroup from '../components/RadioGroup';
import { useArgs } from '@storybook/client-api';

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

  decorators: [
    function Component(Story, ctx) {
      const [, updateArgs] = useArgs<typeof ctx.args>();

      const onChange = (selectedValue: string) => {
        ctx.args.onChange?.(selectedValue);

        updateArgs({ value: selectedValue });
      };

      return <Story args={{ ...ctx.args, onChange }} />;
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
