import React from "react";
import { classNames } from "@sammas/helpers";
import InputSurface from "../InputSurface";
import Icon from "../Icon";

/**
 * Komponenta Surface zapouzdřuje nastavení povrchu
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Surface interně využívá
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
			"sammas-input",
			"sammas-typography_body",
			{
				"sammas-input_icon-left": iconLeft,
				"sammas-input_icon-right": iconRight
			},
			className
		]);

		const leftIcon = iconLeft ? <Icon symbol={iconLeft} className="sammas-input__sammas-icon_left" /> : null;
		const rightIcon = iconRight ? <Icon symbol={iconRight} className="sammas-input__sammas-icon_right" /> : null;

		return <InputSurface tagName="div" className={classes} focused={this.state.focused} error={error}>
			<input {...props} className="sammas-typography_body" onFocus={this.handleFocus} onBlur={this.handleBlur} />
			{iconLeft ? (onIconLeftClick ? <button type="button" tabIndex="-1" className="sammas-input__sammas-icon_left sammas-typography_body" onClick={onIconLeftClick}>{leftIcon}</button> : leftIcon) : null}
			{iconRight ? (onIconRightClick ? <button type="button" tabIndex="-1" className="sammas-input__sammas-icon_right sammas-typography_body" onClick={onIconRightClick}>{rightIcon}</button> : rightIcon) : null}
		</InputSurface>;
	}
}

export default Input;
