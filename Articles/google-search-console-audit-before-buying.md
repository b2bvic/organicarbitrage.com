---
title:: Google Search Console Audit Before Buying: The 12-Point Checklist
description:: GSC data reveals traffic sustainability, technical debt, and penalty risks. This checklist identifies deal-breakers before money changes hands.
focus_keyword:: google search console audit before buying
category:: Due Diligence
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Google Search Console Audit Before Buying: The 12-Point Checklist

**Google Search Console** access during due diligence exposes risks that traffic screenshots and revenue claims conceal. Manual actions, crawl errors, and traffic trajectory data predict post-acquisition performance more accurately than seller narratives. Buyers who skip GSC audits inherit technical debt and algorithmic penalties that destroy acquisition economics.

## Securing GSC Access During Negotiations

Request read-only GSC access within the first 48 hours of serious negotiation. Sellers refusing this access either hide problems or lack sophistication. Frame the request as standard due diligence, not suspicion — competent sellers provide access immediately because clean GSC data strengthens negotiating positions.

Verify access includes full historical data, minimum 16 months. Seasonal traffic patterns only emerge with year-over-year comparisons. Sellers providing 90-day snapshots obscure traffic sustainability issues and penalty recovery timelines.

Cross-reference GSC property URL with advertised domain. Sellers sometimes provide GSC access to different properties than those being sold, showing high-performing sister sites while selling underperformers. Validate URL protocol (HTTP vs HTTPS), subdomain configuration, and trailing slash consistency between GSC property and sale listing.

## Manual Actions and Penalty History

Check Manual Actions report first. Active manual penalties transfer with domain ownership, requiring resolution before rankings recover. **Google** doesn't lift manual actions upon ownership change — new buyers must fix issues and submit reconsideration requests themselves.

Review manual action history even if none currently active. Domains with resolved manual penalties within 24 months face ongoing algorithmic scrutiny. Recovery from manual actions takes 6-12 months post-resolution; recently recovered domains carry higher risk than never-penalized properties.

Penalty type determines recovery difficulty. "Unnatural links" penalties require extensive disavow work and link removal outreach. "Thin content" or "cloaking" penalties need fundamental operational changes. Assess whether penalty resolution aligns with your operational capabilities before proceeding.

## Core Web Vitals Assessment

Core Web Vitals data predicts infrastructure investment needs. Domains with <50% URLs passing Core Web Vitals require significant technical optimization. Poor CWV scores correlate with ranking vulnerability — **Google** progressively penalizes sites failing user experience thresholds.

Analyze mobile vs desktop performance separately. Many domains pass desktop CWV but fail mobile, concealing technical debt if you only check aggregate data. Mobile-first indexing makes mobile performance the primary ranking factor.

Track CWV trend lines over 6 months. Deteriorating scores signal infrastructure decay or mounting technical debt. Improving trends suggest the seller invested in optimization, increasing confidence in structural quality. Flat-lining mediocre scores indicate neglect.

## Index Coverage Analysis

Compare indexed pages to sitemap submitted pages. Significant gaps (>20% difference) indicate crawl issues, content quality problems, or technical barriers. A site submitting 1,000 URLs via sitemap but showing only 600 indexed pages has systematic quality or technical problems.

Review excluded URLs by reason. "Crawled - currently not indexed" at scale signals low content quality. "Discovered - currently not indexed" indicates **Googlebot** found URLs but deemed them not worth crawling. Both statuses suggest thin content or duplicate material.

Check "Alternate page with proper canonical tag" exclusions. High volumes indicate either effective duplicate management or misconfigured canonicals. Verify canonical strategy makes sense — improper canonicalization bleeds link equity and ranking potential.

## Traffic Trajectory and Sustainability

Analyze Impressions graph over 16 months minimum. Consistent upward trends suggest sustainable growth. Plateaus indicate maturity or competitive ceiling. Declining trends expose traffic decay that seller revenue claims might not reflect yet.

Compare year-over-year traffic to isolate seasonal patterns from growth. A site showing 40% traffic increase year-over-year but 60% growth comparing December to June might just be seasonal, not growing. Normalize for seasonality before evaluating trajectory.

Identify traffic concentration risk. If 80% of impressions come from 10 keywords, the site has extreme concentration vulnerability. Algorithmic changes affecting those queries destroy acquisition economics. Diversified impression distribution across 100+ keywords indicates more resilient traffic.

## Click-Through Rate Patterns

Average CTR reveals SERP position quality. CTR below 2% suggests mostly position 5-10 rankings. CTR above 8% indicates substantial position 1-3 presence. Cross-reference CTR with position data to validate seller ranking claims.

CTR trends expose clickability optimization. Declining CTR with stable positions indicates competitor SERP feature gains (featured snippets, People Also Ask) or title/description quality degradation. Investigate what changed to cause CTR decay.

Query-level CTR analysis identifies high-commercial-intent traffic quality. Branded queries naturally have high CTR; informational queries have low CTR. Calculate CTR for top 20 non-branded queries to assess traffic monetization potential.

## Position and Query Analysis

Export top 1,000 queries with position and click data. Analyze ranking distribution — domains with 70% of queries ranking positions 1-5 have more stable traffic than those with distributed rankings across positions 5-20. Higher average positions predict better transfer success.

