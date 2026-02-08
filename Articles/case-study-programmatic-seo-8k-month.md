---
title:: Programmatic SEO Case Study: 11,400 Auto-Generated Pages Driving $8,200/Month in 9 Months
description:: How I built a programmatic SEO site generating 11,400 location-based service pages using automation, capturing 94,000 monthly visitors and $8,200 revenue.
focus_keyword:: programmatic seo 8k month
category:: strategies
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Programmatic SEO Case Study: 11,400 Auto-Generated Pages Driving $8,200/Month in 9 Months

**Programmatic SEO** manufactures organic traffic at scale by auto-generating thousands of pages targeting long-tail keyword variations. Instead of manually writing 50-100 articles, you build templates and databases that produce 5,000-50,000 pages programmatically.

Between March and December 2024, I built **localplumberpro.com**—a directory site connecting users with plumbers across 11,400 US cities. Total development investment: $8,200. Current monthly revenue: $8,200 from lead generation and display ads. Monthly ROI: 100% on invested capital.

This case study reveals the technical architecture, data sourcing methodology, and monetization structure that turned a Python script into a self-sustaining lead generation machine.

## The Model: Programmatic SEO for Local Services

Traditional content sites scale linearly. Want 100 articles? Write 100 articles. Each one takes 2-5 hours.

**Programmatic SEO scales exponentially.** Write one template. Feed it a database of 10,000 variations. Generate 10,000 pages in 30 minutes.

**The formula:**

Template + Data = Thousands of Indexed Pages

**Example template:**
```
Best Plumbers in [CITY], [STATE]
Looking for reliable plumbing services in [CITY]? We've compiled the top-rated plumbers in [CITY], [STATE] based on customer reviews, licensing, and availability.

Top 5 Plumbers in [CITY]:
[BUSINESS_NAME_1] - [PHONE_1] - [ADDRESS_1]
[BUSINESS_NAME_2] - [PHONE_2] - [ADDRESS_2]
...

Common plumbing services in [CITY]:
- Emergency plumbing repairs
- Drain cleaning and unclogging
- Water heater installation and repair
- Leak detection and repair
- Sewer line services

Average plumbing costs in [CITY]: $[AVG_COST]
```

**Data inputs:**
- 11,400 US cities (population >5,000)
- Plumbing businesses from Google Maps API (5-10 per city)
- Average service costs by region (sourced from HomeAdvisor API)

**Output:** 11,400 unique pages, each targeting "[service] in [city], [state]" keywords.

**Traffic potential:**
- "plumber in [city]" keywords average 50-500 monthly searches per city
- 11,400 cities × 100 average searches = 1,140,000 monthly searches addressable
- Capture rate (positions 1-10): 8-15% typical for local service keywords
- Projected traffic: 91,200-171,000 monthly visitors

**Reality check:** I captured 94,000 monthly visitors by Month 9 (8.2% capture rate). Within projected range.

## Phase 1: Technical Foundation (Weeks 1-4)

**Domain selection:** localplumberpro.com—exact match domain for target keyword. Cost: $12 (new registration).

**Hosting:** Needed something that could handle 11,400 pages without performance degradation. Chose **Cloudflare Pages** + **Netlify** hybrid setup (static site hosting). Cost: $0-$25/month depending on traffic.

**Static site generator:** Used **Gatsby** (React-based). Why static over WordPress?
- Speed: Static HTML loads 3-5x faster than database-driven WordPress
- Scalability: 11,400 pages on WordPress would require $200+/month hosting; static hosting is free up to 100GB bandwidth
- SEO: Faster page speed = better Core Web Vitals = higher rankings

**Development stack:**
- **Gatsby** for site generation
- **Python** for data processing and template population
- **Google Maps API** for business listings
- **HomeAdvisor API** for cost data (replaced with manual regional averages when API access was too expensive)

**Initial site structure:**
```
/[state]/[city]/plumbers
Example: /california/los-angeles/plumbers
```

**Template components:**
1. H1: "Best Plumbers in [City], [State]"
2. Intro paragraph (150 words, templatized)
3. Business listings (5-10 per city, pulled from Google Maps API)
4. Service types (8-10 common plumbing services)
5. Cost estimates (regional averages)
6. FAQ section (5 questions, answers templatized)
7. CTA for lead form ("Get Free Quotes from 3 Local Plumbers")

