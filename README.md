# ITS Europe – Sito statico (Eleventy)

## Requisiti
- Node.js >= 18

## Comandi
```bash
npm install
npm run dev    # avvio sviluppo con server locale
npm run build  # build produzione in ./_site
```

## Configurazione
- **Form contatti**: sostituire `YOUR_FORMSPREE_ID` nei file `src/it/contatti/index.njk` e `src/en/contact/index.njk` con l'ID del tuo endpoint Formspree.
- **Dati aziendali**: aggiornare `src/_data/site.json` (indirizzo, telefono, email, coordinate).
- **Logo/immagini**: sostituire i placeholder in `src/assets/`.

## Struttura i18n
- Italiano: `/it/…`
- English: `/en/…`
Con switch di lingua nel menu e tag `hreflang` per SEO.

## Accessibilità & SEO
- Landmark ARIA, contrasti, focus visibili, `meta` + Open Graph.
- JSON-LD `LocalBusiness` e sitemap automatica.
