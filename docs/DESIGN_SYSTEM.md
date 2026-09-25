# Montra Electric design system

Implementation guide for the home page. Tokens live in `src/styles/tokens.css`; components must use tokens, never raw values.

## Context and goals

Clean, functional, implementation-first UI for shoppers browsing Montra Electric vehicles. Target: WCAG 2.2 AA, keyboard-first.

## Design tokens and foundations

| Group      | Tokens |
| ---------- | ------ |
| Font       | `--font-family-primary` (Lato + system stack); sizes `--font-size-xs..4xl` = 12, 13, 14, 16, 18, 24, 32, 40px; weights regular 400 / bold 700; base line height 20px, body 24px |
| Colour     | `--color-text-primary #333`, `--color-text-muted`, `--color-text-inverse #fff`, `--color-text-link #0a58ca`, `--color-accent #0d6efd`, `--color-surface-base #000`, `--color-surface-raised #f9fafb`, `--color-border-subtle #e0e0e0`, `--color-border-strong #757575`, `--color-focus #0d6efd` |
| Spacing    | `--space-1..10` = 2, 3, 4, 8, 9, 10, 12, 14, 20, 30px; `--space-section` 60px (90px from 768px); `--space-gutter` 20px (30px from 768px) |
| Radius     | `--radius-xs` 4, `--radius-sm` 8, `--radius-md` 14. `--radius-lg/xl` (50/100) exist but must not be used for buttons or cards |
| Shadow     | `--shadow-1..4` from the design system; cards rest on `--shadow-3` and lift to `--shadow-1` |
| Motion     | `--motion-instant` 150ms, `--motion-fast` 250ms, `--motion-normal` 300ms, `--motion-slow` 600ms |

Notes on contrast: `--color-surface-brand #3b8df7` is decorative only (white on it is 3.3:1). Link text uses `--color-text-link`, an AA-safe step of the `#0d6efd` accent.

## Component rules

### Button (`src/components/ui/Button.jsx`)

- Variants: `primary` (black), `secondary` (outlined), `inverse` and `outline-inverse` (for dark surfaces). Sizes: `md` (44px tall) and `sm` (36px).
- Renders a link when `href` is set, otherwise a `<button>`.
- States: default; hover (background/border change); focus-visible (2px `--color-focus` outline, 2px offset); active (1px press); disabled (`aria-disabled` + `tabindex=-1` for links, opacity .5); loading (`aria-busy`, spinner, no interaction).
- Must be reachable and operable by keyboard, mouse and touch. Minimum target 44px on touch layouts.

### Card (range card, media card)

- Radius `--radius-md`, 1px `--color-border-subtle`, resting `--shadow-3`; hover lifts 4px and uses `--shadow-1`; focus-visible outline as above.
- The whole card is a single link. Its accessible name comes from the card title (`aria-labelledby`).
- Long content: titles clamp to 3 lines, cards in a row stretch to equal height, the source tag or CTA sits at the bottom.
- Responsive: 3 columns above 900px, 1 column below; range cards go horizontal between 600px and 899px.

### Carousel (hero)

- Autoplay pauses on hover and keyboard focus, and has an explicit pause/play button. It must not autoplay when `prefers-reduced-motion` is set.
- Controls: labelled tabs, previous/next buttons, left/right arrow keys, touch swipe.
- Inactive slides are `inert`; the region has `aria-roledescription="carousel"` and each slide is labelled "n of N".

## Accessibility acceptance criteria

1. Every interactive element shows a visible focus ring with at least 3:1 contrast (`--color-focus`).
2. Body text contrast is at least 4.5:1 (primary `#333` on white is 12.6:1; muted is 7:1).
3. All controls are operable with the keyboard alone; touch targets are at least 44px.
4. With `prefers-reduced-motion: reduce`, no autoplay and no transform/transition animations run.
5. Auto-updating content can be paused by the user.

## Content and tone

Concise, confident, implementation-focused. Labels name the action and target: "Explore Super Cargo", "Call +977 971-7101010". Avoid "Click here" or "Learn more" on its own.

## Anti-patterns

- Raw hex values, one-off spacing or font sizes in components.
- Pill-shaped (`--radius-lg/xl`) buttons and cards.
- Text placed over photos with dark gradients or overlays.
- Focus outlines removed without a replacement.

## QA checklist

- [ ] All colours, sizes, spacing, radius, shadow and motion values come from tokens.
- [ ] Every component defines default, hover, focus-visible, active, disabled and loading states.
- [ ] Tab through the page: order is logical and the focus ring is always visible.
- [ ] Layouts hold at 390px, 768px and 1440px with no horizontal scroll.
- [ ] Long titles and missing images do not break card layouts.
- [ ] Reduced-motion setting stops autoplay and animation.
