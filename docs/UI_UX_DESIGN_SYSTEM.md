# UI/UX Design System

## 1. Design Overview

Mezu - Music Library uses a dark theme focused on high contrast, readability, and media presentation. The visual layout uses CSS custom properties, responsive grids, and hardware-accelerated transitions.

---

## 2. Design Tokens and CSS Variables

Core design tokens are declared on the `:root` pseudo-class in `style.css`:

```css
:root {
  /* Colors */
  --first-color: #11101d;        /* Sidebar backdrop and artist container */
  --dark-color: #101219;         /* Body background */
  --title-color: hsl(222, 8%, 8%); /* Title color */
  --text-color-light: hsl(222, 8%, 65%); /* Secondary text */
  --pink-color: #a78282;         /* Accent color */
  --white-color: #fff;           /* Primary text */
  --body-color: hsl(222, 100%, 99%);

  /* Typography */
  --body-font: "Poppins", sans-serif;
  --small-font-size: .813rem;
}
```

### Color Palette

| Token / Value | Hex | Description |
| :--- | :---: | :--- |
| `--dark-color` | `#101219` | Main page body background and sidebar drawer base |
| `--first-color` | `#11101d` | Secondary dark background surface |
| Black | `#000000` | Section backgrounds and video underlay |
| Card Background | `#726da3` | Dedicated lyric container background |
| `--white-color` | `#ffffff` | Primary text and headings |
| `--pink-color` | `#a78282` | Muted accent color |
| `--text-color-light` | `#9ea4b4` | Subtitle text and metadata tags |

---

## 3. Typography

The application uses three Google Fonts:

| Font Family | Weights | Usage |
| :--- | :--- | :--- |
| Poppins | 200, 300, 400, 500, 600, 700 | Navigation menus, sidebar links, general interface elements |
| Martel Sans | Regular, Bold | Track title (`h4`), artist credits (`h5`) |
| Libre Baskerville | Regular (400) | Song title serif display styling |

### Font Sizing Scale
- Track Titles (`h4`): `1.7rem`
- Artist Subtitles (`h5`): Small (`~0.875rem`)
- Lyric Verses (`p`): `1.3rem` with `0.45rem` top padding
- Menu Links: `1.0rem`
- Artist Sub-labels (`.artist__type`): `11px` (uppercase, letter-spaced)

---

## 4. Layout and Grid Structure

### 4.1 Navigation Drawer (`.sidebar`)
- Fixed positioning on the left: `width: 260px; height: 100%; position: fixed;`
- Responsive collapse: Adding the `.close` class collapses the sidebar out of view.
- Submenu transition: Nested submenus translate horizontally with `transform: translateX(-56%)`.

### 4.2 Track Detail Layout (`.main`)
On track detail pages (`library/*.html`), the main container uses CSS Grid:
- `grid-template-columns: repeat(2, 0fr);`
- `gap: 5rem;`
- `height: 100vh;`
- Centers two visual cards:
  1. Album Card (`.songs__container`): Album cover image (`300px x 300px`), track name, artist name, and audio player.
  2. Lyric Card (`.lyrics__container`): Background `#726da3`, rounded corners (`1.5rem`), scrollable vertically.

---

## 5. Z-Index Layering

Layering is organized using explicit z-index values to avoid visual clipping:

| Component | Selector | Z-Index | Description |
| :--- | :--- | :---: | :--- |
| Top Navbar | `.navbar`, `.navbar__home` | `1000` | Stays above all content for menu toggle access |
| Content Sections | `.main`, `.main__home` | `100` | Houses content cards and image showcases |
| Navigation Sidebar | `.sidebar` | `99` | Drawer panel for navigation links |
| Background Video | `#background-video` | `1` | Bottom ambient layer |

---

## 6. Transitions and Micro-Interactions

- Sidebar Collapse/Expand: `transition: all 0.5s ease;`
- Menu Item Hover: `background: rgba(255, 255, 255, 0.1); border-radius: 12px;`
- Submenu Slide: `transition: all 0.4s ease;`
- Smooth Scroll: `html { scroll-behavior: smooth; }`
