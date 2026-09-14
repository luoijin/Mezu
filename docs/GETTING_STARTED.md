# Getting Started

## 1. Requirements

Running Mezu - Music Library requires only a modern web browser and a static HTTP server.

### Supported Web Browsers
- Google Chrome (version 90+)
- Mozilla Firefox (version 88+)
- Apple Safari (version 14+)
- Microsoft Edge (version 90+)

Serving the project through a local HTTP server rather than opening files directly through the file system (`file:///`) is recommended to ensure media streaming, video playback, and relative asset paths function properly.

---

## 2. Running Locally

### Method A: VS Code Live Server (Default)
The repository contains default port configuration in `.vscode/settings.json` specifying port 5501.

1. Open the project folder in Visual Studio Code.
2. Install the Live Server extension by Ritwick Dey from the VS Code Marketplace.
3. Open `index.html` and click "Go Live" in the status bar (or right-click and choose "Open with Live Server").
4. The application opens at:
   ```
   http://127.0.0.1:5501/index.html
   ```

---

### Method B: Python HTTP Server
If Python 3 is installed, start a local HTTP server from your terminal:

```bash
cd /home/luoijin/Github/Mp3
python3 -m http.server 5501
```

Access the application in your browser at `http://localhost:5501`.

---

### Method C: Node.js (npx serve)
If Node.js is installed on your workstation:

```bash
cd /home/luoijin/Github/Mp3
npx serve . -p 5501
```

---

### Method D: Docker Container
To run the application inside an isolated Nginx container:

```bash
docker build -t mezu-music-app .
docker run -d -p 8080:80 --name mezu-instance mezu-music-app
```

Access the application in your browser at `http://localhost:8080`.

---

## 3. Verification Checklist

After launching the local server, verify the following items:

1. Home Page: Confirm that `index.html` loads with the background video playing and the artist showcase visible upon scrolling.
2. Sidebar Toggle: Click the hamburger icon (`#sidebar-close`) to ensure the navigation drawer collapses and expands.
3. Submenu Navigation: Click "Songs" in the sidebar to verify that the menu transitions to the song list.
4. Song Playback: Click any track (e.g., "B.A.D.") to load the song page, then click play on the audio controls to confirm audio playback.
5. Lyrics Scrolling: Scroll inside the lyrics card to verify that lyrics scroll independently of the main page.
