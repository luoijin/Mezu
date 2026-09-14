# Mezu - Music Library Documentation

This directory contains technical documentation for **Mezu - Music Library**, a static web application built using HTML5, CSS3, and vanilla JavaScript. The project was created as a first-year college web development project.

---

## Documentation Index

| Document | Description |
| :--- | :--- |
| [ARCHITECTURE.md](ARCHITECTURE.md) | Architectural structure, DOM hierarchy, navigation engine, and media handling. |
| [GETTING_STARTED.md](GETTING_STARTED.md) | Local environment setup, server launch instructions, and verification steps. |
| [AUDIO_CATALOG.md](AUDIO_CATALOG.md) | Inventory of audio files, cover images, video backdrops, and artist metadata. |
| [UI_UX_DESIGN_SYSTEM.md](UI_UX_DESIGN_SYSTEM.md) | Design tokens, CSS custom properties, typography, layout grids, and animations. |
| [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | Code organization, page structure, and implementation details. |
| [TESTING_QA.md](TESTING_QA.md) | Browser compatibility verification, responsive design checks, and test cases. |
| [DEPLOYMENT.md](DEPLOYMENT.md) | Deployment instructions for GitHub Pages and containerized Nginx. |

---

## Technical Overview

Mezu - Music Library operates as a static client-side web application. It requires no backend server or compilation pipeline.

- Markup: Standard HTML5 semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<audio>`, `<video>`).
- Styling: Vanilla CSS3 utilizing CSS custom properties (`--dark-color`, `--first-color`, etc.), CSS Grid, Flexbox, and CSS transitions.
- Scripting: Vanilla ECMAScript for DOM event handling, drawer menu toggling, and multi-tier submenu sliding.
- Media: Standard HTML5 audio and video playback using local MP3 and MP4 files.
- Fonts and Icons: Google Fonts (Poppins, Martel Sans, Libre Baskerville), FontAwesome 6.2.1, and RemixIcon 2.5.0 via CDN.
