#!/usr/bin/env node

/**
 * Organic Arbitrage — Markdown to HTML Processor
 *
 * Converts Articles/*.md → dist/articles/*.html
 * - Parses double-colon frontmatter (field:: value)
 * - Generates JSON-LD Article + FAQ + BreadcrumbList schema
 * - Injects mega nav, footer, breadcrumbs, related articles, CTA
 * - Resolves internal_links to article cards
 * - Wraps tables in data-table-wrap for financial report styling
 */

const fs = require('fs');
const path = require('path');
const { marked } = require('marked');
const {
  megaNavHtml, footerHtml, headIncludes, megaNavScript,
  ENTITY_DOMAINS, organizationSchema
} = require('./shared');

const SKIP_FILES = ['README.md', '_brief.md', '_content-stack.md'];
const ARTICLES_DIR = path.join(__dirname, '..', 'Articles');
const PAGES_DIR = path.join(__dirname, '..', 'Pages');
const DIST_ARTICLES = path.join(__dirname, '..', 'dist', 'articles');

// ─── Frontmatter Parser ──────────────────────────────────────────

function parseFrontmatter(content) {
  const meta = {};
  const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
  if (!fmMatch) return { meta, body: content };

  const fmBlock = fmMatch[1];
  for (const line of fmBlock.split('\n')) {
    // Support both field:: value and field: value
    const match = line.match(/^([\w][\w_-]*)::?\s*(.+)$/);
    if (match) {
      const key = match[1].trim();
      let val = match[2].trim();
      // Parse comma-separated lists
      if (val.includes(',') && !val.startsWith('"')) {
        meta[key] = val.split(',').map(s => s.trim()).filter(Boolean);
      } else {
        meta[key] = val;
      }
    }
  }

  const body = content.slice(fmMatch[0].length).trim();
  return { meta, body };
}

// ─── Slug from filename ──────────────────────────────────────────

function slugify(filename) {
  return filename.replace(/\.md$/, '');
}

// ─── Markdown Renderer Config ────────────────────────────────────

function configureMarked() {
  const renderer = new marked.Renderer();

  // Wrap tables in financial-report-style container
  renderer.table = function(header, body) {
    // marked v15 passes table token differently
    if (typeof header === 'object' && header.header && header.rows) {
      // New marked API
      const token = header;
      let thead = '<thead><tr>';
      for (const cell of token.header) {
        const align = cell.align ? ` style="text-align:${cell.align}"` : '';
        thead += `<th${align}>${this.parser.parseInline(cell.tokens)}</th>`;
      }
      thead += '</tr></thead>';

      let tbody = '<tbody>';
      for (const row of token.rows) {
        tbody += '<tr>';
        for (const cell of row) {
          const align = cell.align ? ` style="text-align:${cell.align}"` : '';
          tbody += `<td${align}>${this.parser.parseInline(cell.tokens)}</td>`;
        }
        tbody += '</tr>';
      }
      tbody += '</tbody>';

      return `<div class="data-table-wrap"><table class="data-table">${thead}${tbody}</table></div>\n`;
    }
    // Fallback for string-based API
    return `<div class="data-table-wrap"><table class="data-table">${header}${body}</table></div>\n`;
  };

  // Add IDs to headings for anchor links
  renderer.heading = function(text, level) {
    // marked v15 passes token object
    let content, depth;
    if (typeof text === 'object' && text.tokens) {
      content = this.parser.parseInline(text.tokens);
      depth = text.depth;
    } else {
      content = text;
      depth = level;
    }
    const id = content.replace(/<[^>]+>/g, '').toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
    return `<h${depth} id="${id}">${content}</h${depth}>\n`;
  };

  marked.setOptions({
    renderer,
    gfm: true,
    breaks: false
  });
}

// ─── Extract FAQ items from body ─────────────────────────────────

function extractFAQs(htmlBody) {
  const faqs = [];
  // Match patterns like: <h3>Q: question</h3> or FAQ sections
  const faqPattern = /<h[34][^>]*>([^<]*\?)<\/h[34]>\s*<p>([^]*?)<\/p>/gi;
  let match;
  while ((match = faqPattern.exec(htmlBody)) !== null) {
    faqs.push({
      question: match[1].replace(/^Q:\s*/i, '').trim(),
      answer: match[2].replace(/<[^>]+>/g, '').trim()
    });
  }
  return faqs;
}

