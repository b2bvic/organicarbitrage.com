---
title:: Google Analytics Audit for Website Buyers: Due Diligence Protocol for Traffic Verification
description:: Comprehensive GA audit methodology for acquisition due diligence including traffic source validation, engagement metric analysis, and bot traffic detection.
focus_keyword:: google analytics audit for buyers
category:: strategies
author:: Victor Valentine Romo
date:: 2026.02.08
---

# Google Analytics Audit for Website Buyers: Due Diligence Protocol for Traffic Verification

**Google Analytics** forms the evidentiary foundation for website acquisitions—traffic claims, engagement metrics, and conversion data all flow from GA. Sellers know buyers rely on GA, creating incentive to manipulate data through fake sessions, bot traffic, or tracking code alterations. Portfolio operators conducting due diligence must audit GA systematically to detect fraud before capital commits.

This protocol maps a comprehensive GA audit covering traffic source validation, engagement metric analysis, geographic distribution scrutiny, and technical verification to separate legitimate assets from inflated listings.

## Pre-Audit: Securing Proper GA Access

**Demand read-only property access, not screenshots:** Sellers often provide cherry-picked screenshots highlighting favorable metrics while hiding problematic data. Insist on read-only access to the actual GA property.

**How to grant read-only access:**
1. Seller navigates to **Admin > Property > Property User Management**
2. Seller adds your email address with "Read & Analyze" permissions (not "Edit")
3. You receive invitation email, accept, and gain full read access without ability to modify settings or create new views

**Red flag:** Seller refuses property access, claiming "privacy concerns" or "proprietary data." Legitimate sellers understand buyers need primary data. Refusal suggests the seller is hiding manipulation or doesn't actually control the property.

**Verification:** Once access granted, confirm the property ID matches the domain. Navigate to **Admin > Property Settings** and verify "Website URL" matches the listing domain. Sellers occasionally grant access to *different* properties with similar names to mislead buyers.

## Traffic Source Validation: Detecting Fake Sessions

**Navigate to: Acquisition > All Traffic > Channels**

**What to analyze:**

