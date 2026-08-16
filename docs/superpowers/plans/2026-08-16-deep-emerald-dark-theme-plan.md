# Deep Emerald Luxury Dark Theme Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the IONITY website into a Deep Emerald luxury dark tech experience with #155B51 / #0C2E29 background, glowing neon mint lasers, ultra-modern glowing pill buttons, white typography, and removal of duplicate legacy sections.

**Architecture:** Update central CSS design tokens in `tokens.css`, apply comprehensive dark emerald overrides and glowing button/laser systems in `ionity-bilingual.css`, clean up legacy duplicate HTML in `index.html`, and verify via automated browser checks.

**Tech Stack:** HTML5, CSS3 (Custom Properties, Glassmorphism, SVG Filters, CSS Animations), Vanilla JS / jQuery, FullPage.js.

## Global Constraints

- Never modify `dir` on `<html>` dynamically (breaks FullPage.js).
- Ensure all text contrasts meet WCAG AA standards (Crisp White `#FFFFFF` and Mint Ice `#B3DDD6` on `#0C2E29`).
- Maintain FullPage.js structure and smooth transitions between sections.
- Ensure bidirectional support (Arabic RTL + English LTR).

---

### Task 1: Update Color Tokens in `tokens.css`

**Files:**
- Modify: `assets/css/tokens.css:1-48`

- [ ] **Step 1: Write updated tokens for Deep Emerald Dark Theme**

```css
:root {
  /* Colors — Deep Emerald Luxury Theme */
  --color-background: #0c2e29;
  --color-background-dark: #071f1b;
  --color-surface: #113f38;
  --color-surface-glass: rgba(17, 63, 56, 0.75);
  --color-text: #ffffff;
  --color-text-secondary: #b3ddd6;
  --color-text-tertiary: #7faaa3;

  /* Primary Brand & Neon Accents */
  --color-accent: #155B51;
  --color-accent-light: #1d7a6a;
  --color-accent-dark: #092823;
  --color-neon-mint: #00f5d4;
  --color-neon-cyan: #35edca;
  --color-accent-glow: rgba(0, 245, 212, 0.3);

  --color-border: rgba(0, 245, 212, 0.18);
  --color-dark: #071f1b;
  --color-dark-surface: #113f38;

  /* Typography */
  --font-primary: 'Inter', system-ui, -apple-system, sans-serif;
  --font-arabic: 'Tajawal', 'Cairo', system-ui, -apple-system, sans-serif;

  /* Logical Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 2rem;
  --spacing-lg: 4rem;
  --spacing-xl: 6rem;
  --spacing-2xl: 8rem;
  --spacing-section: clamp(4rem, 8vw, 8rem);

  /* Border Radius */
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 24px;
  --radius-xl: 50px;

  /* Transitions */
  --transition-fast: 0.15s ease;
  --transition-base: 0.3s ease;
  --transition-slow: 0.6s ease;
  --transition-smooth: 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  /* Layout */
  --container-max: 1280px;
  --container-wide: 1440px;
}
```

- [ ] **Step 2: Commit tokens.css**
```bash
git add assets/css/tokens.css
git commit -m "style: update design tokens for Deep Emerald luxury dark palette"
```

---

### Task 2: Remove Duplicate Legacy `whoSection` in `index.html`

**Files:**
- Modify: `index.html` (remove `<div class="whoSection">` and adjust navigation)

- [ ] **Step 1: Remove duplicate whoSection block from index.html**
Delete the second redundant team section block (`<div class="section fp-auto-height"><div class="whoSection">...</div></div>`) around line 788-870, preserving the clean team grid under the About Us container in `clientsSection`.

- [ ] **Step 2: Commit index.html cleanup**
```bash
git add index.html
git commit -m "refactor: remove legacy duplicate whoSection from index.html"
```

---

### Task 3: Overhaul Button Styling & UI Components in `ionity-bilingual.css`

**Files:**
- Modify: `assets/css/ionity-bilingual.css`

- [ ] **Step 1: Implement modern glowing pill buttons & cards**
Create modern pill buttons with gradient background, subtle neon mint borders, luminous box-shadow, and micro-animations on hover.

