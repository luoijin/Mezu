# Mezu - Music Library

[![HTML5](https://img.shields.io/badge/Language-HTML5-E34F26.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/Language-CSS3-1572B6.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/Language-JavaScript-F7DF1E.svg?style=flat-square)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

Mezu - Music Library is a static, web-based audio and lyric presentation application developed using pure HTML5, CSS3, and vanilla JavaScript. It features a dark-themed visual design, a responsive multi-level navigation drawer, embedded HTML5 audio playback, dedicated lyric viewports, and full-screen artist showcases.

## Live Demo
Check out the live website here: [https://luoijin.github.io/Mezu/](https://luoijin.github.io/Mezu/)

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Project Structure](#project-structure)
- [Music Catalog](#music-catalog)
- [Getting Started](#getting-started)
- [Documentation Directory](#documentation-directory)
- [Deployment](#deployment)
- [License](#license)

---

## Overview

Mezu - Music Library provides an interface for browsing curated music, streaming audio tracks, and reading song lyrics simultaneously. The application does not rely on third-party frameworks, build tools, or runtime dependencies, executing directly in any modern web browser.

### Technology Stack
- HTML5: Semantic markup, native audio elements, embedded video background.
- CSS3: CSS custom properties (variables), CSS Grid, Flexbox, smooth transitions.
- JavaScript (ES6+): DOM selection and manipulation, event listeners, multi-tier drawer navigation.
- External Assets: Google Fonts (Poppins, Martel Sans, Libre Baskerville), FontAwesome 6.2.1, RemixIcon 2.5.0.

---

## Key Features

- Collapsible Multi-Level Navigation: A sliding sidebar navigation menu supporting two-tier submenu navigation for individual songs and direct jump links for artist profiles.
- Native Audio Playback: Standard HTML5 audio player controls supporting play, pause, seeking, and volume adjustment without third-party plugins.
- Dedicated Lyrics Viewport: Formatted lyrics panel with independent vertical scrolling alongside album artwork and track details.
- Full-Screen Artist Showcase: High-resolution artist imagery displayed on the home page with smooth scrolling navigation.
- Ambient Background Video: Looping background video layer integrated into the visual layout.
- Responsive Layout: Adaptable CSS grid and flexbox layout supporting desktop, tablet, and mobile viewports.

---

## Project Structure

```
Mp3/
├── .vscode/                 # Editor configuration (Live Server port 5501)
├── docs/                    # Technical project documentation
│   ├── README.md            # Documentation portal and index
│   ├── ARCHITECTURE.md      # System architecture and component design
│   ├── GETTING_STARTED.md   # Local development setup and running instructions
│   ├── AUDIO_CATALOG.md     # Song catalog, artist metadata, and media registry
│   ├── UI_UX_DESIGN_SYSTEM.md # CSS design tokens, typography, and styling
│   ├── DEVELOPMENT_GUIDE.md # Code organization and implementation details
│   ├── TESTING_QA.md        # Browser compatibility and testing checklist
│   └── DEPLOYMENT.md        # Static hosting and deployment options
├── images/                  # Graphic assets, covers, artist portraits, and videos
│   ├── bg-vid.mp4           # Background looping video (home)
│   ├── bg-vid2.mp4          # Secondary background video
│   ├── logo.png             # Application logo
│   ├── mezu-logo.png        # Alternate brand icon / favicon
│   ├── [1-7].png            # Artist showcase visuals
│   ├── *-cover.jpg/png      # Album cover artwork
│   └── *.jpg/png            # Artist thumbnail portraits
├── library/                 # Individual track views
│   ├── asap.html            # NewJeans - ASAP
│   ├── bad.html             # Denise Julia ft. P-Lo - B.A.D.
│   ├── home.html            # Bruno Major - Home
│   ├── homebdy.html         # DEMI ft. Madman Stan - homebdy
│   ├── nvmd.html            # Denise Julia - NVMD
│   ├── old_fasioned.html    # Bruno Major - Old Fashioned
│   ├── playlist1.html       # Playlist view template
│   ├── playlist2.html       # Playlist view template
│   ├── shadesofcool.html    # Lana Del Rey - Shades of Cool
│   ├── shutdown.html        # Moon Byul ft. Seori - Shutdown
│   └── talk.html            # Khalid - Talk
├── songs/                   # Audio files in MP3 format
├── index.html               # Main application entry point and artist showcase
├── script.js                # Core navigation and event handling logic
└── style.css                # Global stylesheet and visual styling
```

---

## Music Catalog

| Title | Artist | Featured Artist | Cover Artwork | Audio Track | Page Link |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Old Fashioned | Bruno Major | — | `old-fashioned-cover.jpg` | `Bruno Major -  Old Fashioned Official Audio.mp3` | [View Page](library/old_fasioned.html) |
| Home | Bruno Major | — | `home-cover.jpg` | `Bruno Major - Home.mp3` | [View Page](library/home.html) |
| homebdy | DEMI | Madman Stan | `homebdy-cover.jpg` | `DEMI - homebdy (feat. Madman Stan).mp3` | [View Page](library/homebdy.html) |
| B.A.D. | Denise Julia | P-Lo | `B.A.D-cover.jpg` | `Denise Julia - B.A.D. (feat. P-Lo) (Official Audio).mp3` | [View Page](library/bad.html) |
| Talk | Khalid | — | `talk-cover.png` | `Khalid - Talk .mp3` | [View Page](library/talk.html) |
| ASAP | NewJeans | — | `asap-cover.png` | `New Jeans 'ASAP' audio.mp3` | [View Page](library/asap.html) |
| NVMD | Denise Julia | — | `NVMD-cover.jpg` | `NVMD.mp3` | [View Page](library/nvmd.html) |
| Shutdown | Moon Byul | Seori | `shutdown-cover.jpg` | `Special MoonByul feat Seori.mp3` | [View Page](library/shutdown.html) |
| Shades Of Cool | Lana Del Rey | — | `shadesofcool-cover.jpg` | `Lana Del Rey - Shades of Cool (Official Audio).mp3` | [View Page](library/shadesofcool.html) |

---

## Getting Started

### Prerequisites
A modern web browser such as Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge.

### Running Locally

#### VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension.
3. Click "Go Live" in the status bar or right-click `index.html` and select "Open with Live Server".
4. The site opens at `http://127.0.0.1:5501/index.html`.



---

## Documentation Directory

| Document | Description |
| :--- | :--- |
| [docs/README.md](docs/README.md) | Central documentation index and overview. |
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Component design, DOM hierarchy, and event handling model. |
| [docs/GETTING_STARTED.md](docs/GETTING_STARTED.md) | Setup and execution guide for local environments. |
| [docs/AUDIO_CATALOG.md](docs/AUDIO_CATALOG.md) | Complete media inventory including tracks, imagery, and video. |
| [docs/UI_UX_DESIGN_SYSTEM.md](docs/UI_UX_DESIGN_SYSTEM.md) | Color palettes, typography, spacing, and CSS variables. |
| [docs/DEVELOPMENT_GUIDE.md](docs/DEVELOPMENT_GUIDE.md) | Code organization and page implementation details. |
| [docs/TESTING_QA.md](docs/TESTING_QA.md) | Cross-browser compatibility and verification checklist. |
| [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md) | Instructions for static deployment and web hosting. |

---

## Deployment

Because the project contains only static files, it can be deployed directly to GitHub Pages:

1. Push your repository to GitHub.
2. Navigate to your repository **Settings** > **Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch".
4. Select the `main` branch and the `/ (root)` directory, then click **Save**.
5. Your application will be live at `https://<username>.github.io/<repository>/`.

For complete deployment details and container configurations, refer to [docs/DEPLOYMENT.md](docs/DEPLOYMENT.md).

---

## License

This project is licensed under the [MIT License](LICENSE). Audio, lyrics, and images are used for non-commercial educational and portfolio purposes.
