# Project Architecture Rules

- Keep reusable, user-triggered media controls in `src/components/shared`; this prevents duplicate playback logic and preserves browser autoplay compatibility.
- Store fixed generated narration in `public/audio`; this avoids runtime AI cost and makes repeat playback fast and reliable.