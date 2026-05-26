# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run server   # hexo server -- local dev at http://localhost:4000
npm run build    # hexo generate -- outputs to public/
npm run clean    # hexo clean -- deletes cache and public/
npm run deploy   # hexo deploy -- pushes public/ to GitHub Pages via git
```

`hexo new post "标题"` scaffolds a new post at `source/_posts/标题.md`.

## Architecture

- **Hexo 7.3.0** static blog deployed to `cencus.github.io` via `hexo-deployer-git`.
- **Theme:** Butterfly 5.5.4, vendored at `themes/butterfly/` (not an npm dep). Theme config overrides live in root `_config.butterfly.yml`, not in the theme's own `_config.yml`.
- **Theme language:** `zh-CN`. Templates are Pug, CSS preprocessor is Stylus, Markdown renderer is `hexo-renderer-marked`.

## Content Conventions

- Every post **must** have an `abbrlink` field in frontmatter — permalinks are `post/:abbrlink/` using `hexo-abbrlink` (crc32/hex). The plugin auto-generates it if missing, but including it explicitly is safer.
- Categories use list syntax: `categories: [分类名]` or multi-line list.
- Tags use list syntax: `tags: [tag1, tag2]` or multi-line list.
- Category pages auto-generated via `source/categories/index.md` (`type: categories`); tag pages via `source/tags/index.md` (`type: tags`).
- Post filename format in `_config.yml` is `:title.md` (not a date prefix).

## Live2D

The Rem (蕾姆) Live2D widget is injected via Butterfly's `inject` feature in `_config.butterfly.yml`, loading assets from `source/live2d/`. It uses:

- `jquery.min.js` → must load before `message.js`
- `live2d.js` — core Live2D engine
- `message.js` — interaction logic (greetings, hitokoto quotes, drag, chat, music)
- `message.json` — mouseover/click response texts
- Model at `source/live2d/model/rem/`

The inject config in `_config.butterfly.yml` must list scripts in dependency order: jQuery → message_Path/talkAPI globals → live2d.js → message.js.

## Theme Customization

All customizations go in root `_config.butterfly.yml` (overrides `themes/butterfly/_config.yml`). Current customizations: disabled homepage banner, typing-effect subtitle with three quotes, Busuanzi visitor stats, Live2D injection.
