import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Icon from './index';
import { SEARCH_32 } from '@sznds/icons';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Icon', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelná', () => (
	<Icon
		symbol={text('Symbol', SEARCH_32)}
		size={select('Size', [8, 16, 24, 32], 24)}
	/>
), {
	notes: { markdown: readme },
});
