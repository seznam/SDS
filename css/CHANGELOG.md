# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [0.2.8] - 2019-11-01
### Změněno
- Oprava překlepu.

## [0.2.7] - 2019-11-01
### Změněno
- Různé komponenty potřebovaly drobné úpravy CSS po přepsaní na využívání komponenty `Typography`.
- Oprava velikosti ikon u komponenty `Input`.

## [0.2.6] - 2019-09-26
### Přidáno
- Třídy pro komponentu `Typography`.

### Zastaráno
- `sds-typography_*` třídy používané přímo jsou zastaralé ve prospěch `sds-typography--*` tříd, které využívá komponenta `Typography`.

## [0.2.4] - 2019-06-27
### Přidáno
- Proměnná `@sdsColorMildText` pro lehce světlejší text.

### Změněno
- Proměnná `@sdsColorTextDisabled` pro text disablovaného prvku.

## [0.2.3] - 2019-03-17
### Přidáno
- Tento changelog.

### Změněno
- Vlastnost border-radius se už nenastavuje u sds-surface, ale až u sds-button, sds-tag a sds-card. `Surface` už tak nese jen hloubku a interaktivitu, ale už ne kulaté rohy.
