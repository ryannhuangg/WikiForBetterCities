# Design

Documented from `style.css` and `script.js` as of 2026-11-18. Light, calm, civic. Green accent on near-white, serif headings, glass chrome, image-led cards. Phone first (iPhone), widened at 900px.

## Color
| Token | Value | Use |
|---|---|---|
| `--bg` | `#fbfdfb` | Page background, safe-area strip |
| `--fg` | `#10241a` | Body and heading text |
| `--mut` | `#51655a` | Secondary text, captions, card body |
| `--accent` | `#1b7a4a` | Links, icons, active chip, primary button, card lead edge |
| `--tile` | `#eef7f1` | Thumb fallback, active nav and drawer item, hover |
| `--card` | `#fff` | Cards, inputs, details |
| `--line` | `rgba(16,60,36,.13)` | All borders and dividers |
| `--glass` | `rgba(255,255,255,.7)` | Header, buttons, nav pill |
| `--glass2` | `rgba(255,255,255,.96)` | Drawer, language menu |

Other fixed values: scrim `rgba(16,36,26,.3)`; photo caption gradient `transparent` to `rgba(0,0,0,.65)` with white text. Light only (`color-scheme:light`). No dark theme.

## Typography
- Serif: `Fraunces` (Google Fonts, 600 only), falling back to Iowan Old Style, Charter, Georgia. Used for h1, h2, h3, brand, date headers.
- Sans: system-ui stack. Used for body, buttons, chips, labels.
- Scale:
  - Body 17px / 1.6
  - h1 30px / 1.15, -0.015em
  - Date header and h2 20px / 1.2
  - Lead card title 21px
  - Card title 18px / 1.3
  - Compact card title 16px
  - Lede 19px
  - Buttons, chips, labels 16px / 600
  - Photo caption 14px
  - Credit line 13px
- Form controls never go below 16px (prevents iOS zoom).
- Weights are 600 for emphasis and 400 for body. Nothing else.

## Shape and spacing
- Radii: 10px thumbs, 12px cards, inputs and photo tiles, 14px hero and gallery tiles, 999px all buttons, chips, nav and brand controls.
- Spacing is ad hoc, not on a scale. Recurring values: 6, 8, 10, 12, 14, 16, 20, 24, 32px.
- Page gutter 16px plus safe-area insets. Content column 720px; 1040px on wide pages (Wiki, Photos, search) from 900px.
- Touch targets: 48px buttons, 56px inputs and primary buttons, 56px nav items, 44-46px chips.

## Elevation and glass
- Header: `--glass`, blur 18px, saturate 1.5, 1px `--line` bottom border, sticky.
- Floating nav pill: bottom center, 400px max, `--glass`, blur 20px, shadow `0 8px 28px rgba(16,60,36,.12)`.
- Drawer and language menu: `--glass2`, blur 18-22px; menu shadow `0 12px 32px rgba(16,60,36,.12)`.
- Cards are flat: 1px border, no shadow.

## Components
- **Button `.btn`:** pill, glass fill, 1px line, 600 weight. Variants: `.icon` (48px circle), `.solid` (full-width accent, 12px radius), `.ghost` (full-width, accent text).
- **Chip `.chip`:** pill, glass, `.on` fills accent with white text. Used for categories, admin tabs.
- **Card `.card`:** thumb plus text. Variants:
  - `.media` image on top at 16:10, text below.
  - `.lead` accent left edge, larger title (Council meeting).
  - `.sm` compact 44px thumb (related articles on Council).
- **Thumb `.thumb`:** tile-colored box with centered Phosphor icon, or an image. Falls back to the category icon when no image.
- **Photo tile `.shot`:** square, cover image, bottom gradient caption.
- **Row `.row`:** horizontal snap scroller on phones, 3-column grid from 900px.
- **Nav pill `#tabs`:** all three sections, current marked by `aria-current` with tile background and accent text.
- **Drawer:** left, 310px max, slides in with 250ms ease; scrim behind it. Page content is inert while open.
- **Skip button `.skip`:** hidden above the screen until focused.
- **Form field `.field`:** label above, 56px input, 12px radius, hairline border.
- **Admin:** chip tabs, hairline-separated rows `.arow`, filter input, error banner `#aerr`.

## Signature: lane lines and category tints
- Dashed center-line motif: a short accent dash bar under each page h1, and dashed `--lane` rules after Council date headings and in the drawer.
- Each category has a quiet tint (`--t-<cat>`) and a dot color (`--d-<cat>`): roads slate-green, bridges blue-gray, structures stone, transit sky, parks leaf, zoning sand. Tints fill icon thumbnails and the article category pill; dots mark Wiki section headings. Text and the accent stay green for contrast.
- Council lead cards carry an optional outcome pill (from `meetings.outcome`).

## Icons
Phosphor regular, vendored (`phosphor.css`, `Phosphor.woff2`). 24px default, 34px in thumbs, 56px in image-less media cards, 26px in nav. Accent color. Category icons: road-horizon, bridge, buildings, bus, tree, map-trifold, plus images for All.

## Motion
Light. Drawer slide and scrim fade at 250ms, button press scale .97. Council cards and Photos tiles below the fold fade and rise on first view (IntersectionObserver, 60ms stagger, `opacity` and `transform` only); the page h1 dash bar (Photos and other pages too) draws in; the language and accessibility menus pop open with a short stagger, and toggles and segmented buttons ease between states; linked cards lift 2px on hover where hover exists. `prefers-reduced-motion` and the in-app Reduce motion setting turn off all of it. No page transitions.

## Platform rules (iPhone)
- `viewport-fit=cover`; top, bottom, left and right safe-area insets respected.
- Double-tap zoom off, overscroll bounce off, native control styling removed, hover styles only where hover exists.
- Home-screen install: manifest, 180px icon (signpost on accent green), standalone display.
- Landscape phone: media images shorten to 21:9.

## Accessibility baseline
Visible 3px accent focus ring with 2px offset, per-page titles, focus moves to content after navigation, skip button, labeled search, `aria-current` on active nav and drawer items, tab roles on admin tabs. Alt text on hero and gallery images; card thumbnails are decorative (`alt=""`).

## Content rules
- All user-visible strings exist in six languages: en, es, hi, tl, ko, zh. Admin labels and article bodies are currently English only.
- Wikimedia images carry a license credit in the figcaption.
- All content from the database or visitors is escaped before it reaches HTML.

## Known gaps
- Spacing has no defined scale.
- `.tile`, `.tile i` and `.tile .lab` are no longer used (the Photos page now uses chips and a gallery).
- Photos has two sections: Community photos, then From the wiki.
- No dark theme, no focus-ring treatment on glass beyond the default.
- Type has no defined scale for languages with taller scripts (Hindi, Korean, Chinese).
