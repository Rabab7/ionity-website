# Design Specification: Deep Emerald Luxury Dark Theme & UI Overhaul

**Date:** 2026-08-16  
**Status:** Approved by User  
**Theme:** Deep Emerald Dark (`#155B51` / `#0C2E29` base + `#00F5D4` Neon Mint Glow + Crisp White Typography)

---

## 1. Overview & Objectives

Transform the IONITY website into a cohesive, high-end, luxury tech experience featuring:
1. **Primary Color Palette:** Deep Emerald (`#155B51` to `#0C2E29`) as the universal dark background with glassmorphic cards (`#113F38`) and crisp white typography (`#FFFFFF` & `#B3DDD6`).
2. **Neon Mint Laser Animation:** Vibrant glowing laser beams (`#00F5D4` & `#35EDCA`) originating outside the viewport with multi-stage glow filters and drop-shadows.
3. **Ultra-Modern Button System:** Replaced dated blocky buttons with glowing glassmorphic pill buttons, animated gradient borders, smooth hover transitions, and directional arrows.
4. **Section Cleanup:** Removed the legacy duplicate `whoSection` at the bottom of the page, unifying all company description and team avatars under the "من نحن (Who We Are)" container in `clientsSection`.

---

## 2. Color System & Design Tokens (`tokens.css`)

```css
:root {
  /* Deep Emerald Luxury Palette */
  --color-background: #0C2E29;
  --color-background-dark: #071F1B;
  --color-surface: #113F38;
  --color-surface-glass: rgba(17, 63, 56, 0.75);
  --color-border: rgba(0, 245, 212, 0.18);
  
  /* Brand Accents */
  --color-accent: #155B51;
  --color-accent-light: #1D7A6A;
  --color-neon-mint: #00F5D4;
  --color-neon-cyan: #35EDCA;
  --color-accent-glow: rgba(0, 245, 212, 0.35);

  /* Typography */
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #B3DDD6;
  --color-text-muted: #7FAAA3;
}
```

---

## 3. UI Component Enhancements

### A. Modern Glowing Buttons (`.btn`, `.button`, `a.btn`)
- **Shape:** Sleek pill radius (`50px`), `14px 32px` padding.
- **Background:** Gradient `linear-gradient(135deg, #155B51 0%, #1D7A6A 100%)` with `1px solid rgba(0, 245, 212, 0.4)`.
- **Glow & Shadow:** `box-shadow: 0 4px 20px rgba(0, 245, 212, 0.2)`.
- **Hover State:** `transform: translateY(-2px)`, `box-shadow: 0 8px 30px rgba(0, 245, 212, 0.45)`, border lightens to `#00F5D4`.

### B. Laser Stats & Glowing Shadow Effects (`clientsSection`)
- **Beams:** Dual animated SVG paths with stroke colors `#00F5D4` and `#35EDCA`.
- **Glow Effect:** SVG Gaussian blur + CSS filter `drop-shadow(0 0 10px #00F5D4) drop-shadow(0 0 25px rgba(0, 245, 212, 0.45))`.
- **Stats Typography:** Large numbers (`18`, `650+`, `250,000`) styled in bright white `#FFFFFF` with neon mint subtitle highlights.

### C. Sidebar & Navigation Mirroring
- Glassmorphic translucent dark emerald container (`rgba(12, 46, 41, 0.85)` + `backdrop-filter: blur(16px)`).
- Active section indicator in neon mint `#00F5D4`.
- Text links in crisp white `#FFFFFF` hovering to `#00F5D4`.

---

## 4. DOM & HTML Structural Fixes (`index.html`)

1. **Delete Duplicate Team Section:** Remove `<div class="whoSection">...</div>` (lines 788-870).
2. **Refine Navigation Anchors:** Ensure `#whoPage` and navigation links map directly to the consolidated "من نحن" team section.
3. **Verify SVG Filters & Blend Modes:** Set blend modes to `screen` / `lighten` for high contrast on dark emerald background.

---

## 5. Verification Plan

1. **Visual Regression Testing:** Use `chrome-devtools-mcp` to capture full-page desktop and mobile screenshots.
2. **Bilingual Validation:** Test language switcher (Arabic RTL ↔ English LTR) to ensure layout alignment and font rendering.
3. **FullPage.js Validation:** Verify vertical section navigation and smooth scrolling without scrollbar interference.
4. **Git Sync:** Commit and push changes directly to GitHub repository.
