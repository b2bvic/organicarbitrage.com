#!/usr/bin/env node

/**
 * Organic Arbitrage — Sitemap Generator
 *
 * Generates sitemap.xml from:
 *   - Static pages (index, articles hub, category indexes, setup)
 *   - All processed articles
 *
 * Priority hierarchy:
 *   1.0 — Homepage
 *   0.9 — Articles hub, Setup/offer page
 *   0.8 — Category index pages
 *   0.7 — Individual articles
 */

const fs = require('fs');
const path = require('path');
const { CATEGORIES } = require('./shared');

const DIST = path.join(__dirname, '..', 'dist');
const SITE_URL = 'https://organicarbitrage.com';

// ─── Build Sitemap XML ───────────────────────────────────────────

function generateSitemap(articles) {
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/articles', priority: '0.9', changefreq: 'weekly' },
    { loc: '/setup', priority: '0.9', changefreq: 'monthly' },
  ];

  // Category pages
  for (const slug of Object.keys(CATEGORIES)) {
    staticPages.push({
      loc: `/${slug}`,
      priority: '0.8',
      changefreq: 'weekly'
    });
  }

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  // Static pages
  for (const page of staticPages) {
    xml += `
  <url>
    <loc>${SITE_URL}${page.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`;
  }

  // Articles
  for (const article of articles) {
    const lastmod = article.date || today;
    xml += `
  <url>
    <loc>${SITE_URL}/articles/${article.slug}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`;
  }

  xml += '\n</urlset>\n';

  fs.writeFileSync(path.join(DIST, 'sitemap.xml'), xml);
  console.log(`Built: sitemap.xml (${staticPages.length + articles.length} URLs)`);
}

// ─── Exports ─────────────────────────────────────────────────────

module.exports = { generateSitemap };

if (require.main === module) {
  const { processArticles, configureMarked } = require('./md-to-html');
  configureMarked();
  const articles = processArticles();
  generateSitemap(articles);
}
