import { configure } from '@storybook/react';

import '../src/components/layout/Layout.module.css';

// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);