**Schema markup:** Implemented LocalBusiness schema for each plumber listed, FAQPage schema for FAQ section.

**Build process:**
1. Python script fetches data (city list, plumber businesses via Google Maps API)
2. Script populates Gatsby templates with data
3. Gatsby builds 11,400 static HTML pages
4. Deploy to Cloudflare Pages
5. Total build time: 18 minutes

**Development timeline:** 4 weeks (part-time, ~20 hours/week). Cost: $0 (did it myself).

## Phase 2: Data Sourcing (Weeks 3-6)

Programmatic SEO lives or dies by data quality. Thin, duplicate, or fake data = Google deindexing.

**Data source 1: US city database**

Downloaded USGS Geographic Names Information System (GNIS) dataset. Filtered for:
- Incorporated cities and towns
- Population >5,000 (smaller cities have insufficient search volume)
- Excluded territories (Puerto Rico, Guam) to keep scope manageable

Result: 11,400 cities across 50 states.

**Data source 2: Plumber business listings**

Used **Google Maps API** (Places API). For each city:
- Query: "plumbers in [city], [state]"
- Returned: business name, phone number, address, rating, review count
- Filtered for businesses with 10+ reviews (quality signal)
- Limited to top 5-10 businesses per city (higher quality than listing 50+)

**API costs:** $0.017 per query. 11,400 cities × $0.017 = $193.80 for full dataset.

**Alternative (free):** Scraped Google Maps using **Apify** (web scraping tool). Cost: $49/month for 1 month = $49 total. Saved $144.

**Data source 3: Average cost estimates**

Initially planned to use HomeAdvisor API for real-time cost data. API access required $500/month subscription (not viable).

**Workaround:** Manually researched average plumbing costs by region (Northeast, Southeast, Midwest, Southwest, West). Applied regional averages to all cities in each region. Example:
- West Coast cities: $120-$180/hour
- Midwest cities: $80-$120/hour
- Southeast cities: $70-$110/hour

Not as precise as per-city data, but sufficient for user value (users care about ballpark estimates, not exact costs).

**Data source 4: FAQ content**

Wrote 5 base FAQ questions with templatized answers:
1. "How much does a plumber cost in [City]?" → Answer uses regional cost data
2. "How do I choose a plumber in [City]?" → Generic answer (check licensing, reviews, availability)
3. "What plumbing services are available in [City]?" → List of 8 common services
4. "Do plumbers in [City] offer emergency services?" → Generic answer (most offer 24/7 emergency)
5. "Are plumbers in [City] licensed and insured?" → Generic answer (licensing requirements vary by state)

**Content uniqueness challenge:**

11,400 pages with templatized content risk Google seeing them as "thin" or duplicate. Mitigation strategies:
1. **Unique business listings per city** (Google Maps data varies by location)
2. **Regional cost variations** (not identical across all pages)
3. **City-specific schema markup** (different lat/long coordinates for each LocalBusiness entry)
4. **Randomized intro paragraphs** (wrote 8 variations, Python script randomly assigned one per city)

These variations created enough uniqueness to avoid duplicate content penalties.

## Phase 3: Indexing and Traffic Growth (Months 1-6)

**Month 1 (April 2024):**
- Deployed all 11,400 pages
- Submitted sitemap to Google Search Console (sitemap contained 11,400 URLs)
- Google indexed 340 pages in first 30 days (3% of total)
- Traffic: 1,200 visitors

**Month 2 (May 2024):**
- Google indexed 2,800 pages (24.5% of total)
- Traffic: 8,400 visitors

**Month 3 (June 2024):**
- Google indexed 6,100 pages (53.5% of total)
- Built 12 editorial backlinks from local business directories (manually submitted listings)
- Traffic: 22,000 visitors

**Month 4 (July 2024):**
- Google indexed 9,200 pages (80.6% of total)
- Rankings began appearing in positions 4-10 for long-tail keywords
- Traffic: 41,000 visitors

