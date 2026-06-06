# YorubaFluent — Project Handoff Document
**Last updated:** June 2026  
**Built by:** Olutosin Gideon Akinwumi + Claude  
**Domain:** yorubafluent.com  
**Wix site:** Original Wix Studio site (with yorubafluent.com connected)  
**GitHub:** https://github.com/Olutosing/yorubafluent  
**GitHub Pages:** https://olutosing.github.io/yorubafluent/

---

## What This Site Is

YorubaFluent is a Yoruba language learning platform by Olutosin Gideon Akinwumi. It offers:
- A custom landing page
- A blog (Grain Archive-inspired editorial style)
- Vocabulary lessons (100 words app)
- 1-on-1 bookings
- A school/members area with plans & pricing

---

## Architecture Overview

```
yorubafluent.com  →  Wix Studio (controls all routing)
     │
     ├── Home page  →  GitHub Pages iframe embed
     │                 (https://olutosing.github.io/yorubafluent/)
     │
     ├── Blog       →  Wix native blog (custom archive page — TO BUILD)
     ├── Bookings   →  Wix Bookings (native)
     ├── Plans      →  Wix Plans & Pricing (native)
     ├── Members    →  Wix Members Area (native)
     ├── Signup     →  Wix Members signup popup
     └── Login      →  Wix Members login popup
```

**Why GitHub Pages for the landing page?**  
The landing page is built as a self-contained HTML file and hosted on GitHub Pages. It is embedded into the Wix Home page via an "Embed site" element. This means:
- All edits happen in the repository, not in Wix
- Push to GitHub → site updates automatically (1–2 min delay)
- Full design control without Wix constraints

---

## File Structure

```
/newgermansite/
├── index.html              ← Landing page (deployed to GitHub Pages)
├── yorubafluent.html       ← Local working copy of the landing page
├── Flegrei-Yoruba.otf      ← Extended Flegrei font with Yoruba diacritics
├── Flegrei.otf             ← Original Flegrei font (source)
├── colors_and_type.css     ← Original design system tokens (reference)
├── Design System.html      ← Visual design system reference page
├── HANDOFF.md              ← This document
├── font-test.html          ← Font test page (development only)
└── .gitignore              ← Excludes old/, lesson.css, DS_Store etc.
```

---

## Design System

### Fonts
| Font | Role | Source |
|------|------|--------|
| Plus Jakarta Sans | Body, headings, UI | Google Fonts |
| Flegrei-Yoruba | Wordmark, display accents | Custom extended OTF (in repo) |

> **Flegrei-Yoruba.otf** is an extended version of the original Flegrei font,  
> modified to include Yoruba diacritic characters:  
> Ẹ/ẹ, Ọ/ọ, Ṣ/ṣ + combining acute (U+0301) and grave (U+0300) marks.

### Color Tokens
| Token | Hex | Use |
|-------|-----|-----|
| `--bg` | `#FDFDFD` | Page background |
| `--ink` | `#212121` | Primary text |
| `--ink-muted` | `#636363` | Secondary text |
| `--ink-mid` | `#767676` | Labels, UI chrome |
| `--ink-faint` | `#BDBDBD` | Dividers, disabled |
| `--card-bg` | `#F5F5F5` | Card backgrounds |
| `--teal` | `#0F827A` | Vocabulary surface, primary CTA |
| `--teal-deep` | `#0A5C56` | Teal hover state |
| `--coral` | `#E07A5F` | Lessons surface, secondary |
| `--coral-deep` | `#C45E44` | Coral hover state |
| `--gold` | `#FFB300` | Shared accent, eyebrow ticks |

### Border Radius
- **0** everywhere (sharp corners)
- **999px** for pill badges/buttons only

### Motion
| Token | Value | Use |
|-------|-------|-----|
| `--ease` | `cubic-bezier(0.4,0,0.2,1)` | Standard transitions |
| `--ease-overshoot` | `cubic-bezier(0.34,1.56,0.64,1)` | Card hover spring |
| `--dur-fast` | `150ms` | Hover colours |
| `--dur-normal` | `280ms` | Page transitions |

---

## Landing Page — What's Built

**File:** `index.html` (also `yorubafluent.html` locally)  
**Live URL:** https://olutosing.github.io/yorubafluent/  
**Embedded in:** Wix Home page via "Embed site" element

### Sections
1. **Nav** — Logo (Flegrei) + pill buttons (Home/Blog/About) + hamburger menu on mobile
2. **Hero** — Teal background, Flegrei wordmark, "By Olutosin Akinwumi" byline, tagline, Enter School + Read the Blog CTAs. Ghost Ẹ character in background.
3. **Features** — Two side-by-side cards: "Your First 100 Words" (teal) + "Freebies" (coral)
4. **Blog preview** — 2-column photo grid, 4 posts (placeholder images for now)
5. **Marquee divider** — Continuously scrolling "Ẹ kaabọ · Welcome · Begin"
6. **Footer** — "Yoruba / Fluent" wordmark (Flegrei), nav links, social links, copyright

### Key CSS Features
- Flegrei font embedded as base64 (works in iframe without external hosting)
- Noise texture overlay on hero
- Card hover: `translateY(-5px)` + border turns gold + deeper shadow
- Hamburger menu animates to X on click
- Marquee animation: 14s linear infinite
- Wordmark breaks to two lines on mobile (< 600px)
- All links use `target="_top"` to break out of the Wix iframe

