import React from "react";

/**
 * Komponenta Surface zapouzdřuje nastavení povrchu
 * @param {object} props Objekt s atributy komponenty
 * @param {string} [props.className] Mezerami oddělený seznam CSS tříd, které se přidají k těm, které Surface interně využívá
 */
const LabelWrapper = ({
	className,
	label = "",
	layout = "column",
	description = "",
	errorDescription = "",
	children,
	...props
}) => {
	const combinedClassName = [
		"sznds-labelwrapper",
		"sznds-typography_body",
		layout === "column" ? "sznds-labelwrapper_column" : "sznds-labelwrapper_row",
		errorDescription ? "sznds-labelwrapper_error" : "",
		className
	].join(" ");

	return <div className={combinedClassName} {...props}>
		<label>
			<span>{label}:</span>
			<div className="sznds-labelwrapper__div">
				{children}
				<p className="sznds-typography_body-small">{errorDescription ? errorDescription : description}</p>
			</div>
		</label>
	</div>;
};

export default LabelWrapper;
