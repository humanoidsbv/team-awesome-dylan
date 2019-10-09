import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from '../src/shared/components/button';

export default {
  component: Button,
  title: 'Button'
};

export const button = () => <Button onClick={action('clicked')} />;
