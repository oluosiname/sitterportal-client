import type { Meta, StoryObj } from '@storybook/react';

import { Label } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Label> = {
  title: 'Atoms/Label',
  component: Label,
  tags: ['autodocs'],
  args: {
    name: 'firstName',
    label: 'First Name',
  },
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Label>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Control: Story = {
  args: {},
};

export const Error: Story = {
  args: {
    error: true,
  },
};
