# Astro starter with measuremy.site analytics

Astro's basics starter with cookieless analytics already set up through [astro-measuremysite](https://www.npmjs.com/package/astro-measuremysite), and agent notes (`AGENTS.md`, `CLAUDE.md`, `.mcp.json`) so your coding agent can read the site's traffic.

```sh
npm create astro@latest -- --template developeron29/astro-measuremysite-starter
```

## Analytics setup

1. Sign up at [measuremy.site](https://measuremy.site/login) (30-day free trial), add your domain and copy the `pk_...` key from the Setup tab.
2. Put it in `.env` (copy `.env.example`), or in your host's environment variables:

   ```sh
   PUBLIC_MEASUREMYSITE_KEY=pk_...
   ```

3. Deploy. Every built page is tracked; `npm run dev` isn't, so local visits don't count.

Or ask your coding agent: `.mcp.json` connects Claude Code to the measuremysite MCP server (it signs in with OAuth, no key), which can fetch the key for your domain and answer questions like "where did yesterday's visitors come from?".

Custom events: `<button data-measuremysite-event="signup">` or `window.measuremysite && measuremysite.track("signup")`.

## Project structure

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
├── astro.config.mjs   ← measuremysite() integration
└── .env.example       ← PUBLIC_MEASUREMYSITE_KEY
```

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

More: [Astro docs](https://docs.astro.build), [measuremy.site docs](https://measuremy.site/docs/install).
