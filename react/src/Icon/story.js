import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Icon from './index';
import ICONS from '@sznds/icons';

import readme from './README.md';

// eslint-disable-next-line no-undef
const stories = storiesOf('Icon', module);

// sestavíme select ze vsech ikon
const icons = {};
for (let icon in ICONS) {
	icons[ICONS[icon].title] = ICONS[icon].icon;
}

stories.addDecorator(withKnobs);

stories.add('nastavitelná', () => (
	<Icon
		symbol={select('Symbol', icons, ICONS['HOME_OUTLINE_24'].icon)}
	/>
), {
	notes: { markdown: readme },
});
