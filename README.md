# Secure Elements Dashboard

> A pixel-perfect, desktop-only, dark-mode glassmorphic dashboard — a strict 1:1 component-based replication of a provided design reference, built as an HR frontend engineering assignment.

![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Recharts](https://img.shields.io/badge/Recharts-3-22C55E?style=flat-square)

---

## Overview

**Secure Elements Dashboard** is a high-fidelity React implementation of a complex dark-mode analytics UI. The project prioritises visual accuracy over convention — abandoning generic UI patterns in favour of precision CSS Grid architecture, directional lighting gradients, and deeply customised data visualisation components that match a pixel-level design reference.

---

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Component architecture, bootstrapped with Vite |
| **Tailwind CSS 4** | Utility-first styling, arbitrary value grid tracks, and custom colour tokens |
| **Recharts 3** | Custom bar charts, donut charts, and sparkline line charts |
| **Lucide React** | Clean, consistent outline iconography throughout the UI |

---

## Advanced UI/UX Implementations

### 🔲 Custom Fractional Grid Architecture
Standard 12-column grid layouts were deliberately abandoned. The dashboard uses a **precision arbitrary 3-track CSS Grid** — `grid-cols-[minmax(0,1.2fr)_minmax(0,3fr)_minmax(0,1fr)]` — to perfectly replicate the distinct aspect ratios of the left, middle, and right columns from the original design. The centre column (`3fr`) dominates the viewport for the data-heavy Analytics chart and Product Sales table, while the outer columns remain compact and proportional. A `row-span-2` strategy on the `ProductSalesTable` card enables the auto-placement algorithm to fill a 3×3 grid with only 8 DOM elements.

### 💡 Directional Lighting & Card Gradients
Every dark card implements a **custom 3-stop background gradient** — `from-[#4A5578] via-[#1A1C29] to-[#11131D]` — to simulate a bright top-left light source fading into near-black. This is paired with ultra-low-opacity white borders (`border-white/[0.06]`) to create a subtle rim-light effect and establish a believable 3D card hierarchy. The global background drops to `#0A0D14` to maximise contrast against the elevated card surfaces.

### 📊 Deep Recharts Customisation
Recharts' default SVG rendering was overridden throughout:
- **AnalyticsChart** — Pill-shaped rounded bars (`radius={[12,12,12,12]}`), a tri-colour fill strategy keyed on data value, and floating `LabelList` value labels rendered above each bar with `position="top"` and a custom `offset`.
- **ExpensesCard** — A two-layer donut: a `1px`-thick background ring rendered as a separate `<Pie>` acts as the track, with the foreground data arc using `cornerRadius`, `paddingAngle`, and mathematically scaled `innerRadius`/`outerRadius` values to preserve ring thickness at any container size.
- **SalesActivityCard** — A `LinearGradient`-stroked `LineChart` bleeding flush to the card's bottom edge with `margin={{ bottom: 0 }}` and zero card padding at the chart boundary.

### 🖥️ Desktop-Only Fixed Layout Fidelity
The layout is **intentionally fixed to a desktop viewport** to achieve a 1:1 match with the provided design specification. The grid dimensions, card proportions, and typographic scale are all calibrated for a standard desktop screen and are not designed to reflow or adapt to smaller viewports. The assignment's core requirement was visual accuracy, not device adaptability.

---

## Installation & Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/secure-elements-dashboard.git
cd secure-elements-dashboard

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** by default.

---

## Folder Structure

```
src/
├── App.jsx                     # Root layout — fixed 3-column grid, sidebar, header
├── index.css                   # Tailwind v4 import + global resets
│
└── components/
    ├── Sidebar.jsx             # Slim vertical nav with active-state indicators
    ├── Header.jsx              # Search bar, notifications, user avatar
    │
    ├── SalesActivityCard.jsx   # Blue gradient card + flush LineChart sparkline
    ├── StoreStaticsCard.jsx    # Light periwinkle card + world map + geo markers
    ├── ActiveBookingsCard.jsx  # Light card + event rows + animated toggle switches
    │
    ├── AnalyticsChart.jsx      # Tri-colour pill BarChart with floating value labels
    ├── ProductSalesTable.jsx   # Horizontally scrollable product data table
    │
    ├── WalletVerification.jsx  # Dark gradient card + purple CTA button
    ├── ExpensesCard.jsx        # Two-layer donut chart + centered text overlay
    └── GoPremium.jsx           # Dark gradient card + coral-orange gradient button
```

---

## Design Decisions

- **No `col-span` wrappers** — Cards are direct children of the CSS Grid, keeping the DOM flat and auto-placement predictable.
- **No third-party UI libraries** — Every component is hand-crafted from primitives to maintain full control over styling fidelity.
- **SVG-based world map** — The `StoreStaticsCard` sources a real SVG from `/public` and applies a CSS `brightness(0) invert(1)` filter to tint it white, avoiding hard-coded path arrays.
- **Accessible interactions** — All interactive elements carry `aria-label` attributes and unique `id` selectors for clear DOM targeting.

---

## License

This project was built as a frontend engineering assignment. All design credit belongs to the original UI/UX reference.
