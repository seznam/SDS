# TODO: udelat to spravne a bez znalosti vsech predem (nacist obsah adresare a podle toho delat komponenty), tohle je v zasade fake pro rychle uziti balicku
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
echo $DIR
mkdir $DIR/dist

mkdir $DIR/dist/Button
npx babel $DIR/src/Button/index.js -o $DIR/dist/Button/index.js

mkdir $DIR/dist/Icon
npx babel $DIR/src/Icon/index.js -o $DIR/dist/Icon/index.js

mkdir $DIR/dist/Spinner
npx babel $DIR/src/Spinner/index.js -o $DIR/dist/Spinner/index.js

mkdir $DIR/dist/Surface
npx babel $DIR/src/Surface/index.js -o $DIR/dist/Surface/index.js
