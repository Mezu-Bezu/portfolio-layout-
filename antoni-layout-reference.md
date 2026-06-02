# Antoni.de Portfolio Layout Reference

This is a practical breakdown of the portfolio layout style from `antoni.de`, rewritten as a reference for building a similar but original personal portfolio.

## Core Idea

The site works like a cinematic campaign archive, not a normal portfolio grid. The interface stays minimal so the work feels big, premium, and visual.

Main principles:

- Big media first
- Very little navigation
- Strong page transitions
- Large typography
- Short confident copy
- Case studies that feel like campaign decks
- Photos and videos carry most of the storytelling

## Main Navigation

Use a small fixed navigation:

- Cases
- About Me
- Process / Culture
- Contact

The header should stay simple with a small wordmark/logo on the left and links on the right. On mobile, use a hamburger menu with a full-screen overlay.

## Loading Screen

The original site uses a premium loading transition.

Recommended layout:

- Full-screen black loading layer
- Text: `Loading, please wait..`
- Five vertical curtain bars
- Bars animate away when the page loads
- Page becomes visible underneath

Placeholder:

```text
LOADING SCREEN
Loading, please wait..
```

## Page Transitions

The original site uses animated transitions between pages/cases.

Recommended layout:

- Fixed transition layer above the page
- Five vertical bars sweep up/down
- Trigger on nav clicks or case links
- Keep it fast, around 700-900ms

Purpose:

- Makes the site feel cinematic
- Hides jumps between sections
- Creates a premium agency-style rhythm

## Homepage Hero

The homepage should open with full-screen motion.

Structure:

- Full viewport hero
- Background video placeholder
- Large headline at the bottom
- Small eyebrow label
- Scroll cue or `View cases` link

Placeholder plan:

```text
VIDEO 1
Selected Portfolio
Focused visual work for brands, campaigns, and digital stories.
View cases
```

## Cases / Portfolio Carousel

The cases page should feel like a moving archive.

Structure:

- Section title: `Recent Work`
- Horizontal carousel
- Large cards, almost full screen
- Each card has video/photo media
- Title and client/year overlay at bottom
- Left/right controls on desktop
- Swipe/scroll behavior on mobile

Example placeholders:

```text
VIDEO 2 - Campaign One / Client / 2026
PHOTO 1 - Identity System / Client / 2026
VIDEO 3 - Launch Film / Client / 2025
PHOTO 2 - Digital Experience / Client / 2025
```

## Individual Case Header

Each case should start like a campaign landing page.

Structure:

- Full-screen hero video or image
- Big project title
- Client name
- Role/category
- Year
- Optional down arrow

Placeholder:

```text
VIDEO 4
Campaign One
Client Name
Creative Direction
2026
```

## Case Story Section

This section explains the project with one strong idea.

Structure:

- Large image/video on one side
- Large campaign headline on the other
- 1-2 short body paragraphs

Placeholder:

```text
PHOTO 3
The first section introduces the big idea.
Short explanation of the project, concept, and why it matters.
```

Writing style:

- Short
- Confident
- No long process essay
- Explain the idea, then show proof

## Media Proof Grid

This is where the case study becomes visual.

Structure:

- Three-column grid on desktop
- Single-column stack on mobile
- Mix photos and videos
- Large vertical and horizontal crops

Placeholder:

```text
VIDEO 5
PHOTO 4
VIDEO 6
```

## Statement Section

Use a big typography-only break between media sections.

Structure:

- Light background
- Small eyebrow label
- Huge sentence

Placeholder:

```text
Campaign Thought
Make the work impossible to ignore, then make the explanation short enough to remember.
```

Purpose:

- Gives breathing room
- Adds editorial rhythm
- Reinforces the project idea

## Gallery Section

Use a mixed-size image/video gallery.

Structure:

- Two-column layout on desktop
- Mixed heights
- Stacked on mobile

Placeholder:

