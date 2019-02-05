import React from "react";
import { classNames } from "@sznds/helpers";

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
	...props
}) => {
	const classes = classNames([
		"sds-labelwrapper",
		"sds-typography_body",
		layout === "column" ? "sds-labelwrapper--column" : "sds-labelwrapper--row",
		{ "sds-labelwrapper_error": errorDescription },
		className
	]);

	return <div className={classes} {...props}>
		<label>
			<span>{label}:</span>
			<div className="sds-labelwrapper__div">
				{children}
				<p className="sds-labelwrapper__description sds-typography_body--small">{errorDescription ? errorDescription : description}</p>
			</div>
		</label>
	</div>;
};

export default LabelWrapper;
