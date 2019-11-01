import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import PropTypes from 'prop-types';

/**
 * A functional component Spinner represents a loader visualisation. It takes {@link SpinnerProps} as a parameter and returns a React component instance.
 * @param {SpinnerProps} props An object with properties
 */
const Spinner = memo(({ className = '', ...props }) => <span className={classNames(['sds-spinner', className])} {...props}></span>);

Spinner.propTypes = {
	className: PropTypes.string,
};

export default Spinner;

/**
 * An object with Spinner's properties.
 * @typedef {Object} SpinnerProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that Spinner uses internaly
 */
