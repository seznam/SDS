import React from "react";
import Surface from "../Surface";

/**
 * Komponenta Card pro obalování typicky jednotlivých položek nějakého seznamu
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.tagName="div"] Jakou komponentu nebo tag bude používat Card jako obal
 * @param {number} [props.surface=5] Povrch 0-5
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Card interně využívá
 * @param {boolean} [props.disabled=false] Pokud je nastaveno, Card je zakázaná a nereaguje
 * @param {string} [props.href] Pokud je uvedeno, bude se Card renderovat jako odkaz a kromě obyčejného kliknutí primárním tlačítkem myši se tak bude i chovat
 * @param {function} [props.onClick] Posluchač události click
 */
const Card = ({
	tagName = "div",
	surface = 5,
	className = "",
	children,
	...props
}) => {
	const MainTag = tagName;

	return <MainTag className={`sammas-card ${className}`}>
		<Surface
			className="sammas-card__content"
			tagName="div"
			surface={surface}
			{...props}
		>
			{children}
		</Surface>
	</MainTag>;
};

export default Card;
