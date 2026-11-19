# Pedro Nascimento — Developer Portfolio

## Project Overview

A bilingual portfolio for Brazilian and international recruiters, featuring Pedro
Nascimento's professional experience, technical skills, client work, and personal
projects. Brazilian Portuguese is the default language.

## Tech Stack

- Angular 21 with standalone components and signals
- TypeScript, HTML, CSS, Bootstrap, and Bootstrap Icons
- Angular CLI for development and production builds
- Vitest and jsdom for unit and component tests
- GitHub Pages and `angular-cli-ghpages` for static publishing

## Architecture

The root component composes the header, hero, projects, experience, skills, contact,
and footer. Project cards receive typed project data and delegate image navigation
and zoom to the carousel component. The Portuguese catalog defines project order,
technologies, image paths, links, and visibility. The English catalog supplies
translated text and image descriptions while reusing the original assets and URLs.

## Internationalization

| Language | Local development | GitHub Pages path |
| --- | --- | --- |
| Brazilian Portuguese | [`/`](http://localhost:4200/) | `/pedro-portfolio/` |
| English | [`/en/`](http://localhost:4200/en/) | `/pedro-portfolio/en/` |

`src/app/i18n/messages.ts` contains the typed UI dictionaries.
`src/app/data/projects.en.ts` supplies English project copy.
`LanguageService` reads the language from the URL through Angular's `Location`
and exposes it as a signal. The header uses ordinary links for the two language
URLs and switches them in place on standard activation, retaining the query and
section fragment when present. Browser history also updates the displayed language.
The page updates its document language, title, description, and canonical URL
when the language changes.

The build emits `index.html` and `en/index.html` with localized metadata and
reciprocal `hreflang` links. Both files use the same Angular bundle. Direct access
and reload work on static hosting because each language path has its own HTML
entry. The portfolio content renders in the browser and the same screenshot files
are used in both versions.

## Features

- Professional introduction, experience, skills, and contact links
- Six project cards with technical details and links to live sites and repositories where available
- Image carousels with wraparound navigation, keyboard controls, and zoom dialogs
- Responsive layouts and a keyboard-accessible language switch with an active-language indicator

## Project Structure

```text
public/images/projects/      Project screenshots and portfolio captures
scripts/                     Build step that writes localized HTML entries
src/app/components/          Standalone sections, project cards, and carousels
src/app/data/                Project catalog and English project copy
src/app/i18n/                UI dictionaries, language service, metadata, and tests
src/app/models/              Project and image types
src/styles.css               Shared theme and responsive styles
```

## Getting Started

Use Node.js **24.22.1** (pinned in `.nvmrc`) and npm **11.13.0** (declared in
`package.json`). Review the [Angular compatibility table](https://angular.dev/reference/versions)
if you use a different Node.js version.

```bash
npm ci
npm start
```

Open [`http://localhost:4200/`](http://localhost:4200/) for Portuguese or
[`http://localhost:4200/en/`](http://localhost:4200/en/) for English. No backend
or environment variables are required for local development.

## Testing

```bash
npm test -- --watch=false
npm run build
```

The first command runs the test suite once. The second writes the production
output, including both language entry files, to `dist/pedro-portfolio/browser/`.

## Deployment

To build using the same base path as GitHub Pages without publishing:

```bash
npm run build -- --configuration production --base-href=/pedro-portfolio/
```

The existing `npm run deploy` command runs that build and publishes its output
to the `gh-pages` branch with `angular-cli-ghpages`. Both HTML entries keep
the `/pedro-portfolio/` base path so that Angular bundles and images resolve from
the project root, even on `/pedro-portfolio/en/`. Exact language URLs work
without relying on a custom 404 redirect.

## Live Website

[Pedro Nascimento — Developer Portfolio](https://morrigandm.github.io/pedro-portfolio/).
The English path is available once the bilingual build is published.
