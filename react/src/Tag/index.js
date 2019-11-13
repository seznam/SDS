import React, { memo } from 'react';
import { classNames } from '@sznds/helpers';
import Typography from '../Typography';
import Surface, { SURFACE_LEVELS, DEFAULT_SURFACE } from '../Surface';
import Icon from '../Icon';
import PropTypes from 'prop-types';
import { CLOSE } from '@sznds/icons';

/**
 * Default size of a Tag component.
 * @private
 */
const DEFAULT_SIZE = 'regular';

/**
 * CSS classes for available sizes of Tags.
 * @private
 */
const SIZES = {
	'x-small': 'sds-tag--xsmall',
	'small': 'sds-tag--small',
	'regular': '',
};

const VARIANTS = {
	'x-small': 'caption',
	'small': 'body-small',
	'regular': 'body',
};

/**
 * Tag represents one selected and removable option of many (e.g. filter options). It takes {@link TagProps} as a parameter and returns a React component instance.
 * @param {TagProps} props An object with properties
 */
const Tag = memo(({
	surface = DEFAULT_SURFACE,
	className = '',
	size = DEFAULT_SIZE,
	children,
	onClick,
	...props
}) => {
	const classes = classNames([
		'sds-tag',
		SIZES[size in SIZES ? size : DEFAULT_SIZE],
		className,
	]);

	const variant = VARIANTS[size in VARIANTS ? size : DEFAULT_SIZE];

	const classesButton = classNames([
		'sds-tag__button',
		'sds-helpers-button',
	]);

	return <Surface
		surface={surface}
		className={classes}
		{...props}
	>
		<Typography tagName="div" variant={variant} className="sds-tag__content">{children}</Typography>
		<button className={classesButton} type="button" onClick={onClick}><Icon symbol={CLOSE} /></button>
	</Surface>;
});

Tag.propTypes = {
	surface: PropTypes.oneOf(SURFACE_LEVELS),
	className: PropTypes.string,
	size: PropTypes.oneOf(['x-small', 'small', 'regular']),
	children: PropTypes.node,
	onClick: PropTypes.func,
};

export default Tag;

/**
 * An object with Tag's properties. Tag internally uses {@link ../Surface/README.md#Surface|Surface} and takes also properties included in {@link ../Surface/README.md#SurfaceProps|SurfaceProps}.
 * @typedef {Object} TagProps
 * @property {number} [surface=5] Surface level 0-5
 * @property {string} [className] Space separated list of CSS classes to be added to those that Tag uses internaly
 * @property {("x-small"|"small"|"regular")} [size="regular"]
 */
