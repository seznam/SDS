import React from 'react';
import InputSurface from '../InputSurface';
import PropTypes from 'prop-types';

/**
 * A functional component Textarea represents a multiline text input field. It takes {@link TextareaProps} as a parameter and returns a React component instance.
 * @param {TextareaProps} props An object with properties
 */
const Textarea = ({ className = '', ...props }) => <InputSurface className={`sds-textarea ${className}`} {...props} tagName="textarea" />;

Textarea.propTypes = {
	className: PropTypes.string,
};

export default Textarea;

/**
 * An object with Textarea's properties.
 * @typedef {Object} TextareaProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that Textarea uses internaly
 */
