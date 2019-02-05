import React from "react";
import { getIconString } from "@sznds/icons";

/**
 * Icon component represents one of the built-in SVG icons packed with SDS
 * @param {IconProps} props An object with properties
 */
const Icon = ({
	symbol = "alert",
	className = "",
	...props
}) => {
	return (
		<span className={`sds-icon ${className}`} {...props}>
			<svg x="0px" y="0px" viewBox="0 0 24 24" dangerouslySetInnerHTML={{ __html: getIconString(symbol) }}></svg>
		</span>
	);
};

export default Icon;

/**
 * An object with Icon's properties.
 * @typedef {Object} IconProps
 * @property {string} [props.symbol="alert"] Icon identifier
 * @property {string} [props.className] Space separated list of CSS classes to be added to those that Icon uses internaly
 */
