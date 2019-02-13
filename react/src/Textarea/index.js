import React from "react";
import InputSurface from "../InputSurface";

const Textarea = ({
	className = "",
	...props
}) => <InputSurface className={`sds-textarea ${className}`} {...props} tagName="textarea" />;

export default Textarea;

/**
 * An object with Textarea's properties.
 * @typedef {Object} TextareaProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that Textarea uses internaly
 */
