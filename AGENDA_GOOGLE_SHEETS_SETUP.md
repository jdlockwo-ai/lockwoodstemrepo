# Agenda Google Sheets Setup

This site supports a Google Sheets-powered agenda page using the current course names: IED, POE, and ADM.

## Spreadsheet tabs
Use the included workbook: `downloads/LockwoodSTEM_Agenda_Google_Sheets_Template.xlsx`.

Recommended tabs:

- `IED`
- `POE`
- `ADM`
- `Quotes`

## Agenda columns
Keep these headers exactly as written:

`Date, Unit, Lesson Title, Agenda, Objectives, Standards, Important Announcements, Homework, Notes, Materials, Links`

Use semicolons inside a cell to create bullets on the website.

Example:

`Warm-up; Mini lesson; Project work time; Exit ticket`

## Publish the sheet

For each tab:

1. Open the Google Sheet.
2. Go to **File → Share → Publish to web**.
3. Select the tab.
4. Choose **Comma-separated values (.csv)**.
5. Publish and copy the link.
6. Paste each link into `assets/js/agenda-config.js`.

## File to edit

Update only this file when connecting a new Google Sheet:

`assets/js/agenda-config.js`

Daily agenda changes should be made directly in Google Sheets.
