import React from "react";
import { classNames } from "@sammas/helpers";
import Surface from "../Surface";
import Icon from "../Icon";

const SIZES = {
	"x-small": "sammas-tag--xsmall sammas-typography_caption",
	small: "sammas-tag--small sammas-typography_body--small",
	regular: "sammas-typography_body"
};

/**
 * Tag represents one selected and removable option of many (e.g. filter options)
 * @param {TagProps} props An object with properties
 */
const Tag = ({
	surface = 5,
	className = "",
	size = "regular",
	children,
	...props
}) => {
	const classes = classNames([
		"sammas-tag",
		SIZES[size in SIZES ? size : "regular"],
		className
	]);

	return <Surface
		surface={surface}
		className={classes}
		{...props}
	>
		<div className="sammas-tag__content">{children}</div>
		<button className="sammas-tag__button"><Icon symbol="close" /></button>
	</Surface>;
};

export default Tag;

/**
 * An object with Tag's properties. Tag internally uses {@link ../Surface/README.md#Surface|Surface} and takes also properties included in {@link ../Surface/README.md#SurfaceProps|SurfaceProps}.
 * @typedef {Object} TagProps
 * @property {number} [surface=5] Surface level 0-5
 * @property {string} [className] Space separated list of CSS classes to be added to those that Tag uses internaly
 * @property {("x-small"|"small"|"regular")} [size="regular"]
 */
