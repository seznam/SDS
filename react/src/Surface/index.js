import React from "react";

const DISABLABLE = ["input", "textarea", "button", "select", "fieldset", "keygen"];

/**
 * @param {number} depth Depth of the surface from 0 to 5
 */
const surfaceClassName = depth => {
	const prefix = "szn-surface_0";
	return prefix + ([0, 1, 2, 3, 4, 5].indexOf(depth) !== -1 ? depth : "0");
};

/**
 * Komponenta Surface zapouzdřuje nastavení povrchu
 * @param {object} props Objekt s atributy komponenty
 * @param {number} [props.surface=5] Povrch 0-5
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Surface interně využívá
 * @param {string} [props.tagName="div"] Jakou komponentu nebo tag vybavujeme povrchem
 * @param {boolean} [props.clickable=false] Určuje, zda povrch umí reagovat na focus, click, hover a tak dále (pokud tedy není zároveň disabled)
 * @param {string} [props.disabled=false] Pokud je nastaveno, tak je povrch neaktivní, i kdyby byl clickable
 */
const Surface = ({
	surface = 0,
	className,
	tagName = "div",
	clickable = false,
	disabled = false,
	...props
}) => {
	const combinedClassName = [
		"szn-surface",
		clickable ? "szn-surface_clickable" : "",
		disabled ? "szn-surface_disabled" : "",
		surfaceClassName(surface),
		className
	].join(" ");

	const MainTag = tagName;

	// různé podmíněné atributy
	const conditionalProps = {};
	if (disabled) { conditionalProps["aria-disabled"] = "true"; }
	if (DISABLABLE.indexOf(tagName) !== -1) { conditionalProps.disabled = disabled; }

	return <MainTag className={combinedClassName} {...conditionalProps} {...props} />;
};

export default Surface;
