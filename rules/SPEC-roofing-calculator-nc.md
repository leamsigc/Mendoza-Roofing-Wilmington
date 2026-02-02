
# Roofing Mendoza – NC Roofing Cost Calculator & Programmatic SEO Specification

## 1. Project Overview

**Goal**

Build a client‑side, address‑based **Roofing Cost Calculator** for **North Carolina only**, and use it as the main conversion asset for a large set of SEO landing pages targeting:

- North Carolina statewide cost queries.
- City‑level and town‑level roof cost queries (e.g., “roof cost calculator Wilmington NC”).

The site/domain: **roofingmendoza.com**.

**Key Constraints**

- **Client‑side only**:
  - No custom backend.
  - All calculations, maps, and GeoJSON handled in the browser.
- **Email delivery**:
  - Use **Netlify Forms** to capture submissions and trigger notifications.
- **Map**:
  - Use **nuxt-maplibre**.
  - **Zoom is locked** (no user zooming).
- **Geocoding**:
  - Use **OpenStreetMap Nominatim** (public API).
- **State fixed to North Carolina**:
  - address text search is limited to NC response should be houses or building only.
  - User cannot select other states.
  - Location selection is: State (fixed NC) → City (dropdown) → Town (dropdown) → address text search.
- **SEO**:
  - Use Nuxt’s file‑based dynamic routes for **programmatic SEO** across NC cities/towns.
  - Embed the calculator on each location page.

---

## 2. Functional Requirements

### 2.1 User Flow

1. **Select Location (NC‑only)**
   - User visits:
     - `/roofing-cost-calculator` (global NC selector), or
     - `/roofing-cost-calculator/:citySlug` (city landing), or
     - `/roofing-cost-calculator/:citySlug/:townSlug` (full calculator for that town).
   - State is **always** "North Carolina" and **non‑editable**.
   - List of all supported **Citys** seo optimized for city name.
    - List of all **Town** within that city seo optimized for town name.   
   - Clicking “Open calculator” navigates to `/roofing-cost-calculator/:citySlug/:townSlug`.

2. **Step 1 – Address in NC**
   - On the town calculator page, user sees:
     - State: “North Carolina” (fixed).
     - City/Town (from the route).
   - User enters an address.
   - Frontend queries Nominatim with the QUERY for country us, state NC and the entered address.
   - Lat/lon result is used to set an initial placeholder polygon around the property.

3. **Step 2 – Map & Roof Polygon**
   - nuxt-maplibre displays:
     - A basemap.
     - A **roof polygon overlay** corresponding to the approximate roof area.
   - Zoom and rotation are disabled; map is centered on the property.
   - User optionally adjusts the polygon (phase 1  can integrate interactive editing for the poligon).

4. **Step 3 – Material Selection & Cost Estimate**
   - User selects a roofing material:
     - Asphalt Shingle
     - Architectural Shingle
     - Metal Roofing
     - Flat Roofing (Membrane)
     -> Check what materials we support
   - App calculates area (sq ft) from the polygon and applies a material‑specific cost‑per‑sq‑ft range.
   - User sees:
     - Roof size in sq ft.
     - Estimated **min** and **max** cost for that material.
     - Check if how we implemented in the tool that is implemeted already

5. **Step 4 – Email Capture**
   - User enters email.
   - A Netlify form is submitted including:
     - State (NC), city slug, town slug.
     - Address (if stored), area, material, price range.
     - Serialized GeoJSON of the roof polygon.
   - Frontend shows confirmation text:
     > “We’ve received your request. We’ll email you a detailed estimate shortly.”

---

## 3. Technical Specification

### 3.1 Tech Stack

- **Frontend / App**
  - Use the current project structure
  - Follow the './nuxt.md' rules
- **Map & Geometry**
  - `maplibre-gl` – base map and overlay.
  - `@turf/area` – polygon to area computation.
- **Data & State**
  - Using the browser get the data that we need for the following:
    - Local static JSON with North Carolina cities/towns.
- Shared composable (`useRoofCalculator`) for state.
- **Geocoding**
  - **Nominatim** (OpenStreetMap): `https://nominatim.openstreetmap.org/search`.
