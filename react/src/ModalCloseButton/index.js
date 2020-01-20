import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

const ModalCloseButton = memo(({
	className = '',
	...props
}) => {
	const classes = classNames([
		'sds-modalclosebutton',
		className,
	]);

	return <button className={classes} {...props}>X</button>;
});

ModalCloseButton.propTypes = {
	className: PropTypes.string,
};

export default ModalCloseButton;
