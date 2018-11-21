import React from "react";
import { classNames } from "@sammas/helpers";

/**
 * Komponenta Icon představující jednu z vestavěných SVG ikon dodávaných v rámci design systému
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Icon interně využívá
 */
const Spinner = ({ className = "", ...props }) => {
	return (
		<span className={classNames(["sammas-spinner", className])} {...props}></span>
	);
};

export default Spinner;
