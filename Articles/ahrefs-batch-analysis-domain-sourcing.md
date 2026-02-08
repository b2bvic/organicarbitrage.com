---
title:: Ahrefs Batch Analysis for Domain Sourcing — Filtering Thousands of Expired Domains
description:: How to use Ahrefs batch analysis tools to filter thousands of expired domains efficiently. Covers bulk DR checks, traffic validation, and red flag detection.
focus_keyword:: Ahrefs batch analysis expired domains
category:: strategies
author:: Victor Valentine Romo
date:: 2026.02.07
---

# Ahrefs Batch Analysis for Domain Sourcing — Filtering Thousands of Expired Domains

Expired domain sourcing at scale requires filtering thousands of candidates to identify the 2-3% worth acquiring. Manual analysis doesn't work when dealing with 5,000+ domains from auction lists, drop-catch services, or scraper tools. **Ahrefs** batch analysis features turn that 5,000-domain haystack into a 100-domain shortlist in under an hour. The technique separates domains with legitimate traffic history and clean backlink profiles from penalized sites, spam networks, and worthless registrations that tools like **ExpiredDomains.net** flag as opportunities.

Batch analysis operates on the principle that most expired domains fail on a small set of disqualifying criteria. Domain Rating below 20, zero referring domains, toxic backlink profiles, or traffic patterns that flatline before expiration all signal domains not worth deeper investigation. Batch tools apply these filters simultaneously across thousands of domains, surfacing only the candidates that pass all initial screens.

## Why Manual Domain Analysis Doesn't Scale

Domain acquisition economics depend on processing volume efficiently. If evaluating a single domain takes 15 minutes and you process 20 domains per day, you'll analyze 400 domains per month. At a 2% hit rate, that's 8 acquisitions per month. Operators running batch analysis process 5,000 domains in a day and extract 100 candidates worth deeper investigation — 12.5x the throughput.

### The Cost Arithmetic of Manual Evaluation

Manual domain evaluation follows a predictable workflow. Open **Ahrefs Site Explorer**, check DR, examine backlink profile, review anchor text distribution, check **Wayback Machine** for historical content, validate traffic in **Ahrefs** organic search report, scan **Google Search Console** if available from seller. Per domain: 12-18 minutes depending on complexity.

At $200/hour consulting rate or $50/hour VA rate, manual evaluation costs $40-$60 per domain for consultant-level work or $10-$15 for delegated work. Batch workflows cost $1-2 per domain in tool fees alone, no labor. The spread: 10-30x cost reduction through automation.

### False Positive Rates from Automated Scrapers

Automated domain scraper tools (**ExpiredDomains.net**, **DomCop**, **Spamzilla**) generate high false positive rates because their filters optimize for recall, not precision. They flag any domain meeting minimum criteria (DR 10+, one backlink, listed in auction) to avoid missing opportunities. The result: lists of 10,000 domains where 95% are unusable.

Batch analysis inverts the paradigm. Apply aggressive filters that eliminate 90% of candidates immediately, then manually investigate the remaining 10%. False negatives — missing a good domain — matter less than false positives when you're processing thousands of candidates. The next batch will surface similar opportunities.

## Setting Up Ahrefs Batch Analysis Infrastructure

**Ahrefs** offers multiple batch processing interfaces. The **Batch Analysis** tool (under "More" in top navigation) accepts up to 200 URLs or domains per batch. The API allows larger batches for users with API access. For operators without API access, 200-domain batches repeated sequentially handle most sourcing needs.

### Preparing Domain Lists for Import

Expired domain lists arrive in various formats. Auction site CSVs, scraper tool exports, drop-catch service reports. Normalize before import:

