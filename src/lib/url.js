// Base-aware URL-Helper.
// Damit interne Links sowohl auf GitHub-Pages-Projektseiten (Unterpfad
// /website-feuerwehr/) als auch auf einer eigenen Domain (Root /) korrekt sind.
// Astro stellt den konfigurierten `base` als import.meta.env.BASE_URL bereit.
const RAW_BASE = import.meta.env.BASE_URL || '/';
const BASE = RAW_BASE.endsWith('/') ? RAW_BASE.slice(0, -1) : RAW_BASE;

/**
 * Baut einen internen Link inkl. base-Pfad.
 * url('/abteilungen')            -> '/website-feuerwehr/abteilungen'
 * url('/abteilungen#einsatz')    -> '/website-feuerwehr/abteilungen#einsatz'
 * url('/')                       -> '/website-feuerwehr/'
 */
export function url(path = '/') {
  if (!path.startsWith('/')) path = '/' + path;
  if (path === '/') return BASE + '/' || '/';
  return (BASE + path) || path;
}
