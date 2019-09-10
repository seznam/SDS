import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Radio from './index';

// eslint-disable-next-line no-undef
const stories = storiesOf('Radio', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<Radio
		disabled={boolean('Disabled', false)}
		error={boolean('Error', false)}
		size={select('Size', ['small', 'regular'], 'regular')}
		label={text('Label', '')}
		onChange={action('change')}
	/>
));
