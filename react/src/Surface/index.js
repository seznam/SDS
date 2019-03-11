import React from 'react';
import { withPureClick, blurAfterClick, spaceClick, classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

/**
 * List of HTML elements that have a native disabled property.
 * @private
 */
const DISABLABLE = ['input', 'textarea', 'button', 'select', 'fieldset', 'keygen'];

/**
 * Surface level 0 is no visible surface (no border, no background), but needed to create consistent focus for anything using a Surface.
 */
export const EMPTY_SURFACE = 0;

/**
 * Surface level 5 is default value for anything using a Surface.
 */
export const DEFAULT_SURFACE = 5;

/**
 * Surface level 6 represents a special case of a surface that uses the same level of depth as level 5 but uses primary color as background and shadow tint.
 */
export const PRIMARY_SURFACE = 6;

/**
 * The most usual scale of surface levels.
 */
// eslint-disable-next-line no-magic-numbers
export const SURFACE_LEVELS = [1, 2, 3, 4, 5];

/**
 * The complete scale of surface levels.
 */
export const ALL_SURFACE_LEVELS = [EMPTY_SURFACE, ...SURFACE_LEVELS, PRIMARY_SURFACE];

/**
 * @param {number} depth Depth of the surface from 0 to 5
 * @private
 */
const surfaceClassName = depth => `sds-surface--${(ALL_SURFACE_LEVELS.indexOf(depth) === -1 ? 'primary' : `0${depth}`)}`;

/**
 * Surface encapsulates the visual style of an elevated surface of any given element/component
 * @param {SurfaceProps} props An object with properties
 */
const Surface = React.forwardRef(({
	surface = DEFAULT_SURFACE,
	className = '',
	tagName = 'div',
	disabled = false,
	sharp = false,
	href,
	onClick,
	...props
}, ref) => {
	const clickable = !disabled && (href || onClick);
	const classes = classNames([
		'sds-surface',
		{
			'sds-surface--clickable': clickable,
			'sds-surface--disabled': disabled,
			'sds-surface--sharp': sharp,
		},
		surfaceClassName(surface),
		className,
	]);

	// we render a link only if a href parameter is set
	const isLink = !!href;

	// the rendered tag is either tagName or "a", if href is present
	const MainTag = isLink ? 'a' : tagName;

	// after click we lose focus, as requested by designers (not leaving focus ring after clicking - maybe bad for accesibility?)
	const click = onClick ? blurAfterClick(onClick) : undefined;

	// various conditional props
	const conditionalProps = {};

	if (disabled) {
		conditionalProps['aria-disabled'] = 'true';
		if (DISABLABLE.indexOf(tagName) !== -1) {
			conditionalProps.disabled = true;
		}
	// inside of this !disabled condition, because an "a" is truly unclickable only if href is left out
	} else if (isLink) {
		conditionalProps.href = href;
		conditionalProps.rel = 'noreferrer noopener';
		if (click) {
			conditionalProps.onClick = withPureClick(click);
			conditionalProps.onKeyPress = spaceClick(click);
		}
	} else {
		conditionalProps.onClick = click;
	}
	if (!clickable) {
		conditionalProps.tabIndex = '-1';
	}

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
});

Surface.displayName = 'Surface';

Surface.propTypes = {
	surface: PropTypes.oneOf(ALL_SURFACE_LEVELS),
	className: PropTypes.string,
	tagName: PropTypes.string,
	disabled: PropTypes.bool,
	sharp: PropTypes.bool,
	href: PropTypes.string,
	onClick: PropTypes.func,
};

export default Surface;

/**
 * An object with Surface's properties.
 * @typedef {Object} SurfaceProps
 * @property {0|1|2|3|4|5|6} [surface=5] Surface level 0-5; any other value results in a primary surface
 * @property {string} [className] Space separated list of CSS classes to be added to those that Surface uses internaly
 * @property {string} [tagName="div"] Rendered element/component to be equipped with a surface visual
 * @property {boolean} [primary=false] If set, Button is rendered in accent color, otherwise the color is derived from given Surface
 * @property {boolean} [disabled=false] If true, Surface is rendered as disabled and does not react to any action
 * @property {boolean} [sharp=false] If true, Surface does not have rounded edges and is suitable for full-width usage (header, footer, ...)
 * @property {string} [href] If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc.
 * @property {function} [onClick] An onClick event listener (also triggered if the Surface is focused and spacebar is pressed)
 */
