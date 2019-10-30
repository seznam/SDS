const fs = require('fs');
const DOMParser = require('xmldom').DOMParser;

const rootDir = __dirname + '/svg';
const moduleName = 'icons.js';
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
function buildIcon(size, icon, variant, path) {
	const fullName = `${icon}_${variant}_${size}`;
	let out = `// ${path}
export const ${fullName} = '${extractPath(`${rootDir}/${path}`)}';
`;

	if (size === DEFAULT_SIZE) {
		out += `export const ${icon}_${variant} = ${fullName};
`;
	}

	if (variant === DEFAULT_VARIANT) {
		out += `export const ${icon}_${size} = ${fullName};
`;
	}

	if (variant === DEFAULT_VARIANT && size === DEFAULT_SIZE) {
		out += `export const ${icon} = ${fullName};
`;
	}

	return `${out}
`;
}

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

			// sestav konstantu ikony do JS souboru
			fs.appendFileSync(moduleName, buildIcon(size, icon, variant, `${dirent.name}/${sizeDirent.name}/${iconDirent.name}`));
		}
	}
}

console.log(`${counter} icons done.`);
