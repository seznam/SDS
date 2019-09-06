import React from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

/**
 * Default size of an InputSurface component.
 * @private
 */
const DEFAULT_SIZE = 'regular';

/**
 * List of HTML elements that have a native disabled property.
 * @private
 */
const DISABLABLE = ['input', 'textarea', 'button', 'select', 'fieldset', 'keygen'];

/**
 * InputSurface encapsulates the visual style of an input of any given element/component
 * @param {InputSurfaceProps} props An object with properties
 */
const InputSurface = React.memo(React.forwardRef(({
	className = '',
	tagName = 'div',
	disabled = false,
	error = false,
	focused = false,
	size = DEFAULT_SIZE,
	...props
}, ref) => {
	const classes = classNames([
		'sds-inputsurface',
		size === DEFAULT_SIZE ? 'sds-typography_body' : 'sds-typography_body--small sds-inputsurface--small',
		{
			'sds-inputsurface--disabled': disabled,
			'sds-inputsurface--error': error,
			'sds-inputsurface--focused': focused,
		},
		className,
	]);

	const MainTag = tagName;

	// různé podmíněné atributy
	const conditionalProps = {};

	if (disabled) {
		conditionalProps['aria-disabled'] = 'true';
	}
	if (DISABLABLE.indexOf(tagName) !== -1) {
		conditionalProps.disabled = disabled;
	}

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
}));

InputSurface.displayName = 'InputSurface';

InputSurface.propTypes = {
	className: PropTypes.string,
	tagName: PropTypes.string,
	disabled: PropTypes.bool,
	error: PropTypes.bool,
	focused: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'regular']),
};

export default InputSurface;

/**
 * An object with InputSurface's properties.
 * @typedef {Object} InputSurfaceProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that InputSurface uses internaly
 * @property {string} [tagName="div"] Rendered element/component to be equipped with an input surface visual
 * @property {string} [disabled=false] Is this form field disabled?
 * @property {string} [error=false] Is this form field's value invalid?
 * @property {("small"|"regular")} [size="regular"]
 */
