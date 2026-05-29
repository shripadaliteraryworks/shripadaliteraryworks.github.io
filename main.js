// ─── Icon SVG library ────────────────────────────────────────────────────────
const ICONS = {
  globe: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" /></svg>`,

  github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z" clip-rule="evenodd" /></svg>`,

  twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,

  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,

  youtube: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,

  instagram: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>`,

  tiktok: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/></svg>`,

  twitch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z"/></svg>`,

  discord: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.1 18.08.114 18.1.133 18.11a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/></svg>`,

  facebook: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5 shrink-0"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,

  rss: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" /></svg>`,

  wikipedia: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></svg>`,

  amazon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007Z" /></svg>`,

  books: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 0 1 0 3.75H5.625a1.875 1.875 0 0 1 0-3.75Z" /></svg>`,

  download: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-3.5 h-3.5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" /></svg>`,

  link: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" /></svg>`,

  // Contact icons
  phone: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></svg>`,

  email: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></svg>`,

  map: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-5 h-5 shrink-0"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></svg>`,

  externalArrow: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor" class="w-4 h-4 shrink-0 opacity-50"><path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>`,
};

// ─── Helper: get icon SVG by key (fallback to link) ──────────────────────────
function getIcon(key) {
  return ICONS[key] || ICONS.link;
}

// ─── Helper: apply theme CSS vars to document ────────────────────────────────
function applyTheme(theme, name) {
  const root = document.documentElement;
  root.style.setProperty('--color-bg', theme.background);
  root.style.setProperty('--color-card', theme.cardBackground);
  root.style.setProperty('--color-accent', theme.accent);
  root.style.setProperty('--color-text', theme.text);
  root.style.setProperty('--color-subtext', theme.subtext);
  document.getElementById('app-body').style.backgroundColor = theme.background;
  if (name) document.title = name;
}

// ─── Helper: set a <meta> tag's content attribute ─────────────────────────────
function setMeta(selector, value) {
  const el = document.querySelector(selector);
  if (el && value) el.setAttribute('content', value);
}

// ─── Third-party SDK lazy loaders ────────────────────────────────────────────
// Each SDK is loaded at most once, triggered when a link declares an embed.
const _sdkLoaded = new Set();

function loadSDK(type) {
  if (_sdkLoaded.has(type)) return;
  _sdkLoaded.add(type);
  const s = document.createElement('script');

  if (type === 'facebook') {
    // FB SDK requires an fb-root anchor in the document
    if (!document.getElementById('fb-root')) {
      const r = document.createElement('div');
      r.id = 'fb-root';
      document.body.insertBefore(r, document.body.firstChild);
    }
    window.fbAsyncInit = () => window.FB.init({ xfbml: true, version: 'v19.0' });
    s.id = 'facebook-jssdk';
    s.async = s.defer = true;
    s.crossOrigin = 'anonymous';
    s.src = 'https://connect.facebook.net/en_US/sdk.js';

  } else if (type === 'twitter') {
    s.async = true;
    s.charset = 'utf-8';
    s.src = 'https://platform.twitter.com/widgets.js';

  } else if (type === 'youtube') {
    s.src = 'https://apis.google.com/js/platform.js';

  } else {
    return;
  }
  document.head.appendChild(s);
}

