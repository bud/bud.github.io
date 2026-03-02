# Harish Arul Portfolio

Single-page portfolio designed with an ink-on-paper sketchbook aesthetic and built for GitHub Pages.

## Stack
- Astro (static output)
- Tailwind CSS
- TypeScript
- GitHub Actions for Pages deploy

## Project structure
- `src/pages/index.astro`: Main single-page layout and sections.
- `src/components/ProjectsSection.astro`: Data-driven project cards + accessible modal dialogs.
- `src/data/projects.ts`: Single source of truth for all project content.
- `src/styles/global.css`: Global style tokens and sketchbook visual language.
- `public/images/*`: Texture and monochrome sketch illustrations.
- `.github/workflows/deploy.yml`: Build and deploy to GitHub Pages on push to `main`.

## Edit content
### Hero/About/Skills/Contact
Update text directly in `src/pages/index.astro`.

### Projects (single data file)
Edit `src/data/projects.ts`:
- Add/remove project objects.
- Update `title`, `summary`, `details`, `stack`, `outcomes`, `links`, and `image`.

No template changes are needed when editing only project content.

## Local development
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run dev server:
   ```bash
   npm run dev
   ```
3. Build locally:
   ```bash
   npm run build
   ```

## GitHub Pages deploy
1. Push to the `main` branch.
2. In GitHub repo settings:
   - Open **Pages**.
   - Set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys automatically.

## Accessibility + behavior notes
- Sticky nav with anchor links.
- Smooth scroll with reduced-motion fallback.
- Project details use native `<dialog>` for keyboard/ESC support.
- Modal closes on backdrop click and explicit close button.
- Images use explicit dimensions + lazy loading where appropriate.
