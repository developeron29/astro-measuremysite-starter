## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

## Analytics

This site uses [measuremy.site](https://measuremy.site) through the `astro-measuremysite` integration in `astro.config.mjs`. It adds the tracker to every built page; `astro dev` is not tracked. The site key comes from `PUBLIC_MEASUREMYSITE_KEY` (`.env`, or the host's environment variables). It starts with `pk_`, is public and safe to commit.

- No key yet: ask the person to sign up at https://measuremy.site/login and copy it from the Setup tab, or use the `get_setup` tool of the measuremysite MCP server (in `.mcp.json`, signs in with OAuth) with the production domain.
- Custom events: `data-measuremysite-event="signup"` on a button or form, or `window.measuremysite && measuremysite.track("signup")` after a successful action.
- Traffic questions (visits, sources, top pages, what changed): use the measuremysite MCP tools instead of guessing.