// ─── Build Article Schema ────────────────────────────────────────

function buildArticleSchema(meta, slug, faqs) {
  const graph = [
    organizationSchema(),
    {
      "@type": "Article",
      "headline": meta.title || slug,
      "description": meta.description || meta.focus_keyword || '',
      "author": {
        "@type": "Person",
        "name": meta.author || "Victor Valentine Romo",
        "url": "https://victorvalentineromo.com"
      },
      "publisher": { "@id": "https://organicarbitrage.com/#organization" },
      "datePublished": normalizeDate(meta.date || meta.created || '2026.01.19'),
      "dateModified": normalizeDate(meta.updated || meta.date || meta.created || '2026.01.19'),
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://organicarbitrage.com/articles/${slug}`
      },
      "keywords": Array.isArray(meta.keywords) ? meta.keywords.join(', ') : (meta.keywords || meta.focus_keyword || '')
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://organicarbitrage.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Articles",
          "item": "https://organicarbitrage.com/articles"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": meta.title || slug,
          "item": `https://organicarbitrage.com/articles/${slug}`
        }
      ]
    }
  ];

  // Add FAQ schema if FAQs found
  if (faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

// ─── Date Normalization ──────────────────────────────────────────

function normalizeDate(dateStr) {
  if (!dateStr) return '2026-01-19';
  return String(dateStr).replace(/\./g, '-');
}

// ─── Build Related Articles HTML ─────────────────────────────────

function buildRelatedArticlesHtml(internalLinks, allArticles) {
  if (!internalLinks || internalLinks.length === 0) return '';

  const links = Array.isArray(internalLinks) ? internalLinks : internalLinks.split(',').map(s => s.trim());

  const cards = links
    .map(linkSlug => {
      // Fuzzy match: the internal_links might use partial slugs
      const article = allArticles.find(a =>
        a.slug === linkSlug ||
        a.slug.includes(linkSlug) ||
        linkSlug.includes(a.slug)
      );
      if (!article) return '';
      return `
        <a href="/articles/${article.slug}" class="article-card">
          <div class="article-card__title">${escapeHtml(article.title)}</div>
          <div class="article-card__excerpt">${escapeHtml(article.description)}</div>
          <div class="article-card__arrow">Read analysis &rarr;</div>
        </a>`;
    })
    .filter(Boolean)
    .join('\n');

  if (!cards) return '';

  return `
    <div class="related-articles">
      <h2 class="related-articles__title">Related Analysis</h2>
      <div class="grid grid-2">
        ${cards}
      </div>
    </div>`;
}

// ─── Author Card ─────────────────────────────────────────────────

const authorCardHtml = `
  <div class="author-card">
    <div class="author-card__avatar">VR</div>
    <div>
      <div class="author-card__name">Victor Valentine Romo</div>
      <div class="author-card__role">Founder, Scale With Search</div>
      <div class="author-card__bio">Runs a portfolio of organic traffic assets. 4+ years testing expired domain plays, programmatic content models, and SERP arbitrage strategies. Documents the wins and losses with full P&L transparency.</div>
    </div>
  </div>`;

// ─── CTA Box ─────────────────────────────────────────────────────

const articleCtaHtml = `
  <div class="cta-box mt-3xl">
    <div class="cta-box__label">The Complete System</div>
    <div class="cta-box__title">Stop Reading Playbooks. Run the Plays.</div>
    <div class="cta-box__text">Know gives you the valuation models, deal calculators, acquisition checklists, and portfolio frameworks used to generate consistent returns from organic search gaps.</div>
    <div class="cta-box__price">$1,997 <span>one-time</span></div>
    <a href="/setup" class="btn btn--primary btn--lg">Get Know</a>
  </div>`;

// ─── Escape HTML ─────────────────────────────────────────────────

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ─── Build Full Article HTML ─────────────────────────────────────

function buildArticleHTML(meta, htmlBody, slug, faqs, allArticles) {
  const title = meta.title || slug.replace(/-/g, ' ');
  const description = meta.description || meta.focus_keyword || '';
  const date = normalizeDate(meta.date || meta.created || '2026.01.19');
  const category = meta.category || meta.type || 'Strategies';
  const jsonLd = buildArticleSchema(meta, slug, faqs);
  const relatedHtml = buildRelatedArticlesHtml(meta.internal_links, allArticles);

  return `<!DOCTYPE html>
<html lang="en">
<head>
${headIncludes}
    <title>${escapeHtml(title)} | Organic Arbitrage</title>
    <meta name="description" content="${escapeHtml(description)}" />
    <meta name="author" content="${escapeHtml(meta.author || 'Victor Valentine Romo')}" />
    <meta property="og:title" content="${escapeHtml(title)}" />
    <meta property="og:description" content="${escapeHtml(description)}" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content="https://organicarbitrage.com/articles/${slug}" />
    <meta property="og:site_name" content="Organic Arbitrage" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${escapeHtml(title)}" />
    <meta name="twitter:description" content="${escapeHtml(description)}" />
    <link rel="canonical" href="https://organicarbitrage.com/articles/${slug}" />
    <script type="application/ld+json">
${jsonLd}
    </script>
</head>
<body>

${megaNavHtml}

  <!-- Article Hero -->
  <header class="hero hero--article">
    <div class="container">
      <div class="breadcrumbs" style="color:#8a8279">
        <a href="/" style="color:#8a8279">Home</a>
        <span class="breadcrumbs__sep">/</span>
        <a href="/articles" style="color:#8a8279">Articles</a>
        <span class="breadcrumbs__sep">/</span>
        <span class="breadcrumbs__current" style="color:var(--oa-gold)">${escapeHtml(title)}</span>
      </div>
      <h1 class="hero__title">${escapeHtml(title)}</h1>
      <p class="hero__subtitle">${escapeHtml(description)}</p>
      <div style="margin-top:var(--space-lg);font-size:var(--text-sm);color:var(--oa-muted)">
        <span>${date}</span> &middot;
        <span>${escapeHtml(meta.author || 'Victor Valentine Romo')}</span>
      </div>
    </div>
  </header>

  <!-- Article Body -->
  <main class="section">
    <div class="container container--narrow">
      <article class="prose">
        ${htmlBody}
      </article>

      ${authorCardHtml}

      ${articleCtaHtml}

      ${relatedHtml}

      <div style="margin-top:var(--space-3xl);padding-top:var(--space-xl);border-top:1px solid var(--oa-border)">
        <a href="/articles" style="font-weight:500">&larr; All Articles</a>
      </div>
    </div>
  </main>

${footerHtml}

${megaNavScript}

</body>
</html>`;
}

// ─── Process All Articles ────────────────────────────────────────

function processArticles() {
  configureMarked();

  if (!fs.existsSync(ARTICLES_DIR)) {
    console.log('No Articles directory found.');
    return [];
  }

  fs.mkdirSync(DIST_ARTICLES, { recursive: true });

  const files = fs.readdirSync(ARTICLES_DIR)
    .filter(f => f.endsWith('.md') && !SKIP_FILES.includes(f));

  // First pass: collect metadata
  const allArticles = files.map(file => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf-8');
    const { meta, body } = parseFrontmatter(raw);
    const slug = meta.slug || slugify(file);
    return {
      slug,
      title: meta.title || slug.replace(/-/g, ' '),
      description: meta.description || meta.focus_keyword || '',
      date: normalizeDate(meta.date || meta.created || '2026.01.19'),
      category: meta.category || meta.type || 'strategies',
      keywords: Array.isArray(meta.keywords) ? meta.keywords.join(', ') : (meta.keywords || meta.focus_keyword || ''),
      meta,
      body
    };
  });

  // Second pass: render HTML with cross-references
  for (const article of allArticles) {
    const htmlBody = marked(article.body);
    const faqs = extractFAQs(htmlBody);

    const html = buildArticleHTML(
      article.meta,
      htmlBody,
      article.slug,
      faqs,
      allArticles
    );

    fs.writeFileSync(path.join(DIST_ARTICLES, `${article.slug}.html`), html);
    console.log(`  Built: articles/${article.slug}.html`);
  }

  // Return metadata for index/sitemap generation
  return allArticles.map(a => ({
    slug: a.slug,
    title: a.title,
    description: a.description,
    date: a.date,
    category: a.category,
    keywords: a.keywords
  }));
}

// ─── Exports ─────────────────────────────────────────────────────

module.exports = {
  processArticles,
  parseFrontmatter,
  slugify,
  normalizeDate,
  escapeHtml,
  buildArticleHTML,
  configureMarked
};

if (require.main === module) {
  const articles = processArticles();
  console.log(`\nProcessed ${articles.length} articles.`);
}
