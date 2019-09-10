import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import LabelWrapper, { DEFAULT_SIZE, DEFAULT_LAYOUT } from './index';
import Input from '../Input';

// eslint-disable-next-line no-undef
const stories = storiesOf('LabelWrapper', module);

stories.addDecorator(withKnobs);

stories.add('nastavitelný', () => (
	<LabelWrapper
		size={select('Size', ['small', 'regular'], DEFAULT_SIZE)}
		layout={select('Layout', ['column', 'row'], DEFAULT_LAYOUT)}
		label={text('Label', 'Jméno')}
		description={text('Description', '')}
		errorDescription={text('ErrorDescription', '')}
	>
		<Input />
	</LabelWrapper>
));
