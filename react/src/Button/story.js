import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './index';
import { SURFACE_LEVELS, DEFAULT_SURFACE } from '../Surface';
import ICONS from '@sznds/icons';

import readme from './README.md';

// sestavíme select ze vsech ikon
const icons = {
	'no icon': null
};
for (let icon in ICONS) {
	if (ICONS[icon].icon.size === 24) {
		icons[ICONS[icon].title] = ICONS[icon].icon;
	}
}

// eslint-disable-next-line no-undef
const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add('nastavitelný', () => (
	<Button
		surface={select('Surface', SURFACE_LEVELS, DEFAULT_SURFACE)}
		disabled={boolean('Disabled', false)}
		text={text('Text', 'Tlačítko')}
		icon={select('Icon', icons, null)}
		primary={boolean('Primary', false)}
		size={select('Size', ['x-small', 'small', 'regular'], 'regular')}
		onClick={action('klik')}
	/>
), {
	notes: { markdown: readme },
});

stories.add('s textem', () => <Button onClick={action('klik')} text="Stiskni mě" />)
	.add('s ikonou', () => <Button onClick={action('klik')} icon={select('Icon', icons, ICONS['SEARCH_OUTLINE_24'].icon)} />)
	.add('primární', () => <Button onClick={action('klik')} text="Primární tlačítko" primary />)
	.add('zakázaný', () => <Button onClick={action('klik')} text="Zakázané tlačítko" disabled />);
