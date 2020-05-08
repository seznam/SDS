import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import NavItem, { LEVEL_MENU, LEVEL_SUBMENU, LEVEL_TABS, DEFAULT_LAYOUT } from './index';
import ICONS from '@sznds/icons/tester';

import readme from './README.md';

// sestavíme select ze vsech ikon
const icons = {
	'no icon': null
};
for (let icon in ICONS) {
	if (ICONS[icon].icon.size === 16) {
		icons[ICONS[icon].title] = ICONS[icon].icon;
	}
}

// eslint-disable-next-line no-undef
const stories = storiesOf('NavItem', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<NavItem
		icon={select('Icon', icons, null)}
		submenu={boolean('Submenu', false)}
		open={boolean('Open', false)}
		selected={boolean('Selected', false)}
		href={text('Href', '')}
		onClick={action('klik')}
		text={text('Text', 'položka')}
		level={select('Level', [LEVEL_MENU, LEVEL_SUBMENU, LEVEL_TABS], LEVEL_MENU)}
		layout={select('Layout', ['horizontal', 'vertical'], DEFAULT_LAYOUT)}
	/>
), {
	notes: { markdown: readme },
});
