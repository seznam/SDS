import React from "react";
import { getIconString } from "../../lib/icons";

/**
 * Komponenta Icon představující jednu z vestavěných SVG ikon dodávaných v rámci design systému
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.symbol="alert"] Identifikátor ikony, její název
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Icon interně využívá
 */
const Icon = ({ symbol = "alert", className }) => {
	const combinedClassName = [
		"szn-icon",
		className
	].join(" ");

	return (
		<span className={combinedClassName}>
			<svg x="0px" y="0px" viewBox="0 0 24 24" dangerouslySetInnerHTML = {{ __html: getIconString(symbol) }}></svg>
		</span>
	);
};

export default Icon;
