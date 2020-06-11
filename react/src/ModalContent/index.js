import React, { memo, useEffect, useRef } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

const ModalContent = memo(({
	className = '',
	children,
	...props
}) => {
	const classes = classNames([
		'sds-modalcontent',
		className,
	]);
	const ref = useRef(null);

	useEffect(() => {
		ref.current.focus();
	}, []);

	return <div role="dialog" ref={ref} className={classes} {...props} tabIndex={0}>
		{children}
	</div>;
});

ModalContent.displayName = 'ModalContent';

ModalContent.propTypes = {
	className: PropTypes.string,
	tagName: PropTypes.string,
	children: PropTypes.node,
};

export default ModalContent;
