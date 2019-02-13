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
			size = "regular",
			style,
			...props
		} = this.props;

		const classes = classNames([
			"sds-input",
			size === "regular" ? "sds-typography_body" : "sds-typography_body--small sds-input--small",
			{
				"sds-input--icon-left": iconLeft,
				"sds-input--icon-right": iconRight
			},
			className
		]);

		const leftClasses = classNames([
			"sds-input__button",
			"sds-input__button--left",
			"sds-typography_body",
			{
				"sds-input__button--enabled": onIconLeftClick
			}
		]);

		const rightClasses = classNames([
			"sds-input__button",
			"sds-input__button--right",
			"sds-typography_body",
			{
				"sds-input__button--enabled": onIconRightClick
			}
		]);

		return <InputSurface tagName="div" className={classes} focused={this.state.focused} error={error} size={size} style={style}>
			<input {...props} className={size == "regular" ? "sds-typography_body" : "sds-typography_body--small"} onFocus={this.handleFocus} onBlur={this.handleBlur} />
			{iconLeft ? <button type="button" tabIndex="-1" className={leftClasses} onClick={onIconLeftClick}><Icon symbol={iconLeft} /></button> : null}
			{iconRight ? <button type="button" tabIndex="-1" className={rightClasses} onClick={onIconRightClick}><Icon symbol={iconRight} /></button> : null}
		</InputSurface>;
	}
}

export default Input;
