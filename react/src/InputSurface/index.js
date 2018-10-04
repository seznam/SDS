import React from "react";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * Komponenta Surface zapouzdřuje nastavení povrchu
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Surface interně využívá
 * @param {string} [props.tagName="div"] Jakou komponentu nebo tag vybavujeme povrchem
 * @param {string} [props.disabled=false] Je vykreslovaný prvek zakázán
 * @param {string} [props.error=false] Je hodnota prvku neplatná?
 */
const InputSurface = ({
	className,
	tagName = "div",
	disabled = false,
	error = false,
	focused = false,
	...props
}) => {
	const combinedClassName = [
		"sznds-inputsurface",
		"sznds-typography_body",
		disabled ? "sznds-inputsurface_disabled" : "",
		error ? "sznds-inputsurface_error" : "",
		focused ? "sznds-inputsurface_focused" : "",
		className
	].join(" ");

	const MainTag = tagName;

	// různé podmíněné atributy
	const conditionalProps = {};
	if (disabled) { conditionalProps["aria-disabled"] = "true"; }
	if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = disabled; }

	return <MainTag className={combinedClassName} {...conditionalProps} {...props} />;
};

export default InputSurface;
