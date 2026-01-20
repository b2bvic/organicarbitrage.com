# The Expired Domain Profit Calculator

**A Framework for Evaluating Aged Domain Acquisitions Before You Bid**

---

## The Problem

You buy a domain at auction because the metrics look good. DR 45, 400 referring domains, previous site had real traffic. You bid $500, win the auction, spend $2,000 rebuilding content. Six months later: nothing. Traffic never materialized. The backlinks were spam. The niche shifted. You're down $2,500 and half a year.

This happens because most operators evaluate domains on vanity metrics (domain rating, backlink count) instead of economic spread (acquisition cost vs. monetization value).

---

## The Mechanism

Profitable expired domain plays follow a calculable framework:

**Acquisition Cost** (auction price + restoration + content + links + time)
must be **3-5x lower than**
**Monetization Value** (traffic x RPM x 12-month projection)

Domain authority doesn't guarantee traffic recovery. Niche relevance, backlink quality, and monetization fit determine whether authority actually transfers.

The mechanism is spread analysis. If you can't model the spread before you bid, you're gambling.

---

## How to Use This Calculator

### Step 1: Input Acquisition Costs

Open the Google Sheet. Navigate to the "Acquisition Costs" tab.

| Field | What to Enter | Where to Find It |
|-------|--------------|------------------|
| **Auction Price (est.)** | Your maximum bid ceiling | GoDaddy Auctions, Dynadot, NameJet |
| **Registration/Transfer** | ~$15-40 depending on TLD | Registrar pricing |
| **Content Budget** | Cost to produce 5-10 articles | Your per-word rate x estimated word count |
| **Link Building Budget** | Cost for 3-5 niche edits or outreach | Your link acquisition cost per link |
| **Tool Allocation** | Monthly tool cost / articles produced | Ahrefs, Surfer, hosting, etc. |
| **Time Investment (hours)** | Research + setup + management hours | Estimate 10-20 hours for typical play |
| **Hourly Rate** | Your opportunity cost | Use consulting rate or $50-100 default |

**Formula:** `Total Acquisition Cost = Auction + Registration + Content + Links + Tools + (Hours x Rate)`

---

### Step 2: Input Domain Metrics

Navigate to the "Domain Evaluation" tab.

| Metric | What to Enter | Quality Threshold |
|--------|--------------|-------------------|
| **Domain Rating (Ahrefs)** | Current DR | 25+ for consideration, 35+ for strong plays |
| **Referring Domains** | Number of unique linking domains | 100+ minimum, check quality below |
| **Organic Traffic (historical)** | Peak monthly traffic before expiration | Archive.org + Ahrefs historical data |
| **Domain Age** | Years since original registration | 3+ years preferred |
| **Expiration Length** | How long the domain was expired | Under 12 months ideal, over 24 months risky |
| **Previous Niche** | What the old site covered | Must match or closely relate to your intended niche |

---

### Step 3: Backlink Quality Audit

The calculator includes a 10-point backlink audit. Score each item 0-10.

**Open Ahrefs > Backlinks > Referring Domains. Manually review top 50 linking domains.**

| Audit Item | Score 0-10 | Red Flags |
|------------|-----------|-----------|
| **Editorial placement rate** | % of links in article body vs. sidebar/footer | Under 30% editorial = weak profile |
| **Niche relevance** | % of linking sites in same/adjacent niche | Under 40% relevant = authority won't transfer cleanly |
| **Spam link ratio** | % of links from forums, blog comments, directories | Over 30% spam = penalty risk |
| **Anchor text distribution** | Natural vs. keyword-stuffed anchors | Over 50% exact match = manipulation signal |
| **Link source diversity** | Geographic and topical spread of linkers | Single country/language clusters = unnatural |
| **DR of linking domains** | Average DR of top 20 linkers | Average under DR 20 = low authority transfer |
| **Linking page traffic** | Do the linking pages get actual traffic? | Zero-traffic pages = likely PBN |
| **Link recency** | When were most links acquired? | All links pre-2020 with nothing recent = stale profile |
| **Toxic link detection** | Ahrefs/Semrush spam score | Over 10% toxic = disavowal work needed |
| **Manual penalty signals** | Check Archive.org for deindexing periods | Unexplained traffic drops = possible penalty history |

