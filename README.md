# mattdekenah.com

One-page CV site for Matthew Dekenah — software engineering manager, former
test engineer, politico.

Built with [Astro](https://astro.build). Fully static output: fast, secure,
nothing to patch. Cloned and rebuilt from the original site at
[mattdekenah.com](https://mattdekenah.com) — a Start Bootstrap "Resume"
template running Bootstrap 4, jQuery and four CDN icon fonts — into
hand-written Astro, matching the pattern used for
[evelynstroud.com](../evelynstroud.com) and
[gabidekenah.com](../gabidekenah.com).

Nothing loads from a third-party CDN any more: fonts, icons and images are all
served from this origin.

## Structure

| Path | What it is |
| --- | --- |
| `src/pages/index.astro` | The one-page site (about → profile → experience → education → certifications → skills → languages → awards) |
| `src/components/Nav.astro` | Fixed left sidebar above 992px, collapsing top bar below it |
| `src/components/ExperienceItem.astro` | One role in the Experience section |
| `src/components/EducationItem.astro` | One institution in the Education section |
| `src/components/ContactForm.astro` | Web3Forms enquiry form (off by default — see below) |
| `src/pages/thanks.astro` | No-JavaScript fallback confirmation page for the form |
| `src/config.ts` | Site settings: name, email, social links, CV path, Web3Forms key |
| `src/content/` | All CV content, editable through Pages CMS |
| `src/lib/inline.ts` | Inline-markdown and email-obfuscation helpers |
| `src/styles/global.css` | The design system (colours, typography, spacing, breakpoints) |
| `public/images/` | Profile photo and employer/institution logos |
| `public/resources/` | The downloadable PDF CV |

## Local development

```bash
npm install
npm run dev       # dev server on http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve the built site
```

## Editing the content

The CV lives in `src/content/`, so it can be edited through
[Pages CMS](https://pagescms.org) (sign in at
[app.pagescms.org](https://app.pagescms.org) with GitHub) without touching
code. `.pages.yml` defines the editing forms.

| Where | What |
| --- | --- |
| `src/content/site/hero.md` | The blurb under your name and the current-role line |
| `src/content/site/profile.md` | Professional profile paragraphs and personal interests |
| `src/content/experience/*.md` | One file per role — `order: 1` sits at the top |
| `src/content/education/*.md` | One file per institution |
| `src/content/data/certifications.json` | Certifications and additional courses |
| `src/content/data/skills.json` | Technology logos, skill categories, key competencies |
| `src/content/data/languages.json` | Language groups and flags |
| `src/content/data/awards.json` | Awards and honours |

Ordering in Experience and Education is set explicitly by the `order` field
rather than derived from dates, because the original page lists Pain Concern
(a concurrent role) after NHS Lothian rather than in strict date order.

Single-line fields — award lines, certification lines, education bullets —
accept `**bold**`, `*italic*` and `[text](https://url)`. Anything else in them
is escaped, so CMS content can never inject markup.

Technology logos use [Iconify](https://icon-sets.iconify.design) names:
`devicon-plain:*` for the skills row, `flag:*` for languages,
`fa6-brands:*` for social links. They are inlined as SVG at build time, so
adding one costs nothing at runtime.

## Contact form

The original site has no form — it links to a `mailto:` address, and this
rebuild keeps that. The Web3Forms plumbing is in place but switched off, so
turning it on is a two-line change in `src/config.ts`:

1. Create a free access key at [web3forms.com](https://web3forms.com) using
   `m@dekenah.com` and paste it into `web3formsKey`.
2. Set `showContact: true`.

That adds a Contact section at the end of the page and a Contact entry in the
sidebar. `/thanks` already exists as the no-JavaScript fallback.

## Deployment

Live at [mattdekenah.com](https://mattdekenah.com) via Cloudflare, connected to
this repo's `main` branch — every push redeploys automatically.

`wrangler.jsonc` is committed deliberately — it stops Cloudflare's build
system auto-injecting the `@astrojs/cloudflare` adapter, which a fully static
site does not need.

## Search engine indexing

The codebase side of SEO is done:

- `astro.config.mjs` runs `@astrojs/sitemap`, generating `sitemap-index.xml`
  at build time (only `/` — `/thanks` and `/404` are excluded)
- `public/robots.txt` allows crawling and points at the sitemap. `/thanks` and
  `/404` are kept out of the index with a `noindex` meta tag rather than a
  `Disallow`: blocking them here would stop crawlers fetching the pages at
  all, so they would never see the `noindex`
- `src/lib/schema.ts` builds `Person` JSON-LD. The home page passes in
  `alumniOf`, `knowsLanguage` and `knowsAbout`, the first two derived from the
  education and languages content, so the structured data cannot drift from
  what the page says. It deliberately omits `email` — the visible address is
  entity-obfuscated, and repeating it in plain JSON-LD would undo that for no
  search benefit
- The `<title>` is kept under 60 characters so Google shows it whole
- Every page has a meta description, canonical URL, Open Graph and
  `og:type: profile` tags

What's left needs Matthew's own accounts:

1. **Force HTTPS.** `http://mattdekenah.com/` currently serves 200 rather than
   redirecting. Turn on **SSL/TLS → Edge Certificates → Always Use HTTPS** in
   Cloudflare so there is one canonical scheme.
2. **Google Search Console** — add `mattdekenah.com` as a property, verify via
   a DNS TXT record (easiest since Cloudflare manages the domain), then submit
   `https://mattdekenah.com/sitemap-index.xml` under **Sitemaps**. Use **URL
   Inspection → Request Indexing** to speed up the first crawl of the rebuilt
   site.
3. **Bing Webmaster Tools** — import the verified Google property, or verify
   the same way and submit the same sitemap.

The old site had Google Analytics (`UA-832650-8`) on it. That property is
Universal Analytics, which Google shut down in 2023, so it has not been
carried over. Add GA4 or Cloudflare Web Analytics if you want measurement.

## Differences from the original

Deliberate, and small:

- **Two typo fixes.** "…blog posts and networking.." (double full stop, in the
  FreeAgent Senior Test Engineer role) and "Sasol/**Golen** Key" in Awards.
- **AWS logo.** The skills row uses the current Devicon AWS mark rather than
  the older "amazon web services" wordmark the original's pinned Devicon
  v2.15.1 shipped.
- **Type scale below 360px.** The original keeps a 6rem `h1` at every width,
  which overflows and forces horizontal scrolling on the narrowest phones.
  The heading steps down below 360px only; at 360px and up it is unchanged.
- **Anchor scrolling.** Section links now account for the fixed top bar on
  mobile, so headings are not hidden behind it.
- **Accessibility.** Added a skip link, alt text on the logos (the original
  had `alt=""` throughout), accessible names on the icon-only social links,
  and a real `aria-expanded` toggle on the mobile menu.