- **Forms**
  - Netlify Forms (no backend code).

### 3.2 Dependencies (package.json)

```json
{
  "dependencies": {
    "nuxt": "^3.x",
    "@turf/turf": "^6.x",
    "axios": "^1.x",
  },
}
```

---

## 4. Project Structure

```text
src/app
├── composables/
│   └── useRoofCalculator.ts
├── components/
│   ├── StepLocationSelector.vue
│   ├── StepMapRoof.vue
│   ├── StepMaterial.vue
│   └── StepEmailNetlify.vue
├── data/
│   ├── nc-municipalities.json
│   └── geojson/                # optional pre‑populated roof footprints
│       ├── charlotte.geojson
│       ├── raleigh.geojson
│       └── …
└── pages/
    └── roofing-cost-calculator/
        ├── index.vue           # NC selector (city/town lists)
        └── _citySlug/
            ├── index.vue       # city SEO page city list
            └── [citySlug].vue   # city calculator + SEO page
            └── _townSlug/  
                └── index.vue   # town SEO page (town list)
                └── _townSlug.vue   # town calculator + SEO page
```

---

## 5. Shared State & Calculations

### 5.1 Composable: `useRoofCalculator.ts`

**Responsibilities**

- Track:
  - state (always `"NC"`).
  - `citySlug`, `townSlug` from routes.
  - `roofFeature` (GeoJSON Polygon).
  - `areaSqFt`.
  - selected material and cost range.
  - email input.
- Perform:
  - Area computation via `@turf/area`.
  - Cost range calculation (min/max for selected material).

**Core Logic (high‑level)**

```ts
state = 'NC' (read‑only)
citySlug: string | null
townSlug: string | null

roofFeature: Feature<Polygon> | null

areaSqFt = round(turf.area(roofFeature) * 10.7639)

materialRates = {
  asphalt_shingle: { min: 2.5, max: 4.5 },
  architectural_shingle: { min: 3.0, max: 5.5 },
  metal: { min: 8.0, max: 11.0 },
  flat_membrane: { min: 9.0, max: 12.0 }
}

selectedMaterial: { name, rates } | null

costRange = {
  min: round(areaSqFt * rates.min),
  max: round(areaSqFt * rates.max)
}

email: string
```

---

## 6. Key Components

### 6.1 StepLocationSelector.vue

**Purpose**

- Display fixed state (NC).
- Optionally display city/town from route.
- Allow user to enter an address string.
- Call Nominatim with `q = "<ADDRESS>, North Carolina"` and set `roofFeature` as a small polygon centered on the result.

**Requirements**

- Use `fetch` or `axios`.
- Endpoint:  
  `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=<encoded query>`
- Accept‑Language header set to `"en"`.

### 6.2 StepMapRoof.vue

**Purpose**

- Render MapLibre map.
- Display `roofFeature` polygon from shared state.
- Disable:
  - scroll zoom,
  - box zoom,
  - double‑click zoom,
  - touch zoom,
  - rotation.

**Behavior**

- On mount, create MapLibre instance centered on an NC centroid.
- On `roofFeature` updates, update the GeoJSON source and call `fitBounds` on polygon bounds.
- **Optional (Phase 2)**: integrate MapLibre Draw to allow vertex editing.

### 6.3 StepMaterial.vue

**Purpose**

- Show list of materials with short cost per sq ft ranges.
- On click, call `setMaterial(materialKey)` in the composable.
- Show:
  - roof area (`areaSqFt`),
  - cost range (`costRange.min`, `costRange.max`).

### 6.4 StepEmailNetlify.vue

**Purpose**

- Display email input.
- Wrap all relevant calculator data in **hidden fields**.
- Submit via Netlify Forms.

**Form attributes**

```html
<form
  name="roofing-calculator"
  method="POST"
  data-netlify="true"
  netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="roofing-calculator" />
</form>
```

**Hidden fields must include:**

- `state = "NC"`.
- `citySlug`, `townSlug`.
- `address` (if stored, optionally).
- `areaSqFt`.
- `materialName`, `materialMin`, `materialMax`.
- `estimateMin`, `estimateMax`.
- `roofGeoJSON` = `JSON.stringify(roofFeature)`.

