#!/usr/bin/env node

/**
 * Organic Arbitrage — Build Pipeline
 *
 * Orchestrates the full static site build:
 *   1. Clean dist/
 *   2. Copy static assets (base.css, robots.txt)
 *   3. Process Articles/*.md → dist/articles/*.html
 *   4. Build index.html (homepage)
 *   5. Build category index pages
 *   6. Build 404.html
 *   7. Generate sitemap.xml
 *   8. Copy root-level pages (setup.html, etc.)
 */

const fs = require('fs');
const path = require('path');
const { processArticles } = require('./md-to-html');
const { generateIndexes } = require('./generate-indexes');
const { generateSitemap } = require('./generate-sitemap');
const {
  megaNavHtml, footerHtml, headIncludes, megaNavScript,
  organizationSchema, websiteSchema
} = require('./shared');

const ROOT = path.join(__dirname, '..');
const DIST = path.join(ROOT, 'dist');

// ─── Clean ───────────────────────────────────────────────────────

function clean() {
  if (fs.existsSync(DIST)) {
    fs.rmSync(DIST, { recursive: true });
  }
  fs.mkdirSync(DIST, { recursive: true });
  fs.mkdirSync(path.join(DIST, 'articles'), { recursive: true });
  console.log('Cleaned dist/');
}

// ─── Copy Static Assets ─────────────────────────────────────────

function copyStatics() {
  // base.css
  const cssPath = path.join(ROOT, 'base.css');
  if (fs.existsSync(cssPath)) {
    fs.copyFileSync(cssPath, path.join(DIST, 'base.css'));
    console.log('Copied: base.css');
  }

  // Root HTML pages (setup.html, etc.)
  const rootPages = ['setup.html', 'privacy.html', 'terms.html'];
  for (const page of rootPages) {
    const src = path.join(ROOT, page);
    if (fs.existsSync(src)) {
      fs.copyFileSync(src, path.join(DIST, page));
      console.log(`Copied: ${page}`);
    }
  }

  // Index page — will be built separately
  const indexSrc = path.join(ROOT, 'index.html');
  if (fs.existsSync(indexSrc)) {
    fs.copyFileSync(indexSrc, path.join(DIST, 'index.html'));
    console.log('Copied: index.html');
  }
}

// ─── Build 404 ───────────────────────────────────────────────────

