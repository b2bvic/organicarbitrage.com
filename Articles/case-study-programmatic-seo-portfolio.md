---
title:: "Case Study: Building a 10-Site Programmatic SEO Portfolio with Shared Infrastructure"
description:: How a portfolio of 10 programmatic SEO sites was built on shared infrastructure, generating $14K/month combined revenue with lessons on scaling, failures, and portfolio economics.
focus_keyword:: programmatic SEO portfolio
category:: case-studies
author:: Victor Valentine Romo
date:: 2026.02.07
---

# Case Study: Building a 10-Site Programmatic SEO Portfolio with Shared Infrastructure

This case study documents the construction and management of a 10-site programmatic SEO portfolio over 18 months, from initial architecture through steady-state operations. The portfolio generates $14,200/month in combined revenue at time of writing, built on approximately $47,000 in total investment. The shared infrastructure model — one tech stack, one content pipeline, one management system — is the force multiplier that makes multi-site deployment economically viable at small-operator scale.

Every site, every cost, and every failure is documented. Four of the ten sites are profitable. Three are marginally profitable. Two are underperforming. One was shut down. The portfolio math works because the winners subsidize the losers, and the shared infrastructure compresses per-site costs below what any individual site could achieve.

## Portfolio Architecture

### The Shared Infrastructure Model

Running 10 independent sites with separate hosting, separate CMSs, separate analytics, and separate content pipelines would cost $500-1,000/month in infrastructure alone. The shared model reduces this to under $100/month.

**Technical stack (shared across all 10 sites):**

- **Hosting:** Single **Cloudflare Pages** account with 10 projects — $0 (free tier handles all 10 sites comfortably with static generation)
- **Static site generator:** **Astro** with a custom multi-site configuration — one codebase, 10 output sites. Templates share common components (navigation, footer, ad placement, schema markup) while each site has unique styling and content.
- **Data layer:** **PostgreSQL** database (hosted on **Supabase** free tier) storing structured data for all 10 sites. Each site has its own schema namespace. Build scripts pull data per-site and generate static pages.
- **Content pipeline:** Single **Google Sheets** workbook with 10 tabs (one per site). Data entries flow through a build script that generates markdown files, which **Astro** renders into HTML pages.
- **Monitoring:** One **Google Search Console** account with all 10 properties. One **Google Analytics 4** property with 10 data streams. One **Ahrefs** subscription tracking all 10 domains.

**Monthly infrastructure cost: $99 (Ahrefs) + $0 (hosting) + $0 (database) = $99/month**

Per-site infrastructure cost: **$9.90/month.** This number makes programmatic sites viable at traffic levels that would be uneconomical with standard infrastructure costs.

### Site Selection Criteria

Each site targets a specific data-driven niche where:
- A structured dataset enables programmatic page generation
- Long-tail keyword patterns exist with aggregate volume of 50,000+ monthly searches
- Monetization exists at the aggregate level (display ads minimum, affiliate or lead gen preferred)
- Competition is fragmented (no dominant player covering the programmatic pattern)

### The 10 Sites

| Site | Niche | Page Count | Monthly Traffic | Monthly Revenue | Status |
|------|-------|-----------|----------------|-----------------|--------|
| Site 1 | Salary comparisons by city | 2,400 | 38,000 | $4,100 | Profitable |
| Site 2 | Cost of living data | 1,800 | 22,000 | $2,800 | Profitable |
| Site 3 | Professional license requirements by state | 850 | 11,000 | $1,600 | Profitable |
| Site 4 | Small business grants by state | 620 | 8,500 | $1,900 | Profitable |
| Site 5 | Apartment comparison by neighborhood | 3,200 | 14,000 | $1,400 | Marginal |
| Site 6 | Pet breed comparisons | 1,100 | 9,800 | $1,100 | Marginal |
| Site 7 | Gardening zone data by zip code | 1,500 | 6,200 | $650 | Marginal |
| Site 8 | Home insurance rate comparisons | 950 | 4,800 | $450 | Underperforming |
| Site 9 | College cost data | 1,200 | 3,100 | $200 | Underperforming |
| Site 10 | Freelance rate benchmarks | 400 | 0 | $0 | Shut down |
| **Total** | | **14,020** | **117,400** | **$14,200** | |

## Build Phase: Months 1-6

### Month 1-2: Infrastructure and First Three Sites

The first two months focused on building the shared infrastructure and launching the first three sites (salary comparisons, cost of living, professional licenses).

**Infrastructure build cost:**
- Custom Astro multi-site configuration: 40 hours × $100/hour (my time) = $4,000
- Database schema design and data import scripts: 20 hours = $2,000
- Template design (shared components): 15 hours = $1,500
- Total infrastructure: **$7,500**