**Scoring:**
- 80-100 points: Strong profile, proceed with confidence
- 60-79 points: Acceptable, factor additional risk into model
- 40-59 points: Marginal, lower your max bid significantly
- Under 40 points: Walk away

---

### Step 4: Traffic Projection Model

Navigate to the "Traffic Projections" tab.

| Input | How to Estimate |
|-------|-----------------|
| **Historical peak traffic** | Ahrefs "Organic Traffic" historical chart |
| **Recovery rate** | Conservative: 20-30%, Moderate: 40-50%, Aggressive: 60-70% |
| **Time to recovery** | Conservative: 6-9 months, Moderate: 4-6 months, Aggressive: 2-4 months |
| **Traffic sustainability** | How long before decay? Use 24-36 months for evergreen niches |

**Formula:** `Projected Monthly Traffic = Historical Peak x Recovery Rate`

**Reality check:** Most expired domains recover 25-50% of peak traffic. Using 60%+ requires exceptional niche match and content investment.

---

### Step 5: Monetization Value Calculation

Navigate to the "Monetization" tab.

#### Option A: Display Ads

| Input | How to Estimate |
|-------|-----------------|
| **Ad Network** | AdSense ($3-8 RPM), Mediavine ($15-30 RPM), AdThrive ($20-40 RPM) |
| **Niche RPM** | Check niche benchmarks or use historical data from similar sites |
| **Qualification threshold** | Mediavine: 50K sessions/month, AdThrive: 100K pageviews/month |

**Formula:** `Monthly Ad Revenue = (Projected Traffic x RPM) / 1000`

#### Option B: Affiliate Revenue

| Input | How to Estimate |
|-------|-----------------|
| **Affiliate program** | Amazon (1-4%), high-ticket ($20-200 CPA), SaaS (20-40% recurring) |
| **Conversion rate** | Amazon: 3-8%, high-ticket: 0.5-2%, SaaS: 1-3% |
| **Average commission** | Check program terms |

**Formula:** `Monthly Affiliate Revenue = Projected Traffic x Conversion Rate x Average Commission`

#### Option C: Lead Generation

| Input | How to Estimate |
|-------|-----------------|
| **Lead value** | What will you sell leads for? ($5-200 depending on vertical) |
| **Conversion rate** | Form fills as % of traffic (typically 1-5%) |

**Formula:** `Monthly Lead Revenue = Projected Traffic x Conversion Rate x Lead Value`

**Use whichever monetization model fits your niche. Calculate 12-month and 24-month revenue projections.**

---

### Step 6: Spread Calculation

Navigate to the "Spread Analysis" tab. This is the decision point.

| Metric | Formula |
|--------|---------|
| **Total Acquisition Cost** | Sum of all Step 1 inputs |
| **12-Month Revenue** | Monthly monetization value x 12 |
| **24-Month Revenue** | Monthly monetization value x 24 |
| **12-Month Spread** | 12-Month Revenue / Total Acquisition Cost |
| **24-Month Spread** | 24-Month Revenue / Total Acquisition Cost |
| **Break-Even Months** | Total Acquisition Cost / Monthly Revenue |

**Decision Thresholds:**

| 12-Month Spread | Decision |
|----------------|----------|
| Under 2x | Do not pursue |
| 2x - 3x | Marginal, only pursue if backlink audit scored 80+ |
| 3x - 5x | Solid play, proceed with standard execution |
| Over 5x | Strong opportunity, consider accelerated content investment |

---

### Step 7: Risk Adjustment

The calculator applies risk multipliers to your spread calculation.

