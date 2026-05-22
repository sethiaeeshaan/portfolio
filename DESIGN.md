---
name: Deep Graphite & Electric Indigo
---

# Portfolio Website — Design System

> Extracted from the **Stitch MCP** project: *Portfolio Website*
> Design Theme: **Deep Graphite & Electric Indigo**
> Color Mode: **Dark** · Device: **Desktop**

---

## Brand & Style

The design system is engineered for a high-impact personal portfolio that balances technical rigor with premium aesthetics. The style is **Modern-Minimalist with Glassmorphic accents**, heavily influenced by the high-fidelity environments of modern developer tools.

The brand personality is **confident, precise, and sophisticated**. It avoids unnecessary decoration in favor of structural clarity, using subtle glow effects and 1px "ghost" borders to define space. The emotional response should be one of "effortless power"—suggesting an engineer who handles complex backend architecture with the same precision seen in the interface.

### Visual Principles

- **Extreme Contrast:** Near-black backgrounds paired with crisp white typography.
- **Subtle Depth:** Use of backdrop blurs and semi-transparent layers to suggest a physical stack of components.
- **Technical Texture:** Subtle grid backgrounds and monospaced accents to lean into the engineering focus.

---

## Color Palette

The palette is rooted in a **pure dark mode** ethos. The primary canvas is a deep, neutral black, allowing the "Electric Indigo" primary and "Cyan" secondary colors to function as high-impact signals for calls-to-action and critical highlights.

### Core Brand Colors

| Role | Token | Value |
|------|-------|-------|
| **Primary** | `primary` | `#c3c0ff` |
| **Primary Container** | `primary-container` | `#635bff` |
| **On Primary** | `on-primary` | `#1d00a5` |
| **On Primary Container** | `on-primary-container` | `#fefaff` |
| **Inverse Primary** | `inverse-primary` | `#4c42e9` |
| **Secondary** | `secondary` | `#a2e7ff` |
| **Secondary Container** | `secondary-container` | `#00d2fd` |
| **On Secondary** | `on-secondary` | `#003642` |
| **On Secondary Container** | `on-secondary-container` | `#005669` |
| **Tertiary** | `tertiary` | `#c4c0ff` |
| **Tertiary Container** | `tertiary-container` | `#6860ec` |
| **On Tertiary** | `on-tertiary` | `#2000a4` |
| **On Tertiary Container** | `on-tertiary-container` | `#fefaff` |

### Surface & Background Colors

| Role | Token | Value |
|------|-------|-------|
| **Background** | `background` | `#121315` |
| **Surface** | `surface` | `#121315` |
| **Surface Deep** | `surface-deep` | `#08090A` |
| **Surface Raised** | `surface-raised` | `#111111` |
| **Surface Dim** | `surface-dim` | `#121315` |
| **Surface Bright** | `surface-bright` | `#38393a` |
| **Surface Container (Lowest)** | `surface-container-lowest` | `#0d0e0f` |
| **Surface Container (Low)** | `surface-container-low` | `#1b1c1d` |
| **Surface Container** | `surface-container` | `#1f2021` |
| **Surface Container (High)** | `surface-container-high` | `#292a2b` |
| **Surface Container (Highest)** | `surface-container-highest` | `#343536` |
| **Surface Variant** | `surface-variant` | `#343536` |
| **Surface Tint** | `surface-tint` | `#c3c0ff` |

### Text & Content Colors

| Role | Token | Value |
|------|-------|-------|
| **On Background** | `on-background` | `#e3e2e3` |
| **On Surface** | `on-surface` | `#e3e2e3` |
| **On Surface Variant** | `on-surface-variant` | `#c7c4d8` |
| **Text Muted** | `text-muted` | `#888888` |
| **Inverse Surface** | `inverse-surface` | `#e3e2e3` |
| **Inverse On Surface** | `inverse-on-surface` | `#303032` |

### Border & Outline Colors

| Role | Token | Value |
|------|-------|-------|
| **Outline** | `outline` | `#918fa1` |
| **Outline Variant** | `outline-variant` | `#464555` |
| **Border Subtle** | `border-subtle` | `rgba(255, 255, 255, 0.08)` |

### Utility & State Colors

| Role | Token | Value |
|------|-------|-------|
| **Error** | `error` | `#ffb4ab` |
| **On Error** | `on-error` | `#690005` |
| **Error Container** | `error-container` | `#93000a` |
| **On Error Container** | `on-error-container` | `#ffdad6` |
| **Electric Glow** | `electric-glow` | `rgba(99, 91, 255, 0.15)` |

### Fixed Colors