// ─── Build an official platform embed widget ──────────────────────────────────
// Returns a DOM element ready to be appended, or null for unknown types.
// embed schema:
//   { type, href?, layout?, size?, action?, share?, showCount?, screenName?,
//     channelId?, channel?, count? }
function buildEmbedWidget(embed, fallbackHref) {
  const { type } = embed;
  const href = embed.href || fallbackHref;

  if (type === 'fb-like' || type === 'fb-follow') {
    // Facebook Like (for Pages) or Follow (for personal profiles)
    loadSDK('facebook');
    const el = document.createElement('div');
    el.className = type; // 'fb-like' or 'fb-follow'
    el.setAttribute('data-href', href);
    el.setAttribute('data-layout', embed.layout || 'button_count');
    el.setAttribute('data-size', embed.size || 'small');
    if (type === 'fb-like') {
      el.setAttribute('data-action',  embed.action  || 'like');
      el.setAttribute('data-share',   String(embed.share  ?? false));
    }
    return el;

  } else if (type === 'twitter-follow') {
    // Twitter/X Follow button with optional count
    loadSDK('twitter');
    const el = document.createElement('a');
    el.href = href;
    el.className = 'twitter-follow-button';
    el.setAttribute('data-show-count', String(embed.showCount ?? true));
    el.setAttribute('data-size', embed.size || 'large');
    if (embed.screenName) el.setAttribute('data-screen-name', embed.screenName);
    el.textContent = embed.screenName ? `Follow @${embed.screenName}` : 'Follow';
    return el;

  } else if (type === 'yt-subscribe') {
    // YouTube Subscribe button with subscriber count
    loadSDK('youtube');
    const el = document.createElement('div');
    el.className = 'g-ytsubscribe';
    if (embed.channelId) el.setAttribute('data-channelid', embed.channelId);
    if (embed.channel)   el.setAttribute('data-channel',   embed.channel);
    el.setAttribute('data-layout', embed.layout || 'full');
    el.setAttribute('data-count',  embed.count  || 'default');
    return el;

  } else if (type === 'wordpress-feed') {
    const container = document.createElement('div');
    container.className = 'feed-embed-wrap';

    const loading = document.createElement('span');
    loading.className = 'feed-meta';
    loading.textContent = 'Loading posts…';
    container.appendChild(loading);

    const base = (embed.siteUrl || href).replace(/\/?$/, '');
    const apiUrl = `${base}/wp-json/wp/v2/posts?per_page=${embed.count || 3}&_fields=title,link,date`;

    fetch(apiUrl)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(posts => {
        container.innerHTML = '';
        if (!posts.length) {
          container.innerHTML = '<span class="feed-meta">No posts found.</span>';
          return;
        }
        const list = document.createElement('ul');
        list.className = 'feed-list';
        posts.forEach(post => {
          // Strip any HTML tags from title (entity decode via regex; safe for display)
          const titleText = post.title.rendered.replace(/<[^>]*>/g, '');
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = post.link;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          a.textContent = titleText;
          const dateEl = document.createElement('span');
          dateEl.className = 'feed-date';
          dateEl.textContent = new Date(post.date).toLocaleDateString('en-IN', {
            month: 'short', year: 'numeric'
          });
          li.appendChild(a);
          li.appendChild(dateEl);
          list.appendChild(li);
        });
        container.appendChild(list);
      })
      .catch(() => {
        container.innerHTML = '<span class="feed-meta">Could not load posts.</span>';
      });

    return container;

  } else if (type === 'books-page') {
    const container = document.createElement('div');
    container.className = 'feed-embed-wrap';

    const loading = document.createElement('span');
    loading.className = 'feed-meta';
    loading.textContent = 'Loading books…';
    container.appendChild(loading);

    const base = (embed.siteUrl || href).replace(/\/?$/, '');
    const apiUrl = `${base}/wp-json/wp/v2/pages?slug=${embed.pageSlug}&_fields=content`;

    fetch(apiUrl)
      .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
      .then(pages => {
        if (!pages.length) throw new Error('not found');
        const doc = new DOMParser().parseFromString(pages[0].content.rendered, 'text/html');

        // Collect all links pointing to uploaded files (PDFs and other docs)
        const bookLinks = Array.from(doc.querySelectorAll('a[href*="wp-content/uploads"]'))
          .filter(a => !/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(a.href))
          .filter(a => a.textContent.trim().length > 0);

        container.innerHTML = '';
        if (!bookLinks.length) {
          container.innerHTML = '<span class="feed-meta">No books found.</span>';
          return;
        }

        const list = document.createElement('ul');
        list.className = 'feed-list';
        bookLinks.forEach(link => {
          const li = document.createElement('li');
          const a = document.createElement('a');
          a.href = link.href;
          a.target = '_blank';
          a.rel = 'noopener noreferrer';
          // Strip any HTML from title and decode entities safely
          a.textContent = link.textContent.replace(/<[^>]*>/g, '').trim();
          const badge = document.createElement('span');
          badge.className = 'feed-date';
          badge.textContent = 'Free PDF';
          li.appendChild(a);
          li.appendChild(badge);
          list.appendChild(li);
        });
        container.appendChild(list);
      })
      .catch(() => {
        container.innerHTML = '<span class="feed-meta">Could not load books.</span>';
      });

    return container;
  }

  return null; // unknown type — caller falls back to custom pill
}