This was the single largest investment. Everything that followed reused this infrastructure at marginal cost.

**First three site launches:**

**Site 1 (Salary comparisons):** Sourced data from **Bureau of Labor Statistics** and **Glassdoor** public datasets. Built page templates rendering city-specific salary data for 120 job titles across 200 metro areas. Initial deployment: 2,400 pages. Content per page: 800-1,200 words of templated narrative + data tables + FAQ section.

Data sourcing: 15 hours. Template development: 10 hours. Content template writing (one master template with conditional logic): 12 hours. Initial deployment: 3 hours.

**Site 2 (Cost of living):** Sourced from **Numbeo**, **BLS Consumer Expenditure Survey**, and state tax databases. 1,800 pages covering 300 cities with cost breakdowns across housing, food, transportation, healthcare, and taxes.

Data sourcing: 12 hours. Template adaptation from Site 1 base: 6 hours. Deployment: 2 hours.

**Site 3 (Professional licenses):** Sourced from individual state licensing board websites (manual research + structured extraction). 850 pages covering licensing requirements for 17 professions across 50 states.

Data sourcing: 25 hours (this was the most labor-intensive due to manual extraction from state websites). Template adaptation: 5 hours. Deployment: 2 hours.

**Month 1-2 total cost (beyond infrastructure):**

| Item | Cost |
|------|------|
| Data sourcing (52 hours) | $5,200 |
| Template development (21 hours) | $2,100 |
| Content template writing (12 hours) | $1,200 |
| Deployment and QA (7 hours) | $700 |
| 3 domain registrations | $36 |
| **Total** | **$9,236** |

### Months 3-4: Sites 4-7

With infrastructure established, the second wave deployed faster. Each new site reused the existing Astro framework, database structure, and deployment pipeline.

**Site 4 (Small business grants):** Surprisingly high-intent traffic. The keyword pattern "[state] small business grants" carries strong commercial intent because searchers are actively seeking funding. Monetization through affiliate links to grant application services and SBA lending partners exceeded display ad revenue from day one.

**Site 5 (Apartment comparisons):** Highest page count (3,200) covering neighborhood-level data for 40 metro areas. Data sourced from **Census Bureau**, **Zillow** public data, and city open data portals.

**Site 6 (Pet breed comparisons):** Lower monetization potential than finance-adjacent sites but strong traffic potential. 1,100 pages covering breed-vs-breed comparisons with temperament, size, cost, and suitability data.

**Site 7 (Gardening zones):** Data from **USDA Plant Hardiness Zone Map**. 1,500 pages mapping planting zones to zip codes with seasonal planting calendars.

**Month 3-4 total cost:**

| Item | Cost |
|------|------|
| Data sourcing (45 hours across 4 sites) | $4,500 |
| Template adaptation (12 hours total) | $1,200 |
| Content templates (8 hours) | $800 |
| 4 domain registrations | $48 |
| **Total** | **$6,548** |

Note the declining per-site cost: Sites 4-7 averaged $1,637 each versus $3,079 each for Sites 1-3. The shared infrastructure amortization drives this.

### Months 5-6: Sites 8-10

The third wave tested more experimental niches.

**Site 8 (Home insurance rates):** High monetization potential (insurance CPC $15-40) but competitive even at the long-tail level. Larger insurance comparison sites like **Policygenius** and **NerdWallet** cover similar data.

**Site 9 (College costs):** Data from **NCES IPEDS** database. Strong dataset but heavy competition from **College Board**, **Niche.com**, and university sites themselves.

**Site 10 (Freelance rate benchmarks):** Experimental niche testing whether freelancers search for rate data at the city/specialization level. Launched with 400 pages.

**Month 5-6 total cost:**

| Item | Cost |
|------|------|
| Data sourcing (30 hours) | $3,000 |
| Template adaptation (8 hours) | $800 |
| Content templates (5 hours) | $500 |
| 3 domain registrations | $36 |
| **Total** | **$4,336** |

Per-site average: $1,445. The infrastructure investment from months 1-2 continued paying dividends.

## Growth Phase: Months 7-12

### Traffic Development by Site

Traffic appeared in waves. Sites 1 and 2 (salary and cost of living) indexed fastest and began ranking by month 3. Sites launched later followed similar 2-3 month indexation-to-ranking timelines.

**Month 6 aggregate:** 18,000 monthly visitors across all sites
**Month 9 aggregate:** 52,000 monthly visitors
**Month 12 aggregate:** 89,000 monthly visitors

The indexation patterns aligned with the [programmatic SEO framework](/articles/programmatic-seo-at-scale.html): approximately 40-50% of pages indexed within 3 months, with another 15-20% indexing over months 4-6. The remaining pages either never indexed (low-value long-tail pages) or were proactively noindexed after failing to generate traffic.

