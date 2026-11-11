# DESIGN SYSTEM SPECIFICATION
## Project: Temkin's World
**Design Philosophy:** Luxury Editorial, Modern Engineering, Humanist Warmth  
**Version:** 1.0.0  

---

### 1. Palette & Color Tokens

The visual identity combines technical rigor with Ethiopian warmth and high-fashion editorial craftsmanship.

#### 1.1 Core Palette
| Token | Hex Value | Name / Purpose |
| :--- | :--- | :--- |
| `--bg-primary` | `#F5F2FA` | Main canvas background; warm tinted porcelain. |
| `--bg-card` | `#FFFFFF` | Elevated surfaces, cards, and modal containers. |
| `--tint-lilac` | `#D8CDEE` | Subtle structural borders, glow highlights, tag backgrounds. |
| `--accent-lavender` | `#8A75B3` | Primary brand accent, active interactive elements, link hovers. |
| `--text-dark` | `#1E1B24` | Primary high-contrast body and heading typography. |
| `--text-muted` | `#5E5868` | Secondary captions, dates, labels, and helper copy. |

#### 1.2 Supporting Palette
| Token | Hex Value | Role |
| :--- | :--- | :--- |
| `--blush` | `#EDE5E9` | Warm ambient mesh gradients and subtle button states. |
| `--warm-ivory` | `#EAE4D8` | Contrast pill backgrounds and document containers. |
| `--muted-mauve` | `#766A82` | Tertiary subtle borders and dark-mode accents. |
| `--soft-sage` | `#DDE8DF` | Status badges, verified markers, and success notifications. |

---

### 2. Typography Hierarchy

The typographic system pairs an expressive editorial serif for display headlines with an ultra-legible, geometric sans-serif for technical readability.

```
Display 1 (Hero Title):   Playfair / Cormorant (48px - 64px, weight: 600, leading: 1.1)
Heading 2 (Section Title): Playfair / Cormorant (32px - 40px, weight: 600, leading: 1.2)
Heading 3 (Card Titles):   Manrope / Inter (20px - 24px, weight: 600, leading: 1.3)
Body Regular:             Manrope / Inter (15px - 16px, weight: 400, leading: 1.6)
Body Small / Captions:    Manrope / Inter (13px - 14px, weight: 500, leading: 1.5)
Editorial Overline Tags:  Manrope / Inter (11px - 12px, uppercase, tracking: 0.18em)
```

---

### 3. Surface & Elevation Tokens

- **Border Delicate:** `rgba(216, 205, 238, 0.45)` — Subtle separation lines.
- **Border Card:** `rgba(138, 117, 179, 0.15)` — Default boundary for resting cards.
- **Glass Pill:**
  ```css
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(216, 205, 238, 0.6);
  ```
- **Card Luxury (`.card-luxury`):**
  ```css
  background: #FFFFFF;
  border: 1px solid rgba(216, 205, 238, 0.55);
  box-shadow: 0 12px 36px -12px rgba(138, 117, 179, 0.12);
  border-radius: 1.5rem;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  ```
- **Hover State Elevation:**
  ```css
  box-shadow: 0 22px 50px -14px rgba(138, 117, 179, 0.22);
  border-color: rgba(138, 117, 179, 0.4);
  transform: translateY(-4px);
  ```

---

### 4. Signature Signature Animation Tokens

#### 4.1 Organic Portrait Frame (`.organic-portrait-frame`)
A continuous, subtle morphing border-radius providing organic warmth to Temkin's portrait:
```css
@keyframes organicWobble {
  0%   { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
  33%  { border-radius: 58% 42% 38% 62% / 54% 38% 62% 46%; }
  66%  { border-radius: 35% 65% 60% 40% / 60% 50% 50% 40%; }
  100% { border-radius: 42% 58% 70% 30% / 45% 45% 55% 55%; }
}
```

#### 4.2 Floating Ambient Mesh (`.floating-mesh`)
Blurred pastel orbs positioned off-canvas to generate gentle lighting gradients:
```css
filter: blur(70px);
border-radius: 9999px;
pointer-events: none;
opacity: 0.65;
```

---

### 5. UI Component Primitives

1. **Buttons:**
   - **Primary Action:** Solid `#8A75B3` with white text, rounded-full, gentle lift on hover.
   - **Secondary / Glass:** Translucent white with `#8A75B3` border and text.
   - **Interactive Rituals:** Animated pulse with emoji badges (Coffee ☕, Cheers 🥂).
2. **Form Controls:**
   - Clean white background, `#D8CDEE` border, focus ring `#8A75B3`, smooth transitions.
3. **Modals & Drawers:**
   - Darkened translucent backdrop (`bg-[#1E1B24]/40` + `backdrop-blur-sm`).
   - Centered spring reveal animation via Framer Motion.
4. **Easter Egg Terminal:**
   - High-contrast obsidian terminal (`#1E1B24`) with emerald typography (`#34D399`) and blinking cursor.
