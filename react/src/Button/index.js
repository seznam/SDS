import React from "react";
import { withPureClick, blurAfterClick } from "@szn-ds/helpers";
import Surface from "../Surface";
import Icon from "../Icon";

const spaceClick = onClick => {
	return e => {
		if (e.key === " ") {
			e.preventDefault();
			if (onClick) { onClick(e); }
		}
	};
};

/**
 * Komponenta Button představující primární a sekundární samostatná tlačítka
 * @param {object} props Objekt s atributy komponenty
 * @param {number} [props.surface=5] Povrch 0-5, v případě, že je tlačítko primární, jeho hodnota se ignoruje
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Button interně využívá
 * @param {boolean} [props.primary=false] Pokud je nastaveno, je tlačítko v accent barvě, jinak je sekundární a ctí zvolený povrch
 * @param {boolean} [props.small=false] Pokud je nastaveno, je tlačítko malé, jinak je v normální velikosti
 * @param {string} [props.icon=""] Ikona
 * @param {string} [props.text=""] Text uvnitř tlačítka
 * @param {boolean} [props.disabled=false] Pokud je nastaveno, tlačítko je zakázané a nereaguje
 * @param {string} [props.href] Pokud je uvedeno, bude se tlačítko renderovat jako odkaz a kromě obyčejného kliknutí primárním tlačítkem se tak bude i chovat
 * @param {function} [props.onClick] Posluchač události click
 */
const Button = ({
	surface = 5,
	className,
	primary = false,
	small = false,
	icon = "",
	text = "",
	disabled = false,
	href,
	onClick,
	...props
}) => {
	const combinedClassName = [
		"szn-button",
		primary ? "szn-button_primary" : "",
		small ? "szn-button_small szn-typography_body-small" : "szn-typography_body",
		className
	].join(" ");

	// pokud má href, bude se renderovat jako odkaz, jinak tlačítko
	const isLink = !!href;

	// různé podmíněné atributy
	const conditionalProps = {};
	if (!disabled) {
		// je tady a ne mimo podmínku o disabled, protože odkaz nejde jen tak zakázat, aby nefungoval, nesmí mít href
		if (isLink) { conditionalProps.href = href; }
	}
	if (isLink) {
		conditionalProps.onClick = blurAfterClick(withPureClick(onClick));
		conditionalProps.onKeyPress = blurAfterClick(spaceClick(onClick));
		conditionalProps.rel = "noreferrer noopener";
	} else {
		conditionalProps.type = "button";
		conditionalProps.onClick = blurAfterClick(onClick);
	}

	return <Surface
		tagName={isLink ? "a" : "button"}
		surface={primary ? 5 : surface }
		className={combinedClassName}
		clickable={!disabled}
		disabled={disabled}
		role="button"
		{...conditionalProps}
		{...props}
	>
		{icon ? <Icon symbol={icon} /> : null}{text ? <span className="szn-button-text">{text}</span> : null}
	</Surface>;
};

export default Button;