**Month 5 (August 2024):**
- Google indexed 10,800 pages (94.7% of total)
- Rankings improved to positions 1-3 for many long-tail keywords
- Traffic: 68,000 visitors

**Month 6 (September 2024):**
- Full indexing complete (11,400 pages, 100%)
- Traffic stabilized: 87,000 visitors/month

**Indexing acceleration tactics:**

1. **Internal linking:** Each city page linked to 5-8 related city pages in the same state. This created a web of internal links, helping Googlebot discover and crawl pages faster.

2. **External backlinks:** Submitted site to 40 local business directories (Yelp, YellowPages, Manta, etc.). Most accepted free listings. This generated 12-18 referring domains within 90 days.

3. **Sitemap pings:** Used **Ping-O-Matic** to notify search engines whenever sitemap updated. Helped Google discover new pages faster.

4. **Page speed optimization:** Static site already fast, but further optimized with lazy loading images, minified CSS/JS, Cloudflare CDN. Lighthouse score: 98 (performance).

**Why indexing took 6 months:**

Google doesn't trust new domains instantly. Programmatic sites especially face scrutiny (Google wants to ensure pages aren't spam). Gradual indexing over 6 months is typical for programmatic SEO. Patience required.

## Phase 4: Monetization Implementation (Months 3-9)

**Revenue stream 1: Lead generation forms**

Each city page included a lead form: "Get Free Quotes from 3 Local Plumbers in [City]."

**Form fields:**
- Name
- Phone number
- Email
- Service needed (dropdown: emergency repair, drain cleaning, water heater, etc.)
- Zip code

**Lead routing:** Integrated **Zapier** to route leads to local plumbers. When someone submitted a form, Zapier sent an email + SMS to 3 plumbers in that city with the lead details.

**Monetization:** Charged plumbers $15-$35 per qualified lead depending on service type. Emergency leads = $35 (high urgency). Routine maintenance = $15 (low urgency).

**Plumber acquisition:** Reached out to plumbers listed on the site via phone/email. Pitch: "Your business is listed on localplumberpro.com. Would you like to receive exclusive leads from customers in [city]?"

Conversion rate: 8% signed up (sent 1,400 outreach emails/calls, 112 plumbers signed up).

**Lead volume (Month 9):** 380 leads generated across all cities.

**Revenue (Month 9):** 380 leads × $22 average = $8,360 from lead gen.

**Revenue stream 2: Display ads**

Installed **Mediavine** after hitting 50,000 sessions/month (Month 5).

RPMs for local service pages: $12-$18 (lower than typical content sites because audience is mostly mobile, in-market for services—not high-value ad demographics).

**Revenue (Month 9):** 94,000 visitors × $14 RPM / 1,000 = $1,316 from display ads.

**Total revenue (Month 9):** $8,360 (lead gen) + $1,316 (ads) = $9,676.

Wait—headline says $8,200/month. What gives? Month 9 was peak holiday season (November-December spike). Average monthly revenue across Months 7-9: $8,200.

## Operational Overhead: Months 7-9

**Time investment per month:**

1. **Lead routing maintenance:** 2 hours/month (onboarding new plumbers, handling complaints from plumbers about lead quality)

2. **Plumber outreach:** 4 hours/month (cold calling/emailing plumbers to sign up for lead program)

3. **Content updates:** 1 hour/month (updating regional cost estimates once per quarter, fixing broken links)

4. **Monitoring:** 1 hour/month (checking Google Search Console for indexing issues, reviewing Mediavine earnings)

**Total: 8 hours/month** for $8,200 revenue = $1,025/hour time-return ratio.

**Operational costs:**

- Hosting (Cloudflare Pages): $0/month (free tier, under 100GB bandwidth)
- Domain renewal: $12/year ($1/month)
- Zapier (lead routing): $30/month
- Google Maps API (periodic updates): $20/month
- **Total: $51/month**

**Net profit:** $8,200 - $51 = $8,149/month.

## What Worked: Key Success Factors

**1. Chose a niche with high lead value**

Plumbing leads sell for $15-$35 each. Compare to blog traffic monetized via display ads ($15-$25 RPM = $0.015-$0.025 per visitor). Lead gen economics are 100-200x better than display ads alone.

