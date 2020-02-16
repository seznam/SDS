import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

const ModalBackdrop = memo(({
	className = '',
	...props
}) => {
	const classes = classNames([
		'sds-modalbackdrop',
		className,
	]);

	return <div className={classes} {...props} />;
});

ModalBackdrop.displayName = 'ModalBackdrop';

ModalBackdrop.propTypes = {
	className: PropTypes.string,
};

export default ModalBackdrop;
