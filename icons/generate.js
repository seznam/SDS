const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

// funkce pro vytazeni definice jedine path z SVG souboru
function extractPath(file) {
	let out = '';

	try {
		const str = fs.readFileSync(file, "utf8");
		const doc = new DOMParser().parseFromString(str ,'text/xml');
		const path = doc.getElementsByTagName("path")[0];
		out = path.getAttribute('d');
		counter++;
	} catch (ex) {
		// pokud neco neproslo, tak si to zalogujeme
		console.log(file);
	}

	return out;
}

// funkce, ktera sestavi kus JS podle parametru
function buildIcon(size, icon, variant, path, title) {
	const fullName = `${icon}_${variant}_${size}`;

	let aliases = [fullName];

	let out = `// ${path}
export const ${fullName} = {
	d: '${extractPath(`${rootDir}/${path}`)}',
	size: ${size},
};

`;

	if (size === DEFAULT_SIZE) {
		const defaultSize = `${icon}_${variant}`;
		out += `export const ${defaultSize} = ${fullName};
`;
		aliases.push(defaultSize);
	}

	if (variant === DEFAULT_VARIANT) {
		const defaultVariant = `${icon}_${size}`;
		out += `export const ${defaultVariant} = ${fullName};
`;
		aliases.push(defaultVariant);
	}

	if (variant === DEFAULT_VARIANT && size === DEFAULT_SIZE) {
		const defaultAll = `${icon}`;
		out += `export const ${icon} = ${fullName};
`;
		aliases.push(defaultAll);
	}

	return {
		icons: out,
		data: {
			title,
			fullName,
			aliases,
		},
	};
}

// adresar, kde jsou zdrojove ikony v SVG
const rootDir = __dirname + '/svg';
// vysledny modul s ikonami
const moduleName = 'index.js';
// modul pro potreby testu a podobne, kde se importuji i exportuji vsechny ikony, takze je opravdu velky a v produkcnim buildu nema co delat
const testerName = 'tester.js';

// pro defaultni hodnoty affixu definujeme konstanty i bez nich
const DEFAULT_SIZE = '24';
const DEFAULT_VARIANT = 'OUTLINE';

let testerImports = [];
let testerData = [];

let counter = 0;

// pokud uz moduly existuji, tak stare verze smazeme
try {
	fs.unlinkSync(moduleName);
	fs.unlinkSync(testerName);
} catch (ex) {}

// vyrobime symbol prazdne ikony ve vsech velikostech
[8, 16, 24, 32].forEach(size => {
	const name = `EMPTY_SYMBOL_${size}`;
	const title = `empty icon ${size}x${size}`;

	fs.appendFileSync(moduleName, `// ${title}
export const ${name} = {
	d: '',
	size: ${size},
};

`);
	testerImports.push(name);
	testerData.push({
		title,
		fullName: name,
		aliases: [name],
	});
});

// najdi vsechny velikosti
const dir = fs.opendirSync(rootDir);
let dirent = null;
while (dirent = dir.readSync()) {
	// najdi vsechny ikony v kazde velikosti
	const size = dirent.name.split('x')[0];
	const sizeDir = fs.opendirSync(`${rootDir}/${dirent.name}`);
	let sizeDirent = null;

	while (sizeDirent = sizeDir.readSync()) {
		const icon = sizeDirent.name.replace(/\s/g, '_').toUpperCase();
		const iconDir = fs.opendirSync(`${rootDir}/${dirent.name}/${sizeDirent.name}`);
		let iconDirent = null;
		// najdi vsechny varianty ikony v dane velikosti
		while (iconDirent = iconDir.readSync()) {
			const variant = iconDirent.name.split('.')[0].replace(/\s/g, '_').toUpperCase();

			// sestav konstanty ikony do JS souboru
			const iconSources = buildIcon(size, icon, variant, `${dirent.name}/${sizeDirent.name}/${iconDirent.name}`, `${sizeDirent.name} ${size}x${size}`);
			fs.appendFileSync(moduleName, iconSources.icons);

			// pridame k importum do testovaciho souboru
			testerImports = [...testerImports, ...iconSources.data.aliases];
			testerData.push(iconSources.data);
		}
	}
}

// generovani souboru pro testy

fs.appendFileSync(testerName, `import {
${testerImports.join(`,
`)}
} from './index';

`);

// zalozime objekt, kde budou vsechny ikony referencovane
fs.appendFileSync(testerName, `// objekt se vsemi ikonami
const ICONS = {};

`);

// vyrobime vsechny polozky objektu ICONS
testerData.forEach(({ fullName, title, aliases }) => {
	fs.appendFileSync(testerName, `ICONS['${fullName}'] = {
	title: '${title}',
	icon: ${fullName},
	aliases: ['${aliases.join(`', '`)}'],
};

`);
});

fs.appendFileSync(testerName, `// vsechny ikony v jednom objektu, urcene pro psani testu, stories a podobne, ne pro uziti v produkci
export default ICONS;

`);

console.log(`${counter} icons done.`);
