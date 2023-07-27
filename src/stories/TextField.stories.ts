import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { useArgs } from '@storybook/manager-api';

import TextField from '../components/TextField';
import { useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof TextField> = {
  title: 'Components/FormControl/TextField',
  component: TextField,
  tags: ['autodocs'],
  args: {
    label: 'First name',
  },
};

export default meta;
type Story = StoryObj<typeof TextField>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const Disabled: Story = {
  // render: (args) => <TextField {...args} />,
  args: {
    disabled: true,
  },
};

export const WithValue: Story = {
  args: {
    value: 'sname',
  },
};

export const WithError: Story = {
  args: {
    error: 'Name cannot be blank',
  },
};

export const WithIconLeft: Story = {
  args: {
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    iconPosition: 'right',
  },
};