| Role | Token | Value |
|------|-------|-------|
| **Primary Fixed** | `primary-fixed` | `#e2dfff` |
| **Primary Fixed Dim** | `primary-fixed-dim` | `#c3c0ff` |
| **On Primary Fixed** | `on-primary-fixed` | `#0f0069` |
| **On Primary Fixed Variant** | `on-primary-fixed-variant` | `#321ed2` |
| **Secondary Fixed** | `secondary-fixed` | `#b4ebff` |
| **Secondary Fixed Dim** | `secondary-fixed-dim` | `#3cd7ff` |
| **On Secondary Fixed** | `on-secondary-fixed` | `#001f27` |
| **On Secondary Fixed Variant** | `on-secondary-fixed-variant` | `#004e5f` |
| **Tertiary Fixed** | `tertiary-fixed` | `#e3dfff` |
| **Tertiary Fixed Dim** | `tertiary-fixed-dim` | `#c4c0ff` |
| **On Tertiary Fixed** | `on-tertiary-fixed` | `#110069` |
| **On Tertiary Fixed Variant** | `on-tertiary-fixed-variant` | `#392bbc` |

### Color Usage Guidelines

- **Primary & Secondary:** Used exclusively for interactive elements, progress indicators, and subtle radial gradients that anchor sections.
- **Surface Strategy:** A "stepped" dark gray approach. Backgrounds are `#08090A`, while cards and navigation elements use `#111111` with a semi-transparent alpha to allow for glassmorphism.
- **Accents:** Tertiary purple is reserved for "special" states like hover effects or code-block highlights to add depth to the brand's visual spectrum.

---

## Typography

The typographic system prioritizes **legibility and technical authority**.

### Font Families

| Role | Font | Usage |
|------|------|-------|
| **Headlines** | Geist | Sharp, modern Swiss-style headings |
| **Body** | Inter | Exceptional readability in dark mode |
| **Labels / Code** | JetBrains Mono | Tags, skills, metadata — reinforces technical persona |

### Type Scale

| Token | Font | Size | Weight | Line Height | Letter Spacing |
|-------|------|------|--------|-------------|----------------|
| `display-hero` | Geist | 72px | 700 | 80px | -0.04em |
| `display-hero-mobile` | Geist | 40px | 700 | 44px | -0.03em |
| `headline-lg` | Geist | 32px | 600 | 40px | -0.02em |
| `headline-md` | Geist | 24px | 600 | 32px | -0.01em |
| `body-lg` | Inter | 18px | 400 | 28px | 0em |
| `body-md` | Inter | 16px | 400 | 24px | 0em |
| `label-mono` | JetBrains Mono | 14px | 500 | 20px | 0.05em |
| `caption` | Inter | 12px | 500 | 16px | 0.02em |

### Typographic Rules

- Apply **generous tracking** (letter-spacing) to uppercase labels and captions.
- Use **tight tracking** on large display headings for a "compact" premium feel.
- Ensure all body text uses at least **1.5× line height** to prevent fatigue in dark mode.

---

## Spacing & Layout

The layout follows a **Fixed-Width Centered Grid** for desktop to ensure content remains digestible and premium.

### Spacing Tokens

| Token | Value |
|-------|-------|
| `base` | 8px |
| `section-gap-desktop` | 160px |
| `section-gap-mobile` | 80px |
| `container-max-width` | 1200px |
| `gutter` | 24px |
| `margin-safe` | 32px |

### Border Radius

| Token | Value |
|-------|-------|
| `sm` | 0.125rem (2px) |
| `DEFAULT` | 0.25rem (4px) |
| `md` | 0.375rem (6px) |
| `lg` | 0.5rem (8px) |
| `xl` | 0.75rem (12px) |
| `full` | 9999px |

### Layout Guidelines

- **Grid Model:** 12-column grid with 24px gutters. Content is strictly aligned to the grid to maintain an "engineered" appearance.
- **Vertical Rhythm:** A base-8 spacing system. Use large vertical gaps (160px+) between sections to allow the design to "breathe" and create a high-end feel.
- **Grid Background:** Implement a subtle 1px repeating CSS grid (32px cells) across the background to provide a sense of structure and depth.
- **Mobile Reflow:** For mobile devices, collapse the grid to a single column, reduce section margins to 32px, and scale down display headings significantly.

---

## Elevation & Depth

Depth is **not** created with traditional shadows, but through **Tonal Layering and Glassmorphism**.

| Level | Usage | Surface | Additional |
|-------|-------|---------|------------|
| **Level 0** | Background | `#08090A` | Subtle grid pattern + occasional electric blue "blobs" at 5% opacity |
| **Level 1** | Cards / Containers | `#111111` | `backdrop-filter: blur(12px)` + 1px solid `rgba(255, 255, 255, 0.08)` border |
| **Level 2** | Active / Hover | Slightly lighter | Increased border opacity + soft glow using primary indigo at 10–15% opacity |

