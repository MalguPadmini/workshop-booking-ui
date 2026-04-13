# FOSSEE Workshop Booking Portal — React UI Redesign
Autor : Padmini Malgu (IIIT Kota)

## Overview
A React-based UI/UX redesign of the FOSSEE workshop_booking Django portal. Keeps all core functionality (workshop listing, booking, dashboard, profiles) while modernising the visual layer from Bootstrap 3 to a custom, accessible design system.

## Improvements Made
- **Modern UI Architecture**: Replaced Bootstrap 3 with a purpose-built CSS design token system.
- **Mobile-First Layout**: Fully responsive navigation, fluid grids, and touch-optimised components.
- **Dynamic Workshop Cards**: Features seat-fill progress bars and real-time status badges.
- **Enhanced Visuals**: Hero section with animated morphing blob backgrounds and smooth entry transitions.
- **A11y Focused**: Semantic HTML5, focus-visible outlines, and ARIA labels for screen readers.
- **High Performance**: Vanilla CSS keyframe animations used instead of heavy JS animation libraries.

## Design Principles
- **Typography**: `DM Serif Display` (headings) for academic warmth + `DM Sans` (body) for clarity.
- **Color Palette**: Navy primary for institutional trust, Amber accent for energy.
- **Spacing**: 4px-base token scale for consistent rhythm across all components.
- **Interaction**: Subtle hover lifts and transitions (≤250ms) for perceived speed.

## Responsiveness
- **CSS Grid**: Utilises `auto-fill / minmax()` for flexible multi-column layouts.
- **Fluid Type**: Uses `clamp()` for scaling fonts without breakpoint-dependent overrides.
- **Navigation**: Mobile drawer menu with an animated hamburger icon.
- **Touch Ready**: Minimum 44px targets on all interactive elements.

## Trade-offs & Challenges
- **Data Layer**: Currently uses mock data; requires backend CORS configuration for production Django API.
- **Statistics**: Charts deferred (SVG-based implementation recommended for v2).
- **Architecture**: Bridging the gap between Django’s SSR and React’s SPA approach via proxy.
- **Concurrency**: Seat availability requires WebSockets or polling for real-time accuracy.

## Future Improvements
- Backend integration with Django APIs
- Real-time booking updates
- Advanced filtering and search

## Getting Started

### Installation
```bash
git clone <https://github.com/MalguPadmini/workshop-booking-ui.git>
cd workshop-booking
npm install
