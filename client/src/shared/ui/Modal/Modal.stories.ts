import type { Meta, StoryObj } from '@storybook/react';

import { Modal } from './Modal';

const meta:Meta<typeof Modal> = {
  component: Modal,
  title: 'Shared/Modal',
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Primary: Story = {
  args: {

  },
};
