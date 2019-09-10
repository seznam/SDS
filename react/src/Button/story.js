import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './index';

// eslint-disable-next-line no-undef
const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add('nastavitelný', () => (
	<Button
		disabled={boolean('Disabled', false)}
		text={text('Text', 'Tlačítko')}
		icon={text('Icon', 'search')}
		primary={boolean('Primary', false)}
		size={select('Size', ['x-small', 'small', 'regular'], 'regular')}
	/>
));

stories.add('s textem', () => <Button onClick={action('klik')} text="Stiskni mě" />)
	.add('s ikonou', () => <Button onClick={action('klik')} icon="home" />)
	.add('primární', () => <Button onClick={action('klik')} text="Primární tlačítko" primary />)
	.add('zakázaný', () => <Button onClick={action('klik')} text="Zakázané tlačítko" disabled />);