| Risk Factor | Multiplier |
|------------|-----------|
| **Algorithm volatility** | Niche recently hit by updates = 0.7x, stable niche = 1.0x |
| **Monetization compliance** | Ad-reliant = 0.9x, diversified = 1.0x, lead gen = 0.95x |
| **Competition trend** | Increasing = 0.8x, stable = 1.0x, decreasing = 1.1x |
| **Content decay rate** | Evergreen niche = 1.0x, fast-moving niche = 0.75x |

**Formula:** `Risk-Adjusted Spread = Base Spread x (Algorithm x Monetization x Competition x Decay)`

**Final decision based on risk-adjusted 12-month spread:**
- Under 2x: Pass
- 2-3x: Proceed with caution
- Over 3x: Execute

---

## Case Studies

### Case Study 1: $400 Acquisition to $9,200 Revenue (23x ROI)

**Domain:** Home improvement blog, DR 38, 400 referring domains, expired 6 months

**Acquisition Costs:**
- Auction price: $180
- Content (8 articles, AI + human edit): $150
- Link outreach (3 niche edits): $70
- Tool/hosting allocation: $0 (absorbed into existing stack)
- Time investment: 6 hours at $0 (self-executed)
- **Total: $400**

**Domain Metrics:**
- Historical peak traffic: 2,800/month
- Backlink audit score: 82/100 (clean profile, relevant niches)
- Niche match: Exact (home improvement to home improvement)

**Projections vs. Actuals:**
- Projected recovery rate: 50% = 1,400/month
- Actual traffic: 1,200/month (43% recovery)
- Projected RPM (Mediavine): $28
- Actual RPM: $28

**Revenue:**
- Months 1-4: $0 (building traffic, below Mediavine threshold)
- Months 5-18: $650/month average
- **Total 18-month revenue: $9,200**

**Spread Analysis:**
- Calculator projected: 7x ROI at 18 months
- Actual: 23x ROI
- Why the outperformance: Traffic exceeded projections after Month 8 as additional keywords ranked

---

### Case Study 2: $1,200 Acquisition to $0 Revenue (Total Loss)

**Domain:** Personal finance blog, DR 42, 350 referring domains, expired 8 months

**Acquisition Costs:**
- Auction price: $850
- Content (4 articles, AI + human edit): $350
- **Total: $1,200**

**What Went Wrong:**

1. **Skipped backlink audit.** I checked DR but didn't review link sources. 60% were forum spam and blog comment links from 2018.

2. **Didn't verify niche monetization.** Assumed personal finance = high RPM. The specific subtopics (debt repayment, credit score basics) had $18 RPM, not the $35 I modeled.

3. **Ignored penalty signals.** Archive.org showed traffic dropped from 3,000/month to 0 in 2019, then domain expired. Likely manual penalty.

**Result:**
- Traffic never exceeded 300/month
- Ranked for 6 keywords, all positions 8-12
- Monthly revenue: $5.40
- Sold on Flippa for $180 after 8 months
- **Net loss: $1,020**

**Lesson:** The calculator only works if you input accurate data. Skipping the backlink audit turned a "probable winner" into a guaranteed loser.

---

### Case Study 3: $600 Acquisition to $12,000 Flip (20x ROI)

**Domain:** Outdoor recreation niche, DR 31, 180 referring domains, expired 4 months

**Acquisition Costs:**
- Auction price: $220
- Content (6 articles): $280
- Link outreach (2 niche edits): $100
- **Total: $600**

**Execution:**
- Niche match: Exact (camping gear reviews)
- Content strategy: Targeted 6 long-tail product review keywords
- Monetization: Amazon Associates + one high-ticket affiliate (outdoor gear retailer)
- Traffic recovery: 800/month by Month 4

**Revenue:**
- Months 1-3: $0 (building)
- Months 4-12: $420/month average (Amazon + high-ticket affiliate)
- Total 12-month revenue: $3,780

**Exit:**
- Listed on Empire Flippers at Month 12
- Sold for $12,000 (28x monthly revenue multiple)
- Buyer was aggregator building outdoor niche portfolio

