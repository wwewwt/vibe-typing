# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common commands

- Install dependencies: `pnpm install`
- Start dev server: `pnpm dev`
- Build for production: `pnpm build`
- Run all unit/component tests: `pnpm test`
- Run tests in watch mode: `pnpm test:watch`
- Run end-to-end tests: `pnpm e2e`

Single-test examples:
- One Vitest file: `pnpm exec vitest run tests/unit/services/countdown.test.ts`
- One Vitest test by name: `pnpm exec vitest run tests/component/GlassEditor.test.tsx -t "renders"`
- One Playwright spec: `pnpm exec playwright test tests/e2e/app-smoke.spec.ts`

Notes:
- There is no dedicated lint script in `package.json`.
- `pnpm build` also runs TypeScript project builds before Vite output.
- Playwright uses `vite` as a web server on `http://127.0.0.1:4173` via `playwright.config.ts`.

## Architecture overview

- `src/main.tsx` is the entry point. It mounts `src/app/App.tsx` into `#root` and loads global styles.
- `src/app/App.tsx` is the shell composition layer. It arranges the ambient shader backdrop, mode switcher, editor, floating controls, inactivity fade wrapper, and timer.
- `src/store/` contains the two global Zustand stores:
  - `useWritingStore` holds the user-facing writing/session state and persists it to localStorage.
  - `useUiStore` holds transient shell UI state such as activity, hover, and panel open/closed state.
- `src/config/` defines default state, storage keys/versioning, and font metadata.
- `src/services/` is the pure logic layer:
  - persistence helpers wrap localStorage access,
  - `audio/` is the audio engine state holder,
  - `activity/` tracks inactivity timing,
  - `timer/` contains countdown math,
  - `export/` builds text downloads.
- `src/scene/` owns the WebGL/Three.js backdrop. `AmbientCanvas` wraps `SceneRoot`, which builds the renderer, scene, camera, material, uniforms, and animation loop. `WeatherMaterial.ts` switches between rain and snow shader implementations, and `hooks/useSceneUniforms.ts` bridges store state into shader values.
- `src/features/` contains the UI pieces that talk to the stores: the editor, mode switcher, floating control panel, timer, font switcher, and inactivity overlay.
- `tests/` is split by type:
  - `tests/unit/` for pure logic and store behavior,
  - `tests/component/` for React component behavior,
  - `tests/e2e/` for Playwright flows.
- Test setup is in `tests/setup.ts`; Vitest config is in `vite.config.ts`; Playwright config is in `playwright.config.ts`.

## Working notes

- The writing store persists immediately after each state change, so changes to writing behavior usually need both store and persistence awareness.
- The ambient scene is state-driven: mode, blur, and precipitation values flow from `useWritingStore` into `useSceneUniforms` and then into the Three.js material.
- Keep shell UI state in `useUiStore` and durable user settings in `useWritingStore`.
