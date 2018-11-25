import React from "react";
import { getIconString } from "@sammas/icons";

/**
 * Icon component represents one of the built-in SVG icons packed with Sammas
 * @param {object} props An object with props
 * @param {string} [props.symbol="alert"] Icon identifier
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Icon uses internaly
 */
const Icon = ({
	symbol = "alert",
	className = "",
	...props
}) => {
	return (
		<span className={`sammas-icon ${className}`} {...props}>
			<svg x="0px" y="0px" viewBox="0 0 24 24" dangerouslySetInnerHTML = {{ __html: getIconString(symbol) }}></svg>
		</span>
	);
};

export default Icon;
