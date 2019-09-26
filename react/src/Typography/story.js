import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Typography, { COMPONENT_MAPPING } from './index';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Typography', module);

const VARIANTS = Object.keys(COMPONENT_MAPPING);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<Typography
		variant={select('Variant', VARIANTS, VARIANTS[0])}
		tagName={text('TagName', 'div')}
	>
		Text obsahu
	</Typography>
), {
	notes: { markdown: readme },
});
