import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import Typography from '../Typography';
import PropTypes from 'prop-types';

/**
 * Default size of a LabelWrapper component.
 * @private
 */
export const DEFAULT_SIZE = 'regular';

/**
 * Default layout of a LabelWrapper component.
 * @private
 */
export const DEFAULT_LAYOUT = 'column';

/**
 * LabelWrapper provides encapsulation for label, anything that is supposed to be a form field and optional description. It takes {@link LabelWrapperProps} as a parameter and returns a React component instance.
 * @param {LabelWrapperProps} props An object with properties
 */
const LabelWrapper = memo(({
	className = '',
	label = '',
	layout = DEFAULT_LAYOUT,
	description = '',
	errorDescription = '',
	children,
	size = DEFAULT_SIZE,
	...props
}) => {
	const classes = classNames([
		'sds-labelwrapper',
		layout === DEFAULT_LAYOUT ? 'sds-labelwrapper--column' : 'sds-labelwrapper--row',
		{
			'sds-labelwrapper--error': errorDescription,
			'sds-labelwrapper--small': size !== DEFAULT_SIZE,
		},
		className,
	]);

	const variant = size === DEFAULT_SIZE ? 'body' : 'body-small';

	return <Typography tagName="label" variant={variant} className={classes} {...props}>
		<span className="sds-labelwrapper__label">{label}</span>
		<div>
			{children}
			<Typography className="sds-labelwrapper__description" variant="body-small">{errorDescription ? errorDescription : description}</Typography>
		</div>
	</Typography>;
});

LabelWrapper.propTypes = {
	className: PropTypes.string,
	label: PropTypes.string,
	layout: PropTypes.oneOf(['column', 'row']),
	description: PropTypes.string,
	errorDescription: PropTypes.string,
	children: PropTypes.node,
	size: PropTypes.oneOf(['small', 'regular']),
};

export default LabelWrapper;

/**
 * An object with LabelWrapper's properties.
 * @typedef {Object} LabelWrapperProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that LabelWrapper uses internaly
 * @property {string} [label]
 * @property {("column"|"row")} [layout]
 * @property {string} [description] Additional description, if label is not enough
 * @property {string} [errorDescription] Displayed instead of description, if present; used for error messages directly next to the relevant form field
 * @property {("small"|"regular")} [size="regular"]
 */
