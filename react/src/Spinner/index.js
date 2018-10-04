import React from "react";

/**
 * Komponenta Icon představující jednu z vestavěných SVG ikon dodávaných v rámci design systému
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Icon interně využívá
 */
const Spinner = ({ className, ...props }) => {
	const combinedClassName = [
		"sznds-spinner",
		className
	].join(" ");

	return (
		<span className={combinedClassName} {...props}></span>
	);
};

export default Spinner;
