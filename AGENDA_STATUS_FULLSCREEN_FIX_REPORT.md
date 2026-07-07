# Agenda Status and Fullscreen Fix Report

Fixed the agenda page based on the screenshot feedback.

## Fixed

- Removed the dynamic `Google Sheet connected` badge from `agenda.js`.
- Removed the `sheetBadge` element from `agenda.html`.
- Removed the blank hero aside card.
- Removed the old top fullscreen button row.
- Added the fullscreen button directly inside the agenda controls next to the navigation buttons.
- Updated the status row to use three badges instead of four.

## QA

- agenda html has agendaFullscreenBtn: True
- agenda html has sheetBadge: False
- agenda js has sheetBadge: False
- agenda js has Google Sheet connected: False
- agenda html has empty hero aside: False
- agenda html has top fullscreen row: False