function build404() {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${headIncludes}
    <title>Page Not Found | Organic Arbitrage</title>
    <meta name="robots" content="noindex" />
</head>
<body>

${megaNavHtml}

  <main class="hero" style="text-align:center;min-height:60vh;display:flex;align-items:center;justify-content:center">
    <div class="container">
      <div class="hero__label">404 &mdash; Page Not Found</div>
      <h1 class="hero__title" style="margin:0 auto">The spread was negative.</h1>
      <p class="hero__subtitle" style="margin:var(--space-lg) auto 0;text-align:center">This page doesn't exist. The asset you're looking for may have been acquired, delisted, or never listed.</p>
      <div class="hero__actions" style="justify-content:center">
        <a href="/" class="btn btn--primary">Back to Home</a>
        <a href="/articles" class="btn btn--ghost">Browse Articles</a>
      </div>
    </div>
  </main>

${footerHtml}

${megaNavScript}

</body>
</html>`;

  fs.writeFileSync(path.join(DIST, '404.html'), html);
  console.log('Built: 404.html');
}

// ─── Build Robots.txt ────────────────────────────────────────────

function buildRobots() {
  const content = `User-agent: *
Allow: /

Sitemap: https://organicarbitrage.com/sitemap.xml
`;
  fs.writeFileSync(path.join(DIST, 'robots.txt'), content);
  console.log('Built: robots.txt');
}

// ─── Build Articles Hub ──────────────────────────────────────────

function buildArticlesHub(articles) {
  const cards = articles.map(a => `
        <a href="/articles/${a.slug}" class="article-card">
          <div class="article-card__category">${a.category || 'Strategy'}</div>
          <div class="article-card__title">${escapeHtml(a.title)}</div>
          <div class="article-card__excerpt">${escapeHtml(a.description)}</div>
          <div class="article-card__meta">
            <span>${a.date}</span>
          </div>
          <div class="article-card__arrow">Read analysis &rarr;</div>
        </a>`).join('\n');

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      websiteSchema(),
      organizationSchema(),
      {
        "@type": "CollectionPage",
        "name": "Articles | Organic Arbitrage",
        "description": "SEO arbitrage playbooks: expired domain strategies, traffic valuation models, programmatic content ROI, and portfolio management frameworks.",
        "url": "https://organicarbitrage.com/articles"
      }
    ]
  }, null, 2);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
${headIncludes}
    <title>Articles | Organic Arbitrage</title>
    <meta name="description" content="SEO arbitrage playbooks: expired domain strategies, traffic valuation models, programmatic content ROI, and portfolio management frameworks." />
    <link rel="canonical" href="https://organicarbitrage.com/articles" />
    <meta property="og:title" content="Articles | Organic Arbitrage" />
    <meta property="og:description" content="Tactical frameworks with real cost models and P&L data." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://organicarbitrage.com/articles" />
    <meta property="og:site_name" content="Organic Arbitrage" />
    <script type="application/ld+json">
${jsonLd}
    </script>
</head>
<body>

${megaNavHtml}

  <!-- Hub Hero -->
  <header class="hero hero--article">
    <div class="container">
      <div class="breadcrumbs" style="color:#8a8279">
        <a href="/" style="color:#8a8279">Home</a>
        <span class="breadcrumbs__sep">/</span>
        <span class="breadcrumbs__current" style="color:var(--oa-gold)">Articles</span>
      </div>
      <h1 class="hero__title">Arbitrage Playbooks</h1>
      <p class="hero__subtitle">Tactical frameworks with real cost models and P&L data. Each article covers a specific arbitrage strategy for organic search operators.</p>
    </div>
  </header>

  <!-- Articles Grid -->
  <section class="section">
    <div class="container">
      <div class="grid grid-2">
${cards}
      </div>
    </div>
  </section>

${footerHtml}

${megaNavScript}

</body>
</html>`;

  // Write as both articles.html and articles/index.html for clean URLs
  fs.writeFileSync(path.join(DIST, 'articles.html'), html);
  fs.mkdirSync(path.join(DIST, 'articles'), { recursive: true });
  fs.writeFileSync(path.join(DIST, 'articles', 'index.html'), html);
  console.log('Built: articles.html + articles/index.html');
}

// ─── Escape HTML ─────────────────────────────────────────────────

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Main ────────────────────────────────────────────────────────

function main() {
  const start = Date.now();
  console.log('Building organicarbitrage.com...\n');

  // 1. Clean
  clean();

  // 2. Process articles
  console.log('\nProcessing articles...');
  const articles = processArticles();
  console.log(`${articles.length} articles processed.\n`);

  // 3. Build articles hub
  buildArticlesHub(articles);

  // 4. Generate category indexes
  try {
    generateIndexes(articles);
  } catch (e) {
    console.log('Category index generation skipped:', e.message);
  }

  // 5. Build 404
  build404();

  // 6. Build robots.txt
  buildRobots();

  // 7. Generate sitemap
  try {
    generateSitemap(articles);
  } catch (e) {
    console.log('Sitemap generation skipped:', e.message);
  }

  // 8. Copy statics
  copyStatics();

  const elapsed = Date.now() - start;
  const fileCount = countFiles(DIST);
  console.log(`\nBuild complete. ${fileCount} files in dist/ (${elapsed}ms)`);
}

function countFiles(dir) {
  let count = 0;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.isFile()) count++;
    else if (entry.isDirectory()) count += countFiles(path.join(dir, entry.name));
  }
  return count;
}

main();
