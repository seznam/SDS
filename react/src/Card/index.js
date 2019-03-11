import React from 'react';
import Surface from '../Surface';
import PropTypes from 'prop-types';

/**
 * **WIP** A functional component Card represents a single card (usually in a list). It takes {@link CardProps} as a parameter and returns a React component instance.
 * @param {CardProps} props An object with properties
 */
const Card = ({
	tagName = 'div',
	className = '',
	children,
	...props
}) => {
	const MainTag = tagName;

	return <MainTag className={`sds-card ${className}`}>
		<Surface
			className="sds-card__content"
			tagName="div"
			{...props}
		>
			{children}
		</Surface>
	</MainTag>;
};

Card.propTypes = {
	tagName: PropTypes.string,
	className: PropTypes.string,
	children: PropTypes.node,
};

export default Card;

/**
 * An object with Card's properties. Card internally uses {@link ../Surface/README.md#Surface|Surface} and takes also properties included in {@link ../Surface/README.md#SurfaceProps|SurfaceProps}.
 * @typedef {Object} CardProps
 * @property {string} [tagName="div"] Name of a component or tag Card should use as its container
 * @property {string} [className] Space separated list of CSS classes to be added to those that Card uses internaly
 */
