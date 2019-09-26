import React from 'react';
import { withPureClick, spaceClick, classNames } from '@sznds/helpers';
import Typography from '../Typography';
import Icon from '../Icon';
import PropTypes from 'prop-types';

const LEVEL_CLASSES = {
	1: 'body',
	2: 'body-small',
	3: 'body',
};

export const DEFAULT_LAYOUT = 'horizontal';

export const LEVEL_MENU = 1;
export const LEVEL_SUBMENU = 2;
export const LEVEL_TABS = 3;

/**
 * A functional component NavItem represents an item of a level 1 or 2 menu or a tab, which is level 3.
 * @param {NavItemProps} props An object with properties
 */
const NavItem = React.memo(({
	className = '',
	icon = '',
	submenu = false,
	open = false,
	selected = false,
	href,
	onClick,
	text,
	level = 1,
	layout = DEFAULT_LAYOUT,
	...props
}) => {
	const classes = classNames([
		'sds-navitem',
		'sds-helpers-button',
		`sds-navitem--level${level}`,
		`sds-navitem--${layout}`,
		{
			'sds-navitem--submenu': submenu,
			'sds-navitem--selected': selected,
		},
		className,
	]);

	// various conditional props
	const conditionalProps = {};

	if (href) {
		conditionalProps.href = href;
		conditionalProps.rel = 'noreferrer noopener';
		if (onClick) {
			conditionalProps.onClick = withPureClick(onClick);
			conditionalProps.onKeyPress = spaceClick(onClick);
		}
	} else {
		conditionalProps.onClick = onClick;
	}

	// what icon is really shown
	const outIcon = level === 1
		? icon && layout !== DEFAULT_LAYOUT
			? icon
			: selected
				? 'dot'
				: 'empty'
		: null;

	return <Typography tagName={href ? 'a' : 'button'} variant={LEVEL_CLASSES[level]} className={classes} {...conditionalProps} {...props}>
		{outIcon ? <Icon symbol={outIcon} className={classNames(['sds-navitem__icon', { 'sds-navitem__icon--dot': outIcon === 'dot' }])} /> : null}
		<span className="sds-navitem__text" data-text={text}>{text}</span>
		{submenu && level === 1 && layout !== DEFAULT_LAYOUT ? <Icon symbol={open ? 'arrowUp' : 'arrowDown'} className="sds-navitem__icon-submenu" /> : null}
	</Typography>;
});

NavItem.propTypes = {
	className: PropTypes.string,
	icon: PropTypes.string,
	submenu: PropTypes.bool,
	open: PropTypes.bool,
	selected: PropTypes.bool,
	href: PropTypes.string,
	onClick: PropTypes.func,
	text: PropTypes.string.isRequired,
	level: PropTypes.oneOf([LEVEL_MENU, LEVEL_SUBMENU, LEVEL_TABS]),
	layout: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default NavItem;

/**
 * An object with NavItem's properties.
 * @typedef {Object} NavItemProps
 * @property {string} [className] Space separated list of CSS classes to be added to those that Button uses internaly
 * @property {string} [icon] Icon
 * @property {boolean} submenu
 * @property {boolean} open
 * @property {boolean} selected
 * @property {string} href
 * @property {function} [onClick] An onClick event listener (also triggered if the NavItem is focused and spacebar is pressed)
 * @property {string} [text] NavItem's label
 * @property {(1|2|3)} level
 * @property {("horizontal"|"vertical")} layout
 */
