# Let Music Speak static website

This is a no-build static website designed for free hosting on Netlify.

## Included
- Home
- What We Do
- Live Music for Your Community
- Regional senior-living pitch page
- About
- Contact
- Donate placeholder
- Responsive CSS
- Netlify Forms contact form
- Netlify config

## Before launch
1. Replace the Continuo video placeholder link on `live-music.html`.
2. Confirm the final PaoliFest URL.
3. Add your real donation destination on `donate.html`.
4. Review any factual wording you want adjusted before publication.

## Deploy to Netlify
Fastest route:
1. Create a free Netlify account.
2. Drag the entire `let-music-speak-static` folder into Netlify's manual deploy area, or connect a GitHub repo.
3. Netlify will give you a temporary `*.netlify.app` URL.
4. Test every page and the contact form.
5. Add `letmusicspeak.org` as a custom domain in Netlify.
6. Update DNS at IONOS only after the Netlify site is working.

Netlify Forms is already enabled in `contact.html`.

## Domain / IONOS
You can keep the domain registered at IONOS and stop using MyWebsite Now. You only need to change the DNS records so the domain points to Netlify. Do not cancel the domain registration itself.

## Recommended workflow
For easiest future edits, put these files in a GitHub repository and connect the repo to Netlify. Each GitHub push will automatically redeploy the site.
