import React from "react";
import { classNames } from "@sznds/helpers";

/* TODO: rest of documentation */

/**
 * LabelWrapper provides encapsulation for label, anything that is supposed to be a form field and optional description
 * @param {object} props An object with props
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that LabelWrapper uses internaly
 */
const LabelWrapper = ({
	className = "",
	label = "",
	layout = "column",
	description = "",
	errorDescription = "",
	children,
	size = "regular",
	...props
}) => {
	const classes = classNames([
		"sds-labelwrapper",
		size === "regular" ? "sds-typography_body" : "sds-typography_body--small sds-labelwrapper--small",
		layout === "column" ? "sds-labelwrapper--column" : "sds-labelwrapper--row",
		{ "sds-labelwrapper--error": errorDescription },
		className
	]);

	return <label className={classes} {...props}>
		<span className="sds-labelwrapper__label">{label}:</span>
		<div>
			{children}
			<p className="sds-labelwrapper__description sds-typography_body--small">{errorDescription ? errorDescription : description}</p>
		</div>
	</label>;
};

export default LabelWrapper;
