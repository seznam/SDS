import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Tag from './index';
import { SURFACE_LEVELS, DEFAULT_SURFACE } from '../Surface';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Tag', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<Tag
		surface={select('Surface', SURFACE_LEVELS, DEFAULT_SURFACE)}
		size={select('Size', ['small', 'regular'], 'regular')}
		onClick={action('klik')}
	>
		Text
	</Tag>
), {
	notes: { markdown: readme },
});
