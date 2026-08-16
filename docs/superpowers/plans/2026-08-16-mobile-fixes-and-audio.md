# Mobile Optimization, UI Fixes, & Interactive Audio Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement pixel-perfect mobile arc layout for whySection, balance section spacing/typography, restore authentic 3D mobile popup menu, optimize touch SVG stroke drawing, and integrate an interactive audio soundscape controller.

**Architecture:** Use pure vanilla CSS media queries for mobile arc offsets and 3D popup animations, extend main.js touch & scroll handlers for instant mobile SVG stroke animation, and introduce a lightweight audio controller with localStorage mute toggle.

**Tech Stack:** HTML5, CSS3 Media Queries & 3D Transforms, JavaScript ES6 / jQuery, Web Audio API / HTML5 Audio.

---

### Task 1: Mobile `whySection` Arc Layout & Responsive Spacing
**Files:**
- Modify: `assets/css/ionity-bilingual.css`

- [ ] **Step 1: Add mobile media queries for whySection curved arc positioning**
  - Set circle width/height to 60px.
  - Set row 1 offset to 40px, rows 2 & 3 to 83px, and row 4 to 40px.
  - Scale and position `#bigCirclesSvg` at `top: 120px; width: 200px;`.
  - Adjust section margins, paddings, and font sizes across all sections.

- [ ] **Step 2: Verify in Chrome DevTools mobile viewport**
  - Verify layout matches the reference screenshot.

---

### Task 2: Restore Authentic 3D Mobile Popup Menu
**Files:**
- Modify: `index.html`
- Modify: `assets/css/ionity-bilingual.css`
- Modify: `assets/js/main.js`

- [ ] **Step 1: Ensure mobile popup menu HTML markup and close button exist**
- [ ] **Step 2: Add 3D rotateX transition styles for mobile popup menu in CSS**
- [ ] **Step 3: Wire hamburger click and close handlers in JS**

---

### Task 3: Interactive Audio Controller & Sound Toggle UI
**Files:**
- Create: `assets/js/audio-controller.js`
- Modify: `index.html`
- Modify: `assets/css/ionity-bilingual.css`
- Modify: `assets/js/main.js`

- [ ] **Step 1: Create `assets/js/audio-controller.js`**
  - Preload audio clips (`click.mp3`, `hover.mp3`, `switch.mp3`, `scrollShort.mp3`).
  - Implement `play(soundName)` with mute check and volume control.
  - Save mute state in `localStorage`.
- [ ] **Step 2: Add audio mute/unmute toggle button in `index.html` header**
- [ ] **Step 3: Connect interaction events (button clicks, slider changes, nav) to audio controller**

---

### Task 4: Touch-Optimized Mobile SVG Stroke Drawing
**Files:**
- Modify: `assets/js/main.js`

- [ ] **Step 1: Attach touchstart, touchmove, and resize listeners to dynamic SVG controller**
- [ ] **Step 2: Verify live drawing on mobile device emulation**

---

### Task 5: End-to-End Mobile & Desktop Verification & Git Push
- [ ] **Step 1: Test mobile viewport 375x812 in DevTools**
- [ ] **Step 2: Test audio toggle and sound playback**
- [ ] **Step 3: Commit and push changes to GitHub**