```text
PHOTO 5
PHOTO 6
VIDEO 7
PHOTO 7
```

## About Me Section

This replaces antoni's agency/culture positioning with a personal portfolio section.

Structure:

- Portrait or personal visual on the left
- About copy on the right
- Big personal positioning statement
- Short bio paragraph
- Skills/services list

Placeholder:

```text
PHOTO 8
About Me
I build sharp visual stories with a focus on atmosphere, rhythm, and clear creative direction.
```

Example skill list:

- Creative direction
- Campaign concepts
- Photo and video layouts
- Interactive portfolio design

## Process Section

This is optional, but useful for a personal portfolio.

Structure:

- Light background
- Three cards
- Numbered steps

Example:

```text
01 Find the idea
02 Build the system
03 Make it move
```

Keep the process short. The original site does not over-explain process, so this should support the portfolio without becoming too corporate.

## Contact CTA

Every case/page should end with a strong CTA.

Structure:

- Full-screen or large dark section
- Small intro line
- Big headline
- Email link

Placeholder:

```text
Want to make great work together?
Work With Me
your@email.com
```

## Next Case Section

The original site keeps users moving through the archive.

Structure:

- Simple dark section
- Label: `Next case`
- Large next project title

Placeholder:

```text
Next case
Identity System
```

## Footer

Keep it minimal.

Recommended footer links:

- Top
- Cases
- About Me
- Contact
- Instagram / LinkedIn if needed

## Interaction Checklist

Use these interactions:

- Loading curtain on first page load
- Transition bars on internal navigation
- Header hides on scroll down and returns on scroll up
- Scroll reveal animations for sections
- Horizontal case carousel
- Hover zoom/brightness on case media
- Mobile full-screen menu
- Smooth scrolling

## Visual Style Checklist

Use these design rules:

- Mostly black and off-white
- Big typography with tight letter spacing
- Sparse copy
- Large full-width media
- Mixed photo/video layouts
- Strong contrast between dark and light sections
- Neutral UI so the work stands out
- Avoid decorative clutter

## Suggested Page Order

Recommended final layout order:

1. Loading screen
2. Fixed header/navigation
3. Hero with `VIDEO 1`
4. Cases carousel with `VIDEO 2`, `PHOTO 1`, `VIDEO 3`, `PHOTO 2`
5. Featured case header with `VIDEO 4`
6. Case story with `PHOTO 3`
7. Media proof grid with `VIDEO 5`, `PHOTO 4`, `VIDEO 6`
8. Big statement section
9. Gallery with `PHOTO 5`, `PHOTO 6`, `VIDEO 7`, `PHOTO 7`
10. About Me with `PHOTO 8`
11. Process section
12. Contact CTA
13. Next case
14. Footer

## Technical Notes

The original `antoni.de` site appears to use:

- WordPress
- Elementor
- Custom portfolio post type
- Custom Elementor widgets
- GSAP / ScrollTrigger
- Barba.js page transitions
- Swiper carousel
- Plyr video player
- Lazy-loaded videos/images

For this project, the same feeling can be recreated without copying their code by using:

- Static HTML sections
- CSS animations
- JavaScript scroll reveals
- Native horizontal scrolling
- Placeholder photo/video blocks

## Media Replacement Plan

Replace placeholders later like this:

```html
<div class="placeholder placeholder-video">VIDEO 1</div>
```

With:

```html
<video autoplay muted loop playsinline poster="photo-1.jpg">
  <source src="video-1.webm" type="video/webm" />
  <source src="video-1.mp4" type="video/mp4" />
</video>
```

Replace photo placeholders like this:

```html
<div class="placeholder placeholder-photo">PHOTO 1</div>
```

With:

```html
<img src="photo-1.jpg" alt="Project description" />
```

## Important Rule

Do not directly copy antoni.de assets, code, names, or exact case structure. Use the same portfolio logic and cinematic rhythm, but make the design, copy, and media your own.