**Organic traffic dominance (50%+):** Content sites should derive 50-70% of traffic from organic search. Lower percentages suggest:
- Paid traffic dependency (check for undisclosed Google Ads spend)
- Social media reliance (Pinterest, Facebook traffic is volatile and doesn't transfer post-acquisition)
- Referral manipulation (fake referrals from PBNs or sketchy domains)

**Direct traffic scrutiny (warning threshold: 30%+):** "Direct" traffic includes:
- Users typing the domain directly into browsers
- Bookmarked visitors returning
- Misattributed traffic (bots, email without UTM parameters, apps)
- **Seller self-refreshing the site** to inflate sessions

Sites with 30-40%+ Direct traffic often have manipulated GA. Real sites with strong brand loyalty might reach 25% Direct, but exceeding this warrants investigation.

**Referral traffic audit:** Click into **Referral** channel. Examine top referrers. Red flags:
- Referrals from adult sites, foreign-language spam sites, or obvious link farms
- Referrals from domains with character strings like "ranksonic.info" or "buttons-for-website.com" (known referral spammers)
- Single referrer domain driving 20%+ of all traffic (suggests paid promotion or PBN manipulation)

**Social traffic patterns:**
- Pinterest and Facebook traffic is notoriously volatile. Sites depending on Pinterest for 30%+ of traffic face collapse risk when Pinterest algorithm changes or account suspensions occur.
- Organic social (unpaid shares) vs. paid social (Facebook Ads): Verify the seller isn't paying for social traffic that will evaporate post-acquisition.

**Paid search check:** If "Paid Search" shows zero traffic but seller claims they *never* ran Google Ads, cross-check with other evidence (Google Ads account existence, sudden traffic spikes coinciding with ad campaign timelines). Sellers sometimes run ads, then delete campaigns to hide paid dependency. For validation techniques, see [google-ads-data-validate-organic-traffic.html](google-ads-data-validate-organic-traffic.html).

## Engagement Metrics: Sniffing Out Bot Traffic

**Navigate to: Audience > Overview**

**Bounce rate analysis:**
- **Normal range:** 50-75% for content sites
- **Too low (under 40%):** Suggests fake engagement. Real users don't universally click through to multiple pages. Bounce rates under 40% indicate tracking code errors (double-firing page views) or bot scripts programmed to simulate engagement.
- **Too high (above 85%):** Suggests poor content-user fit, clickbait titles, or landing page experience issues. High bounce rates suppress ad viewability and revenue.

**Pages per session:**
- **Normal range:** 1.5-2.5 for most content sites
- **Too low (under 1.3):** Users land and exit immediately—signals weak internal linking, poor content relevance, or aggressive monetization (pop-ups, interstitials) driving exits.
- **Too high (above 4.0):** Unrealistic unless the site is a wiki, forum, or multi-step tool. High pages/session on simple blogs suggests bot scripts crawling multiple pages per session.

**Average session duration:**
- **Normal range:** 90-180 seconds (1.5-3 minutes)
- **Too low (under 60 seconds):** Users skim and exit—weak content depth or clickbait.
- **Too high (above 5 minutes):** Possible on tutorial sites, long-form journalism, or video-heavy pages. Suspicious on thin content sites—suggests bots or tracking errors.

**Correlation check:** Bounce rate, pages/session, and session duration should correlate logically:
- Low bounce rate + high pages/session + high duration = engaged audience (good)
- High bounce rate + low pages/session + low duration = disengaged audience (bad but realistic)
- Low bounce rate + low pages/session + low duration = **tracking error or bot traffic**

## Geographic Distribution: Validating Tier-1 Traffic

**Navigate to: Audience > Geo > Location**

**Tier classification:**
- **Tier 1:** US, UK, Canada, Australia, New Zealand, Western Europe (Germany, France, Scandinavia) — high CPMs, premium monetization
- **Tier 2:** Eastern Europe, Latin America, Middle East — moderate CPMs
- **Tier 3:** India, Pakistan, Philippines, Southeast Asia, Africa — low CPMs (30-50% of Tier 1)

**What to verify:**

**Tier-1 concentration (50%+):** Content sites monetizing through display ads or affiliates need Tier-1 traffic to generate claimed revenue. If GA shows 60% Tier-3 traffic but the seller claims $2,000/month ad revenue on 50,000 sessions, the math doesn't work (Tier-3 RPMs are $5-$10 vs. $15-$25 for Tier-1).

**Suspicious patterns:**
- **Uniform distribution across 30+ countries:** Real sites show uneven distribution—typically 40-70% from 2-3 core geos. Uniform distribution suggests bot traffic from VPN pools or click farms.
- **High traffic from unexpected geos:** A US-focused health blog shouldn't have 25% India traffic unless content explicitly targets Indian audiences. Mismatched geo distribution signals bought traffic or bot farms.

**Language alignment:** Click into **Audience > Geo > Language**. If the site publishes only English content but 30% of traffic reports Spanish or Hindi language browsers, investigate why non-English users are visiting. Possible explanations:
- Content ranks internationally (verify in Google Search Console for which countries)
- Referral spam or bot traffic
- VPN/proxy users masking true geography

## Device and Browser Validation: Spotting Automated Traffic

**Navigate to: Audience > Mobile > Overview**

**Device split:**
- **Normal range:** 50-70% mobile, 30-50% desktop (varies by niche—B2B sites skew desktop, lifestyle sites skew mobile)
- **Suspiciously uniform (exactly 50/50):** Real traffic shows variance. Precise 50/50 splits over extended periods suggest bot scripts programmed to simulate device diversity.

**Navigate to: Audience > Technology > Browser & OS**

**Browser diversity check:**
- Chrome (50-70%), Safari (15-25%), Firefox (5-10%), Edge (5-10%) is typical
- **Red flags:**
  - One browser dominates 90%+ of traffic (suggests automated scripts)
  - Obscure browsers (Opera Mini, UC Browser) dominate Tier-1 traffic (these browsers are common in Tier-3 geos—mismatched with claimed US/UK traffic)
  - High percentage of "Not Set" browser (indicates tracking errors or bots blocking user-agent strings)

**Screen resolution analysis:**
- **Navigate to: Audience > Technology > Screen Resolution**
- Real users exhibit diverse resolutions (1920×1080, 1366×768, 2560×1440, mobile resolutions)
- **Red flag:** 80%+ traffic from a single resolution suggests bot farms or click farms using identical device configurations

## Time-Based Traffic Patterns: Detecting Artificial Inflation

**Navigate to: Audience > Overview (set date range to 30-90 days, view hourly or daily traffic)**

**Hourly patterns:**
- Real sites show diurnal patterns (traffic peaks during waking hours in primary geo, dips overnight)
- **Red flag:** Flat traffic 24/7 with no variation—suggests bot scripts running continuously rather than human visitors following circadian rhythms

**Daily patterns:**
- Real sites show weekly patterns (weekday traffic differs from weekend traffic depending on niche)
- **Red flag:** Perfectly uniform traffic Monday-Sunday—suggests automated traffic generation

**Traffic spikes investigation:**
- Sudden spikes (50%+ day-over-day increase) should correlate with events:
  - Content going viral (check social referrals in Acquisition report)
  - Backlink acquisition (check referral sources)
  - Ranking improvements (verify in Google Search Console)
- **Red flag:** Unexplained spikes without corresponding referral or organic increases—suggests the seller bought traffic or injected fake sessions

**Decline patterns:**
- Declining traffic (20%+ month-over-month) over 3+ months signals:
  - Algorithm penalties (check Google Search Console for manual actions)
  - Competitor displacement (rankings dropped for key terms)
  - Link decay (backlinks removed or devalued)
  - Seasonal trends (verify historical yearly patterns)

For understanding how rankings affect traffic, see [google-ranking-factors-for-buyers.html](google-ranking-factors-for-buyers.html).

## Cross-Verification with Google Search Console

GA sessions should correlate with **Google Search Console** clicks (organic search traffic specifically).

**Navigate to: GSC > Performance > Search Results**

**Comparison protocol:**
1. In GA: **Acquisition > All Traffic > Channels**, note "Organic Search" sessions for trailing 30 days
2. In GSC: **Performance** tab, set date range to same 30 days, note total clicks
3. Calculate ratio: `GA Organic Sessions ÷ GSC Clicks`

**Normal range:** 0.8-1.5 (GA sessions should approximate GSC clicks, with slight discrepancies due to attribution differences and non-search organic sources like Google Discover)

**Red flags:**
- **Ratio above 2.0:** GA shows 2x more organic sessions than GSC clicks—suggests GA is inflated with fake sessions attributed to organic
- **Ratio below 0.5:** GA shows half the sessions GSC clicks indicate—suggests GA tracking is broken or the seller provided access to wrong property

**Keyword-level cross-check:**
- In GSC, export top 20 keywords by clicks
- In GA: **Acquisition > Campaigns > Organic Keywords** (requires GSC integration or manual inspection)
- Verify GA keyword traffic aligns with GSC click distribution. If GSC shows "best espresso machines" generated 5,000 clicks but GA doesn't list it in top 20 keywords, something's wrong.

For comprehensive GSC audit procedures, see [google-search-console-audit-before-buying.html](google-search-console-audit-before-buying.html).

## Revenue and Conversion Tracking Validation

**Navigate to: Admin > View > E-commerce Settings** (if applicable)

If the seller claims e-commerce revenue, verify Enhanced E-commerce tracking is enabled and configured correctly. Request transaction ID samples and cross-check against Stripe/PayPal dashboards.

**For ad revenue sites (AdSense, Ezoic, Mediavine):**
- GA doesn't natively track ad revenue, but sellers sometimes import it via custom dimensions or events
- Cross-check claimed ad revenue against ad network dashboards directly—never trust GA-imported revenue figures without independent verification

**For affiliate sites:**
- GA can track outbound affiliate clicks via event tracking, but not commissions
- Verify affiliate earnings independently through Amazon Associates, CJ, ShareASale dashboards
- High GA-tracked affiliate clicks but low affiliate earnings suggests traffic quality is poor (bots clicking but not converting)

## Technical GA Configuration Audit

**Verify tracking code integrity:**

**Navigate to: Admin > Property > Tracking Info > Tracking Code**

- Confirm tracking ID matches the site's live tracking code (view page source on the site, search for GA tracking ID)
- If IDs mismatch, the seller granted access to a *different* property with fabricated data

**Check for duplicate tracking codes:**
- View page source on 3-5 sample pages across the site
- Search for "gtag" or "analytics.js"
- Ensure only *one* GA tracking code appears per page. Duplicate tracking codes double-count pageviews, inflating sessions.

**Inspect filters and segments:**

**Navigate to: Admin > View > Filters**

- Check if seller applied filters that exclude bot traffic, internal traffic, or specific IP ranges
- Filters themselves aren't problematic, but verify they're reasonable (blocking datacenter IPs is normal; blocking 50% of traffic sources is suspicious)

**Navigate to: Admin > View > View Settings**

- Verify "Bot Filtering" is enabled (checkbox: "Exclude all hits from known bots and spiders")
- If disabled, GA data includes bot traffic—inflating session counts

**Session timeout settings:**
- Standard session timeout is 30 minutes
- If seller extended session timeout to 4+ hours, a single user can generate artificially low bounce rates and high session durations by leaving tabs open
- **Navigate to: Admin > Property > Tracking Info > Session Settings** to check

## Red Flags Summary: Indicators of GA Manipulation

| Metric | Normal Range | Red Flag |
|--------|--------------|----------|
| Direct traffic % | 15-25% | 30%+ |
| Bounce rate | 50-75% | <40% or >85% |
| Pages/session | 1.5-2.5 | <1.3 or >4.0 |
| Session duration | 90-180s | <60s or >300s |
| Tier-1 geo % | 50-70% | <40% |
| GA Organic ÷ GSC Clicks | 0.8-1.5 | >2.0 or <0.5 |
| Browser diversity | Chrome 50-70%, others mixed | One browser >90% |
| Traffic consistency | Daily/weekly variance | Flat 24/7 |

**When 2+ red flags appear:** Demand explanations. Legitimate sites occasionally exhibit one anomaly (e.g., high Direct traffic for strong brands), but multiple anomalies compound suspicion.

## Remediation: What to Do When You Detect Manipulation

**Scenario 1: Clear fraud (fake sessions, bot traffic, manipulated tracking):**
- Walk away. Don't negotiate—fraudulent sellers will fabricate new data to address your concerns. The asset isn't trustworthy.

**Scenario 2: Borderline issues (some bot traffic, minor tracking errors):**
- Negotiate 20-30% price reduction to account for true traffic being lower than claimed
- Request seller remediation (fix tracking errors, clean bot traffic) before closing
- Extend inspection period during escrow to verify fixes hold

**Scenario 3: Legitimate but misunderstood data:**
- High Direct traffic from strong brand recognition (verify via brand search volume in Google Keyword Planner)
- Geographic distribution reflects international content targeting (verify in GSC that other countries generate impressions)
- Seasonal traffic patterns (tourism sites, tax prep sites, holiday gift guides spike predictably)

Require seller to explain anomalies with supporting evidence before accepting their narrative.

## Post-Acquisition GA Monitoring: Ensuring Continuity

After asset transfer, monitor GA daily for first 30 days:

**Day 1-7:** Traffic typically dips 10-15% during DNS propagation and ranking reassessment. This is normal.

**Day 8-30:** Traffic should stabilize near pre-acquisition levels. If drops exceed 20%, investigate:
- Broken redirects (301s not implemented correctly)
- Hosting downtime (migrated to new host, server can't handle traffic)
- Tracking code errors (GA code didn't transfer correctly)
- Rankings dropped (check GSC for crawl errors, manual penalties)

**Ongoing (monthly):** Compare month-over-month traffic trends. Content sites should maintain stability or grow 5-10% monthly with active SEO efforts. Declines signal issues requiring attention.

For ranking and traffic recovery strategies, see [google-link-devaluation-domain-transfer.html](google-link-devaluation-domain-transfer.html).

## FAQ: GA Audits for Website Acquisitions

**Q: Can sellers fake GA data even if they grant me read-only access?**
A: Yes. They can inject fake sessions via modified tracking codes or bot traffic before you gain access. This is why cross-verification with GSC and independent traffic validation (SEO tools, test ad campaigns) is critical. For additional validation methods, see [google-ads-data-validate-organic-traffic.html](google-ads-data-validate-organic-traffic.html).

**Q: What if GA shows zero traffic for the last 7 days but seller claims tracking "broke temporarily"?**
A: Massive red flag. Either GA is actually broken (verify by checking page source for tracking code and testing real-time reporting), or the seller stopped generating fake traffic. Request server log analytics to verify real traffic exists. If seller can't provide, walk away.

**Q: Should I run my own GA property in parallel with the seller's during due diligence?**
A: Not practical—you'd need to inject your GA code into their live site, which sellers won't allow. Post-acquisition, install your own GA immediately to establish independent tracking baseline.

**Q: How do I verify the seller didn't grant access to a fake GA property?**
A: Cross-check GA property ID against the live site's tracking code (view page source, search for GA ID like "UA-XXXXXXXX-X" or "G-XXXXXXXXXX"). Matching IDs confirm you're viewing the correct property.

**Q: What's the minimum GA history I should require?**
A: 12 months. Seasonal traffic patterns only reveal with annual data. Sites with under 12 months of GA history either launched recently (risky due to Google sandbox effects) or deleted prior history (hiding problems).

Google Analytics audits for website acquisitions require read-only property access, traffic source validation to detect fake sessions and bot traffic, engagement metric analysis to spot tracking errors, geographic distribution scrutiny to verify claimed monetization potential, and cross-verification with Google Search Console to confirm organic traffic authenticity. Portfolio operators should treat multiple red flags (high Direct traffic, unnatural bounce rates, uniform geo distribution, GA/GSC ratio mismatches) as disqualifying fraud indicators rather than negotiable anomalies. Proper GA audits eliminate 40-50% of overvalued or fraudulent listings before capital deploys.