**Spread Analysis:**
- Calculator projected: 4.5x hold ROI, 8x flip ROI
- Actual flip ROI: 20x
- Why the outperformance: High multiple due to clean traffic curve and diversified affiliate revenue

---

## Bid Ceiling Calculation

Before entering any auction, calculate your maximum bid.

**Formula:**
```
Max Bid = (Projected 12-Month Revenue / Target Spread) - (Content Budget + Link Budget + Time Cost)
```

**Example:**
- Projected 12-month revenue: $4,800
- Target spread: 4x
- Content budget: $300
- Link budget: $100
- Time cost: $200

```
Max Bid = ($4,800 / 4) - ($300 + $100 + $200)
Max Bid = $1,200 - $600
Max Bid = $600
```

If the auction goes above $600, walk away. The spread no longer justifies the play.

---

## Red Flags: When to Pass

Walk away from any domain that triggers these signals:

| Red Flag | Why It Matters |
|----------|---------------|
| **Backlink audit under 60 points** | Authority won't transfer reliably |
| **Expired over 24 months** | Backlink value decays, harder to recover |
| **Niche mismatch** | Building finance content on a cooking domain = no authority transfer |
| **Traffic dropped before expiration** | Suggests penalty or algorithm hit, not natural expiration |
| **Mostly nofollow links** | DR doesn't correlate with actual link value |
| **Single country/language links** | Limits traffic potential, suggests manipulation |
| **Over 30% spam links** | Cleanup cost exceeds value |
| **No Archive.org history** | Can't verify what the site was |
| **Previous owner used black hat SEO** | Residual penalty risk |
| **Auction price exceeds max bid** | Spread doesn't justify the play |

---

## Post-Acquisition Checklist

Once you win the auction, execute in this order:

**Week 1: Setup**
- [ ] Transfer domain to your registrar
- [ ] Point DNS to hosting
- [ ] Install WordPress (or your CMS)
- [ ] Set up Google Search Console
- [ ] Submit disavowal file for any toxic links identified in audit
- [ ] Create sitemap and submit to GSC

**Week 2-4: Content Foundation**
- [ ] Publish 3-5 articles matching old domain niche
- [ ] Target keywords the old site ranked for (check Ahrefs historical data)
- [ ] Implement internal linking between new articles
- [ ] Add schema markup (Article, FAQ where relevant)

**Month 2-3: Link Reclamation**
- [ ] Export all backlinks from Ahrefs
- [ ] Identify links pointing to 404 pages
- [ ] Redirect 404s to relevant new content (301)
- [ ] Contact webmasters with dead links, request update to new URL
- [ ] Monitor GSC for indexing progress

**Month 3-6: Monetization**
- [ ] Apply for ad network once traffic threshold met
- [ ] Add affiliate links to commercial intent content
- [ ] Set up email capture for lead gen plays
- [ ] Track RPM/conversion rates against projections

**Month 6+: Optimization**
- [ ] Compare actual traffic vs. projections
- [ ] Adjust content strategy based on what's ranking
- [ ] Scale what works, cut what doesn't
- [ ] Monitor for algorithm impacts

---

## Access the Google Sheets Calculator

The interactive calculator includes:
- Pre-built formulas for all calculations above
- Conditional formatting that highlights risk areas
- Historical data input fields for 10 domains
- Portfolio view to compare multiple opportunities
- Break-even timeline visualization
- Bid ceiling auto-calculation

**[Link to Google Sheets template included in your download email]**

---

## Next Steps

1. Open the calculator
2. Pull metrics for a domain you're considering
3. Complete the backlink audit
4. Run the spread calculation
5. If spread exceeds 3x, set your max bid and enter the auction
6. If spread is under 3x, walk away and find the next opportunity

The calculator forces discipline. It surfaces deals you should pursue and kills deals you should avoid.

Run the numbers first. Every time.

---

*Questions about using the calculator? Reply to your download email. I read every response.*
