# IONITY Light Theme Design Spec
Date: 2026-08-15

## Color System
- Background: #ffffff
- Surface: #f5f5f5
- Text Primary: #1a1a1a
- Text Secondary: #555555
- Accent (Brand): #155B51
- Accent Light: #1d7a6a
- Accent Glow: rgba(21,91,81,0.12)
- Border: #e0e0e0

## Sidebar
- Transparent with backdrop-filter: blur(12px)
- Left border: 3px solid rgba(21,91,81,0.3)
- Links: #1a1a1a, hover: #155B51

## Section Backgrounds
- Remove ALL dark gradients
- All sections -> background: #ffffff

## Laser SVG
- Start from screen EDGE (x=0)
- Two beams: #155B51 and #1d7a6a
- mix-blend-mode: multiply (works on white bg)
- glow filter stdDeviation=10

## Files
- Modify: assets/css/tokens.css
- Modify: assets/css/ionity-bilingual.css
- Modify: index.html (SVG paths only)
- DO NOT TOUCH: muffin.css, bootstrap.css, JS files
