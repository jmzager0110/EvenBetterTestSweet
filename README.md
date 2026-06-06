# Welcome to the Even Better Test Sweet
## Powered by Playwright

## Table of Contents
1. [Overview](#overview)
2. [Structure](#structure)
3. [Bug Report](#example---bug-report)
4. [What's Next](#whats-next)
5. [References](#references)

## Overview
I am a certified full-stack developer, working in Test. Naturally, I have deployed a bunch of personal projects, but I wanted a sophisticated testing strategy for my virtual resume.

### Structure
Powered by Playwright, initially, this has a "smoke" level of validation, plus a tiny accessibility test thanks to Axe-Core. Tests are stored in the tests directory, then organized by testing approach: a11y, functionality, & visual.

## Example - Bug Report
### Results of post-initial release automated tests
#### Summary
9 out of 10 tests failed, tested for Chrome desktop & mobile Safari.

#### Breakdown
##### Functionality
1. Has Title, Desktop
2. Has Title, Mobile
 - Expected pattern: /Jessica Zager/
 - Received string:  "Jesica Zager"
 - Can reporoduce manually using dev tools, CTRL+F in Elements for "title"
3. Link Responses, Desktop
4. Link Responses, Mobile
 - Test Error, need to update assertion:
 - Expected substring: "Example Domain"
 - Received string:    "<!DOCTYPE html>
5. Links, Mobile only
 - Test Error:
 - Nav locators for desktop & mobile are not the same, need to update locator

##### Visual
6. Smoke, Desktop
7. Smoke, Mobile
 - Test Error:
 - Screenshots did not exist

##### Accessibility
8. Smoke, Desktop
 - Many A11Y concerns found: 
 - Expected  -    1
 - Received  + 1396
9. Smoke, Mobile
 - Many A11Y concerns found: 
 - Expected  -    1
 - Received  + 1391


## What's Next?
1. Build out A11Y Results Reporter
2. Create a dashboard for at-a-glance results review

## References