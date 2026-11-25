# Product

**Name:** Our Streets Trenton
**Surface modes:** Read (wiki articles, FAQ, About), Operate (admin, Contribute, account), Experience (Photos)

## What it is
A mobile-first, multilingual community wiki on local urban planning. Neighbors share photos and short explanations so anyone can see what a planning proposal could look like.

## Users
- Residents reading council meeting summaries and plain-language planning terms, mostly on phones.
- Volunteers contributing photos.
- Admins managing meetings, articles, wiki entries, and photo submissions.

## Languages
English, Spanish, Hindi, Tagalog, Korean, Mandarin. Language picked from a flag menu at the top right. All UI strings must exist in all six.

## Structure
- Council: date-grouped meetings with related articles.
- Photos: category chips above an image gallery (wiki article images and approved submissions).
- Wiki: category rows of article cards; article pages with hero image, "See images", Share, and related articles.
- Drawer: Account, Contribute, Admin (admins only), About, FAQ.
- Bottom nav shows Council, Photos, Wiki with the current one marked. Header has hamburger, back, search, language.

## Constraints
- Static HTML/CSS/JS, no build step. Supabase for auth, data, storage.
- Accessible: 48px minimum touch targets, visible focus, reduced-motion respected.
- Phosphor icons, vendored locally.
- Images from Wikimedia Commons carry license credit in the caption.

## Current look
Light green theme (accent #1b7a4a on near-white), serif headings (Fraunces, falling back to Iowan Old Style / Charter / Georgia), system sans body, glass header and floating pill nav.

## Anti-goals
- No secrets in frontend code; only the publishable key.
- No unrequested features.
