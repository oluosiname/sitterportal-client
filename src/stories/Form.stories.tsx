import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Form from '../components/Form';
import TextField from '../components/TextField';
import { RadioGroup, Switch } from '../components';
import CheckBox from '../components/CheckBox';
import Select from '../components/Select';

const meta: Meta<typeof Form> = {
  title: 'Components/FormControl/Form',
  component: Form,
  tags: ['autodocs'],
  // args: {
  //   label: 'sex',
  //   name: 'sex',
  //   variant: 'primary',
  // },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const Default: Story = {
  render: () => (
    <div className="w-80">
      <Form
        initialData={{
          username: 'ssss',
          sex: '',
          terms: '',
          recurringBilling: null,
          month: null,
        }}
      >
        <TextField name="username" label="username" />
        <TextField name="lastname" label="lastname" />
        <RadioGroup
          name="sex"
          label="Sex"
          options={[
            { label: 'male', value: 'male' },
            { label: 'female', value: 'female' },
          ]}
        />
        <Select
          options={[
            { key: '309a8b53', value: 'January' },
            { key: 'c04f7ec5', value: 'February' },
            { key: '55433646', value: 'March' },
          ]}
          name="month"
        />
        <CheckBox name="terms" label="I agree to the terms and condition" />
        <Switch name="recurringBilling" label={{ on: 'Recurring Billing' }} />
      </Form>
    </div>
  ),
};
