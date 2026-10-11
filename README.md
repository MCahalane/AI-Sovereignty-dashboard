# Classroom lens — AI sovereignty

An interactive, browser-only survey dashboard. The supplied Excel workbook is loaded dynamically and prominently labelled as synthetic classroom data. Administrative and scoring fields are excluded.

## Run

Requires Node 20.19+ or 22.12+ (validated with Node 24).

```sh
npm ci
npm run dev -- --port 5173
```

The dashboard loads the bundled demo. Use **Upload workbook** or drag an `.xlsx` file into the workbook panel; choose a worksheet if necessary. All five question headers must be present. Privacy and AI preference filters, search, and clicked chart categories apply to the entire dashboard. **Reset filters** clears all selection and search state.

Themes are provisional substring matches. Expand **Inspect & adjust classification rules**, edit comma-separated phrases, and apply them. Rules are held in memory; a page reload restores defaults. Multiple themes per response are allowed, so percentages can exceed 100%. Unmatched responses and missing answers remain visible. Read the original answers before interpreting a pattern. No correctness scores or causal conclusions are produced.

Processing happens in the browser, with no accounts, database, analytics, external fonts or upload endpoints. The initial bundled workbook is fetched from the app itself. Replacement uploads never leave the browser. Response IDs are shown; names, emails and timestamps are excluded.

## Verify

```sh
npm test
npm run build
node tests/browser.mjs
```

Browser checks require a running dev server on port 5173 and Chromium at `/usr/bin/chromium`. They cover demo loading, category filters, evidence clicks, search and empty results, editable rules, uploads, reordered headers, multiple worksheets, drag/drop and a mobile viewport. Data checks independently reconcile 35 responses, privacy counts (4, 10, 10, 7, 4) and investment counts (11, 8, 7, 5, 4).

`npm run build` produces `dist/` for static hosting. No backend or runtime credentials are required.

## GitHub Pages

A prebuilt website is included in `docs/`. The repository root redirects to it, so both root and /docs publication work. In the GitHub repository, open **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/docs**, then click **Save**. GitHub will display the live address when deployment finishes. To refresh the published build after editing source, run `npm run build:pages`, then commit and push the updated `docs/` files.
