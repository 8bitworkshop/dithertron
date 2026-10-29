// Writes sitemap.xml into the deploy directory.
// Usage: node scripts/gen-sitemap.mjs <output-path>
import fs from 'fs';
import path from 'path';

const SITE = 'https://8bitworkshop.com/dithertron/';

const out = process.argv[2] || 'sitemap.xml';
const lastmod = new Date().toISOString().slice(0, 10);

const urls = [{ loc: SITE, changefreq: 'weekly', priority: '1.0' }];

// Add per-system landing pages here as they are created, e.g.
// { loc: SITE + 'c64/', changefreq: 'monthly', priority: '0.8' }

const body = urls
    .map(
        (u) =>
            '  <url>\n' +
            `    <loc>${u.loc}</loc>\n` +
            `    <lastmod>${lastmod}</lastmod>\n` +
            (u.changefreq ? `    <changefreq>${u.changefreq}</changefreq>\n` : '') +
            (u.priority ? `    <priority>${u.priority}</priority>\n` : '') +
            '  </url>'
    )
    .join('\n');

const xml =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
    body +
    '\n</urlset>\n';

fs.mkdirSync(path.dirname(path.resolve(out)), { recursive: true });
fs.writeFileSync(out, xml);
console.log(`wrote ${out} (${urls.length} urls)`);