> [!TIP]
> Avoid heavy shadows. If used, they should be extremely diffused and color-tinted with the secondary accent color.

---

## Shapes

The shape language is **Soft (Level 1)**, leaning toward sharp to maintain a professional, architectural feel.

| Context | Radius | Usage |
|---------|--------|-------|
| **Base** | 4px | Buttons, input fields, small tags |
| **Large** | 8px | Project cards, experience containers |
| **Zero** | 0px | Decorative structural lines, section dividers |

Interactive elements should transition smoothly between states using a **200ms linear-out** duration.

---

## Components

### Hero
Centered or split-layout with a **Display Hero** heading. Use a "linear-style" gradient on the text (White → Gray). Include a primary CTA with a soft glow effect.

### Buttons
- **Primary:** Solid `#635BFF` background with white text. High-contrast, no shadow.
- **Secondary:** Ghost style — 1px border, transparent background, blur effect on hover.
- **Monospace Tags:** Using `label-mono`, framed in small rounded boxes for technology stacks (e.g., "Node.js", "GraphQL").

### Experience (Timeline)
A vertical 1px line (Indigo gradient) with "nodes" representing timeframes. Company logos should be monochrome and only turn full-color on hover.

### Project Cards
Feature a "Glass-Card" style. The background of the card should be semi-transparent with a heavy backdrop blur. On hover, the 1px border should animate to the `primary-container` color (`#635BFF`).

### Contact
A minimal form using 1px "bottom-only" borders for input fields to mimic a technical blueprint. Large, bold "Get in touch" headline using `headline-lg`.

---

## CSS Custom Properties Reference

```css
:root {
  /* ── Brand Colors ── */
  --color-primary: #c3c0ff;
  --color-primary-container: #635bff;
  --color-on-primary: #1d00a5;
  --color-on-primary-container: #fefaff;
  --color-inverse-primary: #4c42e9;

  --color-secondary: #a2e7ff;
  --color-secondary-container: #00d2fd;
  --color-on-secondary: #003642;
  --color-on-secondary-container: #005669;

  --color-tertiary: #c4c0ff;
  --color-tertiary-container: #6860ec;
  --color-on-tertiary: #2000a4;
  --color-on-tertiary-container: #fefaff;

  /* ── Surfaces ── */
  --color-background: #121315;
  --color-surface: #121315;
  --color-surface-deep: #08090A;
  --color-surface-raised: #111111;
  --color-surface-dim: #121315;
  --color-surface-bright: #38393a;
  --color-surface-container-lowest: #0d0e0f;
  --color-surface-container-low: #1b1c1d;
  --color-surface-container: #1f2021;
  --color-surface-container-high: #292a2b;
  --color-surface-container-highest: #343536;
  --color-surface-variant: #343536;
  --color-surface-tint: #c3c0ff;

  /* ── Text ── */
  --color-on-background: #e3e2e3;
  --color-on-surface: #e3e2e3;
  --color-on-surface-variant: #c7c4d8;
  --color-text-muted: #888888;
  --color-inverse-surface: #e3e2e3;
  --color-inverse-on-surface: #303032;

  /* ── Borders ── */
  --color-outline: #918fa1;
  --color-outline-variant: #464555;
  --color-border-subtle: rgba(255, 255, 255, 0.08);

  /* ── Utility ── */
  --color-error: #ffb4ab;
  --color-on-error: #690005;
  --color-error-container: #93000a;
  --color-on-error-container: #ffdad6;
  --color-electric-glow: rgba(99, 91, 255, 0.15);

  /* ── Typography ── */
  --font-headline: 'Geist', sans-serif;
  --font-body: 'Inter', sans-serif;
  --font-mono: 'JetBrains Mono', monospace;

  /* ── Spacing ── */
  --spacing-base: 8px;
  --spacing-section-gap-desktop: 160px;
  --spacing-section-gap-mobile: 80px;
  --spacing-container-max-width: 1200px;
  --spacing-gutter: 24px;
  --spacing-margin-safe: 32px;

  /* ── Border Radius ── */
  --radius-sm: 0.125rem;
  --radius-default: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-xl: 0.75rem;
  --radius-full: 9999px;
}
```

---

> **Source:** Stitch MCP · Project: *Portfolio Website* (`projects/2000797790877163190`)
> **Design System:** Deep Graphite & Electric Indigo · Color Variant: FIDELITY
> **Last Updated:** 2026-05-22
