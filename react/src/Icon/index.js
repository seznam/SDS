import React from 'react';
import PropTypes from 'prop-types';

const DEFAULT_SIZE = 24;

/**
 * Icon component represents one of the built-in SVG icons packed with SDS
 * @param {IconProps} props An object with properties
 */
const Icon = React.memo(({
	symbol = '',
	size = DEFAULT_SIZE,
	className = '',
	...props
}) => (
	// focusable="false" is necessary because of an IE bug, where every SVG without it appears in tab order (ie. to tab out of a button you need to tab twice)
	<span className={`sds-icon sds-icon--${size} ${className}`} {...props}>
		<svg x="0px" y="0px" width={size} height={size} viewBox={`0 0 ${size} ${size}`} focusable="false">
			<path fillRule="evenodd" d={symbol} />
		</svg>
	</span>
));

Icon.propTypes = {
	symbol: PropTypes.string,
	size: PropTypes.oneOf([8, 16, 24, 32]),
	className: PropTypes.string,
};

export default Icon;

/**
 * An object with Icon's properties.
 * @typedef {Object} IconProps
 * @property {string} [symbol] Path of the icon (value for the "d" parameter)
 * @property {8|16|24|32} [size=24] Size in pixels, one of 8, 16, 24, 32
 * @property {string} [className] Space separated list of CSS classes to be added to those that Icon uses internaly
 */