// ─── Social action label auto-detection ──────────────────────────────────────
const SOCIAL_ACTIONS = {
  instagram: 'Follow',
  facebook:  'Follow',
  twitter:   'Follow',
  tiktok:    'Follow',
  linkedin:  'Connect',
  youtube:   'Subscribe',
  twitch:    'Subscribe',
  discord:   'Join',
};

// ─── Helper: append follow pill or visit arrow to a card wrap ────────────────
function appendActionOrArrow(wrap, actionLabel, actionUrl, href) {
  if (actionLabel) {
    const btn = document.createElement('a');
    btn.href = actionUrl || href;
    btn.target = '_blank';
    btn.rel = 'noopener noreferrer';
    btn.className = 'follow-btn shrink-0';
    btn.textContent = actionLabel;
    wrap.appendChild(btn);
  } else {
    const arrowWrap = document.createElement('span');
    arrowWrap.className = 'shrink-0 pr-1 link-label opacity-40 pointer-events-none';
    arrowWrap.innerHTML = getIcon('externalArrow');
    wrap.appendChild(arrowWrap);
  }
}

// ─── Build a single link card ─────────────────────────────────────────────────
// embed:     object from links.json — renders official platform widget (FB/Twitter/YT)
// action:    string → custom pill label | false → hide | undefined → auto-detect
// actionUrl: override URL for the custom pill (defaults to href)
function buildLinkCard(href, iconKey, label, description, delay, action, actionUrl, embed) {
  const actionLabel = action === false ? null
    : (typeof action === 'string' ? action : (SOCIAL_ACTIONS[iconKey] || null));

  const isFeedEmbed = embed && (embed.type === 'wordpress-feed' || embed.type === 'books-page');

  // Wrapper div — hover effect lives here so both inner links benefit
  const wrap = document.createElement('div');
  wrap.className = `link-card w-full ${
    isFeedEmbed ? 'flex flex-col' : 'flex items-center'
  } gap-3 px-4 py-3.5 rounded-2xl transition-all duration-200 cursor-pointer animate-slide-up`;
  wrap.style.animationDelay = `${delay}ms`;
  wrap.style.animationFillMode = 'both';

  // Main visit link (takes up all remaining space)
  const mainLink = document.createElement('a');
  mainLink.href = href;
  mainLink.target = '_blank';
  mainLink.rel = 'noopener noreferrer';
  mainLink.className = 'link-card-main flex items-center gap-4 flex-1 min-w-0';
  mainLink.innerHTML = `
    <span class="icon-wrap flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
      ${getIcon(iconKey)}
    </span>
    <span class="flex flex-col flex-1 min-w-0">
      <span class="font-semibold text-sm leading-snug link-label truncate">${label}</span>
      ${description ? `<span class="text-xs mt-0.5 link-desc truncate">${description}</span>` : ''}
    </span>
  `;

  if (isFeedEmbed) {
    // Feed layout: header row (icon+label+arrow) on top, post list below
    const headerRow = document.createElement('div');
    headerRow.className = 'flex items-center gap-3 w-full';
    headerRow.appendChild(mainLink);
    appendActionOrArrow(headerRow, null, null, href); // always show visit arrow
    wrap.appendChild(headerRow);

    const widget = buildEmbedWidget(embed, href);
    if (widget) wrap.appendChild(widget);
  } else {
    wrap.appendChild(mainLink);

    // Prefer official platform embed, fall back to custom pill, then arrow
    if (embed) {
      const widget = buildEmbedWidget(embed, href);
      if (widget) {
        const widgetWrap = document.createElement('div');
        widgetWrap.className = 'embed-widget-wrap shrink-0';
        widgetWrap.appendChild(widget);
        wrap.appendChild(widgetWrap);
      } else {
        // Unknown embed type — fall through to pill/arrow
        appendActionOrArrow(wrap, actionLabel, actionUrl, href);
      }
    } else {
      appendActionOrArrow(wrap, actionLabel, actionUrl, href);
    }
  }

  return wrap;
}

