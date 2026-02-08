---
title:: Website Acquisition Due Diligence Checklist for SEO Assets
description:: Complete due diligence checklist for buying websites. Covers traffic verification, revenue auditing, backlink analysis, and legal review.
focus_keyword:: website acquisition due diligence
category:: strategies
author:: Victor Valentine Romo
date:: 2026.02.07
---

# Website Acquisition Due Diligence Checklist for SEO Assets

Due diligence is the process of verifying that the website you're about to buy actually matches what the seller claims. It sounds obvious. In practice, 40% of website acquisitions on public marketplaces involve at least one material misrepresentation, according to **Empire Flippers'** 2025 marketplace transparency report. Sellers inflate revenue, disguise traffic sources, hide algorithm penalties, and omit critical expenses.

The purpose of due diligence isn't to find perfect sites. Perfect sites don't exist. The purpose is to identify every risk before you wire money, quantify those risks in dollar terms, and decide whether the spread between price and value still justifies the acquisition after adjustments.

This checklist covers every verification step for SEO-driven website acquisitions. Work through it sequentially. Each section builds on the previous one. Skip a section, and you're guessing where you should be verifying.

## Traffic Verification

Traffic is the foundation claim in any SEO asset sale. If the traffic numbers are wrong, every downstream calculation — revenue projections, valuation multiples, growth potential — falls apart.

### Google Analytics Deep Dive

Request view-only access to **Google Analytics** (GA4 preferred, Universal Analytics data if still available). Screenshots are insufficient. Live access lets you filter, segment, and explore data the seller may not have shown you.

**Verification checklist:**
- Confirm the Analytics property matches the domain being sold (check property settings, not just the dashboard)
- Verify tracking code is present on all pages (use **Google Tag Assistant** browser extension)
- Check for duplicate tracking codes that inflate pageview counts
- Examine referral exclusion list — some sellers exclude bounce-heavy referrers to artificially lower bounce rate
- Review filter settings for anything that inflates or manipulates data

**Traffic pattern analysis:**
- Pull 12-24 months of data if available
- Chart organic traffic trend — stable, growing, or declining
- Identify any traffic cliffs (sudden drops exceeding 20% in a single month)
- Cross-reference traffic drops against known **Google** algorithm update dates from **SEMrush Sensor** or **Moz** algorithm history
- Check for traffic sources that shouldn't exist (direct traffic spikes often indicate bot activity)

**Quality indicators:**
- Bounce rate by channel (organic should be 40-65% for content sites; below 30% suggests tracking issues or bot traffic)
- Average session duration (under 30 seconds for content sites signals low-quality traffic)
- Pages per session (1.0 flat across months signals bot traffic)
- New vs. returning visitor ratio (80%+ new visitors is normal for SEO-driven sites)

### Google Search Console Verification

**Google Search Console** data reveals what **Google** actually sees, unfiltered by client-side tracking issues.

Request viewer access to the Search Console property. Verify:
- Total clicks and impressions trend over 16 months (Search Console retains 16 months of data)
- Click-through rate by query (abnormally high CTR for competitive terms warrants investigation)
- Indexing status (how many pages are indexed vs. submitted)
- Any manual actions or security issues flagged

Compare Search Console clicks against Analytics organic sessions. These numbers will never match perfectly — different measurement methodologies — but they should trend in the same direction. If Search Console shows declining clicks while Analytics shows growing organic traffic, something is wrong with the Analytics data.

### Third-Party Traffic Estimates

Pull traffic estimates from **Ahrefs**, **SEMrush**, and **SimilarWeb**. These are estimates, not measurements. But they provide independent data points.

If all three tools show 5,000-8,000 monthly visitors and the seller claims 15,000, the burden of proof shifts to the seller. If the tools align with seller claims within 30%, you have corroboration.

The pattern to trust: Seller Analytics data, Search Console data, and two or more third-party estimates all pointing in the same direction. The pattern to investigate: Any source materially diverging from the others.

## Revenue Auditing

Revenue verification requires access to every income source, not seller summaries.

### Ad Network Revenue

Request dashboard access to every ad network the site uses. For **Google AdSense**, **Mediavine**, or **Raptive** (formerly AdThrive), check:
- Monthly revenue for 12+ months
- RPM trends (declining RPM with stable traffic may indicate niche advertiser pullback)
- Payment history (actual payments received, not just earnings reported)
- Any policy violations or warnings