### Current Link Mapping
| Button | Destination |
|--------|-------------|
| Enter School | `yorubafluent.com/members-area/my/my-bookings` |
| Read the Blog | `yorubafluent.com/blog` |
| Start here (100 Words) | `yorubafluent.com/members-area/my/my-bookings` |
| Get freebies | `yorubafluent.com/vocabularies` |
| Blog pill | `yorubafluent.com/blog` |
| About pill | `yorubafluent.com/plans-pricing` |

---

## Wix Studio Setup — What's Done

### Dev Mode (Velo)
- **global.css** added with:
  - Full design token `:root` variables
  - Signup/Login popup CSS (`#POPUPS_ROOT` selectors)
  - Wix native button + input overrides (`.wixui-button`, `.wixui-text-input`)
  - Typography overrides for Wix rich text elements

### Home Page
- Blank page with "Embed site" element pointing to GitHub Pages URL
- Stretched to full width, height set to 2500px
- Stretch button applied for responsive behaviour

### Wix Native Pages Available
| Page | Status |
|------|--------|
| Blog | Exists — needs custom archive page design |
| Signup (Custom) | Exists — popup CSS applied |
| Login (Custom) | Exists — popup CSS applied |
| Plans & Pricing | Exists — needs design system applied |
| Book Online | Exists — Wix Bookings native |
| Booking Calendar | Exists — Wix Bookings native |
| Members Area | Exists — Wix native |
| Vocabularies | Exists — needs design system applied |
| About | DOES NOT EXIST — needs to be created |
| Freebies | DOES NOT EXIST — needs to be created |

---

## GitHub Repository

**Repo:** https://github.com/Olutosing/yorubafluent (public)  
**Branch:** main  
**Deployed via:** GitHub Pages → serves `index.html` from root

### Workflow for making changes
```bash
# 1. Edit yorubafluent.html locally (working copy)
# 2. Copy to index.html
cp yorubafluent.html index.html
# 3. Stage and commit
git add index.html
git commit -m "describe the change"
git push
# 4. Wait ~1 minute for GitHub Pages to update
# 5. Wix embed auto-reflects the change
```

---

## What Still Needs To Be Done

### Immediate (before launch)
- [ ] **Site Styles on original Wix site** — set colors (teal, coral, gold, bg, ink) and typography (Plus Jakarta Sans) in Site Styles
- [ ] **Upload Flegrei-Yoruba.otf** to original Wix site font library
- [ ] **Connect yorubafluent.com** to original Wix site (disconnect from any other site first)
- [ ] **Mobile Wix editor** — set embed height for mobile view (~3500px, content stacks to single column)
- [ ] **Password protect site** until ready to launch

### Design — Native Pages
- [ ] **Redesign Plans & Pricing page** using YorubaFluent design system in Wix editor
- [ ] **Redesign Vocabularies page** — will host the 100 Words app
- [ ] **Create About page** — brief bio, mission, Olutosin's background
- [ ] **Create Freebies page** — downloadable word lists, phrase cards
- [ ] **Style masterPage nav + footer** to match the landing page (pill buttons, Flegrei logo, same structure)

### Major Builds
- [ ] **Custom blog archive page** — Grain Archive-style photo grid fed by Wix Blog API via Velo backend. Architecture: Velo `.jsw` backend fetches posts → page code sends to HTML embed via postMessage → custom HTML renders in design system
- [ ] **100 Words flashcard app** — self-contained HTML embed on the Vocabularies page. Interactive flashcard game teaching the first 100 Yoruba words. Adapts the existing lesson-renderer.js + quiz.js system into YorubaFluent design system
- [ ] **Individual blog post pages** — style via Dev Mode CSS to match design system (Flegrei title, correct typography scale, teal accent)

### Content
- [ ] Replace placeholder blog post images with real photos
- [ ] Write real blog post titles and excerpts
- [ ] Add real social media URLs (Instagram, X, YouTube, TikTok) to footer
- [ ] Add actual Freebies content (PDFs, word lists)

### Technical
- [ ] Test all links work correctly after domain connection
- [ ] Test signup/login flow end to end
- [ ] Test booking flow end to end
- [ ] Verify Wix Payments is configured for Plans & Pricing
- [ ] Add Open Graph meta tags to index.html for social sharing
- [ ] Add favicon to Wix site

---

## Notes on Design Decisions

**Why no border radius?**  
The design system uses 0 border radius everywhere except pill badges. This gives the site a sharp, editorial, typographic feel consistent with the Grain Archive reference. Only gender/category badges use 999px (full pill).

**Why Flegrei only for display?**  
Flegrei is used exclusively for the wordmark and large display text. Yoruba diacritics (Ẹ, Ọ, Ṣ) were not in the original font — the extended Flegrei-Yoruba.otf was built specifically for this project using fonttools.

**Why GitHub Pages for the landing page?**  
Gives full design control and version history. Changes are made locally (or with Claude), pushed to GitHub, and Wix auto-reflects them. The alternative (pasting code directly into Wix) loses version control and makes iteration painful.

**Why two surfaces (Teal vs Coral)?**  
Teal (`#0F827A`) is the vocabulary/school surface. Coral (`#E07A5F`) is the lessons/content surface. Gold (`#FFB300`) is the shared accent that connects both. This dual-surface system allows for clear visual hierarchy between content types.
