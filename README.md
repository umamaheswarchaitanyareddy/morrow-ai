# MORROW AI

A responsive, editorial-style concept website for a fictional independent AI research and technology company. The project presents a human-centred approach to practical AI through product interface concepts, explanatory diagrams and a front-end-only contact form.

**MORROW AI, its products, team members and contact address are fictional concept content created for a college Web Development assignment.** The interface mockups are visual demonstrations and do not represent available commercial products. The contact form does not send or store messages.

## Technology

- HTML5 for semantic structure
- CSS3 for layout, responsive behavior, illustrations and product mockups
- Vanilla JavaScript for the mobile navigation, reveal effects and contact form validation
- Google Fonts (Space Grotesk, DM Sans and DM Mono) for typography; system fallbacks are included

No frontend framework, backend, build step, paid API or external image asset is required. The artwork is composed with CSS and inline SVG.

## Project files

```text
morrow-ai/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    └── images/   (reserved for optional future local assets)
```

## Local preview

Open `index.html` in a modern browser. The site is designed to work directly from the file system. An optional local server can also be used, for example:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## GitHub Pages deployment

1. Create a GitHub repository and add `index.html`, `style.css`, `script.js` and this README at the repository root.
2. Push the files to the branch you want to publish (commonly `main`).
3. In the repository, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**, choose the publishing branch and its `/ (root)` folder, then save.
5. Wait for the Pages deployment to finish and open the URL shown in the Pages settings.

All project references use relative paths. GitHub Pages uses the same static files and needs no build configuration. Google Fonts load when network access is available; the font stack falls back to local sans-serif and monospace fonts otherwise.
