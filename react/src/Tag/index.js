import React from "react";
import { classNames } from "@sznds/helpers";
import Surface from "../Surface";
import Icon from "../Icon";

const SIZES = {
	"x-small": "sds-tag--xsmall sds-typography_caption",
	small: "sds-tag--small sds-typography_body--small",
	regular: "sds-typography_body"
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
	onClick,
	...props
}) => {
	const classes = classNames([
		"sds-tag",
		SIZES[size in SIZES ? size : "regular"],
		className
	]);

	const classesButton = classNames([
		"sds-tag__button",
		"sds-helpers-button",
		size === "regular" ? "sds-typography_body" : "sds-typography_body--small"
	]);

	return <Surface
		surface={surface}
		className={classes}
		{...props}
	>
		<div className="sds-tag__content">{children}</div>
		<button className={classesButton} type="button" onClick={onClick}><Icon symbol="close" /></button>
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
