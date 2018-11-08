import React from "react";
import { classNames } from "@sammas/helpers";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * Komponenta Surface zapouzdřuje nastavení povrchu
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Surface interně využívá
 * @param {string} [props.tagName="div"] Jakou komponentu nebo tag vybavujeme povrchem
 * @param {string} [props.disabled=false] Je vykreslovaný prvek zakázán
 * @param {string} [props.error=false] Je hodnota prvku neplatná?
 */
const InputSurface = React.forwardRef(({
	className,
	tagName = "div",
	disabled = false,
	error = false,
	focused = false,
	...props
}, ref) => {
	const classes = classNames([
		"sammas-inputsurface",
		"sammas-typography_body",
		{
			"sammas-inputsurface_disabled": disabled,
			"sammas-inputsurface_error": error,
			"sammas-inputsurface_focused": focused
		},
		className
	]);

	const MainTag = tagName;

	// různé podmíněné atributy
	const conditionalProps = {};
	if (disabled) { conditionalProps["aria-disabled"] = "true"; }
	if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = disabled; }

	return <MainTag className={classes} ref={ref} {...conditionalProps} {...props} />;
});

export default InputSurface;
