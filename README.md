# Astro starter with measuremy.site analytics

Astro's basics starter with cookieless analytics already set up through [astro-measuremysite](https://www.npmjs.com/package/astro-measuremysite), and agent notes (`AGENTS.md`, `CLAUDE.md`, `.mcp.json`) so your coding agent can read the site's traffic.

```sh
npm create astro@latest -- --template developeron29/astro-measuremysite-starter
```

Or deploy it straight away (each asks for your site key, `PUBLIC_MEASUREMYSITE_KEY`):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fdeveloperon29%2Fastro-measuremysite-starter&env=PUBLIC_MEASUREMYSITE_KEY&envDescription=Your%20site%27s%20public%20key%20%28pk_...%29%20from%20the%20measuremy.site%20dashboard%27s%20Setup%20tab&envLink=https%3A%2F%2Fmeasuremy.site%2Fdocs%2Finstall&project-name=astro-measuremysite-starter&repository-name=astro-measuremysite-starter)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/developeron29/astro-measuremysite-starter)

## Analytics setup

1. Sign up at [measuremy.site](https://measuremy.site/login) (30-day free trial), add your domain and copy the `pk_...` key from the Setup tab.
2. Put it in `.env` (copy `.env.example`), or in your host's environment variables:

   ```sh
   PUBLIC_MEASUREMYSITE_KEY=pk_...
   ```

3. Optional: set `PUBLIC_MEASUREMYSITE_STATS_URL` to your public dashboard link (Setup tab → Public dashboard) and the homepage links to it.
4. Deploy. Every built page is tracked; `npm run dev` isn't, so local visits don't count.

Or ask your coding agent: `.mcp.json` connects Claude Code to the measuremysite MCP server (it signs in with OAuth, no key), which can fetch the key for your domain and answer questions like "where did yesterday's visitors come from?".

Custom events: `<button data-measuremysite-event="signup">` or `window.measuremysite && measuremysite.track("signup")`.

## Project structure

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── components
│   │   └── Welcome.astro  ← homepage: setup steps, analytics status, a test event button
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
├── astro.config.mjs   ← measuremysite() integration
├── netlify.toml       ← build settings and the key prompt for Netlify's deploy button
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