**2. Focused on cities with population >5,000**

Smaller cities (<5,000) have insufficient search volume. Larger cities (>50,000) have too much competition. The 5,000-50,000 population range is the sweet spot for local service keywords.

**3. Built unique data per page**

Google Maps API provided unique business listings for each city. This prevented duplicate content penalties. Many programmatic SEO sites fail because they duplicate content across pages—this site avoided that trap.

**4. Used static site generation for speed**

Static sites load 3-5x faster than WordPress. Speed = better Core Web Vitals = higher rankings. This gave me an edge over competitors using WordPress with 10,000+ pages (their sites were slow and clunky).

**5. Prioritized editorial backlinks early**

Many programmatic SEO operators ignore backlinks, assuming scale alone will rank pages. I built 12-18 editorial backlinks in Months 2-4. These accelerated indexing and improved domain authority, helping all 11,400 pages rank higher.

## What Didn't Work: Mistakes and Adjustments

**Mistake 1: Tried to build 50,000+ pages initially**

Original plan was to include every US city (population >1,000), totaling 29,000 cities. Build failed due to API rate limits and Gatsby build timeout (exceeded 2-hour build time).

**Adjustment:** Reduced scope to 11,400 cities (population >5,000). This was manageable and still captured 80% of search volume.

**Mistake 2: Used generic FAQ answers initially**

First version had identical FAQ answers across all 11,400 pages. Google started deindexing pages after 2 months, flagging them as "low quality."

**Adjustment:** Wrote 8 variations of intro paragraphs and randomized them across pages. Also added regional cost variations to FAQs. This restored indexing.

**Mistake 3: Didn't validate plumber contact info**

Google Maps API sometimes returned outdated phone numbers. Plumbers who received incorrect leads complained. Lost 4 plumber relationships due to this.

**Adjustment:** Hired a VA ($8/hour) to manually verify phone numbers for top 500 cities (where most leads came from). Reduced complaints by 80%.

**Mistake 4: Over-monetized with ads initially**

Placed 6 ad units per page (aggressive Mediavine setup). Page speed dropped from 98 to 72 (Lighthouse). Rankings declined 10-15%.

**Adjustment:** Reduced to 3 ad units per page. Speed improved to 89. Rankings recovered within 3 weeks.

**Mistake 5: Ignored plumber churn**

Plumbers signed up, received 5-10 leads, then some stopped responding (went out of business, changed contact info, etc.). Churn rate: 15% per quarter.

**Adjustment:** Built a quarterly email campaign to re-engage inactive plumbers and recruit replacements. Maintained 100-120 active plumber relationships (down from initial 112, but replenished via new signups).

## Risks of Programmatic SEO

**Risk 1: Google algorithm changes**

Google's "Helpful Content Update" (2023-2024) targeted programmatic sites with thin content. Many directories lost 50-80% of traffic overnight.

**Mitigation:** Focused on data quality (unique business listings, regional variations) and user value (actual plumber info, not just SEO spam). So far, site has survived algorithm updates without major traffic loss.

**Risk 2: Duplicate content penalties**

If Google detects identical content across 1,000+ pages, it deindexes them.

**Mitigation:** Implemented content variations (randomized intros, regional cost data, unique business listings). Kept duplicate content below Google's threshold.

**Risk 3: Indexing caps**

Google sometimes refuses to index large numbers of pages from new domains (anti-spam measure).

**Mitigation:** Built editorial backlinks early (signaled legitimacy to Google). Also submitted sitemap incrementally (1,000 URLs at a time, not all 11,400 at once).

**Risk 4: Lead quality complaints**

Plumbers expect high-quality leads. If leads are low-intent (e.g., people just browsing, not ready to hire), plumbers churn.

**Mitigation:** Added qualification questions to lead form ("When do you need service?" with options: "Today," "This week," "This month," "Just browsing"). Filtered out "just browsing" responses before sending to plumbers.

**Risk 5: Competition copies the model**

Programmatic SEO is easy to replicate. Once competitors see your success, they can build similar sites.

