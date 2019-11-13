import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import Typography from '../Typography';
import Surface, { SURFACE_LEVELS, DEFAULT_SURFACE, PRIMARY_SURFACE } from '../Surface';
import Icon from '../Icon';
import Spinner from '../Spinner';
import PropTypes from 'prop-types';

/**
 * Default size of a Button component.
 * @private
 */
const DEFAULT_SIZE = 'regular';

/**
 * CSS classes for available sizes of Buttons.
 * @private
 */
const SIZES = {
	'x-small': 'sds-button--xsmall',
	'small': 'sds-button--small',
	'regular': '',
};

const VARIANTS = {
	'x-small': 'caption',
	'small': 'body-small',
	'regular': 'body',
};

/**
 * A functional component Button represents a primary or secondary standalone button. It takes {@link ButtonProps} as a parameter and returns a React component instance.
 * @param {ButtonProps} props An object with properties
 */
const Button = memo(({
	surface = DEFAULT_SURFACE,
	className = '',
	primary = false,
	size = DEFAULT_SIZE,
	icon,
	text = '',
	disabled = false,
	loading = false,
	href,
	...props
}) => {
	// a Button without any contents is not allowed
	if (!icon && !text) {
		throw new Error('Button has to have an icon or text.');
	}

	const classes = classNames([
		'sds-button',
		'sds-helpers-button',
		SIZES[size in SIZES ? size : DEFAULT_SIZE],
		{
			'sds-button--primary': primary,
			'sds-button--loading': loading,
		},
		className,
	]);

	const variant = VARIANTS[size in VARIANTS ? size : DEFAULT_SIZE];

	// a "button" is rendered without a href prop, an "a" otherwise
	const isLink = !!href;

	// various conditional props
	const conditionalProps = isLink ? {} : { type: 'button' };

	return <Surface
		tagName="button"
		surface={primary ? PRIMARY_SURFACE : surface}
		className={classes}
		role="button"
		href={href}
		disabled={disabled || loading}
		{...conditionalProps}
		{...props}
	>
		{loading ? <Spinner /> : null}
		{icon ? <Icon symbol={icon} /> : null}{text ? <Typography tagName="span" variant={variant} className="sds-button__text">{text}</Typography> : null}
	</Surface>;
});

Button.propTypes = {
	surface: PropTypes.oneOf(SURFACE_LEVELS),
	className: PropTypes.string,
	primary: PropTypes.bool,
	size: PropTypes.oneOf(['x-small', 'small', 'regular']),
	icon: PropTypes.object,
	text: PropTypes.string,
	disabled: PropTypes.bool,
	loading: PropTypes.bool,
	href: PropTypes.string,
};

export default Button;

/**
 * @external Surface
 * @see https://github.com/Seznam/SDS/react/src/Surface/README.md#Surface
 */

/**
 * An object with Button's properties. Button internally uses {@link ../Surface/README.md#Surface|Surface} and takes also properties included in {@link ../Surface/README.md#SurfaceProps|SurfaceProps}.
 * @typedef {Object} ButtonProps
 * @property {1|2|3|4|5} [surface=5] Surface level 0-5; if Button is primary, value of this prop is ignored
 * @property {string} [className] Space separated list of CSS classes to be added to those that Button uses internaly
 * @property {boolean} [primary=false] If set, Button is rendered in accent color, otherwise the color is derived from given Surface
 * @property {("x-small"|"small"|"regular")} [size="regular"]
 * @property {object} [icon] Icon
 * @property {string} [text] Button's label
 * @property {boolean} [disabled=false] If true, Button is rendered as disabled and does not react to any action
 * @property {boolean} [loading=false] If true, Button is rendered with a Spinner inside and also behaves as disabled
 * @property {string} [href] If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc.
 * @property {function} [onClick] An onClick event listener (also triggered if the Button is focused and spacebar is pressed)
 */