---

## 7. Routing & Pages

### 7.1 `/roofing-cost-calculator` (index.vue)

- Shows:
  - Title: “North Carolina Roofing Cost Calculator”.
  - State: “North Carolina” (non‑editable text).
  - City list: from `nc-municipalities.json`.
    - Button → push to `/roofing-cost-calculator/[citySlug]`.
    - Town list: filtered by selected city.
        - Button → push to `/roofing-cost-calculator/[citySlug]/[townSlug]`.

### 7.2 `/roofing-cost-calculator/:citySlug` (_citySlug.vue)

- SEO‑focused city page (no steps by default).
- Contains:
  - City name from `nc-municipalities.json`.
  - Summary copy about roof replacement costs in that city.
  - Town dropdown (towns for this city).
  - Button → push to `/roofing-cost-calculator/:citySlug/:townSlug`.

**SEO**

- `title`: `Roof Cost Calculator – {CityName}, North Carolina | Roofing Mendoza`.
- `meta description`: short, city‑specific description.
- `H1`: “Roof Cost Calculator – {CityName}, NC”.
- Additional H2s: see SEO section.

### 7.3 `/roofing-cost-calculator/:citySlug/:townSlug` (_citySlug/_townSlug.vue)

- Full **calculator page**.
- Renders:

  1. `StepLocationSelector`
  2. `StepMapRoof`
  3. `StepMaterial`
  4. `StepEmailNetlify`

- Uses shared composable to set `citySlug` and `townSlug` from route params.
- Contains additional SEO copy describing:
  - Average roof costs in {TownName}, NC.
  - Factors affecting price.
  - Benefits of Roofing Mendoza.

**SEO**

- `title`: `Roofing Cost Calculator – {TownName}, {CityName}, NC | Roofing Mendoza`.
- `meta description`: include `{TownName}`, `{CityName}`, and “roof cost calculator” / “roof replacement cost”.
- `H1`: “How Much Does a Roof Cost in {TownName}, NC?”.
- Subheadings for cost ranges, materials, FAQs.

---

## 8. Programmatic SEO Specification

### 8.1 Targets

**Geographic Targets**

- **State**: North Carolina (fixed).
- **City and Town Data**:  
  `nc-municipalities.json` must list all **service area cities** and **their towns/neighborhoods**.  
  Example cities:
  - Wilmington, Charlotte, Raleigh, Fayetteville, Durham, Chapel Hill, Cary, Asheville, Greensboro, Winston‑Salem, etc.

For each city, include:

```json
{
  "slug": "wilmington-nc",
  "name": "Wilmington, NC",
  "towns": [
    { "slug": "wilmington", "label": "Wilmington" },
    { "slug": "wrightsville-beach", "label": "Wrightsville Beach" },
    { "slug": "carolina-beach", "label": "Carolina Beach" }
  ]
}
```

### 8.2 Keyword Structures

For each city and town, programmatically generate keyword clusters including:

- `roof cost estimator north carolina`
- `north carolina roof replacement cost`
- `{city} nc roof cost estimator`
- `roofing cost calculator {city} nc`
- `roof replacement cost {city} nc`
- `{town} {city} nc roofing cost`
- `{city} nc shingle roof cost`
- `{city} nc metal roof cost`
- `{city} nc flat roof cost`
- `average roof replacement cost {city} nc`

Use these in:

- `<title>` and `<meta>` tags.
- H1/H2 headings.
- Paragraph text and FAQ questions/answers.

### 8.3 Page Template Content (per town page)

Each `/roofing-cost-calculator/:citySlug/:townSlug` page should follow a standard template:

1. **H1:**  
   “How Much Does a Roof Cost in {TownName}, NC?”

2. **Intro Paragraph:**  
   Mention:
   - Town name.
   - City name (where applicable).
   - That the estimator is instant and uses area + material.

3. **H2: “Average Roof Replacement Cost in {TownName}, NC”**  
   - Provide text summarizing:
     - Typical range for asphalt, metal, flat.
     - Indicate that ranges are estimates and actual prices may vary.

