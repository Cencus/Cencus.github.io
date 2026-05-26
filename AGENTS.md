# AGENTS.md

## Commands

```bash
npm run server   # local dev at http://localhost:4000
npm run build    # npx hexo generate → outputs to public/
npm run clean    # npx hexo clean → deletes db.json, cache, public/
npm run deploy   # npx hexo deploy → pushes public/ to GitHub Pages via git
```

New post: `hexo new post "标题"` → scaffolds `source/_posts/标题.md`.

## Verification

No tests, lint, or typecheck. Verify changes by running `npm run server` and checking the local site.

Before deploying, run `npm run clean && npm run build` to ensure a fresh build.

## Preview (clean build + server)

```bash
npx hexo clean && npx hexo generate && npx hexo server
```

If port 4000 is occupied:
```bash
lsof -ti:4000 | xargs kill -9 && npx hexo server
```

## Architecture

- Hexo 7.3.0 static blog → `cencus.github.io` via `hexo-deployer-git`.
- Butterfly 5.5.4 theme is vendored at `themes/butterfly/`, NOT an npm dependency.
- **All theme config overrides go in root `_config.butterfly.yml`**, never in `themes/butterfly/_config.yml`.

## Post Frontmatter

Every post requires `abbrlink` in frontmatter — permalinks are `post/:abbrlink/` via `hexo-abbrlink` (crc32/hex). The plugin auto-generates it, but include it explicitly. The scaffold (`scaffolds/post.md`) does not add it, so always add it after scaffolding.

Post filenames use `:title.md` format (no date prefix), set via `new_post_name` in `_config.yml`.

Categories and tags use multi-line list syntax in frontmatter:

```yaml
categories:
  - 分类名
tags:
  - tag1
  - tag2
```

## Live2D

Live2D widget injection in `_config.butterfly.yml` has a strict script order: jQuery → `message_Path`/`talkAPI` globals → `live2d.js` → `message.js`. Breaking this order breaks the widget.

## Key Directories

- `source/_posts/` — blog posts
- `source/live2d/` — Live2D assets (model, scripts, CSS)
- `source/img/` — site images (covers, banners)
- `themes/butterfly/` — vendored theme (do not npm install)