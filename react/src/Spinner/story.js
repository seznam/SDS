import React from 'react';
import { storiesOf } from '@storybook/react';
import Spinner from './index';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Spinner', module);

stories.add('jediná varianta', () => <Spinner />, {
	notes: { markdown: readme },
});