1. Strip all URL prefixes (http://, https://, www.). **Ahrefs Batch Analysis** expects bare domains: `example.com`, not `https://www.example.com`
2. Remove duplicates. Most sourcing lists contain duplicate entries from multiple auctions or overlapping data sources
3. Validate domain format. Malformed entries (incomplete TLDs, spaces in domain names) cause batch errors
4. Segment by TLD if working with international domains. Batch analysis for .com domains vs. .de domains requires different filtering logic due to DR/backlink distribution differences across geographic regions

Export a single-column CSV with one domain per line. Name it with the source and date: `godaddy-auction-2026-02-07.csv`. This naming convention allows tracking batch performance over time and correlating acquisition success rates with specific domain sources.

### Batch Analysis Tool Configuration

**Ahrefs Batch Analysis** returns multiple metrics per domain. Configure columns before running the batch:

**Essential columns:**
- Domain Rating (DR)
- Referring Domains (RD)
- Organic Traffic (estimated monthly visitors)
- Organic Keywords (number of ranking keywords)
- Ahrefs Rank (global traffic ranking)
- Top Country (where most traffic originates)

**Advanced columns for filtering:**
- Traffic Value (estimated AdWords cost equivalent of organic traffic)
- Dofollow RDs (filters out domains with only nofollow backlinks)
- Spam Score (if available, or use **Moz** spam score integration)
- First Seen / Last Seen (backlink profile age indicators)

Configuring all columns upfront prevents re-running batches. Export the full dataset once, filter multiple ways in spreadsheet software.

### API-Based Batch Processing for High Volume

Operators processing 10,000+ domains per week benefit from **Ahrefs API** access. The API removes the 200-domain limit on batch analysis and enables programmatic filtering.

**Basic API workflow:**

```bash
# Pseudocode — actual implementation requires API key and library
for domain in domain_list:
    metrics = ahrefs_api.get_metrics(domain)
    if metrics['DR'] >= 30 and metrics['organic_traffic'] >= 500:
        shortlist.append(domain)
```

API users can layer filters progressively — first pass eliminates domains below DR 20, second pass checks backlink toxicity, third pass validates traffic trends over time. Each progressive filter operates only on domains that passed previous filters, reducing API call volume and cost.

The [programmatic SEO at scale guide](/articles/programmatic-seo-at-scale.html) covers API infrastructure for operators managing portfolio-level domain sourcing.

## Core Filtering Criteria for Expired Domain Batches

Batch analysis succeeds through aggressive initial filtering. Five core filters eliminate 85-90% of domains immediately, leaving only candidates worth manual review.

### Domain Rating and Referring Domain Thresholds

**Domain Rating** below 20 indicates weak backlink profiles that won't transfer meaningful authority to new content. Exceptions exist — newly registered domains or domains from low-competition niches — but when processing thousands of candidates, aggressive DR thresholds save time.

**Minimum DR threshold: 25.** Domains below DR 25 rarely justify acquisition cost plus development investment unless purchased at registration price ($8-15) rather than auction premium.

**Referring Domains (RD) threshold: 50+.** DR can be artificially inflated through a few high-DR links. RD count validates that authority comes from diverse sources, not a single powerful backlink. Domains with DR 40 but only 10 referring domains likely have one anomalous backlink and little real authority.

**Dofollow RD percentage: 70%+.** If most backlinks are nofollow, the domain accumulated links from user-generated content, blog comments, or other low-value sources. Quality domains earn editorial links, which are predominantly dofollow.

### Organic Traffic and Keyword Validation

Expired domains with zero organic traffic in the 12 months before expiration suggest the domain was penalized, deindexed, or never ranked. **Ahrefs** estimates organic traffic based on ranking keywords and position. Domains showing traffic in historical data but zero traffic in recent months before expiration signal penalties or catastrophic ranking losses.

**Minimum organic traffic threshold: 100 visitors/month.** This filters out domains that technically rank for keywords but generate negligible traffic because they rank in positions 15-30 for low-volume terms.

**Keyword diversity threshold: 20+ ranking keywords.** Domains ranking for only 3-5 keywords depend on those specific terms for all traffic. If those keywords are competitive or if you don't plan to maintain that exact content, the traffic won't transfer. Domains ranking for 50+ keywords indicate topical coverage that's resilient to individual keyword volatility.

**Commercial keyword percentage.** Examine what keywords drove traffic. If 80% of traffic came from informational queries with $0.10 CPC and no affiliate monetization, the traffic has limited commercial value. Prioritize domains where 30%+ of traffic came from commercial or transactional keywords with CPC above $1.

### Backlink Profile Quality Signals

DR and RD counts measure quantity. Backlink quality requires deeper filtering to avoid spam networks and PBN domains.

**Anchor text distribution.** Natural link profiles show 60-80% branded or naked URL anchors, 15-30% topical anchors, and under 5% exact-match commercial anchors. Domains with 40%+ exact-match commercial anchors ("buy cheap viagra online") were likely built as spam sites or participated in link schemes. **Ahrefs** batch analysis doesn't directly export anchor distribution, but you can flag domains with suspicious DR-to-traffic ratios for manual anchor review. A domain with DR 50 but only 50 organic visitors/month likely has manipulated anchors.

**Referring domain authority distribution.** Examine the DR of linking domains. If 80% of backlinks come from DR 5-15 sites, the domain sits in a low-quality link neighborhood. Prioritize domains where 30%+ of backlinks come from DR 40+ referring domains.

**Link velocity and decay patterns.** Domains that gained 500 backlinks in one month then lost 400 over the next six months were part of a PBN or link scheme that collapsed. **Ahrefs** "New" and "Lost" backlink metrics reveal these patterns. Stable link profiles show gradual link acquisition over years with minimal link decay.

**Geographic link diversity.** Domains with backlinks exclusively from one country (unless it's a local business domain) or one language often participated in link networks. Natural link profiles for English-language content show backlinks from US, UK, Canada, Australia, and European English-speaking sources.

### Traffic Trend Analysis Pre-Expiration

Domains expire for reasons. Understanding *why* a domain expired determines whether it's an opportunity or a liability.

**Gradual traffic decline.** Organic traffic that declined steadily over 12-24 months before expiration suggests the owner stopped maintaining the site, content became outdated, or competitors outranked them. These are prime candidates — the domain has legitimate history, the traffic was real, and the decline represents neglect rather than penalty.

**Sudden traffic drop.** Organic traffic that fell 80%+ in one month then remained flat until expiration signals an algorithm penalty, manual action, or deindexing event. Acquiring penalized domains requires understanding the penalty (thin content, unnatural links, scraped content) and whether it's recoverable. Most operators avoid penalized domains because recovery is speculative.

**Traffic flatline.** Domains showing zero traffic for 6+ months before expiration were either never active or suffered catastrophic loss long before expiration. Without recent traffic data, you can't validate that the backlink profile will transfer rankings to new content.

**Expiration timing correlation.** Did traffic disappear *then* the domain expired, or did the domain expire *then* traffic disappeared? If traffic persisted until expiration date then vanished, the domain was accidentally not renewed — high-value opportunity. If traffic disappeared months before expiration, the owner chose not to renew because the asset had no value — lower-quality opportunity.

## Advanced Filtering: Red Flags and Disqualifiers

Beyond core metrics, several red flags automatically disqualify domains regardless of DR or traffic.

### Penalty and Manual Action Detection

**Google Safe Browsing check.** Domains flagged by **Google Safe Browsing** for malware, phishing, or deceptive content carry penalties that persist even after ownership transfer. Check every shortlisted domain through `transparencyreport.google.com/safe-browsing/search`. Flagged domains are automatic disqualifiers unless you're willing to request reconsideration (success rate under 30%).

**Wayback Machine content analysis.** Examine historical content via `archive.org`. Domains that previously hosted adult content, gambling, pharmaceuticals, or payday loans — even if DR and backlink profile look clean — carry reputation risk. **Google** has long memory. Domains associated with former YMYL spam rarely rank well for new content even after cleanup.

**Manual action history.** Some sellers disclose manual action history. Most don't. If the seller provides **Google Search Console** access, check the Manual Actions report. Any domain with current or past manual actions should be avoided unless the action was fully resolved and traffic recovered (which **Ahrefs** traffic trends would show).

### PBN and Link Network Footprints

Private blog networks leave footprints. Domains that participated in PBNs — even if they weren't penalized — rarely rank well under new ownership because their backlink profiles were built for manipulation, not authority transfer.

**Shared hosting IP ranges.** Domains hosted on the same IP range as hundreds of other domains, particularly if those domains interlink, participated in PBNs. Check IP history through **Ahrefs** or **Moz**. Multiple domains on 192.168.x.x ranges or cheap shared hosting IPs indicate network participation.

**Template and CMS fingerprints.** PBNs often use the same WordPress theme, plugins, or CMS configuration across networks. **BuiltWith** or **Wappalyzer** reveals technology footprints. Domains showing identical technology stacks to dozens of other expired domains likely came from managed PBNs.

**Interlink patterns.** Examine the backlink profile for clusters of domains that all link to each other. If Domain A links to Domain B, Domain B links to Domain C, and Domain C links back to Domain A, they're part of a link wheel. Disqualify any domain showing circular link patterns.

### Geographic and Language Mismatches

Domains with strong backlink profiles in one language but content history in another language create mismatch risk. A domain with 200 German backlinks but English content history will struggle to rank for English queries because **Google** associates the domain authority with German-language content.

**Hreflang conflicts.** Domains that used hreflang tags to serve different languages per geography but are now being repurposed for single-language content confuse **Google**. If the domain historically served French content to French users and English content to US users, repurposing it as English-only creates expectation mismatches.

**ccTLD targeting.** Country-code TLDs (.co.uk, .de, .fr) are geotargeted by default. Acquiring a .de domain for English-language US-targeted content fights **Google**'s geographic signals. Restrict ccTLD acquisitions to content targeting that specific country.

## Exporting and Post-Processing Batch Results

**Ahrefs Batch Analysis** exports results as CSV. Post-processing in spreadsheet software applies secondary filters too complex for the batch tool.

### Multi-Tier Filtering in Spreadsheets

Import the batch CSV into **Google Sheets** or **Excel**. Apply filters progressively:

**Tier 1 filter (automatic disqualifiers):**
- DR < 25: delete
- RD < 50: delete
- Organic traffic < 100: delete
- Organic keywords < 20: delete

Tier 1 typically eliminates 70-80% of domains.

**Tier 2 filter (quality signals):**
- Traffic Value < $100: flag for review (may still be valuable if monetization strategy differs)
- Ahrefs Rank > 500,000: flag (very low global traffic)
- Top Country is not target market: flag

Tier 2 reduces remaining domains by another 50%.

**Tier 3 filter (manual review triggers):**
- Calculate DR-to-traffic ratio: DR / monthly organic traffic. Ratios above 1.0 suggest inflated DR relative to actual ranking power — flag for anchor text review
- Check for domains ranking for brand queries only. If 80% of keywords include the old brand name, traffic won't transfer unless you maintain the brand
- Identify domains with declining traffic trends (compare current traffic to 6-month-ago traffic via **Ahrefs** historical data export)

After all filters, a 5,000-domain batch typically yields 50-150 domains worth manual investigation.

### Automating Recurring Batch Workflows

Operators sourcing domains continuously benefit from workflow automation. Set up weekly or monthly batch processes:

1. Aggregate all new expired domain lists from auctions, drop-catch services, scraper tools
2. Deduplicate against previously analyzed domains (maintain a master exclusion list)
3. Run **Ahrefs Batch Analysis** on new domains
4. Apply Tier 1 and Tier 2 filters automatically via spreadsheet scripts
5. Email shortlist for manual review

**Google Apps Script** can automate the filtering and emailing steps. Template:

```javascript
// Pseudocode for automated filtering
function filterDomains() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Batch Results');
  const data = sheet.getDataRange().getValues();
  const filtered = data.filter(row => row[1] >= 25 && row[2] >= 50 && row[3] >= 100);
  // Email filtered results to acquisition team
}
```

This automation converts batch sourcing from a manual weekly task to a system that runs on autopilot, surfacing only qualified candidates.

## Integrating Batch Analysis with Full Due Diligence

Batch analysis identifies candidates. Full due diligence validates acquisition decisions.

### When to Escalate from Batch to Manual Analysis

Domains passing all batch filters deserve 30-60 minutes of manual investigation before purchase:

**Backlink profile deep dive.** Export the full backlink list from **Ahrefs**. Examine the top 50 referring domains manually. Verify they're real sites with real content, not PBN shells or link farm networks. Check that anchor text distribution is natural.

**Wayback Machine content review.** Don't just check that content existed — read it. Was the content high-quality editorial, thin affiliate pages, or scraped content? **Google** remembers content quality even after domain ownership changes.

**SERP position validation.** Search for 5-10 of the top-ranking keywords the domain historically ranked for. Where does the old content appear now (if indexed)? If the domain still ranks position 3-10 for those keywords despite being expired, its authority is transferring. If it dropped from page one entirely, the expiration may have triggered deindexing.

**Competitor overlap analysis.** Who else ranks for the keywords this domain targeted? If competitors are DR 70+ brands, acquiring a DR 30 expired domain won't displace them. If competitors are DR 20-40 independent publishers, the expired domain's authority might capture rankings.

The [website acquisition due diligence checklist](/articles/website-acquisition-due-diligence-checklist.html) covers full investigation protocols.

### Batch Analysis ROI Calculation

Track batch analysis performance to optimize filtering criteria over time:

**Metrics to track per batch:**
- Total domains analyzed
- Domains passing Tier 1 filter (% of total)
- Domains passing Tier 2 filter (% of Tier 1)
- Domains escalated to manual review (% of Tier 2)
- Domains acquired (% of manual review)
- Average acquisition cost
- Average traffic transferred post-acquisition
- Revenue per acquisition in first 90 days

A well-tuned batch analysis process shows:
- 10-20% pass rate Tier 1
- 40-60% pass rate Tier 2
- 20-30% acquisition rate from manual review
- Net result: 1-3% of initial batch gets acquired

If acquisition rate from manual review falls below 10%, filters are too aggressive and missing opportunities. If acquisition rate exceeds 50%, filters are too loose and wasting time on manual review of marginal candidates.

## Case Example: Processing a 3,200-Domain GoDaddy Auction List

An operator sourcing domains for a portfolio of affiliate sites exported the weekly **GoDaddy** expired domain auction list: 3,200 domains.

**Batch analysis process:**

1. Cleaned and deduplicated list → 2,890 unique domains
2. Split into 15 batches of 192 domains each (stayed under 200-domain limit)
3. Ran **Ahrefs Batch Analysis** on all batches over 90 minutes
4. Applied Tier 1 filters (DR 25+, RD 50+, traffic 100+, keywords 20+) → 412 domains remaining
5. Applied Tier 2 filters (traffic value $100+, top country = US) → 89 domains remaining
6. Manual review of 89 domains → 23 qualified candidates
7. Full due diligence on 23 candidates → 7 acquired

**Results:**

- Total time investment: 6 hours (batch processing + manual review + due diligence)
- Average acquisition cost: $420 per domain
- Total acquisition spend: $2,940
- Average monthly traffic per domain (first 90 days): 890 visitors
- Average RPM: $32
- Monthly revenue from 7 domains: ~$200
- Annualized revenue: ~$2,400
- Payback period: 14.7 months

The batch analysis process enabled evaluating 3,200 domains and acquiring 7 traffic-generating assets in one week of part-time work. Manual analysis at 15 minutes per domain would have required 800 hours to evaluate the same list — infeasible for independent operators.

## FAQ

### Can Ahrefs batch analysis detect Google penalties on expired domains?

**Ahrefs** doesn't directly flag penalties, but traffic trends reveal them. Domains penalized by **Google** show sudden 70-90% traffic drops that persist for months before expiration. Combine traffic trend analysis with **Google Safe Browsing** checks and **Wayback Machine** content review to infer penalty likelihood. Domains with clean traffic trends, gradual decline, and no Safe Browsing flags are unlikely to carry penalties.

### What's the minimum Ahrefs plan required for batch analysis?

**Ahrefs Lite** ($99/month) includes the Batch Analysis tool with the 200-domain limit. The tool is identical across all plan tiers — Standard, Advanced, and Enterprise plans don't unlock additional batch features. API access (available on Standard and above) enables unlimited batch sizes but requires scripting. For most operators processing under 5,000 domains per month, Lite is sufficient.

### How often should domain sourcing batches be run?

Frequency depends on sourcing volume and acquisition budget. Operators targeting 4-8 domain acquisitions per month should run weekly batches. High-volume portfolio builders processing 50+ acquisitions per quarter benefit from daily batches to catch premium domains before they sell. Auction sites like **GoDaddy** and **NameJet** refresh weekly, making weekly batch cadence optimal for auction-focused sourcing.

### Should batch analysis include domains with declining traffic?

Yes, if the decline is gradual and recent (within 12 months). Declining traffic from content staleness or competitor displacement is reversible through content updates and SEO investment. Exclude domains with sudden drops (algorithm penalties) or flatline traffic (long-term abandonment). The [aged domain backlink audit guide](/articles/aged-domain-backlink-audit.html) covers how to assess recoverability of declining domains.

### What batch size is most efficient for processing large domain lists?

**Ahrefs** allows up to 200 domains per batch. Process in 150-domain batches to leave margin for errors or resubmissions. Larger batches (approaching 200) occasionally time out or fail to process all domains. Smaller batches (under 100) waste time on repeated tool interaction. 150 domains per batch balances speed and reliability. For lists exceeding 1,000 domains, split across multiple sessions to avoid fatigue-induced filtering errors.
