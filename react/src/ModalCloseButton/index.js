import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';
import Button from '../Button';
import { CLOSE } from '@sznds/icons';

const ModalCloseButton = memo(({
	className = '',
	icon = CLOSE,
	...props
}) => {
	const classes = classNames([
		'sds-modalclosebutton',
		className,
	]);

	return <Button className={classes} icon={icon} surface={0} {...props} />;
});

ModalCloseButton.displayName = 'ModalCloseButton';

ModalCloseButton.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.object,
};

export default ModalCloseButton;
