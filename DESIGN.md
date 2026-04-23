# DESIGN.md - Design Specifications: DjLabo Landing Page

## 1. Project Overview

- **Objective:** Presentation of DjLabo's profile, showcase of their work (sets/tracks), and client acquisition (booking).
- **Visual Style:** Nocturnal, energetic, modern, immersive.
- **Color Mode:** Dark Mode (default and only mode).

---

## 2. Color Palette (Tokens)

The design is based on very dark backgrounds to highlight neon accent colors, simulating the lighting of a club or festival.

| Token              | Hex Value | Main Use                                               |
| :----------------- | :-------- | :----------------------------------------------------- |
| `color-bg-base`    | `#09090B` | Main page background (almost black).                   |
| `color-bg-surface` | `#18181B` | Cards, modals, secondary backgrounds.                  |
| `color-primary`    | `#00E5FF` | Neon Cyan. Call to action button (main CTA), links.    |
| `color-secondary`  | `#D500F9` | Neon Purple. Hover states, graphic details, gradients. |
| `color-text-main`  | `#FAFAFA` | Main text (headings and highlighted body).             |
| `color-text-muted` | `#A1A1AA` | Secondary text, subheadings, long descriptions.        |
| `color-border`     | `#27272A` | Subtle borders to separate sections or cards.          |

---

## 3. Typography

A combination of a geometric/modern display font for headings and a highly readable sans-serif font for long texts is used.

- **Primary Font (Headings):** `Outfit` or `Syne`.
  - Weight: SemiBold (600) and Bold (700).
  - Transformation: Uppercase recommended in the Hero.
- **Secondary Font (Body):** `Inter` or `Manrope`.
  - Weight: Regular (400) and Medium (500).

### Typographic Scale (Desktop)

- `H1` (Hero): 4rem (64px) / Line-height: 1.1 / Letter-spacing: -2%
- `H2` (Sections): 2.5rem (40px) / Line-height: 1.2
- `H3` (Cards): 1.5rem (24px) / Line-height: 1.3
- `Body Large`: 1.125rem (18px) / Line-height: 1.6
- `Body Base`: 1rem (16px) / Line-height: 1.5

---

## 4. Spacing System and Grid

System based on multiples of 8px to maintain vertical and horizontal rhythm.

- **Grid System:** 12 columns.
  - Container max-width: `1200px`.
  - Gutter (Space between columns): `24px`.
  - Side margins (Mobile): `16px`.
- **Spacing Tokens:**
  - `space-xs`: 8px
  - `space-sm`: 16px
  - `space-md`: 24px
  - `space-lg`: 48px
  - `space-xl`: 80px (ideal for separation between sections)

---

## 5. User Interface (UI) Components

### Buttons

- **Primary Button (Booking):**
  - Background: `color-primary` (#00E5FF)
  - Text Color: `#000000` (Black for maximum contrast)
  - Border-radius: `4px` (or `999px` if you prefer a pill style).
  - Hover: Outer glow (`box-shadow: 0 0 15px rgba(0, 229, 255, 0.5);`) and subtle transformation (`scale: 1.02`).
- **Secondary Button (Listen/See more):**
  - Background: Transparent.
  - Border: 2px solid `color-primary`.
  - Text Color: `color-primary`.
  - Hover: Background `color-primary`, Text Color `#000000`.

### Cards

- **Surface:** `color-bg-surface`.
- **Border:** 1px solid `color-border`.
- **Border-radius:** `12px`.
- **Inner padding:** `space-md` (24px).
- **Hover on interactive cards:** Subtle elevation with box-shadow and `color-secondary` border on mouse hover.

### Forms (Inputs & Textareas)

- **Background:** Transparent or `color-bg-base`.
- **Border:** 1px solid `color-border`.
- **Border-radius:** `8px`.
- **Padding:** 12px 16px.
- **Focus State:** Border changes to `color-primary` with a slight glow.

---

## 6. Landing Page Structure (Layout)

1. **Header (Navigation):**
   - Logo on the left (DjLabo), links in the center (Bio, Music, Events), "Booking" button on the right. Sticky with semi-transparent background and `backdrop-filter: blur(10px)`.
2. **Hero Section:**
   - Full-screen background image/video with dark overlay (`rgba(0,0,0,0.6)`).
   - Giant Title: DjLabo + Tagline (e.g., "Elevating the energy of your event").
   - 2 Buttons: "Book Now" (Primary) and "Listen to Latest Set" (Secondary).
3. **Biography (About):**
   - 50/50 Layout: Professional profile image of DjLabo on one side, descriptive text on the other.
4. **Music & Sets:**
   - Integration of widgets (SoundCloud, Spotify, or Mixcloud).
   - Horizontal cards of the latest releases or sessions.
5. **Gallery / Past Events:**
   - Masonry Grid with high-quality photos of parties and events.
6. **Booking Form (Contact):**
   - Title: "Make your event unforgettable".
   - Fields: Name, Email, Event Date, Event Type (Dropdown: Club, Wedding, Festival, Private), Message.
   - Highlighted Submit button.
7. **Footer:**
   - Links to social networks (Large icons), direct contact email, and legal notice.
