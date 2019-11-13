import { configure } from '@storybook/react';

import '@sznds/css/sds-0.3.0.css';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /story\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
