import React, { memo, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

const Modal = memo(({
	className = '',
	onClose,
	children,
	...props
}) => {
	const classes = classNames([
		'sds-modal',
		className,
	]);
	const [activator, setActivator] = useState(document.activeElement);
	const [tabbables, setTabbables] = useState(Array.from(document.querySelectorAll('button, [href]:not(link), input, select, textarea, [tabindex]:not([tabindex="-1"])')));
	const handleEscape = event => {
		if ((event.key === 'Esc' || event.key === 'Escape') && onClose) {
			onClose();
		}
	};

	useEffect(() => {
		setActivator(document.activeElement);
		document.addEventListener('keydown', handleEscape);

		tabbables.forEach(tabbable => {
			tabbable.setAttribute('data-old-tabindex', tabbable.tabIndex);
			tabbable.tabIndex = '-1';
		});

		return () => {
			document.removeEventListener('keydown', handleEscape);

			tabbables.forEach(tabbable => {
				tabbable.tabIndex = tabbable.getAttribute('data-old-tabindex');
			});
			setTabbables([]);

			if (activator && activator.focus) {
				activator.focus();
			}
		};
	}, []);

	return createPortal(
		<div className={classes} {...props}>
			{children}
		</div>,
		document.body,
	);
});

Modal.displayName = 'Modal';

Modal.propTypes = {
	className: PropTypes.string,
	tagName: PropTypes.string,
	onClose: PropTypes.func,
};

export default Modal;
