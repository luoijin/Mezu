# Testing and Quality Assurance

## 1. Browser Compatibility

Mezu - Music Library has been evaluated across major desktop and mobile web browsers. Because it relies on standard HTML5, CSS3, and ECMAScript features without browser-specific experimental APIs, core functionality is supported across standard rendering engines.

| Browser | Platform | Audio Playback | Video Playback | Sidebar Animation | Status |
| :--- | :--- | :--- | :--- | :--- | :--- |
| Google Chrome | Windows, macOS, Linux | Pass | Pass | Pass | Supported |
| Microsoft Edge | Windows, macOS | Pass | Pass | Pass | Supported |
| Mozilla Firefox | Windows, macOS, Linux | Pass | Pass | Pass | Supported |
| Apple Safari | macOS, iOS | Pass | Pass | Pass | Supported |
| Chrome for Android | Android | Pass | Pass | Pass | Supported |

---

## 2. Responsive Viewport Verification

The layout adapts to multiple screen sizes using CSS Grid and Flexbox:

| Viewport Category | Typical Resolutions | Expected Behavior |
| :--- | :--- | :--- |
| Mobile Screen | 375px - 480px | Sidebar collapses off-screen; toggleable via top menu button. Main content occupies 100% viewport width. |
| Tablet Screen | 768px - 1024px | Navigation drawer toggles smoothly; song card and lyrics view adjust spacing. |
| Desktop Screen | 1280px - 1920px | 260px fixed navigation drawer; two-column grid displaying album artwork card and lyrics panel. |

---

## 3. Functional Verification Test Cases

| Test ID | Test Scenario | Steps | Expected Result |
| :--- | :--- | :--- | :--- |
| TC-01 | Sidebar Drawer Toggle | Click the hamburger icon on the top navigation bar. | The sidebar slides closed; main content expands to fill viewport width. Clicking again restores the sidebar. |
| TC-02 | Submenu Expansion | Click "Songs" within the sidebar menu. | The primary menu list slides to the left; the list of individual song links is revealed. |
| TC-03 | Submenu Return | Click the back button ("Songs" with left chevron). | The menu slides back to the primary navigation view. |
| TC-04 | Audio Playback | Navigate to any song page and click play. | The audio begins streaming; time counter and progress scrubber advance. |
| TC-05 | Audio Scrubbing | Drag the progress bar to a new position. | Playback skips directly to the selected timestamp. |
| TC-06 | Lyrics Scrolling | Scroll over the lyrics container using mouse wheel or touch. | Lyrics content scrolls vertically without moving the outer window. |
| TC-07 | Artist Anchor Navigation | On the home page, click an artist entry in the sidebar. | Page smoothly scrolls to the corresponding full-screen artist section. |
