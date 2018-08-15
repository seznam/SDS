/* TODO: Možná generovat automaticky z nějakého adresáře, kde budou žít SVG ikon. Možná taky ne, ikony se nemění tak často, aby to nešlo udělat ručně. */
/* Ikony pojmenovávají návrháři, my je sem dáváme tak, že klíč je název souboru bez přípony, hodnota je obsah SVG bez unifikovaného začátku a konce. */
const icons = {
	"home": `<path d="M22.1,14.3l1.9-2.1L12,0.8L0,12.2l1.9,2.1L12,4.7L22.1,14.3L22.1,14.3z M12,7.2l8.8,8.4v6c0,0.9-0.7,1.6-1.6,1.6h-4.8v-6.6 c0-0.9-0.7-1.6-1.6-1.6h-1.6c-0.9,0-1.6,0.7-1.6,1.6v6.6H4.8c-0.9,0-1.6-0.7-1.6-1.6v-6L12,7.2L12,7.2z"/>`,
	"alert": `<path d="M11.0640804,5 L11.2268711,14.2311902 L12.8164744,14.2311902 L12.9792651,5 L11.0640804,5 Z M10.7001953,17.6689466 C10.7001953,18.4445964 11.2555989,19 12.0312487,19 C12.8068985,19 13.3527261,18.4445964 13.3527261,17.6689466 C13.3527261,16.8837209 12.8068985,16.3283174 12.0312487,16.3283174 C11.2555989,16.3283174 10.7001953,16.8837209 10.7001953,17.6689466 Z"/>`
};

/**
 * @param {string} name Identifikátor ikony, původní název souboru ikony bez přípony .svg
 * @returns {string} Obsah SVG ikony, tedy ikona ořezaná o začátek a konec, který je pro všechny ikony stejný.
 */
export const getIconString = name => icons[name] || "";
