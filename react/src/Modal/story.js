import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Modal from './index';
import ModalBackdrop from '../ModalBackdrop';
import ModalContent from '../ModalContent';
import ModalHeader from '../ModalHeader';
import ModalCloseButton from '../ModalCloseButton';
import Button from '../Button';
import { useModal } from '../hooks';

import './index.css';

import readme from './README.md';

const Dialog = ({
	clickOutClose = true,
	open = false,
	children,
	handleClose,
	title = '',
}) => open
	? <Modal open={open} onClose={handleClose}>
		<ModalBackdrop {...(clickOutClose ? { onClick: handleClose } : {})} />
		<ModalContent>
			{title === '' ? null : <ModalHeader>{title}</ModalHeader>}
			{children}
			<ModalCloseButton onClick={handleClose} />
		</ModalContent>
	</Modal>
	: null;

Dialog.displayName = 'Dialog';

Dialog.propTypes = {
	children: PropTypes.element.isRequired,
	isActive: PropTypes.bool.isRequired,
	handleClose: PropTypes.func.isRequired,
	clickOutClose: PropTypes.bool,
	open: PropTypes.bool,
	title: PropTypes.string,
};

// eslint-disable-next-line no-undef
const stories = storiesOf('Modal', module);

stories.addDecorator(withKnobs);
stories.add('příklad dialogu', () => {
	const [open, setOpen, toggle] = useModal();

	return (
		<div>
			<p>Bafuikasdasf asdkjhasdj <a href="https://drd.cz/">asdasd</a></p>
			<p>Bafuikasdasf asdkjhasdj <a href="https://drd.cz/">asdasd</a></p>
			<Button onClick={toggle} text="Show Modal" />
			<Dialog
				open={open}
				handleClose={() => setOpen(false)}
				clickOutClose={boolean('ClickOutClose', true)}
				title="Titulek dialogu"
			>
				<p>asldasjd alsdkjkasdjlkasjd lkasjdlakjs</p>
				<p>asldasjd alsdkjkasdjlkasjd <a href="https://drd.cz/">lkasjdlakjs</a></p>
				<p>asldasjd alsdkjkasdjlkasjd lkasjdlakjs</p>
				<p>asldasjd alsdkjkasdjlkasjd <a href="https://drd.cz/">lkasjdlakjs</a></p>
				<p>asldasjd alsdkjkasdjlkasjd lkasjdlakjs</p>
				<p>asldasjd alsdkjkasdjlkasjd <a href="https://drd.cz/">lkasjdlakjs</a></p>
			</Dialog>
			<p>Bafuikasdasf asdkjhasdj <a href="https://drd.cz/">asdasd</a></p>
			<p>Bafuikasdasf asdkjhasdj <a href="https://drd.cz/">asdasd</a></p>
		</div>
	);
}, {
	notes: { markdown: readme },
});
