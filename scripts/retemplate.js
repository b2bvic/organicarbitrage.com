#!/usr/bin/env node

/**
 * Organic Arbitrage — Retemplate Script
 *
 * Applies the design system to existing raw HTML files.
 * Scans dist/ for HTML files, strips old nav/footer/head,
 * and re-wraps with current shared components.
 *
 * Usage: node scripts/retemplate.js [--dry-run]
 *
 * What it does:
 *   1. Reads each HTML file in dist/
 *   2. Extracts <title>, <meta description>, canonical, body content
 *   3. Rebuilds the page with current mega nav, footer, CSS, schema
 *   4. Preserves article body/prose content
 */

const fs = require('fs');
const path = require('path');
const {
  megaNavHtml, footerHtml, headIncludes, megaNavScript
} = require('./shared');

const DIST = path.join(__dirname, '..', 'dist');
const DRY_RUN = process.argv.includes('--dry-run');

// ─── Extract Metadata from HTML ──────────────────────────────────

function extractMeta(html) {
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i);
  const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i);
  const schemaMatch = html.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i);

  return {
    title: titleMatch ? titleMatch[1] : 'Organic Arbitrage',
    description: descMatch ? descMatch[1] : '',
    canonical: canonicalMatch ? canonicalMatch[1] : '',
    schema: schemaMatch ? schemaMatch[1].trim() : ''
  };
}

// ─── Extract Body Content ────────────────────────────────────────

function extractBody(html) {
  // Try to extract main/article content
  const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (mainMatch) return mainMatch[1].trim();

  // Try article tag
  const articleMatch = html.match(/<article[^>]*>([\s\S]*?)<\/article>/i);
  if (articleMatch) return articleMatch[1].trim();

  // Fallback: extract body minus nav/footer
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return '';

  let body = bodyMatch[1];

  // Remove nav
  body = body.replace(/<nav[^>]*>[\s\S]*?<\/nav>/gi, '');
  // Remove footer
  body = body.replace(/<footer[^>]*>[\s\S]*?<\/footer>/gi, '');
  // Remove scripts
  body = body.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  return body.trim();
}

// ─── Determine Page Type ─────────────────────────────────────────

function getPageType(filepath, html) {
  const filename = path.basename(filepath);
  if (filename === 'index.html') return 'home';
  if (filename === '404.html') return 'error';
  if (filename === 'setup.html') return 'offer';
  if (filepath.includes('/articles/') || html.includes('class="prose"')) return 'article';
  return 'page';
}

// ─── Rebuild Page ────────────────────────────────────────────────

function retemplateFile(filepath) {
  const html = fs.readFileSync(filepath, 'utf-8');

  // Skip files that already use the new design system
  if (html.includes('class="mega-nav"') && html.includes('base.css')) {
    return { skipped: true, reason: 'already templated' };
  }

  const meta = extractMeta(html);
  const body = extractBody(html);
  const pageType = getPageType(filepath, html);

  if (!body) {
    return { skipped: true, reason: 'no extractable body content' };
  }

  const rebuilt = `<!DOCTYPE html>
<html lang="en">
<head>
${headIncludes}
    <title>${meta.title}</title>
    ${meta.description ? `<meta name="description" content="${meta.description}" />` : ''}
    ${meta.canonical ? `<link rel="canonical" href="${meta.canonical}" />` : ''}
    ${meta.description ? `<meta property="og:title" content="${meta.title}" />` : ''}
    ${meta.description ? `<meta property="og:description" content="${meta.description}" />` : ''}
    <meta property="og:type" content="${pageType === 'article' ? 'article' : 'website'}" />
    <meta property="og:site_name" content="Organic Arbitrage" />
    ${meta.schema ? `<script type="application/ld+json">\n${meta.schema}\n    </script>` : ''}
</head>
<body>

${megaNavHtml}

  <main class="${pageType === 'article' ? 'section' : 'pt-nav'}">
    <div class="container${pageType === 'article' ? ' container--narrow' : ''}">
      ${pageType === 'article' ? '<article class="prose">' : ''}
      ${body}
      ${pageType === 'article' ? '</article>' : ''}
    </div>
  </main>

${footerHtml}

${megaNavScript}

</body>
</html>`;

  if (!DRY_RUN) {
    fs.writeFileSync(filepath, rebuilt);
  }

  return { skipped: false, pageType };
}

// ─── Scan and Process ────────────────────────────────────────────

function scanDir(dir) {
  const results = { processed: 0, skipped: 0, errors: 0 };
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const sub = scanDir(fullPath);
      results.processed += sub.processed;
      results.skipped += sub.skipped;
      results.errors += sub.errors;
    } else if (entry.name.endsWith('.html')) {
      try {
        const result = retemplateFile(fullPath);
        if (result.skipped) {
          results.skipped++;
          if (!DRY_RUN) {
            console.log(`  Skip: ${path.relative(DIST, fullPath)} (${result.reason})`);
          }
        } else {
          results.processed++;
          console.log(`  ${DRY_RUN ? '[DRY] ' : ''}Templated: ${path.relative(DIST, fullPath)} (${result.pageType})`);
        }
      } catch (e) {
        results.errors++;
        console.error(`  Error: ${path.relative(DIST, fullPath)} — ${e.message}`);
      }
    }
  }

  return results;
}

// ─── Main ────────────────────────────────────────────────────────

function main() {
  console.log(`Retemplating dist/${DRY_RUN ? ' (DRY RUN)' : ''}...\n`);

  if (!fs.existsSync(DIST)) {
    console.error('dist/ does not exist. Run build.js first.');
    process.exit(1);
  }

  const results = scanDir(DIST);

  console.log(`\nRetemplate complete:`);
  console.log(`  Processed: ${results.processed}`);
  console.log(`  Skipped:   ${results.skipped}`);
  console.log(`  Errors:    ${results.errors}`);
}

module.exports = { retemplateFile, extractMeta, extractBody };

if (require.main === module) {
  main();
}
