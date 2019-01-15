import React from "react";
import { withPureClick, blurAfterClick, spaceClick, classNames } from "@sammas/helpers";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * @param {number} depth Depth of the surface from 0 to 5
 */
const surfaceClassName = depth => "sammas-surface--" + ([0, 1, 2, 3, 4, 5].indexOf(depth) !== -1 ? "0" + depth : "primary");

/**
 * Surface encapsulates the visual style of an elevated surface of any given element/component
 * @param {object} props An object with props
 * @param {number} [props.surface=5] Surface level 0-5
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Surface uses internaly
 * @param {string} [props.tagName="div"] Rendered element/component to be equipped with a surface visual
 * @param {boolean} [props.disabled=false] If true, Surface is rendered as disabled and does not react to any action (even if clickable=true)
 * @param {boolean} [props.sharp=false] If true, Surface does not have rounded edges and is suitable for full-width usage (header, footer, ...)
 */
const Surface = React.forwardRef(({
	surface = 0,
	className = "",
	tagName = "div",
	disabled = false,
	sharp = false,
	href,
	onClick,
	...props
}, ref) => {
	const clickable = !disabled && (href || onClick);
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

	// we render a link only if a href parameter is set
	const isLink = !!href;

	// the rendered tag is either tagName or "a", if href is present
	const MainTag = isLink ? "a" : tagName;

	// after click we lose focus, as requested by designers (not leaving focus ring after clicking - maybe bad for accesibility?)
	const click = onClick ? blurAfterClick(onClick) : undefined;

	// various conditional props
	const conditionalProps = {};
	if (disabled) {
		conditionalProps["aria-disabled"] = "true";
		if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = true; }
	} else {
		// inside of this !disabled condition, because an "a" is truly unclickable only if href is left out
		if (isLink) {
			conditionalProps.href = href;
			conditionalProps.rel = "noreferrer noopener";
			if (click) {
				conditionalProps.onClick = withPureClick(click);
				conditionalProps.onKeyPress = spaceClick(click);
			}
		} else {
			conditionalProps.onClick = click;
		}
	}
	if (!clickable) {
		conditionalProps.tabIndex = "-1";
	}

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
});

export default Surface;
