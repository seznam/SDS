import React from 'react';
import { getIconString } from '@sznds/icons';
import PropTypes from 'prop-types';

/**
 * Icon component represents one of the built-in SVG icons packed with SDS
 * @param {IconProps} props An object with properties
 */
const Icon = ({
	symbol = 'alert',
	className = '',
	...props
}) => (
	// focusable="false" is necessary because of an IE bug, where every SVG without it appears in tab order (ie. to tab out of a button you need to tab twice)
	<span className={`sds-icon ${className}`} {...props}>
		<svg x="0px" y="0px" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: getIconString(symbol) }} focusable="false"></svg>
	</span>
);

Icon.propTypes = {
	symbol: PropTypes.string,
	className: PropTypes.string,
};

export default Icon;

/**
 * An object with Icon's properties.
 * @typedef {Object} IconProps
 * @property {string} [symbol="alert"] Icon identifier
 * @property {string} [className] Space separated list of CSS classes to be added to those that Icon uses internaly
 */
