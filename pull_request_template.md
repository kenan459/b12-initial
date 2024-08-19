# Description
[PR description, links to tasks and docs]

# Sanity checks

## Accessibility
- [ ] Ensure you have completed the relevant sections of the [Accessibility checklist](https://www.a11yproject.com/checklist/).
- [ ] Links with text "Learn more"/"Read more"/"Click here"/"icon_image" have proper `aria-label` attribute. Example: `aria-label="More information about {{ item.title }}`
- [ ] Any interactive element should have `focus` and `focus-visible` states
- [ ] Any clickable element should be navigable with a keyboard. Example: if we introduce slider, it should be navigable with arrows keys (changing slides), dots should be accessible with tabs and have proper `aria` labels.
- [ ] Color contrast checks. If new visuals were introduced (wireframes, icons etc.), [check the color contrast here](https://webaim.org/resources/contrastchecker/) to be AAA compliant. 

## PageSpeed optimization
  - [ ] No need to update

  - [ ] Images are served via `picture` tag with appropriate sizes provided in `data/_picture.yml`
  - [ ] SVGs are optimized via [SVGO](https://jakearchibald.github.io/svgomg/)
  - [ ] Images have `loading="lazy"` attribute
  - [ ] Any external script has `async` attribute
  - [ ] SCSS files are included only for the specific page(s) needed
  - [ ] Any new page has an 80+ mobile page speed score on https://web.dev/measure/
  - [ ] Any updated page has a mobile page speed score on https://web.dev/measure/ that is at least as good as the production one.

## SEO
  - [ ] No need to update

  - [ ] Add a redirect before deleting a page
  - [ ] Links have `aria-label` attribute
  - [ ] All images have `alt` attribute (Even if it is empty, provide default value)
  - [ ] Links have descriptive text: Try to avoid text such as "Learn more". Provide descriptive text like "Click to learn more about our product".
  - [ ] Tap targets are sized appropriately: eg. on mobile, links have enough padding around text to be tapped by finger.
  - [ ] Any new page has an 80+ SEO and accessibility score using the Lighthouse developer tab in Chromium-based browsers.
  - [ ] Any updated page has SEO and accessibility score using the Lighthouse developer tab in Chromium-based browsers that is at least as good as the production one.