4. **H2: “Roof Replacement Costs by Material in {TownName}”**  
   - Bullet list or table using the global ranges:
     - Asphalt Shingle: approx. \$2.5–\$4.5 / sq ft.
     - Architectural Shingle: approx. \$3.0–\$5.5 / sq ft.
     - Metal Roofing: approx. \$8–\$11 / sq ft.
     - Flat Roofing (Membrane): approx. \$9–\$12 / sq ft.

5. **H2: “Factors That Affect Roof Replacement Costs in {TownName}”**  
   - List:
     - Roof size and complexity.
     - Pitch.
     - Tear‑off vs. new.
     - Underlayment/ventilation.
     - Local labor and permitting requirements.
     - Storm/wind exposure (important for coastal towns).

6. **H2: “Roof Replacement vs Roofover in {TownName}, NC”**  
   - Explain high‑level pros/cons.
   - Mention that calculator estimates replacement; roofover can differ.

7. **H2: “FAQs About Roof Costs in {TownName}, NC”**  
   - Example FAQs:
     - “How often should I replace my roof in {TownName}?”
     - “Do I need a roofing permit in {TownName}, NC?”
     - “What is the average cost per square foot for a new roof in {TownName}?”
     - “Which roofing materials work best for {TownName}’s climate?”

8. **Calculator Section**  
   - Place the stepper (location, map, materials, email) near the top or middle.
   - Call to action:
     > “Enter your address in {TownName}, NC to see an instant roof cost estimate.”

### 8.4 Internal Linking

- From **state‑level** or generic pages (e.g., `/roofing-cost-calculator`) link to:
  - `/roofing-cost-calculator/wilmington-nc`
  - `/roofing-cost-calculator/charlotte-nc`
  - etc.
- From each **city page**, link to **town calculator pages**.
- From **town pages**, link to:
  - Main calculator index.
  - City page.
  - Relevant service pages (roof replacement, roof repair) on roofingmendoza.com.

### 8.5 Sitemaps & Indexing

- Ensure Nuxt configuration includes:
  - `router.trailingSlash` standardized.
  - Proper generation of static routes during build.
- Generate a **sitemap** (static or via Nuxt module) listing:
  - `/roofing-cost-calculator`
  - `/roofing-cost-calculator/:citySlug`
  - `/roofing-cost-calculator/:citySlug/:townSlug` for all entries in `nc-municipalities.json`.

---

## 9. Netlify Configuration

- Use **Netlify** build and deploy this is done already

---

## 10. Implementation Checklist for an AI Agent

1. **Update the current project to use the missing modules or pnpm packages**;.
2. **Create `nc-municipalities.json`** with all NC cities and towns Roofing Mendoza serves.
3. Implement `useRoofCalculator.ts` composable with:
   - State (NC), citySlug, townSlug.
   - roofFeature (GeoJSON).
   - area calculation.
   - material selection + cost computation.
   - email.
4. Implement components:
   - `StepLocationSelector.vue`: address input, Nominatim call, sets `roofFeature`.
   - `StepMapRoof.vue`: MapLibre view, fixed zoom, renders `roofFeature`.
   - `StepMaterial.vue`: material buttons, shows area & cost range.
   - `StepEmailNetlify.vue`: Netlify form + hidden fields.
5. Implement pages:
   - `roofing-cost-calculator/index.vue` – NC selector.
   - `roofing-cost-calculator/_citySlug.vue` – city SEO page with town selector.
   - `roofing-cost-calculator/_citySlug/_townSlug.vue` – full calculator + SEO copy.
6. Add SEO meta tags and structured, location‑specific content on each dynamic route.
7. Build (`npm run generate`) and deploy to Netlify.
8. Test:
   - Address lookup and map centering for several NC addresses.
   - Area and cost range display.
   - Netlify form submission (check Netlify dashboard).
9. Iterate on content and keyword mapping (tune headings and copy for the most valuable keywords in each city/town).
10. The most important is to get the best seo possible for Roofing related keywords, as well as get the best content possible.
