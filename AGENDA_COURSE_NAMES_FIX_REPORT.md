# Agenda Course Names Fix Report

Updated the Google Sheets agenda system to use the current course names.

## Course IDs

- IED
- POE
- ADM

## Updated files

- `agenda.html` course dropdown
- `assets/js/agenda-config.js` CSV key names and default course
- `assets/js/agenda.js` course defaults, themes, and CSV lookup
- `AGENDA_GOOGLE_SHEETS_SETUP.md` tab names
- `downloads/LockwoodSTEM_Agenda_Google_Sheets_Template.xlsx` tab names

## Compatibility

The JavaScript still supports old CSV aliases if an older config uses AED, ASE, or AM keys.

## Old key references left intentionally

{
  "AED": [
    "assets/js/agenda-config.js",
    "assets/js/agenda.js"
  ],
  "ASE": [
    "assets/js/agenda-config.js",
    "assets/js/agenda.js"
  ],
  "AM": [
    "assets/js/agenda-config.js",
    "assets/js/agenda.js"
  ]
}