import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import InputSurface from './index';

// eslint-disable-next-line no-undef
const stories = storiesOf('InputSurface', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<InputSurface
		tagName={text('TagName', 'input')}
		disabled={boolean('Disabled', false)}
		error={boolean('Error', false)}
		size={select('Size', ['small', 'regular'], 'regular')}
	/>
));
