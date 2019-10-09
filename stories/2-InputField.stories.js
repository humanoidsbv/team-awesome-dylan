import React from 'react';
import { action } from '@storybook/addon-actions';

import InputField from '../src/shared/components/input-field';

export default {
  component: InputField,
  title: 'Input'
};

export const inputField = () => <InputField onClick={action('clicked')} />;
