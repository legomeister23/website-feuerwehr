import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Hosting: GitHub Pages als Projektseite.
// Live-URL: https://legomeister23.github.io/website-feuerwehr/
//
// Bei Umstieg auf eine eigene Domain (z. B. feuerwehr-bendestorf.de):
//   1. `site` auf die Domain setzen
//   2. `base` auf '/' setzen (oder die Zeile entfernen)
//   3. public/CNAME mit der Domain anlegen
// Dank des URL-Helpers (src/lib/url.js) funktionieren alle internen Links dann automatisch.
export default defineConfig({
  site: 'https://legomeister23.github.io',
  base: '/website-feuerwehr',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
