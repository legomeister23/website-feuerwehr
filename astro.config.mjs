import { defineConfig } from 'astro/config';

// https://astro.build/config
//
// Hinweis zum Hosting:
// - Bei GitHub Pages als Projektseite (……github.io/website-feuerwehr) muss
//   `base: '/website-feuerwehr'` gesetzt werden.
// - Bei eigener Domain (z. B. feuerwehr-bendestorf.de) bleibt `base` leer und
//   `site` wird auf die Domain gesetzt.
// Wir lassen es bis zur Hosting-Entscheidung auf Root – einfach lokal testbar.
export default defineConfig({
  site: 'https://www.feuerwehr-bendestorf.de',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
