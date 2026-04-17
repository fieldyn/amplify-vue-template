# AGENTS.md

## Developer Commands

```bash
npm run dev         # Start Vite dev server (port 5173)
npm run build      # Full build: type-check + Vite production bundle
npm run build-only # Vite production bundle only (no type-check)
npm run type-check # TypeScript checking via vue-tsc
npm run preview    # Preview production build locally
```

> No lint or test scripts exist yet.

## Amplify Backend

This is an AWS Amplify Gen 2 project with a separate backend definition under `amplify/`.

- **Deploy**: `npx ampx pipeline-deploy --branch <branch> --app-id <app-id>`
- The frontend build copies `amplify_outputs.json` to `public/` at deploy time (see `amplify.yml` line 8).
- **Generated files** (`amplify_outputs.json`, `amplify_outputs_config.json`) are gitignored. Never edit them manually.

## Key Conventions

- `@` maps to `src/` via `paths` in `tsconfig.app.json`.
- Use Composition API with `<script setup lang="ts">` in Vue SFCs.
- Style: global in `src/assets/base.css` and `src/assets/main.css`; component-specific in SFC `<style>` blocks.
- Data schema lives in `amplify/data/resource.ts`. Export types via `ClientSchema<typeof schema>` as `Schema`.
- Frontend data client: `generateClient<Schema>()` from `aws-amplify/data`.

## MCP

Playwright MCP is configured in `.mcp.json` for E2E testing against `http://localhost:5173`.

## Related Docs

- `.github/copilot-instructions.md` — additional repository context