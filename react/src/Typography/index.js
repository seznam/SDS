import React, { forwardRef } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

export const COMPONENT_MAPPING = {
	'hero-big': 'h1',
	'hero-medium': 'h1',
	'hero-small': 'h1',
	'heading-big': 'h2',
	'heading-medium': 'h2',
	'heading-small': 'h2',
	'body': 'p',
	'body-small': 'p',
	'caption': 'p',
	'caption-small': 'p',
};

const Typography = forwardRef(function Typography({
	className,
	tagName,
	variant = 'body',
	...props
}, ref) {
	const Component = tagName || COMPONENT_MAPPING[variant] || 'span';

	const classes = classNames([
		'sds-typography',
		`sds-typography--${variant}`,
		className,
	]);

	return (
		<Component
			className={classes}
			ref={ref}
			{...props}
		/>
	);
});

Typography.propTypes = {
	variant: PropTypes.oneOf(Object.keys(COMPONENT_MAPPING)),
	className: PropTypes.string,
	tagName: PropTypes.string,
};

export default Typography;
