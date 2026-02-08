#!/usr/bin/env node

/**
 * Organic Arbitrage — Category Index Generator
 *
 * Builds category landing pages from article metadata.
 * Categories: strategies, tools, economics, case-studies
 *
 * Each index page gets:
 *   - Breadcrumb navigation
 *   - Category description
 *   - Filtered article grid
 *   - JSON-LD CollectionPage schema
 */

const fs = require('fs');
const path = require('path');
const {
  megaNavHtml, footerHtml, headIncludes, megaNavScript,
  CATEGORIES, organizationSchema, websiteSchema
} = require('./shared');

const DIST = path.join(__dirname, '..', 'dist');

// ─── Category Mapping ────────────────────────────────────────────

// Map article types/categories to our canonical categories
function mapCategory(articleCategory) {
  if (!articleCategory) return 'strategies';
  const cat = String(articleCategory).toLowerCase().replace(/[_\s]+/g, '-');
  if (cat.includes('tool') || cat.includes('calculator')) return 'tools';
  if (cat.includes('econ') || cat.includes('production') || cat.includes('valuation')) return 'economics';
  if (cat.includes('case') || cat.includes('study')) return 'case-studies';
  if (cat.includes('pillar') || cat.includes('strateg') || cat.includes('draft')) return 'strategies';
  return 'strategies';
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

// ─── Build Category Index Page ───────────────────────────────────

function buildCategoryPage(categorySlug, categoryInfo, articles) {
  const filtered = articles.filter(a => mapCategory(a.category) === categorySlug);

  // If no articles in this category, still generate the page
  const cards = filtered.length > 0
    ? filtered.map(a => `
        <a href="/articles/${a.slug}" class="article-card">
          <div class="article-card__category">${escapeHtml(categoryInfo.name)}</div>
          <div class="article-card__title">${escapeHtml(a.title)}</div>
          <div class="article-card__excerpt">${escapeHtml(a.description)}</div>
          <div class="article-card__meta"><span>${a.date}</span></div>
          <div class="article-card__arrow">Read analysis &rarr;</div>
        </a>`).join('\n')
    : '<p class="text-muted" style="padding:var(--space-3xl) 0;text-align:center">Articles in this category are in production. Check back soon.</p>';

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@graph": [
      organizationSchema(),
      {
        "@type": "CollectionPage",
        "name": `${categoryInfo.name} | Organic Arbitrage`,
        "description": categoryInfo.description,
        "url": `https://organicarbitrage.com/${categorySlug}`
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://organicarbitrage.com/" },
          { "@type": "ListItem", "position": 2, "name": categoryInfo.name, "item": `https://organicarbitrage.com/${categorySlug}` }
        ]
      }
    ]
  }, null, 2);

  return `<!DOCTYPE html>
<html lang="en">
<head>
${headIncludes}
    <title>${escapeHtml(categoryInfo.name)} | Organic Arbitrage</title>
    <meta name="description" content="${escapeHtml(categoryInfo.description)}" />
    <link rel="canonical" href="https://organicarbitrage.com/${categorySlug}" />
    <meta property="og:title" content="${escapeHtml(categoryInfo.name)} | Organic Arbitrage" />
    <meta property="og:description" content="${escapeHtml(categoryInfo.description)}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://organicarbitrage.com/${categorySlug}" />
    <meta property="og:site_name" content="Organic Arbitrage" />
    <script type="application/ld+json">
${jsonLd}
    </script>
</head>
<body>

${megaNavHtml}

  <!-- Category Hero -->
  <header class="hero hero--article">
    <div class="container">
      <div class="breadcrumbs" style="color:#8a8279">
        <a href="/" style="color:#8a8279">Home</a>
        <span class="breadcrumbs__sep">/</span>
        <span class="breadcrumbs__current" style="color:var(--oa-gold)">${escapeHtml(categoryInfo.name)}</span>
      </div>
      <h1 class="hero__title">${escapeHtml(categoryInfo.name)}</h1>
      <p class="hero__subtitle">${escapeHtml(categoryInfo.description)}</p>
    </div>
  </header>

  <!-- Category Nav -->
  <section class="section--sm" style="background:var(--oa-base)">
    <div class="container">
      <div class="category-nav">
        ${Object.entries(CATEGORIES).map(([slug, info]) =>
          `<a href="/${slug}" class="category-nav__link${slug === categorySlug ? ' is-active' : ''}">${info.name}</a>`
        ).join('\n        ')}
        <a href="/articles" class="category-nav__link">All Articles</a>
      </div>

      <!-- Articles Grid -->
      <div class="grid grid-2">
${cards}
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="section" style="background:var(--oa-surface)">
    <div class="container" style="max-width:700px">
      <div class="cta-box">
        <div class="cta-box__label">The Complete System</div>
        <div class="cta-box__title">Go Beyond the Playbooks</div>
        <div class="cta-box__text">Know includes every model, calculator, and framework referenced across all articles &mdash; plus private deal flow templates and portfolio tracking tools.</div>
        <div class="cta-box__price">$1,997 <span>one-time</span></div>
        <a href="/setup" class="btn btn--primary btn--lg">Get Know</a>
      </div>
    </div>
  </section>

${footerHtml}

${megaNavScript}

</body>
</html>`;
}

// ─── Generate All Category Indexes ───────────────────────────────

function generateIndexes(articles) {
  let generated = 0;

  for (const [slug, info] of Object.entries(CATEGORIES)) {
    const html = buildCategoryPage(slug, info, articles);
    const dir = path.join(DIST, slug);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(path.join(dir, 'index.html'), html);
    // Also write as flat file for Netlify routing
    fs.writeFileSync(path.join(DIST, `${slug}.html`), html);
    console.log(`Built: ${slug}/index.html + ${slug}.html`);
    generated++;
  }

  console.log(`${generated} category index pages generated.`);
}

// ─── Exports ─────────────────────────────────────────────────────

module.exports = { generateIndexes, mapCategory };

if (require.main === module) {
  // Standalone: read articles from dist metadata
  const { processArticles, configureMarked } = require('./md-to-html');
  configureMarked();
  const articles = processArticles();
  generateIndexes(articles);
}