// ─── Build contact section ────────────────────────────────────────────────────
function buildContactCard(href, iconKey, label, delay) {
  const card = document.createElement('a');
  card.href = href;
  // phone/email open natively, map opens in browser
  card.target = href.startsWith('http') ? '_blank' : '_self';
  card.rel = 'noopener noreferrer';
  card.className = 'link-card w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all duration-200 cursor-pointer animate-slide-up';
  card.style.animationDelay = `${delay}ms`;
  card.style.animationFillMode = 'both';

  card.innerHTML = `
    <span class="icon-wrap flex items-center justify-center w-10 h-10 rounded-xl shrink-0">
      ${getIcon(iconKey)}
    </span>
    <span class="flex flex-col flex-1 min-w-0">
      <span class="font-semibold text-sm leading-snug link-label truncate">${label}</span>
    </span>
    ${getIcon('externalArrow')}
  `;

  return card;
}

// ─── Section divider label ────────────────────────────────────────────────────
function buildSectionLabel(text) {
  const el = document.createElement('p');
  el.className = 'w-full text-xs font-semibold uppercase tracking-widest mt-4 mb-1 section-label';
  el.textContent = text;
  return el;
}
// ─── Media tab: blog articles card ─────────────────────────────────────────
function buildMediaBlogCard(item) {
  const { url, embed, label, description } = item;
  const base = (embed.siteUrl || url).replace(/\/?$/, '');
  const count = embed.count || 5;

  const card = document.createElement('div');
  card.className = 'media-section-card';

  // Header row
  const header = document.createElement('div');
  header.className = 'media-section-header';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'media-section-icon';
  iconWrap.innerHTML = getIcon('globe');

  const titles = document.createElement('div');
  titles.className = 'media-section-titles';
  const labelEl = document.createElement('span');
  labelEl.className = 'media-section-label';
  labelEl.textContent = label;
  const subEl = document.createElement('span');
  subEl.className = 'media-section-sub';
  subEl.textContent = description || '';
  titles.appendChild(labelEl);
  titles.appendChild(subEl);

  const viewAll = document.createElement('a');
  viewAll.href = url;
  viewAll.target = '_blank';
  viewAll.rel = 'noopener noreferrer';
  viewAll.className = 'media-section-viewall';
  viewAll.textContent = 'View all';

  header.appendChild(iconWrap);
  header.appendChild(titles);
  header.appendChild(viewAll);
  card.appendChild(header);

  const hr = document.createElement('hr');
  hr.className = 'media-divider';
  card.appendChild(hr);

  const list = document.createElement('ul');
  list.className = 'media-article-list';
  const loadingLi = document.createElement('li');
  loadingLi.className = 'media-loading';
  loadingLi.textContent = 'Loading…';
  list.appendChild(loadingLi);
  card.appendChild(list);

  fetch(`${base}/wp-json/wp/v2/posts?per_page=${count}&_embed=wp:featuredmedia&_fields=id,title,link,date,excerpt,_links`)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(posts => {
      list.innerHTML = '';
      if (!posts.length) {
        list.innerHTML = '<li class="media-loading">No posts found.</li>';
        return;
      }
      posts.forEach(post => {
        const title = post.title.rendered.replace(/<[^>]*>/g, '');
        const date = new Date(post.date).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
        const excerpt = (post.excerpt?.rendered || '')
          .replace(/<[^>]*>/g, '')
          .replace(/\[&hellip;\]|\[…\]|\[\.\.\.\.?\]/g, '')
          .trim()
          .slice(0, 120);
        const media = post._embedded?.['wp:featuredmedia']?.[0];
        const thumb = media?.media_details?.sizes?.medium?.source_url
                   || media?.media_details?.sizes?.thumbnail?.source_url
                   || media?.source_url
                   || '';

        const li = document.createElement('li');
        li.className = 'media-article-item';

        if (thumb) {
          const img = document.createElement('img');
          img.className = 'media-article-thumb';
          img.src = thumb;
          img.alt = '';
          img.loading = 'lazy';
          img.onerror = function() { this.style.display = 'none'; };
          li.appendChild(img);
        }

        const body = document.createElement('div');
        body.className = 'media-article-body';

        const a = document.createElement('a');
        a.href = post.link;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'media-article-title';
        a.textContent = title;
        body.appendChild(a);

        if (excerpt) {
          const excerptEl = document.createElement('p');
          excerptEl.className = 'media-article-excerpt';
          excerptEl.textContent = excerpt + (excerpt.length === 120 ? '…' : '');
          body.appendChild(excerptEl);
        }

        const dateEl = document.createElement('span');
        dateEl.className = 'media-article-date';
        dateEl.textContent = date;
        body.appendChild(dateEl);

        li.appendChild(body);
        list.appendChild(li);
      });
    })
    .catch(() => {
      list.innerHTML = '<li class="media-loading">Could not load posts.</li>';
    });

  return card;
}

