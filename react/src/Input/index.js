import React from "react";
import { classNames } from "@sznds/helpers";
import InputSurface from "../InputSurface";
import Icon from "../Icon";

/* TODO: rest of documentation */

/**
 * Input is a standard input that may be accompanied by two icons that can be clickable
 * @param {object} props An object with props
 * @param {string} [props.className] Space separated list of CSS classes to be added to those that Input uses internaly
 */
class Input extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: false
		};
		this.handleFocus = this.handleFocus.bind(this);
		this.handleBlur = this.handleBlur.bind(this);
	}

	handleFocus(e) {
		this.setState(() => ({
			focused: true
		}));
		this.props.onFocus && typeof this.props.onFocus === "function" && this.props.onFocus(e);
	}

	handleBlur(e) {
		this.setState(() => ({
			focused: false
		}));
		this.props.onBlur && typeof this.props.onBlur === "function" && this.props.onBlur(e);
	}

	render() {
		let {
			className = "",
			iconLeft,
			iconRight,
			onIconLeftClick,
			onIconRightClick,
			error,
			...props
		} = this.props;

		const classes = classNames([
			"sds-input",
			"sds-typography_body",
			{
				"sds-input_icon-left": iconLeft,
				"sds-input_icon-right": iconRight
			},
			className
		]);

		const leftIcon = iconLeft ? <Icon symbol={iconLeft} className="sds-input__sds-icon_left" /> : null;
		const rightIcon = iconRight ? <Icon symbol={iconRight} className="sds-input__sds-icon_right" /> : null;

		return <InputSurface tagName="div" className={classes} focused={this.state.focused} error={error}>
			<input {...props} className="sds-typography_body" onFocus={this.handleFocus} onBlur={this.handleBlur} />
			{iconLeft ? (onIconLeftClick ? <button type="button" tabIndex="-1" className="sds-input__sds-icon_left sds-typography_body" onClick={onIconLeftClick}>{leftIcon}</button> : leftIcon) : null}
			{iconRight ? (onIconRightClick ? <button type="button" tabIndex="-1" className="sds-input__sds-icon_right sds-typography_body" onClick={onIconRightClick}>{rightIcon}</button> : rightIcon) : null}
		</InputSurface>;
	}
}

export default Input;
