import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { EMPTY_SYMBOL_24 } from '@sznds/icons';

/**
 * Icon component represents one of the built-in SVG icons packed with SDS
 * @param {IconProps} props An object with properties
 */
const Icon = memo(({
	symbol = EMPTY_SYMBOL_24,
	className = '',
	...props
}) => {
	const { d, size } = symbol;

	// focusable="false" is necessary because of an IE bug, where every SVG without it appears in tab order (ie. to tab out of a button you need to tab twice)
	return <span className={`sds-icon sds-icon--${size} ${className}`} {...props}>
		<svg x="0px" y="0px" viewBox={`0 0 ${size} ${size}`} focusable="false">
			<path fillRule="evenodd" d={d} />
		</svg>
	</span>;
});

Icon.propTypes = {
	symbol: PropTypes.string,
	className: PropTypes.string,
};

export default Icon;

/**
 * An object with Icon's properties.
 * @typedef {Object} IconProps
 * @property {object} [symbol] Object with icon information imported from sznds/icons
 * @property {string} [className] Space separated list of CSS classes to be added to those that Icon uses internaly
 */