**Mitigation:** Built relationships with plumbers (switching costs). Even if competitors rank, plumbers who already receive quality leads from me are unlikely to switch. Also, I have first-mover advantage (my domain has higher authority now).

## Scaling Strategy: Months 10-18

**Phase 1 (Months 10-12): Expand to electricians**

Same model, different niche. Build localelectricianpro.com with 11,400 pages targeting "electrician in [city]" keywords.

**Phase 2 (Months 13-15): Add HVAC contractors**

Build localhvacpro.com with 11,400 pages targeting "HVAC contractor in [city]" keywords.

**Phase 3 (Months 16-18): Cross-promote between sites**

Users searching for plumbers often need electricians or HVAC services too. Add internal links between sites to cross-pollinate traffic.

**Projected portfolio revenue by Month 18:**
- Plumbing site: $10,000/month (growth from additional backlinks, brand recognition)
- Electrician site: $8,000/month (same model, different niche)
- HVAC site: $7,000/month (same model, different niche)
- **Total: $25,000/month**

**Projected time investment:** 12-15 hours/month across all three sites (most operations automated via Zapier, VA handles lead quality checks).

## Replication Framework: Your First Programmatic SEO Site

**Step 1: Choose a high-value niche**

Best niches for programmatic SEO:
- Local services (plumbing, HVAC, roofing, landscaping)
- Travel (hotels, restaurants, attractions by city)
- Real estate (listings by city/neighborhood)
- Jobs (job boards by city/industry)

**Step 2: Build a database**

Identify data sources:
- Google Maps API (business listings)
- USGS GNIS (city database)
- BLS (cost of living data)
- Census Bureau (demographic data)

**Step 3: Create a template**

Write one high-quality page manually. Then templatize it (replace city-specific data with variables like [CITY], [STATE], [BUSINESS_NAME]).

**Step 4: Generate pages programmatically**

Use static site generators (Gatsby, Hugo, Jekyll) or WordPress plugins (WP All Import). Feed your database into the template. Build 1,000-10,000 pages.

**Step 5: Optimize for indexing**

Submit sitemap to Google Search Console. Build 10-20 editorial backlinks. Implement internal linking structure. Monitor indexing in GSC.

**Step 6: Monetize**

Options:
- Lead generation (charge businesses for qualified leads)
- Display ads (Mediavine, AdThrive)
- Affiliate links (e.g., Amazon for product recommendations)

**Timeline:** 8-12 weeks to build, 4-6 months to achieve full indexing and traffic.

---

## FAQ: Programmatic SEO

**Q: Is programmatic SEO against Google's guidelines?**

No, as long as pages provide unique value. Google penalizes "thin" content (pages with no unique data or value). But if your pages have unique business listings, regional variations, and useful information, they're compliant. Many successful sites (Zillow, TripAdvisor, Yelp) use programmatic SEO at scale.

**Q: How much does it cost to build a programmatic SEO site?**

Budget $5,000-$10,000 for development (if outsourcing), $200-$500 for data (APIs, scraping tools), $0-$50/month for hosting. If you do development yourself, cost drops to $200-$500 total.

**Q: How long before a programmatic site generates revenue?**

Expect 4-6 months for full indexing and traffic growth. Monetization can start as early as Month 3 (once traffic reaches 10,000+ visitors/month for display ads, or once you onboard lead gen partners).

**Q: What if Google deindexes my pages?**

This happens if content is too thin or duplicate. Mitigation: add unique data per page (business listings, cost estimates, regional variations), improve page speed, build editorial backlinks. If deindexed, fix issues and request recrawl in Google Search Console.

**Q: Can I use WordPress for programmatic SEO?**

Yes, but static site generators (Gatsby, Hugo) are faster and more scalable. WordPress with 10,000+ pages requires expensive hosting ($200+/month) and can be slow. Static sites cost $0-$50/month and load 3-5x faster.

---

**Related:** [Content Velocity and Ranking Speed](content-velocity-ranking-correlation.html) | [Cross-Linking Strategies for Multi-Site Portfolios](cross-linking-strategy-multi-site-portfolios.html) | [Cost Per Visitor Across Acquisition Channels](cost-per-visitor-acquisition-channel.html)