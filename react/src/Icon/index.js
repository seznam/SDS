import React from "react";
import { getIconString } from "@sammas/icons";

/**
 * Komponenta Icon představující jednu z vestavěných SVG ikon dodávaných v rámci design systému
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.symbol="alert"] Identifikátor ikony, její název
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Icon interně využívá
 */
const Icon = ({ symbol = "alert", className }) => {
	return (
		<span className={`sammas-icon ${className}`}>
			<svg x="0px" y="0px" viewBox="0 0 24 24" dangerouslySetInnerHTML = {{ __html: getIconString(symbol) }}></svg>
		</span>
	);
};

export default Icon;
