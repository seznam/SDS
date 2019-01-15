import React from "react";
import { withPreventDefault, classNames } from "@sammas/helpers";
import Surface from "../Surface";
import Icon from "../Icon";
import Spinner from "../Spinner";

const SIZES = {
	"x-small": "sammas-button--xsmall sammas-typography_caption",
	small: "sammas-button--small sammas-typography_body--small",
	regular: "sammas-typography_body"
};

/**
 * Button represents a primary or secondary standalone button
 * @param {object} props An object with props
 * @param {number} [props.surface=5] Surface level 0-5; if Button is primary, value of this prop is ignored
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Button uses internaly
 * @param {boolean} [props.primary=false] If set, Button is rendered in accent color, otherwise the color is derived from given Surface
 * @param {string} [props.size="regular"] One of the sizes "x-small", "small" or "regular"
 * @param {string} [props.icon=""] Icon
 * @param {string} [props.text=""] Button's label
 * @param {boolean} [props.disabled=false] If true, Button is rendered as disabled and does not react to any action
 * @param {boolean} [props.loading=false] If true, Button is rendered with a Spinner inside and also behaves as disabled
 * @param {string} [props.href] If set, Button shall be rendered as an "a" tag and can be CTRL + clicked, bookmarked etc.
 * @param {function} [props.onClick] An onClick event listener (also triggered if the Button is focused and spacebar is pressed)
 * @param {boolean} [props.noPreventDefault=false] If true, even the default action for click event shall not be prevented (even if onClick and href are set at the same time!)
 */
const Button = ({
	surface = 5,
	className = "",
	primary = false,
	size = "regular",
	icon = "",
	text = "",
	disabled = false,
	loading = false,
	href,
	onClick,
	noPreventDefault = false,
	...props
}) => {
	// a Button without any contents is not allowed
	if (!icon && !text) {
		throw new Error("Button has to have an icon or text.");
	}

	const classes = classNames([
		"sammas-button",
		SIZES[size in SIZES ? size : "regular"],
		{
			"sammas-button--primary": primary,
			"sammas-button--loading": loading
		},
		className
	]);

	// a "button" is rendered without a href prop, an "a" otherwise
	const isLink = !!href;

	// technicaly, whatever is loading is also disabled at the moment
	disabled = disabled || loading;

	// a button does not go anywhere after a click on it, no matter what tag renders it
	const click = onClick ? noPreventDefault ? onClick : withPreventDefault(onClick) : undefined;

	// various conditional props
	const conditionalProps = isLink ? {} : { type: "button" };

	return <Surface
		tagName="button"
		surface={primary ? 6 : surface }
		className={classes}
		role="button"
		href={href}
		onClick={click}
		disabled={disabled}
		{...conditionalProps}
		{...props}
	>
		{loading ? <Spinner /> : null}
		{icon ? <Icon symbol={icon} /> : null}{text ? <span className="sammas-button__text">{text}</span> : null}
	</Surface>;
};

export default Button;