// ─── Media tab: published books card ────────────────────────────────────────
function buildMediaBooksCard(item) {
  const { url, embed, label, description } = item;
  const base = (embed.siteUrl || url).replace(/\/?$/, '');

  const card = document.createElement('div');
  card.className = 'media-section-card';

  // Header row
  const header = document.createElement('div');
  header.className = 'media-section-header';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'media-section-icon';
  iconWrap.innerHTML = getIcon('books');

  const titles = document.createElement('div');
  titles.className = 'media-section-titles';
  const labelEl = document.createElement('span');
  labelEl.className = 'media-section-label';
  labelEl.textContent = label;
  const subEl = document.createElement('span');
  subEl.className = 'media-section-sub';
  subEl.textContent = description || '';
  titles.appendChild(labelEl);
  titles.appendChild(subEl);

  const seeAll = document.createElement('a');
  seeAll.href = url;
  seeAll.target = '_blank';
  seeAll.rel = 'noopener noreferrer';
  seeAll.className = 'media-section-viewall';
  seeAll.textContent = 'See page';

  const toggleBtn = document.createElement('button');
  toggleBtn.className = 'media-card-toggle';
  toggleBtn.setAttribute('aria-expanded', 'true');
  toggleBtn.setAttribute('aria-label', 'Toggle books list');
  toggleBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>';

  header.appendChild(iconWrap);
  header.appendChild(titles);
  header.appendChild(seeAll);
  header.appendChild(toggleBtn);
  card.appendChild(header);

  const hr = document.createElement('hr');
  hr.className = 'media-divider';
  card.appendChild(hr);

  const list = document.createElement('ul');
  list.className = 'media-book-list';
  const loadingLi = document.createElement('li');
  loadingLi.className = 'media-loading';
  loadingLi.textContent = 'Loading books…';
  list.appendChild(loadingLi);
  card.appendChild(list);

  toggleBtn.addEventListener('click', () => {
    const collapsed = toggleBtn.classList.toggle('collapsed');
    toggleBtn.setAttribute('aria-expanded', String(!collapsed));
    hr.style.display = collapsed ? 'none' : '';
    list.style.display = collapsed ? 'none' : '';
  });

  fetch(`${base}/wp-json/wp/v2/pages?slug=${embed.pageSlug}&_fields=content`)
    .then(r => { if (!r.ok) throw new Error(r.status); return r.json(); })
    .then(pages => {
      if (!pages.length) throw new Error('not found');
      const doc = new DOMParser().parseFromString(pages[0].content.rendered, 'text/html');
      const bookLinks = Array.from(doc.querySelectorAll('a[href*="wp-content/uploads"]'))
        .filter(a => !/\.(png|jpe?g|gif|webp|svg)(\?.*)?$/i.test(a.href))
        .filter(a => a.textContent.trim().length > 0);
      list.innerHTML = '';
      if (!bookLinks.length) {
        list.innerHTML = '<li class="media-loading">No books found.</li>';
        return;
      }
      bookLinks.forEach(link => {
        const title = link.textContent.replace(/<[^>]*>/g, '').trim();
        const li = document.createElement('li');
        li.className = 'media-book-item';
        const titleEl = document.createElement('span');
        titleEl.className = 'media-book-title';
        titleEl.textContent = title;
        const dlBtn = document.createElement('a');
        dlBtn.href = link.href;
        dlBtn.target = '_blank';
        dlBtn.rel = 'noopener noreferrer';
        dlBtn.className = 'media-book-download';
        dlBtn.innerHTML = `${getIcon('download')} PDF`;
        li.appendChild(titleEl);
        li.appendChild(dlBtn);
        list.appendChild(li);
      });
    })
    .catch(() => {
      list.innerHTML = '<li class="media-loading">Could not load books.</li>';
    });

  return card;
}
// ─── Media tab: YouTube latest uploads card ─────────────────────────────────
function buildMediaYouTubeCard(item) {
  const { url, embed, label, description } = item;
  const handle = embed.channelHandle;
  const count  = embed.count || 6;

  const card = document.createElement('div');
  card.className = 'media-section-card';

  // Header row
  const header = document.createElement('div');
  header.className = 'media-section-header';

  const iconWrap = document.createElement('div');
  iconWrap.className = 'media-section-icon';
  iconWrap.innerHTML = getIcon('youtube');

  const titles = document.createElement('div');
  titles.className = 'media-section-titles';
  const labelEl = document.createElement('span');
  labelEl.className = 'media-section-label';
  labelEl.textContent = label;
  const subEl = document.createElement('span');
  subEl.className = 'media-section-sub';
  subEl.textContent = description || '';
  titles.appendChild(labelEl);
  titles.appendChild(subEl);

  const viewAll = document.createElement('a');
  viewAll.href = url;
  viewAll.target = '_blank';
  viewAll.rel = 'noopener noreferrer';
  viewAll.className = 'media-section-viewall';
  viewAll.textContent = 'View channel';

  header.appendChild(iconWrap);
  header.appendChild(titles);
  header.appendChild(viewAll);
  card.appendChild(header);

  const hr = document.createElement('hr');
  hr.className = 'media-divider';
  card.appendChild(hr);

  const grid = document.createElement('div');
  grid.className = 'media-yt-grid';
  grid.innerHTML = '<p class="media-loading">Loading videos…</p>';
  card.appendChild(grid);

  // Fetch YouTube RSS with multiple fallback strategies
  const P = u => `https://corsproxy.io/?${encodeURIComponent(u)}`;

  (async () => {
    try {
      let feedXml = null;

      // Strategy 1: use pre-configured channelId directly (fastest, zero scraping)
      const presetId = embed.channelId || null;
      if (presetId) {
        const r = await fetch(P(`https://www.youtube.com/feeds/videos.xml?channel_id=${presetId}`));
        if (r.ok) { const t = await r.text(); if (t.includes('<feed')) feedXml = t; }
      }

      // Strategy 2: legacy username URL — works for channels that registered a username
      if (!feedXml) {
        const r = await fetch(P(`https://www.youtube.com/feeds/videos.xml?user=${handle}`));
        if (r.ok) { const t = await r.text(); if (t.includes('<feed')) feedXml = t; }
      }

      // Strategy 3: scrape channel page to find the channelId, then fetch feed
      if (!feedXml) {
        const pageResp = await fetch(P(`https://www.youtube.com/@${handle}`));
        if (!pageResp.ok) throw new Error('page fetch failed');
        const html = await pageResp.text();
        const m = html.match(/"channelId":"(UC[a-zA-Z0-9_-]{22})"/)
               || html.match(/"externalId":"(UC[a-zA-Z0-9_-]{22})"/)
               || html.match(/channel\/([a-zA-Z0-9_-]{24})/);
        if (!m) throw new Error('channel ID not found');
        const r = await fetch(P(`https://www.youtube.com/feeds/videos.xml?channel_id=${m[1]}`));
        if (!r.ok) throw new Error('feed fetch failed');
        const t = await r.text();
        if (t.includes('<feed')) feedXml = t;
      }

      if (!feedXml) throw new Error('all strategies exhausted');
      const feedDoc = new DOMParser().parseFromString(feedXml, 'application/xml');
      const entries = Array.from(feedDoc.querySelectorAll('entry')).slice(0, count);

      if (!entries.length) {
        grid.innerHTML = '<p class="media-loading">No videos found.</p>';
        return;
      }

      grid.innerHTML = '';
      entries.forEach(entry => {
        // Extract video ID — prefer the yt:videoId namespace element, fall back to link href
        const videoId =
          entry.getElementsByTagNameNS('http://www.youtube.com/xml/schemas/2015', 'videoId')[0]?.textContent
          || (entry.querySelector('link[rel="alternate"]')?.getAttribute('href') || '').match(/[?&]v=([a-zA-Z0-9_-]+)/)?.[1]
          || '';
        if (!videoId) return;

        const title    = entry.querySelector('title')?.textContent || 'Untitled';
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
        const thumbUrl = `https://i.ytimg.com/vi/${videoId}/mqdefault.jpg`;
        const published = entry.querySelector('published')?.textContent || '';
        const date = published
          ? new Date(published).toLocaleDateString('en-IN', { month: 'short', year: 'numeric' })
          : '';

        const a = document.createElement('a');
        a.href = videoUrl;
        a.target = '_blank';
        a.rel = 'noopener noreferrer';
        a.className = 'media-yt-item';

        const img = document.createElement('img');
        img.className = 'media-yt-thumb';
        img.src = thumbUrl;
        img.alt = title;
        img.loading = 'lazy';
        img.onerror = function() { this.style.display = 'none'; };

        const info = document.createElement('div');
        info.className = 'media-yt-info';
        const titleSpan = document.createElement('span');
        titleSpan.className = 'media-yt-title';
        titleSpan.textContent = title;
        info.appendChild(titleSpan);
        if (date) {
          const dateSpan = document.createElement('span');
          dateSpan.className = 'media-yt-date';
          dateSpan.textContent = date;
          info.appendChild(dateSpan);
        }

        a.appendChild(img);
        a.appendChild(info);
        grid.appendChild(a);
      });
    } catch (_) {
      grid.innerHTML = '<p class="media-loading">Could not load videos.</p>';
    }
  })();

  return card;
}
// ─── Main render function ─────────────────────────────────────────────────────
function render(data) {
  const { profile, contact, links, media } = data;

  applyTheme(profile.theme, profile.name);

  // ── Meta / OpenGraph ────────────────────────────────────────────────────────
  setMeta('meta[name="description"]',          profile.bio);
  setMeta('meta[name="theme-color"]',           profile.theme.accent);
  setMeta('meta[property="og:title"]',          profile.name);
  setMeta('meta[property="og:description"]',    profile.bio);
  setMeta('meta[property="og:image"]',          profile.avatar);
  setMeta('meta[property="og:url"]',            window.location.href);
  setMeta('meta[property="og:site_name"]',      profile.name);
  setMeta('meta[name="twitter:title"]',         profile.name);
  setMeta('meta[name="twitter:description"]',   profile.bio);
  setMeta('meta[name="twitter:image"]',         profile.avatar);

  // ── Favicon ─────────────────────────────────────────────────────────────────
  const faviconHref = profile.favicon || profile.avatar;
  if (faviconHref) {
    const faviconEl = document.querySelector('link[rel="icon"]');
    if (faviconEl) faviconEl.href = faviconHref;
  }

  const content = document.getElementById('content');
  content.innerHTML = '';

  // ── Avatar ──────────────────────────────────────────────────────────────────
  const avatarWrap = document.createElement('div');
  avatarWrap.className = 'flex flex-col items-center gap-3 mb-4 animate-fade-in';

  const avatarEl = document.createElement('img');
  avatarEl.src = profile.avatar;
  avatarEl.alt = profile.name;
  avatarEl.className = 'w-24 h-24 rounded-full object-cover ring-2 ring-offset-2';
  avatarEl.style.outlineColor = profile.theme.accent;
  avatarEl.onerror = function () {
    const initials = profile.name.split(' ').slice(0, 2).map(w => w[0].toUpperCase()).join('');
    const fallback = document.createElement('div');
    fallback.className = 'w-24 h-24 rounded-full flex items-center justify-center text-2xl font-bold ring-2 ring-offset-2 avatar-fallback';
    fallback.textContent = initials;
    avatarEl.replaceWith(fallback);
  };

  const nameEl = document.createElement('h1');
  nameEl.className = 'text-xl font-bold profile-name text-center';
  nameEl.textContent = profile.name;

  const bioEl = document.createElement('p');
  bioEl.className = 'text-sm text-center profile-bio';
  bioEl.textContent = profile.bio;

  avatarWrap.appendChild(avatarEl);
  avatarWrap.appendChild(nameEl);
  avatarWrap.appendChild(bioEl);
  content.appendChild(avatarWrap);

  // ── Tabs ─────────────────────────────────────────────────────────────────────
  const tabContainer = document.createElement('div');
  tabContainer.className = 'w-full';

  const tabBar = document.createElement('div');
  tabBar.className = 'tab-bar w-full mb-4';
  const btnLinks = document.createElement('button');
  btnLinks.className = 'tab-btn active';
  btnLinks.textContent = 'Links';
  const btnMedia = document.createElement('button');
  btnMedia.className = 'tab-btn';
  btnMedia.textContent = 'Media';
  tabBar.appendChild(btnLinks);
  tabBar.appendChild(btnMedia);

  const panelLinks = document.createElement('div');
  panelLinks.className = 'tab-panel w-full flex flex-col gap-3';

  const panelMedia = document.createElement('div');
  panelMedia.className = 'tab-panel w-full flex flex-col gap-4 hidden';

  let mediaLoaded = false;

  [btnLinks, btnMedia].forEach((btn, idx) => {
    btn.addEventListener('click', () => {
      [btnLinks, btnMedia].forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panelLinks.classList.toggle('hidden', idx !== 0);
      panelMedia.classList.toggle('hidden', idx !== 1);
      // Lazy-load media content on first click
      if (idx === 1 && !mediaLoaded) {
        mediaLoaded = true;
        (media || []).filter(item => !item.hidden).forEach(item => {
          const embedType = item.embed && item.embed.type;
          if (embedType === 'wordpress-feed') {
            panelMedia.appendChild(buildMediaBlogCard(item));
          } else if (embedType === 'books-page') {
            panelMedia.appendChild(buildMediaBooksCard(item));
          } else if (embedType === 'youtube-uploads') {
            panelMedia.appendChild(buildMediaYouTubeCard(item));
          }
        });
      }
    });
  });

  tabContainer.appendChild(tabBar);
  tabContainer.appendChild(panelLinks);
  tabContainer.appendChild(panelMedia);
  content.appendChild(tabContainer);

  // ── Links panel: social links ──────────────────────────────────────────────
  const visibleLinks = (links || []).filter(l => !l.hidden);
  if (visibleLinks.length > 0) {
    panelLinks.appendChild(buildSectionLabel('Social'));
    visibleLinks.forEach((link, i) => {
      panelLinks.appendChild(
        buildLinkCard(link.url, link.icon, link.label, link.description, i * 60, link.action, link.actionUrl, link.embed)
      );
    });
  }

  // ── Links panel: contact ───────────────────────────────────────────────────
  if (contact) {
    const baseDelay = visibleLinks.length * 60;
    let contactIdx = 0;
    panelLinks.appendChild(buildSectionLabel('Contact'));

    if (contact.phone) {
      panelLinks.appendChild(
        buildContactCard(
          `tel:${contact.phone.replace(/\s/g, '')}`,
          'phone',
          contact.phone,
          baseDelay + contactIdx++ * 60
        )
      );
    }

    if (contact.email) {
      panelLinks.appendChild(
        buildContactCard(
          `mailto:${contact.email}`,
          'email',
          contact.email,
          baseDelay + contactIdx++ * 60
        )
      );
    }

    if (contact.location) {
      const mapsUrl = contact.location.url
        || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location.query || contact.location.label)}`;
      panelLinks.appendChild(
        buildContactCard(
          mapsUrl,
          'map',
          contact.location.label,
          baseDelay + contactIdx++ * 60
        )
      );
    }
  }

  // ── Footer ──────────────────────────────────────────────────────────────────
  const footer = document.createElement('p');
  footer.className = 'text-xs mt-6 mb-2 footer-text';
  footer.textContent = `© ${new Date().getFullYear()} ${profile.name}`;
  content.appendChild(footer);

  // Show content, hide skeleton
  document.getElementById('loading').classList.add('hidden');
  content.classList.remove('hidden');
  content.classList.add('flex');
}

// ─── Fetch links.json and bootstrap ──────────────────────────────────────────
fetch('links.json')
  .then(res => {
    if (!res.ok) throw new Error(`Failed to load links.json: ${res.status}`);
    return res.json();
  })
  .then(data => render(data))
  .catch(err => {
    console.error(err);
    const loading = document.getElementById('loading');
    loading.innerHTML = `<p class="text-red-400 text-sm text-center">Failed to load links.json.<br/>Make sure the file exists and you're serving via a local server.</p>`;
  });
