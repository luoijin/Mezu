# Development Guide

## 1. Project Organization

Mezu - Music Library is organized into the following directory structure:

- Root Directory: Contains the main landing page (`index.html`), global stylesheet (`style.css`), script file (`script.js`), and project documentation.
- `library/`: Contains dedicated HTML pages for each song and playlist view.
- `songs/`: Stores audio files in MP3 format.
- `images/`: Stores cover artwork, artist profile pictures, showcase imagery, and background video files.
- `docs/`: Technical reference documentation for the project.

---

## 2. Page Structure and Conventions

### 2.1 Relative File Paths
Because pages are located in both the root directory and the `library/` subdirectory, relative paths must be structured based on the file location:

- From `index.html` (root):
  - Stylesheet: `style.css`
  - Script: `script.js`
  - Images: `images/...`
  - Song pages: `library/...`
- From `library/*.html` (subdirectory):
  - Stylesheet: `../style.css`
  - Script: `../script.js`
  - Images: `../images/...`
  - Audio files: `../songs/...`
  - Home link: `../index.html`

---

## 3. Adding a New Song Page

To add an additional song page to the project, follow these steps:

### Step 1: Place Media Assets
1. Copy the MP3 audio file into the `songs/` directory.
2. Copy the album artwork image into the `images/` directory.

### Step 2: Create HTML Page
Create a new HTML file under `library/<song_name>.html` using the existing template:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Song Book - [Song Title]</title>
    <link rel="stylesheet" href="../style.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" />
    <link rel="icon" type="image/png" href="../images/mezu-logo.png"/>
  </head>
  <body>
    <!-- Sidebar Navigation -->
    <nav class="sidebar">
      <a href="#" class="logo"><img src="../images/logo.png" alt="Logo"></a>
      <div class="menu-content">
        <ul class="menu-items">
          <div class="menu-title">Library</div>
          <li class="item"><a href="../index.html">Home</a></li>
          <!-- Submenu items -->
        </ul>
      </div>
    </nav>

    <!-- Navigation Bar -->
    <nav class="navbar">
      <i class="fa-solid fa-bars" id="sidebar-close"></i>
    </nav>

    <!-- Main Content -->
    <main class="main">
      <section class="songs">
        <div class="songs__container">
          <article class="song">
            <div class="song__image">
              <img src="../images/[cover-image].jpg" alt="Cover">
            </div>
            <div class="song__info">
              <h4>[Song Title]</h4>
              <h5>[Artist Name]</h5>
              <br>
              <audio id="audio#" controls>
                <source src="../songs/[audio-file].mp3" type="audio/mpeg">
                Your browser does not support the audio element.
              </audio>
              <hr class="song__hr">
            </div>
          </article>
        </div>
      </section>

      <!-- Lyrics Section -->
      <section class="lyrics__container">
        <article class="lyrics">
          <div class="song__lyrics">
            <p>Lyrics line 1</p>
            <p>Lyrics line 2</p>
          </div>
        </article>
      </section>
    </main>

    <script src="../script.js"></script>
  </body>
</html>
```

### Step 3: Link Page in Sidebar
Add the link to the Songs submenu in `index.html` and the other `library/*.html` pages:

```html
<li class="item">
  <a href="./library/[song_name].html">[Song Title]</a>
</li>
```