Cross-check: Revenue divided by traffic should produce an RPM figure consistent with the niche. A general interest blog claiming $40 RPM on **AdSense** is lying. A finance blog claiming $35 RPM on **Mediavine** is plausible.

### Affiliate Revenue

Request access to each affiliate network dashboard: **Amazon Associates**, **ShareASale**, **CJ Affiliate**, **Impact**, and any direct programs.

Verify:
- Commissions earned per month for 12+ months
- Click-through rates from the site to affiliate offers
- Conversion rates on those clicks
- Any clawbacks or reversed commissions
- Program standing (good standing vs. warnings)

**Amazon Associates** data is particularly important to verify because Amazon periodically changes commission rates. Current revenue at 3% commission doesn't mean historical revenue at 6% rates will continue.

### Expense Verification

Revenue without expense context is meaningless for valuation. Request documentation of all recurring costs:
- Hosting fees
- Domain registration
- SEO tool subscriptions (**Ahrefs**, **SEMrush**, etc.)
- Content production costs (writer invoices, AI tool subscriptions)
- Link building expenses
- Virtual assistant or contractor payments
- Email marketing platform fees
- Any paid traffic costs

Net profit — revenue minus all expenses — is what multiples apply to. A site claiming $4,000/month revenue with $1,800/month in undisclosed expenses is a $2,200/month business, not a $4,000/month one. That distinction changes a $120,000 valuation to $66,000.

## Backlink Profile Analysis

The backlink profile determines how defensible the organic traffic is. Traffic built on quality editorial links survives algorithm updates. Traffic built on manipulative links collapses when **Google** identifies the pattern.

### Link Quality Assessment

Run the full [backlink audit process](/articles/aged-domain-backlink-audit.html) on every acquisition target.

Pull the complete backlink profile from **Ahrefs**. Evaluate:

**Referring domain quality:** What percentage of linking sites have real traffic themselves? Links from sites with zero organic traffic are either PBN nodes or abandoned properties — neither transfers meaningful authority.

**Anchor text distribution:** Natural profiles show branded anchors (40-60%), URL anchors (15-25%), and varied natural phrases (20-30%). Exact-match keyword anchors exceeding 10% of total suggests deliberate anchor text manipulation.

**Link velocity:** Consistent link acquisition over years signals organic editorial interest. Burst patterns (50 links in one week, then silence for months) signal paid campaigns or PBN builds.

**Geographic and language distribution:** An English-language home improvement blog with 40% of backlinks from Chinese gambling sites has a problem.

### Toxic Link Percentage

Use **SEMrush Backlink Audit** or **Ahrefs** to score toxicity. Any site with more than 15% toxic links requires either a substantial price discount or a demonstrated disavow file already submitted to **Google**.

Toxic links don't automatically trigger penalties. But they represent latent risk. A future algorithm update could weight toxic signals more heavily, and traffic built on those links could evaporate.

### Competitor Link Gap

Compare the target site's backlink profile against its top 3-5 SERP competitors. If competitors have materially stronger link profiles, the target site's rankings may be fragile. It's outranking sites with stronger profiles due to content relevance or technical factors — both of which can shift.

## Content Assessment

Content is the surface area that captures organic traffic. Its quality, freshness, and legal standing all affect post-acquisition value.

### Content Quality Audit

Read at least 10 articles, including the top 5 traffic generators and 5 random selections. Evaluate:
- Factual accuracy (outdated statistics, discontinued products, dead links)
- Writing quality (grammar, readability, depth)
- Content uniqueness (run samples through **Copyscape** to check for duplication)
- AI content signals (run samples through **Originality.ai** if AI content percentage matters to your risk model)

### Content Freshness

Check publication and update dates across the site. A site where every article was published 18+ months ago with no updates signals abandonment. **Google's** freshness signals reward recently updated content in many niches.

Stale content represents post-acquisition work you'll need to fund. Budget accordingly.

### Legal Content Risks

Verify:
- Image licensing (stock photos require commercial licenses; many sites use unlicensed images)
- Content originality (no plagiarized content)
- Proper affiliate disclosures (FTC compliance)
- GDPR compliance if the site receives European traffic
- Medical, financial, or legal claims that could create liability (YMYL content carries heightened risk)

## Technical SEO Assessment

Technical infrastructure affects both current performance and post-acquisition operational costs.

