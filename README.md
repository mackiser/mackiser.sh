# mackiser.sh

My personal site and blog. I'm Mac, an infrastructure and DevOps engineer with a background in security, based in Baltimore. I write about infrastructure-as-code, security, self-hosting, home lab experiments, and whatever else has my attention that week.

## Stack

- [Astro](https://astro.build) with Markdown/MDX content collections
- [Tailwind CSS](https://tailwindcss.com) for styling, with light and dark themes
- [Pagefind](https://pagefind.app) for search
- [Giscus](https://giscus.app) for comments
- Hosted on GitHub Pages, deployed with GitHub Actions

## Running locally

Requires Node.js 24.

```sh
npm install
npm run dev     # http://localhost:4321
npm run build   # type-check and build to dist/
```

## Writing a post

Add a folder under `src/content/blog/` with an `index.md` or `index.mdx` and any images next to it. Set `draft: true` in the frontmatter to keep a post off the site.

## Deploying

Every push to `main` runs [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which builds the site and publishes it to GitHub Pages at `mackiser.sh`.

Comments are enabled by setting the `PUBLIC_GISCUS_REPO`, `PUBLIC_GISCUS_REPO_ID`, `PUBLIC_GISCUS_CATEGORY`, and `PUBLIC_GISCUS_CATEGORY_ID` repository variables (Settings → Secrets and variables → Actions → Variables).

## Credits

Built on [Astro Micro](https://github.com/trevortylerlee/astro-micro) by Trevor Lee, itself a fork of [Astro Nano](https://github.com/markhorn-dev/astro-nano) by Mark Horn. MIT licensed; see [LICENSE](LICENSE).
