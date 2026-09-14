# Deployment Guide

## 1. Overview

Mezu - Music Library consists entirely of static client-side files (HTML, CSS, JavaScript, images, and audio). It can be deployed directly to GitHub Pages without any build steps or server-side runtime requirements.

---

## 2. GitHub Pages Deployment

GitHub Pages provides free static hosting directly from your GitHub repository.

### Step-by-Step Instructions

1. Push Repository to GitHub:
   Ensure all files, including `index.html`, `style.css`, `script.js`, `library/`, `songs/`, and `images/`, are committed and pushed to your remote repository on the `main` branch:
   ```bash
   git add .
   git commit -m "Deploy Mezu Music Library"
   git push origin main
   ```

2. Access Repository Settings:
   Navigate to your repository page on GitHub and click on the **Settings** tab.

3. Configure Pages:
   - In the left sidebar, click **Pages** (under the "Code and automation" section).
   - Under **Build and deployment**:
     - **Source**: Select `Deploy from a branch`.
     - **Branch**: Choose `main` from the dropdown.
     - **Folder**: Select `/(root)`.
   - Click **Save**.

4. Access the Live Application:
   GitHub Pages will deploy your site automatically. After 1-2 minutes, your site will be live at:
   ```
   https://<your-username>.github.io/<repository-name>/
   ```

### Path Considerations for GitHub Pages
Because the project uses relative paths (such as `library/*.html`, `../style.css`, `../script.js`, `../images/`, and `../songs/`), all pages and assets load properly when hosted within a repository subpath on GitHub Pages.

---

## 3. Containerized Deployment (Docker and Nginx)

For local testing or container-based hosting, a `Dockerfile` and `nginx.conf` are provided in the repository root.

### Building and Running the Container
```bash
# Build the Docker image
docker build -t mezu-music-app .

# Run the container mapping port 80 to host port 8080
docker run -d -p 8080:80 --name mezu-instance mezu-music-app
```

The application will be accessible locally at `http://localhost:8080`.

---

## 4. Web Server Configuration Notes

When configuring production servers such as Nginx or Apache, ensure the following configurations are active:

- Byte-Range Requests: The web server must support HTTP 206 (Partial Content) requests (`Accept-Ranges: bytes`) so that browsers can seek forward and backward through audio and video files.
- MIME Types: Verify that the web server serves `.mp3` files as `audio/mpeg` and `.mp4` files as `video/mp4`.
- Static Caching: Media files (`.mp3`, `.mp4`, `.jpg`, `.png`) can be configured with long-term cache expiration (`Cache-Control: public, max-age=31536000`) because asset contents are static.
