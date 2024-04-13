
import { Meta, StoryObj } from '@storybook/react';
import Toggle from '../../components/Toggle/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checkedValue: { control: 'boolean' },
    onChange: { action: 'toggled' },
  },
  args: {

  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    checkedValue: true
  },
};

export const Secondary: Story = {
  args: {
    checkedValue: false
  },
};
