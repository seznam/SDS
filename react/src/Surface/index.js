import React from "react";
import { classNames } from "@sammas/helpers";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * @param {number} depth Depth of the surface from 0 to 5
 */
const surfaceClassName = depth => {
	const prefix = "sammas-surface--0";
	return prefix + ([0, 1, 2, 3, 4, 5].indexOf(depth) !== -1 ? depth : "0");
};

/**
 * Surface encapsulates the visual style of an elevated surface of any given element/component
 * @param {object} props An object with props
 * @param {number} [props.surface=5] Surface level 0-5
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Surface uses internaly
 * @param {string} [props.tagName="div"] Rendered element/component to be equipped with a surface visual
 * @param {boolean} [props.clickable=false] If true, Surface reacts to focus, hover and active (if not disabled)
 * @param {boolean} [props.disabled=false] If true, Surface is rendered as disabled and does not react to any action (even if clickable=true)
 * @param {boolean} [props.sharp=false] If true, Surface does not have rounded edges and is suitable for full-width usage (header, footer, ...)
 */
const Surface = React.forwardRef(({
	surface = 0,
	className = "",
	tagName = "div",
	clickable = false,
	disabled = false,
	sharp = false,
	...props
}, ref) => {
	const classes = classNames([
		"sammas-surface",
		{
			"sammas-surface--clickable": clickable,
			"sammas-surface--disabled": disabled,
			"sammas-surface--sharp": sharp
		},
		surfaceClassName(surface),
		className
	]);

	const MainTag = tagName;

	// various conditional props
	const conditionalProps = {};
	if (disabled) { conditionalProps["aria-disabled"] = "true"; }
	if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = disabled; }

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
});

export default Surface;
