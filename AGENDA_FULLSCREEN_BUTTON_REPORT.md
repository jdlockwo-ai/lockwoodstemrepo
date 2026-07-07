# Agenda Fullscreen Button Report

Added a student-facing fullscreen button to `agenda.html`.

## What changed

- Added a `Full Screen Agenda` button above the agenda display.
- Uses the browser Fullscreen API when supported.
- Falls back to a CSS-based fullscreen layout if the browser blocks or does not support fullscreen.
- Button toggles to `Exit Full Screen` while fullscreen is active.
- Header/footer are hidden while fullscreen mode is active.

