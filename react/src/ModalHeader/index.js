import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

const ModalHeader = memo(({
	className = '',
	children,
	...props
}) => {
	const classes = classNames([
		'sds-modalheader',
		className,
	]);

	return <div className={classes} {...props}>
		{children}
	</div>;
});

ModalHeader.displayName = 'ModalHeader';

ModalHeader.propTypes = {
	className: PropTypes.string,
	tagName: PropTypes.string,
	children: PropTypes.node,
};

export default ModalHeader;
