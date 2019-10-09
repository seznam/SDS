import React, { useState } from 'react';
import { classNames } from '@sznds/helpers';
import Typography from '../Typography';
import InputSurface from '../InputSurface';
import Icon from '../Icon';
import PropTypes from 'prop-types';

/**
 * Default size of an Input component.
 * @private
 */
const DEFAULT_SIZE = 'regular';

/**
 * Input is a standard input that may be accompanied by two icons that can be clickable.
 * @param {InputProps} props An object with properties
 */
const Input = React.memo(({
	className = '',
	iconLeft,
	iconRight,
	onIconLeftClick,
	onIconRightClick,
	error,
	size = DEFAULT_SIZE,
	style,
	onFocus,
	onBlur,
	...props
}) => {
	const [focused, setFocused] = useState(false);

	const handleFocus = function(evt) {
		setFocused(true);
		onFocus && typeof onFocus === 'function' && onFocus(evt);
	};

	const handleBlur = function(evt) {
		setFocused(false);
		onBlur && typeof onBlur === 'function' && onBlur(evt);
	};

	const classes = classNames([
		'sds-input',
		{
			'sds-input--small': size !== DEFAULT_SIZE,
			'sds-input--icon-left': iconLeft,
			'sds-input--icon-right': iconRight,
		},
		className,
	]);

	const leftClasses = classNames([
		'sds-input__button',
		'sds-input__button--left',
		{
			'sds-input__button--enabled': onIconLeftClick,
		},
	]);

	const rightClasses = classNames([
		'sds-input__button',
		'sds-input__button--right',
		{
			'sds-input__button--enabled': onIconRightClick,
		},
	]);

	return <InputSurface tagName="div" className={classes} focused={focused} error={error} size={size} style={style}>
		<Typography tagName="input" {...props} variant={size === DEFAULT_SIZE ? 'body' : 'body-small'} onFocus={handleFocus} onBlur={handleBlur} />
		{iconLeft ? <button type="button" tabIndex="-1" className={leftClasses} onClick={onIconLeftClick}><Icon symbol={iconLeft} /></button> : null}
		{iconRight ? <button type="button" tabIndex="-1" className={rightClasses} onClick={onIconRightClick}><Icon symbol={iconRight} /></button> : null}
	</InputSurface>;
});

Input.propTypes = {
	className: PropTypes.string,
	iconLeft: PropTypes.string,
	iconRight: PropTypes.string,
	onIconLeftClick: PropTypes.func,
	onIconRightClick: PropTypes.func,
	error: PropTypes.bool,
	size: PropTypes.oneOf(['small', 'regular']),
	style: PropTypes.object,
	onFocus: PropTypes.func,
	onBlur: PropTypes.func,
};

export default Input;

/**
 * An object with Input's properties. Input internally uses {@link ../InputSurface/README.md#InputSurface|InputSurface} and takes also properties included in {@link ../InputSurface/README.md#InputSurfaceProps|InputSurfaceProps}.
 * @typedef {Object} InputProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that Input uses internaly
 * @property {string} [iconLeft] Optional left icon glyph
 * @property {string} [iconRight] Optional right icon glyph
 * @property {function} [onIconLeftClick] Click handler for the left icon, its presence makes the icon clickable
 * @property {function} [onIconRightClick] Click handler for the right icon, its presence makes the icon clickable
 * @property {("small"|"regular")} [size="regular"]
 */
