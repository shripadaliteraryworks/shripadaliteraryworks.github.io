# link-me

A minimal, JSON-driven Linktree-style landing page. Vanilla HTML + CSS + [Tailwind CSS](https://tailwindcss.com) CDN. No build step, no framework, no dependencies — everything is configured through a single JSON file.

## Features

- **Links tab** — social/external link cards with optional action pills (Follow, Subscribe, etc.) and Facebook Like embed support
- **Media tab** — lazy-loaded media cards: WordPress blog feed (thumbnails + excerpts), books page (collapsible list), and YouTube channel uploads
- **`hidden` flag** — toggle any link or media card off without deleting it from the JSON
- **JSON-only config** — theme colours, content, embeds, and contact info are all driven by `links.json`

## Project structure

```
link-me/
├── index.html      # Page shell — meta tags, Tailwind CDN, loading skeleton
├── main.js         # Fetches links.json, renders UI, sets theme + OG meta
├── styles.css      # CSS custom properties, card styles, animations
├── links.json      # ← Edit this. Controls all content, links, and visuals
└── logo.jpg        # Profile avatar (add your own; initials shown as fallback)
```

---

## Configuration

Everything lives in `links.json`. You should never need to touch any other file.

### Full schema

```json
{
  "profile": {
    "name":    "Your Name or Brand",
    "bio":     "Short tagline shown under the name",
    "avatar":  "./logo.jpg",
    "favicon": "./logo.jpg",
    "theme": {
      "background":     "#faf9f7",
      "cardBackground": "#ffffff",
      "accent":         "#9B1C1C",
      "text":           "#1c1917",
      "subtext":        "#78716c"
    }
  },
  "contact": {
    "phone": "+91XXXXXXXXXX",
    "email": "you@example.com",
    "location": {
      "label": "Address shown on the card",
      "url":   "https://maps.app.goo.gl/..."
    }
  },
  "links": [
    {
      "id":          "instagram",
      "label":       "Instagram",
      "url":         "https://instagram.com/yourhandle",
      "icon":        "instagram",
      "description": "@yourhandle",
      "action":      "Follow",
      "hidden":      false
    },
    {
      "id":    "facebook",
      "label": "Facebook",
      "url":   "https://www.facebook.com/yourpage",
      "icon":  "facebook",
      "embed": {
        "type":   "fb-like",
        "href":   "https://www.facebook.com/yourpage",
        "layout": "button_count",
        "size":   "large",
        "action": "like",
        "share":  false
      }
    }
  ],
  "media": [
    {
      "id":          "blog",
      "label":       "Blog",
      "url":         "https://yourblog.com/",
      "icon":        "globe",
      "description": "Latest posts",
      "embed": {
        "type":    "wordpress-feed",
        "siteUrl": "https://yourblog.com",
        "count":   5
      }
    },
    {
      "id":          "books",
      "label":       "Published Books",
      "url":         "https://yourblog.com/books/",
      "icon":        "books",
      "description": "Free downloads",
      "hidden":      false,
      "embed": {
        "type":     "books-page",
        "siteUrl":  "https://yourblog.com",
        "pageSlug": "your-books-page-slug"
      }
    },
    {
      "id":          "youtube-uploads",
      "label":       "YouTube",
      "url":         "https://www.youtube.com/@yourhandle",
      "icon":        "youtube",
      "description": "Latest videos",
      "embed": {
        "type":          "youtube-uploads",
        "channelHandle": "yourhandle",
        "count":         6
      }
    }
  ]
}
```

### Links fields reference

| Field | Required | Notes |
|-------|----------|-------|
| `links[].id` | Yes | Unique identifier (not displayed) |
| `links[].label` | Yes | Button text |
| `links[].url` | Yes | Link destination |
| `links[].icon` | Yes | Icon key — see list below |
| `links[].description` | No | Small subtitle shown below the label |
| `links[].action` | No | Pill shown on the right (e.g. `"Follow"`, `"Subscribe"`) |
| `links[].hidden` | No | Set `true` to hide the card without deleting it. Defaults to `false` |
| `links[].embed` | No | Inline embed rendered below the link card — see [Embeds](#embeds) |

### Profile fields reference

| Field | Required | Notes |
|-------|----------|-------|
| `profile.name` | Yes | Displayed as the heading and used for tab title + OG tags |
| `profile.bio` | Yes | Subheading and OG description |
| `profile.avatar` | Yes | Path or URL to a square image. Falls back to initials if missing |
| `profile.favicon` | No | Separate icon for the browser tab. Defaults to `avatar` if omitted |
| `profile.theme.*` | Yes | All five colour fields are required |
| `contact.phone` | No | Rendered as a `tel:` link |
| `contact.email` | No | Rendered as a `mailto:` link |
| `contact.location.label` | No | Address text shown on the card |
| `contact.location.url` | No | Direct Maps link (e.g. `https://maps.app.goo.gl/...`) |

---

## Media tab

The **Media tab** renders rich embed cards that are lazy-loaded the first time the tab is opened. Configure them in the `media` array.

| Field | Required | Notes |
|-------|----------|-------|
| `media[].id` | Yes | Unique identifier |
| `media[].label` | Yes | Card heading |
| `media[].url` | Yes | Fallback link if the embed fails |
| `media[].icon` | Yes | Icon key |
| `media[].description` | No | Subtitle shown in the card header |
| `media[].hidden` | No | Set `true` to hide the card. Defaults to `false` |
| `media[].embed` | Yes | Embed configuration object — see below |

### Embed types

#### `wordpress-feed` — Blog post list with thumbnails

Fetches posts from the WordPress REST API and renders each one with a featured-image thumbnail, two-line title, excerpt, and date.

```json
"embed": {
  "type":    "wordpress-feed",
  "siteUrl": "https://yourblog.com",
  "count":   5
}
```

| Key | Notes |
|-----|-------|
| `siteUrl` | Root URL of the WordPress site (no trailing slash) |
| `count` | Number of posts to show |

#### `books-page` — Collapsible book list from a WordPress page

Fetches a specific WordPress page by slug, parses embedded PDF/download links, and renders them as a collapsible list. The list can be toggled open/closed with the chevron button in the card header.

```json
"embed": {
  "type":     "books-page",
  "siteUrl":  "https://yourblog.com",
  "pageSlug": "your-books-page-slug"
}
```

| Key | Notes |
|-----|-------|
| `siteUrl` | Root URL of the WordPress site |
| `pageSlug` | The WordPress page slug (the part after the last `/` in the page URL) |

#### `youtube-uploads` — Latest YouTube videos

Fetches the channel's public RSS feed via a CORS proxy and renders videos in a two-column grid. Falls back through three strategies to resolve the channel ID from a handle.

```json
"embed": {
  "type":          "youtube-uploads",
  "channelHandle": "yourhandle",
  "count":         6
}
```

| Key | Notes |
|-----|-------|
| `channelHandle` | YouTube handle without the `@` prefix |
| `count` | Maximum number of videos to show |
| `channelId` | *(Optional)* If you know the raw channel ID (`UC…`), set it here to skip handle resolution and load faster |

#### `fb-like` — Facebook Like button (Links tab only)

Renders the Facebook Like button SDK inline below the Facebook link card.

```json
"embed": {
  "type":   "fb-like",
  "href":   "https://www.facebook.com/yourpage",
  "layout": "button_count",
  "size":   "large",
  "action": "like",
  "share":  false
}
```

---

## Hiding items

Add `"hidden": true` to any entry in `links` or `media` to remove it from the rendered page without deleting it. Remove the field (or set it to `false`) to restore it.

```json
{ "id": "amazon", "hidden": true, "label": "Amazon", ... }
```

---

## Supported icon keys

`globe` · `github` · `twitter` · `linkedin` · `youtube` · `instagram` · `tiktok` · `twitch` · `discord` · `facebook` · `wikipedia` · `amazon` · `books` · `rss` · `link`

Use `link` as a generic fallback for any URL that doesn't have a dedicated icon.

### Theme colours

Colours are applied as CSS custom properties at runtime. Use any valid CSS colour value (hex, `rgb()`, `hsl()`, etc.).

| Property | Role |
|----------|------|
| `background` | Page background |
| `cardBackground` | Link card fill |
| `accent` | Icon colour, ring, and highlights |
| `text` | Primary text (name, link labels) |
| `subtext` | Secondary text (bio, descriptions) |

### Adding a logo

Place a square image (`logo.jpg` or `logo.png`) in the project root and point `avatar` and `favicon` at it. If the file is missing or fails to load, the avatar is replaced with a circle showing the first two initials of `profile.name`.

---

## Running locally

The page fetches `links.json` via the `fetch()` API, so it **must be served over HTTP** — double-clicking `index.html` in Finder (file://) will not work.

```bash
# Python — no install needed
python3 -m http.server 8080

# Node — no install needed
npx serve .
```

Open `http://localhost:8080` in your browser.

---

## Deploying to GitHub Pages

GitHub Pages serves static files directly from a branch, making it a zero-config host for this project.

### 1. Push the repo to GitHub

```bash
git init                        # if not already a git repo
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2. Enable GitHub Pages

1. Open your repository on GitHub.
2. Go to **Settings → Pages** (left sidebar, under *Code and automation*).
3. Under **Source**, select **Deploy from a branch**.
4. Set **Branch** to `main` and folder to `/ (root)`.
5. Click **Save**.

GitHub will build and publish the site. The URL appears at the top of the Pages settings page — typically:

```
https://<your-username>.github.io/<repo-name>/
```

It usually goes live within 1–2 minutes. Subsequent pushes to `main` redeploy automatically.

### 3. (Optional) Use a custom domain

1. In **Settings → Pages → Custom domain**, enter your domain (e.g. `links.yourdomain.com`).
2. Add a `CNAME` DNS record pointing to `<your-username>.github.io`.
3. Check **Enforce HTTPS** once the certificate is provisioned.

Also add a `CNAME` file to the repo root containing just your domain:

```
links.yourdomain.com
```

This prevents GitHub from clearing the custom domain setting on each deploy.

---

## Other hosting options

| Host | Steps |
|------|-------|
| **Netlify** | Drag-and-drop the project folder at [app.netlify.com/drop](https://app.netlify.com/drop), or run `npx netlify deploy --prod` |
| **Vercel** | `npx vercel --prod` from the project root |
| **Cloudflare Pages** | Connect the repo in the CF Pages dashboard; no build command, output directory `/` |

No build command is needed for any of these — the source is the output.

---

## OpenGraph / social preview

`og:title`, `og:description`, `og:image`, `twitter:*`, `theme-color`, and `og:url` are all set at runtime from `links.json`. Social crawlers that do not execute JavaScript will see empty meta tags. To fix this, copy the same values into the static `<meta>` tags in `index.html` as a fallback.
