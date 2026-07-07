# Homepage ASE Unit 0 Button Removal Report

Removed homepage button/card links that referred to ASE Unit 0.

## Removal counts

- `\s*<a\b[^>]*href="[^"]*(?:aerospace-systems-engineering|poe|...`: 1
- `\s*<a\b[^>]*>[^<]*(?:ASE\s*Unit\s*0|Unit\s*0\s*ASE|Aerospace...`: 0
- `\s*<article\b(?:(?!</article>).)*?(?:ASE\s*Unit\s*0|Unit\s*0...`: 0
- `\s*<div\b[^>]*class="[^"]*(?:card|button|quick|resource|acti...`: 0

## Homepage phrase check

- `ASE Unit 0`: 0
- `Aerospace Systems Engineering Unit 0`: 0
- `unit-0.html`: 0
- `Unit 0`: 1
