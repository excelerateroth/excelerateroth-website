import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// TODO: Domain noch nicht bestätigt — bitte anpassen, sobald die Domain feststeht
// (siehe ANLEITUNG.md, Abschnitt "Domain einrichten").
export default defineConfig({
  site: 'https://www.excelerateroth.ch',
  integrations: [sitemap()],
});
