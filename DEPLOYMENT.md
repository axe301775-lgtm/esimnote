# SIMNOTE deployment

Primary public website: https://esimnote.netlify.app/

Netlify project: https://app.netlify.com/projects/esimnote/overview

Published to the user's registered Netlify account on 2026-09-13, using Netlify Drop. The project visibility is Public (the dashboard confirmed that anyone can visit the production site). This is an account-owned deployment, not an unclaimed anonymous deployment.

The user requested a free address on a different hosting service because the previous chatgpt.site address did not work for them in mainland China. Use the Netlify project above for future updates to this primary website. Mainland network availability has not been independently verified.

The complete static site is in `dist/`; no build command is required. `netlify.toml` sets this publish directory. Upload a zip containing the contents of `dist/` at its root, or upload `dist/` as a folder, to the existing project's production deployment area. Do not upload the project root or unrelated files. Keep the existing public visibility and project name.

The site no longer loads fonts from Google Fonts. Styling uses the existing system-font fallbacks, and all required scripts, styles and icons are served from the same website.

Legacy Sites deployment: https://simnote.axe301775.chatgpt.site/ . Its project identifier remains in `.openai/hosting.json`; it has not been deleted. It is no longer the primary address requested by the user.
