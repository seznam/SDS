const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

const rootDir = __dirname + '/svg';
const moduleName = 'index.js';
const DEFAULT_SIZE = '24';
const DEFAULT_VARIANT = 'OUTLINE';

let counter = 0;

// pokud uz modul existuje, tak starou verzi smazeme
try {
	fs.unlinkSync(moduleName);
} catch (ex) {}

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
	let aliases = [`'${fullName}'`];

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
		aliases.push(`'${defaultSize}'`);
	}

	if (variant === DEFAULT_VARIANT) {
		const defaultVariant = `${icon}_${size}`;
		out += `export const ${defaultVariant} = ${fullName};
`;
		aliases.push(`'${defaultVariant}'`);
	}

	if (variant === DEFAULT_VARIANT && size === DEFAULT_SIZE) {
		const defaultAll = `${icon}`;
		out += `export const ${icon} = ${fullName};
`;
		aliases.push(`'${defaultAll}'`);
	}

	return `${out}
ICONS['${fullName}'] = {
	title: '${title}',
	icon: ${fullName},
	aliases: [${aliases.join(', ')}],
};

`;
}

// zalozime objekt, kde budou vsechny ikony referencovane
fs.appendFileSync(moduleName, `// objekt se vsemi ikonami
const ICONS = {};

`);

// vyrobime symbol prazdne ikony ve vsech velikostech
[8, 16, 24, 32].forEach(size => {
	const name = `EMPTY_SYMBOL_${size}`;
	const title = `empty icon ${size}x${size}`;

	fs.appendFileSync(moduleName, `// ${title}
export const ${name} = {
	d: '',
	size: ${size},
};
ICONS['${name}'] = {
	title: '${title}',
	icon: ${name},
	aliases: ['${name}'],
};

`);
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
			const variant = iconDirent.name.split('.')[0].toUpperCase();

			// sestav konstanty ikony do JS souboru
			fs.appendFileSync(moduleName, buildIcon(size, icon, variant, `${dirent.name}/${sizeDirent.name}/${iconDirent.name}`, `${sizeDirent.name} ${size}x${size}`));
		}
	}
}

fs.appendFileSync(moduleName, `// vsechny ikony v jednom objektu, urcene pro psani testu, stories a podobne, ne pro uziti v produkci
export default ICONS;

`);

console.log(`${counter} icons done.`);
