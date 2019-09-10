import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Textarea from './index';

// eslint-disable-next-line no-undef
const stories = storiesOf('Textarea', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelná', () => (
	<Textarea
		disabled={boolean('Disabled', false)}
		error={boolean('Error', false)}
		size={select('Size', ['small', 'regular'], 'regular')}
		placeholder={text('Placeholder', '')}
		cols={text('Cols', '')}
		rows={text('Rows', '')}
	/>
));