```css
/* ── Modern Glowing Pill Buttons ── */
.button a,
.btn,
.button,
button[type="submit"],
a.btn-primary {
    background: linear-gradient(135deg, #155B51 0%, #1d7a6a 100%) !important;
    color: #ffffff !important;
    border: 1px solid rgba(0, 245, 212, 0.4) !important;
    border-radius: 50px !important;
    padding: 14px 34px !important;
    font-weight: 700 !important;
    font-size: 1rem !important;
    letter-spacing: 0.5px !important;
    box-shadow: 0 4px 20px rgba(0, 245, 212, 0.22), 0 0 1px rgba(0, 245, 212, 0.5) !important;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1) !important;
    display: inline-flex !important;
    align-items: center !important;
    justify-content: center !important;
    gap: 10px !important;
    text-decoration: none !important;
}

.button a:hover,
.btn:hover,
.button:hover,
button[type="submit"]:hover,
a.btn-primary:hover {
    background: linear-gradient(135deg, #1d7a6a 0%, #00f5d4 100%) !important;
    color: #071f1b !important;
    border-color: #00f5d4 !important;
    transform: translateY(-3px) scale(1.02) !important;
    box-shadow: 0 8px 30px rgba(0, 245, 212, 0.45) !important;
}
```

- [ ] **Step 2: Commit button styles**
```bash
git add assets/css/ionity-bilingual.css
git commit -m "style: overhaul buttons with modern glowing glassmorphism and neon mint accents"
```

---

### Task 4: Enhance Glowing Neon Mint Laser Beams & Stats in `ionity-bilingual.css`

**Files:**
- Modify: `assets/css/ionity-bilingual.css`

- [ ] **Step 1: Add intense neon glow filters & styling for laser beams and stats**
Update beam stroke colors to `#00F5D4` & `#35EDCA` with multi-tier drop-shadows and white stat numbers with glowing highlights.

```css
/* ── Neon Mint Laser Animation & Glow ── */
.laser-background svg {
    mix-blend-mode: screen !important;
    filter: drop-shadow(0 0 12px #00f5d4) drop-shadow(0 0 30px rgba(0, 245, 212, 0.4)) !important;
}

.stat-number {
    color: #ffffff !important;
    font-size: 5.2rem !important;
    font-weight: 800 !important;
    text-shadow: 0 0 25px rgba(0, 245, 212, 0.5), 0 2px 10px rgba(0,0,0,0.5) !important;
}

.stat-text {
    color: #b3ddd6 !important;
    font-size: 1.1rem !important;
    font-weight: 600 !important;
    letter-spacing: 1.5px !important;
}
```

- [ ] **Step 2: Commit laser enhancements**
```bash
git add assets/css/ionity-bilingual.css
git commit -m "style: add neon mint laser glow effects and bright stat typography"
```

---

### Task 5: Master Deep Emerald Dark Theme Overrides

**Files:**
- Modify: `assets/css/ionity-bilingual.css`

- [ ] **Step 1: Apply seamless universal dark emerald background & text colors**
Set all sections, headers, sidebars, cards, and footers to the unified `#0C2E29` / `#113F38` palette with white text.

```css
/* Universal Deep Emerald Background */
body, html, #fullpage, .fp-section, .fp-slide,
.sliderSection, .whySection, .clientsSection, .websitesSection,
.premiumSection, .teamSection, .contactSection, .section, .wrapper, .muffin {
    background: #0c2e29 !important;
    background-image: none !important;
    color: #ffffff !important;
}

/* Headings & Text */
h1, h2, h3, h4, h5, h6,
.sliderSection h1, .whySection h1, .whySection h2, .whySection .title,
.websitesSection h1, .websitesSection .title,
.premiumSection h1, .premiumSection h2, .contactSection h1, .contactSection h2 {
    color: #ffffff !important;
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4) !important;
}

p, .subTitle, .description, .caption, li {
    color: #b3ddd6 !important;
}

/* Sidebar Glassmorphic */
.sidebar {
    background: rgba(12, 46, 41, 0.85) !important;
    backdrop-filter: blur(18px) !important;
    -webkit-backdrop-filter: blur(18px) !important;
}

.sidebar .nav a, .sidebar a {
    color: #ffffff !important;
}

.sidebar .nav li.active a, .sidebar .nav a:hover {
    color: #00f5d4 !important;
}

.sidebar .nav li.active::before,
.sidebar .nav li.active .dot,
.sidebar .nav li .dot.active {
    background: #00f5d4 !important;
    box-shadow: 0 0 12px #00f5d4 !important;
}
```

- [ ] **Step 2: Commit theme overrides**
```bash
git add assets/css/ionity-bilingual.css
git commit -m "style: apply unified Deep Emerald Luxury Dark theme across all sections"
```

---

### Task 6: Visual Testing, Full Verification & GitHub Deployment

**Files:**
- All modified files

- [ ] **Step 1: Test in Chrome DevTools MCP & capture screenshots**
Navigate to `http://localhost:8000/` and take full-page and section screenshots for visual review.

- [ ] **Step 2: Test Arabic RTL & English LTR language toggle**
Verify that all text, buttons, laser alignments, and sidebar mirror properly.

- [ ] **Step 3: Push final commits to GitHub**
```bash
git push origin main
```
