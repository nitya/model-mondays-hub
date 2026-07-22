// @ts-check
import { defineConfig } from "astro/config";

// Model Mondays Hub — deployed to GitHub Pages via .github/workflows/build-deploy.yml.
// `site` / `base` should match "https://<owner>.github.io/<repo>/" for a
// standard (non-custom-domain) GitHub Pages project site. Update these if
// the repo is renamed or a custom domain is configured.
export default defineConfig({
  site: "https://nitya.github.io",
  base: "/model-mondays-hub",
  output: "static",
  build: {
    assets: "assets",
  },
});
