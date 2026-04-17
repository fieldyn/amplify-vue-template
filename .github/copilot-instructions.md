# Repository instructions

## Build and validation

- `npm install` — install dependencies.
- `npm run dev` — start the Vite dev server.
- `npm run build` — type-checks the app and produces a production build.
- `npm run build-only` — run only the Vite production bundle step.
- `npm run type-check` — run TypeScript/Vue type checking without bundling.
- `npm run preview` — preview the production build locally.

There is no dedicated lint script or test script in `package.json` yet.

## High-level architecture

- This is a Vue 3 + TypeScript frontend wired to an AWS Amplify Gen 2 backend.
- `src/main.ts` bootstraps Vue, loads `src/assets/main.css`, and configures Amplify from the generated `amplify_outputs.json`.
- `src/App.vue` is intentionally thin and renders the main feature component.
- `src/components/Todos.vue` is the primary app surface; it uses `generateClient<Schema>()` from `aws-amplify/data` to observe and create Todo records.
- Backend resources live under `amplify/`:
  - `amplify/auth/resource.ts` defines email sign-in.
  - `amplify/data/resource.ts` defines the `Todo` model and public API-key authorization.
  - `amplify/backend.ts` registers the auth and data resources.

## Key conventions

- Use the `@` path alias for `src/` imports.
- Keep Amplify schema/resource code in `amplify/auth/` and `amplify/data/`; `amplify_outputs.json` and related generated config files are ignored and should not be edited by hand.
- Type frontend data against `Schema` from `amplify/data/resource.ts` rather than duplicating shapes.
- Prefer Composition API with `<script setup lang="ts">` in Vue SFCs.
- Global styling lives in `src/assets/base.css` and `src/assets/main.css`; component-specific styling is kept inside the component SFC.
- VS Code users should use the Vue Volar extension recommended in `.vscode/extensions.json`.