### Indexation Management

Managing **Google Search Console** across 14,000+ pages required systematic indexation monitoring.

**Month 6 audit results:**
- Pages deployed: 14,020
- Pages indexed: 5,800 (41%)
- Pages with organic traffic: 2,900 (21%)
- Pages generating $1+/month in revenue: 1,400 (10%)

The 41% indexation rate was below expectations (50-60% target). Analysis revealed that some page templates produced content too similar across variations — city-specific salary pages where the narrative barely changed between cities. Google's systems classified these as near-duplicate and declined to index the redundant versions.

**Fix applied:** Enhanced template conditional logic to generate more varied narrative content based on data differences. Cities with above-average salaries received different contextual commentary than below-average cities. Cities with specific economic characteristics (tech hub, manufacturing center, government employer) received industry-specific commentary.

After the template enhancement, indexation rates improved to 58% by month 10.

### The Site 10 Shutdown

**Site 10 (Freelance rates)** generated zero organic traffic after 5 months. Investigation revealed:
- Search volume for "[specialization] freelance rate in [city]" was negligible — searchers don't look for rates this specifically
- Existing results for broader terms ("freelance web developer rates") were dominated by **Upwork**, **Glassdoor**, and **ZipRecruiter** with massive authority
- The data wasn't differentiated enough from what these platforms already published

**Decision at month 8:** Shut down the site. Removed the domain from the portfolio. Redirected the 400 pages' crawl budget allocation to higher-performing sites.

**Total loss on Site 10:** $1,445 (build cost) + $36 (domain) = $1,481. Less than 3.5% of total portfolio investment. This is why portfolio construction works — individual failures are absorbable.

### Monetization Layering

**Month 3:** Applied **Google AdSense** to all sites (automatic approval). Initial RPMs: $3-8 across portfolio.

**Month 7:** Sites 1 and 2 qualified for **Mediavine** (50,000 combined sessions). RPMs jumped to $18-28 for these two sites. Applied **Ezoic** to Sites 3-7 as an intermediate premium network. RPMs improved to $10-16.

**Month 9:** Added affiliate monetization to Sites 3 and 4. Professional licensing site linked to exam prep courses (**Kaplan**, **CompTIA**). Business grants site linked to loan comparison services and incorporation services (**LegalZoom**, **Incfile**).

**Month 12:** Sites 1-4 running layered monetization (display + affiliate). Sites 5-7 on display only. Sites 8-9 on display only with underperforming RPMs.

## Steady State: Months 13-18

### Portfolio Revenue Stabilization

By month 13, revenue growth decelerated as the portfolio approached ranking ceilings for most target keywords.

**Month 13 revenue:** $11,400
**Month 15 revenue:** $13,100
**Month 18 revenue:** $14,200

The growth from $11,400 to $14,200 came primarily from:
- Continued indexation of previously unindexed pages (slow trickle)
- RPM improvements from ad network optimization
- Affiliate commission growth on Sites 3 and 4
- Seasonal traffic surges on certain data categories

### Ongoing Operational Costs

| Monthly Expense | Amount |
|----------------|--------|
| Ahrefs subscription | $99 |
| Hosting (still free tier) | $0 |
| Data refresh labor (10 hours/month) | $1,000 |
| Content improvement (5 hours/month) | $500 |
| Monitoring and management (3 hours/month) | $300 |
| **Total monthly OpEx** | **$1,899** |

**Net monthly profit:** $14,200 - $1,899 = **$12,301/month**

### Data Refresh Cycles

Programmatic content depends on current data. Stale data degrades rankings and user trust.

**Refresh schedule:**
- Salary data: Quarterly (BLS updates quarterly)
- Cost of living: Semi-annually
- Professional licenses: Annually (state regulations change slowly)
- Grants: Monthly (new grants appear frequently)
- Apartment data: Quarterly

Each refresh triggers a site rebuild through the Astro pipeline. The static generation approach means refreshes deploy in minutes — rebuild all pages and push to **Cloudflare Pages**. No manual per-page editing.

## Full Financial Summary

### Total Investment (Months 1-18)

| Category | Amount |
|----------|--------|
| Shared infrastructure build | $7,500 |
| Site builds (all 10 sites) | $20,120 |
| Monthly operations (18 months × $1,899) | $34,182 |
| Total initial domain costs | $120 |
| **Total investment** | **$61,922** |

### Total Revenue (Months 1-18)

Revenue ramp:
- Months 1-3: $0
- Months 4-6: $2,400
- Months 7-9: $14,600
- Months 10-12: $31,200
- Months 13-15: $37,800
- Months 16-18: $41,400

