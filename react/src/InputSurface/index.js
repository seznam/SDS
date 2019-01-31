import React from "react";
import { classNames } from "@sds/helpers";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * InputSurface encapsulates the visual style of an input of any given element/component
 * @param {object} props An object with props
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that InputSurface uses internaly
 * @param {string} [props.tagName="div"] Rendered element/component to be equipped with an input surface visual
 * @param {string} [props.disabled=false] Is this form field disabled?
 * @param {string} [props.error=false] Is this for field's value invalid?
 */
const InputSurface = React.forwardRef(({
	className = "",
	tagName = "div",
	disabled = false,
	error = false,
	focused = false,
	...props
}, ref) => {
	const classes = classNames([
		"sds-inputsurface",
		"sds-typography_body",
		{
			"sds-inputsurface--disabled": disabled,
			"sds-inputsurface--error": error,
			"sds-inputsurface--focused": focused
		},
		className
	]);

	const MainTag = tagName;

	// různé podmíněné atributy
	const conditionalProps = {};
	if (disabled) { conditionalProps["aria-disabled"] = "true"; }
	if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = disabled; }

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
});

export default InputSurface;
