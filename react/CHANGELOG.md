# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

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
