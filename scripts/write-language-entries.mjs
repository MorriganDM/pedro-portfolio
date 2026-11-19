import { mkdir, readFile, writeFile } from 'node:fs/promises';

const output = new URL('../dist/pedro-portfolio/browser/', import.meta.url);
const source = await readFile(new URL('index.html', output), 'utf8');
const metadata = JSON.parse(await readFile(
  new URL('../src/app/i18n/locales.json', import.meta.url), 'utf8'
));
const escape = (value) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;').replaceAll('>', '&gt;');

const alternates = [
  ...Object.values(metadata.locales).map(({ lang, path }) =>
    `<link rel="alternate" hreflang="${lang}" href="${metadata.siteUrl + path}">`
  ),
  `<link rel="alternate" hreflang="x-default" href="${metadata.siteUrl}">`
];

for (const locale of Object.values(metadata.locales)) {
  const head = [
    `<meta name="description" content="${escape(locale.description)}">`,
    `<link rel="canonical" href="${metadata.siteUrl + locale.path}">`,
    ...alternates
  ];
  const html = source
    .replace(/(<html\b[^>]*\blang=")[^"]+/, `$1${locale.lang}`)
    .replace(/<title>[^<]*<\/title>/, `<title>${escape(locale.title)}</title>`)
    .replace('</head>', `${head.join('\n')}\n</head>`);
  const directory = new URL(locale.path || './', output);
  await mkdir(directory, { recursive: true });
  await writeFile(new URL('index.html', directory), html);
}

console.log('Wrote static Portuguese and English HTML entries.');
