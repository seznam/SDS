import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Input from './index';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Input', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<Input
		disabled={boolean('Disabled', false)}
		error={boolean('Error', false)}
		size={select('Size', ['small', 'regular'], 'regular')}
		placeholder={text('Placeholder', '')}
		iconLeft={text('IconLeft', 'search')}
		iconRight={text('IconRight', 'clear')}
		onFocus={action('focus')}
		onBlur={action('blur')}
	/>
), {
	notes: { markdown: readme },
});

stories.add('s klikacími ikonami', () => <Input
	iconLeft={text('IconLeft', 'search')}
	onIconLeftClick={action('klik levá')}
	iconRight={text('IconRight', 'clear')}
	onIconRightClick={action('klik pravá')}
/>);
