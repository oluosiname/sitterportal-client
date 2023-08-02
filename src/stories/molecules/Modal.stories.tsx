import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from '../../components';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Modal> = {
  title: 'Molecules/Modal',
  component: Modal,

  args: {
    icon: 'checkMark',
    variant: 'primary',
    body: 'Et leo, enim in non sed quis sed. Auctor natoque auctor risus amet quis mauris. Interdum et nisi, pellentesque id lectus. Ut bibendum pellentesque arcu luctus sapien.',
    title: 'Successully Updated',
    isVisible: true,
  },
  // argTypes: {
  //   backgroundColor: {
  //     control: 'color',
  //   },
  // },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Control: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
  },
};

export const LeftAligned: Story = {
  args: {
    align: 'left',
  },
};

export const Closeable: Story = {
  args: {
    closeable: true,
    onClose: () => alert('closed'),
  },
};

export const CenterAligned: Story = {
  args: {
    align: 'center',
  },
};
