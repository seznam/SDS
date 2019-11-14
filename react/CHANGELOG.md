# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.5.1] - 2019-11-14
### Změněno
- Zvednutá verze balíku @sznds/icons.

## [0.5.0] - 2019-11-13
### Přidáno
- Přepis všech komponent využívajících interně komponentu `Icon`, aby nově pracovaly s ikonami ve formátu, který poskytuje balík `sznds/icons@0.3.0`.

## [0.4.0] - 2019-11-01
### Přidáno
- Komponenta `Typography`.

### Změněno
- Všechny komponenty využívají interně komponentu `Typography`, místo aby samy přidávaly CSS třídy s nastavením písma.
- Komponenta `Input` přepsána na memoizovanou funkci (aniž by se měnila její výsledná podoba v DOMu a CSS).
- Komponenta `LabelWrapper` už automaticky nepřidává za text labelu dvojtečku.

## [0.3.0] - 2019-09-06
### Změněno
- Funkční komponenty jsou memoizované.
- React a ReactDOM jsou devDependencies a peerDependencies (verze 16.8), ale ne dependencies.

## [0.2.5] - 2019-06-27
### Přidáno
- Komponenta `NavItem`.

## [0.2.4] - 2019-03-18
### Opraveno
- PropTypes už neodkazují na Element, který na serveru není definován.

## [0.2.3] - 2019-03-17
### Přidáno
- Tento changelog.
- Nastavení ESLintu v novém formátu a podstatně detailněji.
- PropTypes v závislostech.

### Změněno
- Vše přepsáno tak, aby kód vyhovoval pravidlům ESLintu.
- Radio a Checkbox přesunuty do vlastních souborů a zdokumentované.
- Všechny komponenty mají definované propTypes.
- Pro tlačítka s `type="submit"` a `type="reset"` renderovaná pomocí Surface se nenastavuje `tabIndex="-1"`, protože mají i bez navěšení akce vlastní nativní chování.
- Surface už po kliknutí neztrácí sama od sebe focus.

### Odstraněno
- Staré nastavení ESLintu.