Identify query intent distribution. Balance between commercial, informational, and navigational queries determines monetization flexibility. Sites with 80% informational queries require different monetization strategies than those with commercial query concentration.

Check branded vs non-branded query split. Sites with >50% traffic from branded queries depend heavily on brand equity that may not transfer. Non-branded query dominance indicates content-driven traffic more likely to persist through ownership changes.

## Crawl Stats Evaluation

Pages crawled per day indicates **Googlebot's** valuation of the site. High-authority domains get 500-5,000+ pages crawled daily. Low-authority sites see 10-50 page crawls. This metric predicts how quickly **Google** will discover and respond to post-acquisition changes.

Download size per crawl reveals infrastructure efficiency. Sites with 5MB+ average download sizes have bloated pages, slow load times, and inefficient resource delivery. This technical debt requires optimization investment.

Time spent downloading indicates server response quality. High crawl time with normal download sizes signals server performance issues. Investigate hosting infrastructure — underpowered hosting destroys user experience and rankings.

## Mobile Usability Issues

Review Mobile Usability report for blocking issues. "Text too small," "clickable elements too close," and "content wider than screen" errors prevent mobile ranking. While these seem minor, **Google** suppresses mobile rankings for URLs with these issues.

Check issue volume trend. Growing mobile usability problems indicate neglected maintenance or recent design changes that broke mobile optimization. Declining issues suggest active maintenance.

Test mobile experience directly via **Google Search Console** URL inspection tool. The rendered mobile view reveals actual user experience — validate critical pages render correctly and conversion paths work on mobile.

## Security and Manual Actions

Review Security Issues report thoroughly. "Hacked content," "malware," and "deceptive pages" flags destroy trust immediately. Even resolved security issues within 6 months carry reputational risk with **Google** and users.

Check for "Phishing" or "Social engineering" flags. These severe trust violations take 12+ months to fully recover from even after resolution. Avoid domains with recent security issue history unless priced to reflect recovery timeline.

Verify HTTPS implementation via security details. Mixed content warnings, invalid certificates, or HTTPS-to-HTTP redirect chains create immediate technical debt requiring resolution.

## Link Profile Cross-Reference

Export links data from GSC and compare to third-party tools like **Ahrefs**. Significant discrepancies (>30% referring domain count difference) suggest either GSC data lag or link spam **Google** doesn't count. Investigate which explanation applies.

Analyze top linking sites for spam signals. If GSC shows top referring domains as PBNs or obvious spam, the site depends on low-quality links vulnerable to devaluation. Quality linking patterns show diverse, editorially placed links from relevant sites.

Check internal link data for site architecture insights. Domains with flat internal linking structures (every page linked equally) lack strategic topical authority building. Sites with hierarchical linking showing cornerstone content with 500+ internal links demonstrate sophisticated SEO.

## Enhancement Reports

Review FAQ, How-to, and other structured data implementation. Active rich results indicate technical sophistication and SERP visibility advantages. Missing enhancements on eligible content suggest optimization opportunities.

Check AMP validity if implemented. Broken AMP creates mobile discovery issues and ranking penalties. Unless you plan to maintain AMP, factor deprecation effort into acquisition planning.

Analyze breadcrumb implementation quality. Proper breadcrumb structured data improves SERP visibility and site architecture clarity. Missing breadcrumbs on large sites indicate technical debt.

## Red Flags That Kill Deals

Undisclosed manual actions are non-negotiable deal-breakers. Sellers withholding penalty information demonstrate bad faith; expect other undisclosed issues.

Traffic declining >20% year-over-year without clear recovery plan suggests algorithmic devaluation. Unless you have specific turnaround strategies, avoid assets in terminal decline.

Crawl error rates >5% indicate systematic technical problems requiring significant development investment. Factor remediation costs into valuation or walk away.

## FAQ

### Can sellers fake Google Search Console data?

Screenshot manipulation is possible but providing actual GSC access prevents this. Insist on read-only account access rather than screenshots. Use GSC's own export features to verify data authenticity against what sellers claim.

### What GSC access level do you need for due diligence?

Read-only "Restricted" access suffices for all due diligence needs. This permission level allows full data review without modification capability. Never accept less than Restricted access — "Associate" provides insufficient data visibility.

### How long should GSC historical data span?

16 months minimum to capture full year-over-year seasonal patterns plus 4 months buffer. Prefer 24 months when available to assess long-term trends and multiple seasonal cycles.

### Do all domains have Google Search Console data?

Only if the owner verified the property. Unverified domains have no GSC history. Absence of GSC data suggests either seller inexperience or deliberate avoidance. Both scenarios warrant extreme caution.

### Should GSC traffic match Google Analytics?

Not exactly. **Google Search Console** measures impressions and clicks from Google Search only. **Google Analytics** tracks all traffic sources and measures sessions. GSC clicks should represent 60-80% of GA's "Organic Search" traffic typically.

## Related Resources

Use GSC data to assess [google-link-devaluation-domain-transfer](google-link-devaluation-domain-transfer.html) risk. Combine findings with [google-ranking-factors-for-buyers](google-ranking-factors-for-buyers.html) analysis, and validate against [google-sandbox-acquired-domains](google-sandbox-acquired-domains.html) probability.