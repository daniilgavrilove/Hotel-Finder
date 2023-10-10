import type { Meta, StoryObj } from '@storybook/react';

import { useCallback, useState } from 'react';
import { UserMenu } from './UserMenu';

const meta: Meta<typeof UserMenu> = {
  title: 'Widgets/UserMenu',
  component: UserMenu,
};

export default meta;
type Story = StoryObj<typeof UserMenu>;

export const Primary: Story = {
  args: {

  },
};
