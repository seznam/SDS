import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './index';

const stories = storiesOf('Button', module);

stories.addDecorator(withKnobs);
stories.add("nastavitelný", () => (
	<Button
		disabled={boolean('Disabled', false)}
		text={text('Text', 'Tlačítko')}
		icon={text('Icon', 'search')}
		primary={boolean('Primary', false)}
	/>
));

stories.add('s textem', () => <Button onClick={action('clicked')} text="Stiskni mě" />)
	.add('s ikonou', () => <Button onClick={action('clicked')} icon="home" />)
	.add('primární', () => <Button onClick={action('clicked')} text="Primární tlačítko" primary />)
	.add('zakázané', () => <Button onClick={action('clicked')} text="Zakázané tlačítko" disabled />);
