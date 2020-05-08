import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Input from './index';
import ICONS from '@sznds/icons/tester';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Input', module);

// sestavíme select ze vsech ikon
const icons = {
	'no icon': null
};
for (let icon in ICONS) {
	if (ICONS[icon].icon.size === 24) {
		icons[ICONS[icon].title] = ICONS[icon].icon;
	}
}

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<Input
		disabled={boolean('Disabled', false)}
		error={boolean('Error', false)}
		size={select('Size', ['small', 'regular'], 'regular')}
		placeholder={text('Placeholder', '')}
		iconLeft={select('IconLeft', icons, null)}
		iconRight={select('IconRight', icons, null)}
		onFocus={action('focus')}
		onBlur={action('blur')}
	/>
), {
	notes: { markdown: readme },
});

stories.add('s klikacími ikonami', () => <Input
	iconLeft={select('IconLeft', icons, ICONS['SEARCH_OUTLINE_24'].icon)}
	onIconLeftClick={action('klik levá')}
	iconRight={select('IconRight', icons, ICONS['CLOSE_OUTLINE_24'].icon)}
	onIconRightClick={action('klik pravá')}
/>);
