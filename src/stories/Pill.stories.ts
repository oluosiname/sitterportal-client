import type { Meta, StoryObj } from '@storybook/react';

import { Pill } from '../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Pill> = {
  title: 'Components/Pill',
  component: Pill,
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Pill>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Normal: Story = {
  args: {
    selected: false,
    label: 'Pill',
  },
};

export const Selected: Story = {
  args: {
    selected: true,
    label: 'Selected Pill',
  },
};
