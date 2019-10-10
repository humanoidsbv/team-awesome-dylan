import React from 'react';
import { action } from '@storybook/addon-actions';

import Input from '../src/shared/components/input';

export default {
  component: Input,
  title: 'Input'
};

export const input = () => <Input onClick={action('clicked')} />;