**Total revenue: $127,400**

### Portfolio ROI

**Net profit:** $127,400 - $61,922 = **$65,478**
**ROI:** 105.7% over 18 months
**Annualized ROI:** ~70%
**Monthly profit run rate (current):** $12,301

### Portfolio Valuation

At current $14,200/month revenue and a 30x multiple (conservative for diversified portfolio): **$426,000 portfolio value.**

On $61,922 total investment: **6.9x asset value multiple.**

## Portfolio-Level Insights

### Diversification Absorbed Individual Failures

Site 10's complete failure cost $1,481. Site 8 underperforms projections by 60%. Site 9 underperforms by 75%. Combined underperformance and failure cost: approximately $8,000 in misallocated investment. The four profitable sites (generating $10,400/month combined) subsidize everything and produce strong portfolio-level returns.

Without diversification, any single-site deployment faces binary risk: it works or it doesn't. Portfolio construction converts binary risk into variance management. The [SEO portfolio management guide](/articles/seo-portfolio-management.html) covers these principles in depth.

### Shared Infrastructure Is the Economic Moat

Per-site costs decrease as the portfolio grows. The 10th site cost $1,445 to deploy versus $10,579 for the first site (including infrastructure). A hypothetical 20th site would cost ~$1,200. At these marginal costs, even sites generating $200/month are profitable.

This scaling dynamic is unavailable to operators who build each site independently. The shared infrastructure isn't just a convenience — it's the business model's fundamental advantage.

### Content Quality at Scale Requires Systematic Solutions

The indexation problem in month 6 (41% versus 50%+ target) resulted from template inadequacy, not content volume. The fix — enhanced conditional logic producing more varied narratives — illustrates that programmatic content quality isn't about writing more words per page. It's about engineering templates that produce genuinely different, genuinely useful pages for every data variation.

### Not All Niches Support Programmatic Approaches

Site 10's failure demonstrates that keyword volume assumptions need validation before deployment. The freelance rate niche had what appeared to be a viable keyword pattern, but actual search behavior didn't match the pattern. People search for "freelance developer rates" (head term) but not "freelance web developer rates in Denver" (programmatic long-tail). The data existed to generate the pages, but the demand to visit those pages didn't exist.

Validate demand before building. Export 50-100 variations of your keyword pattern and check actual search volume for each. If fewer than 30% show measurable volume, the pattern doesn't support programmatic deployment.

## FAQ

### How much technical skill is required to build a multi-site programmatic portfolio?

The initial infrastructure build requires intermediate development skills: familiarity with a static site generator (**Astro**, **Next.js**, or **Hugo**), basic database management, and scripting for data import/export. The ongoing operation requires minimal technical skill — updating spreadsheets and running build commands. Operators without development skills can hire the initial build ($5,000-10,000 for a developer to set up the multi-site framework) and manage data operations independently.

### Can this portfolio model work with WordPress instead of a static site generator?

Yes, but with higher operational overhead. **WordPress Multisite** can manage 10+ sites from one dashboard. **WP All Import** handles programmatic content from CSV/XML data. The trade-offs: higher hosting costs ($50-200/month for managed WordPress hosting at this scale), slower page load times (requiring caching optimization), and more maintenance (plugin updates, security patches). The static site approach eliminates these concerns but requires more technical setup.

### What happens when a data source changes or becomes unavailable?

Data source risk is real. If the **Bureau of Labor Statistics** changes their data format, all salary pages need pipeline updates. Mitigation: never depend on a single data source. Cross-reference multiple sources and build data extraction scripts that can adapt to format changes. Maintain manual override capability so individual data points can be corrected while the automated pipeline is updated. In 18 months of operation, two data sources changed their API formats, requiring 4-6 hours of pipeline fixes each time.

### How do you handle duplicate content risk across similar pages in a programmatic site?

Three defenses. First, template conditional logic that generates genuinely different narrative content based on data variations — not just swapping city names but contextualizing data differences. Second, canonical tags on every page preventing internal duplication signals. Third, monitoring **Google Search Console** index coverage reports for "duplicate, submitted URL not selected as canonical" errors, which indicate Google considers pages too similar. When these errors appear, enhance template differentiation for the affected page cluster.

### Is $14,200/month realistic for a solo operator to achieve with programmatic SEO?

The revenue is realistic. The management workload (18 hours/month in steady state) is sustainable for a solo operator. The initial build phase (months 1-6) required 40-60 hours/month, which is challenging alongside other commitments. The most realistic path for a solo operator: build 2-3 sites in the first 6 months, validate the model, then expand to 7-10 sites over the following 12 months. Attempting to launch all 10 simultaneously without development help is impractical.
