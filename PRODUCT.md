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
- Photos: one gallery of approved submissions and wiki article images. Category chips filter it in place (`#photos/<cat>`); tags filter it too (`#tag/<name>`), with a tag picker for the full list. Tapping a photo opens a lightbox with its tags and related articles.
- Search: header button opens a search across photos, articles and meetings, with category chips and tag chips.
- Wiki: category rows of article cards; article pages with hero image, "See images" (that category's photos), Share, then body, community photos of the article, related articles, and the meetings that discussed it.
- Drawer: Account, Contribute, Admin (admins only), Accessibility, About, FAQ. A footer link also opens Accessibility.
- Bottom nav shows Council, Photos, Wiki with the current one marked. Header has hamburger, back, search, language.

## Constraints
- Static HTML/CSS/JS, no build step. Supabase for auth, data, storage.
- Accessible: 48px minimum touch targets, visible focus, reduced-motion respected, meaning never carried by colour alone (outcome pills pair colour with an icon).
- Phosphor icons, vendored locally.
- Images from Wikimedia Commons carry license credit in the caption.

## Current look
Light green theme (accent #1b7a4a on near-white), serif headings (Fraunces, falling back to Iowan Old Style / Charter / Georgia), system sans body, glass header and floating pill nav. Visitors can switch to dark mode, high contrast, a colour-blind-safe palette, larger text, reduced motion and extra selection marks from the Accessibility page. See DESIGN.md for tokens and components.

## Anti-goals
- No secrets in frontend code; only the publishable key.
- No unrequested features.
