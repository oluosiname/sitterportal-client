import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Select from '../components/Select';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Select> = {
  title: 'Components/FormControl/Select',
  component: Select,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
  decorators: [
    function Component(Story, ctx) {
      // const [, updateArgs] = useArgs<typeof ctx.args>();

      // const handleChange = (name: string, selectedValue: FormValue) => {
      //   const castSelectedValue = selectedValue as string;
      //   ctx.args.onChange?.(name, selectedValue);
      //   updateArgs({ value: castSelectedValue });
      // };

      return (
        <div className="w-80">
          <Story args={{ ...ctx.args, options, label: 'Select Month' }} />;
        </div>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof Select>;

const options = [
  { key: '309a8b53', value: 'January' },
  { key: 'c04f7ec5', value: 'February' },
  { key: '55433646', value: 'March' },
  { key: '2e909b0a', value: 'April' },
  { key: '243a4b2b', value: 'May' },
  { key: '43542b2b', value: 'June' },
  { key: '3544xsdd', value: 'July' },
  { key: '3ewrr434', value: 'August' },
  { key: '34543x2b', value: 'September' },
];

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Open: Story = {
  args: {},
};

export const WithSelectedOption: Story = {
  args: {
    value: options[2].value,
  },
};

export const WithPlaceholder: Story = {
  args: {},
};
export const Filterable: Story = {
  args: {},
};