### Site Architecture and Crawlability

Run **Screaming Frog** or **Sitebulb** crawl on the site. Check:
- Crawl errors (4xx, 5xx status codes)
- Orphan pages (pages not linked from site navigation)
- Redirect chains (multiple redirects in sequence reduce link equity transfer)
- Canonical tag implementation
- XML sitemap accuracy
- Robots.txt configuration

### Core Web Vitals

Check **Google PageSpeed Insights** and **Search Console Core Web Vitals** report. Sites failing Core Web Vitals thresholds face ranking disadvantage that requires technical investment to resolve.

Poor Core Web Vitals often indicate:
- Unoptimized images
- Excessive JavaScript
- Cheap hosting with slow server response
- Plugin bloat on WordPress sites

Budget for these fixes if they exist. A hosting upgrade alone can cost $50-300/month more than the seller's current plan.

### CMS and Plugin Assessment

For WordPress sites (the majority of content site acquisitions):
- WordPress version (outdated versions signal neglect and security risk)
- Plugin count and update status
- Theme quality and licensing
- Custom code dependencies
- Database size and optimization

Sites running 30+ plugins with half of them outdated represent a technical debt burden. Factor cleanup time and cost into your offer.

## Legal and Structural Review

### Domain Ownership Verification

Confirm the seller owns the domain. Check WHOIS records against seller identity. For domains behind privacy protection, verify through registrar account access during the closing process.

### Existing Contracts and Obligations

Ask the seller about:
- Advertising contracts with fixed delivery obligations
- Sponsored content agreements
- Affiliate program exclusivity arrangements
- Content licensing agreements with third parties
- Pending legal claims or disputes

Any obligation that transfers with the asset is your problem post-acquisition.

### Asset Purchase Agreement Essentials

The [asset purchase agreement](/articles/asset-purchase-agreement-seo-sites.html) should clearly specify:
- Exactly which assets transfer (domain, content, email list, social accounts)
- Representations and warranties from the seller
- Indemnification provisions
- [Non-compete clause](/articles/non-compete-clauses-website-sales.html) scope and duration
- Transition support terms
- Dispute resolution mechanism

## The Decision Framework

After completing due diligence, you'll have a comprehensive picture of the asset — warts and all. The acquisition decision reduces to three questions:

**Does the verified data support the asking price?** If due diligence reveals lower traffic, lower revenue, or higher expenses than claimed, renegotiate or walk away.

**Are identified risks priced into the deal?** Every site has risks. Algorithm dependency, single revenue source, aging content — these aren't deal-killers if the price reflects them. A site with declining traffic at 20x monthly profit might be a better buy than a site with stable traffic at 38x.

**Do you have the capability to execute post-acquisition?** Owning a site with 15,000 monthly visitors means nothing if you lack the skills or resources to maintain content, manage monetization, and respond to algorithm changes.

Due diligence doesn't guarantee success. It eliminates the deals that guarantee failure.

## FAQ

### How long should website due diligence take?

Standard due diligence for sites under $50,000 takes 5-10 business days. Sites in the $50,000-$200,000 range warrant 10-14 days. Acquisitions above $200,000 may justify 2-4 weeks, potentially with professional assistance from an SEO consultant or accountant. Marketplace-facilitated deals often impose 7-14 day windows; negotiate extensions if needed for thorough verification.

### What percentage of website listings misrepresent key metrics?

**Empire Flippers** rejects approximately 80% of submitted listings during their vetting process, many for material misrepresentation. On unvetted platforms like **Flippa**, the rate of misleading listings runs higher. Revenue inflation, traffic manipulation through bot traffic, and undisclosed expenses represent the three most common misrepresentations buyers encounter.

### Should I hire a professional for due diligence?

For acquisitions under $20,000, self-directed due diligence using this checklist is sufficient if you have basic SEO and analytics knowledge. For acquisitions above $50,000, engaging an independent SEO consultant ($500-2,000 for a due diligence report) provides a second set of expert eyes. For six-figure acquisitions, professional due diligence including legal review is strongly recommended.

### What is the single most important due diligence check?

Cross-referencing **Google Search Console** data against **Google Analytics** data. Search Console data comes directly from **Google** and cannot be manipulated by the seller. If Search Console shows declining organic clicks while Analytics shows growing organic sessions, the Analytics data has been tampered with. This single check catches the most common and most consequential form of traffic fraud.
