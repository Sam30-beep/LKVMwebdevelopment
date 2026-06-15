# LKVM Web Development

A responsive bilingual landing page for the ABSS free summer preparation camp in Imamganj, Gaya, Bihar. The site presents camp details for students preparing for Navodaya, Netarhat, and Sainik School entrance exams.

## Live Preview

https://sam30-beep.github.io/LKVMwebdevelopment/

## Project Overview

This project is a static HTML, CSS, and JavaScript website focused on a free one-month summer preparation camp by Awashya Bal Shikshan Sansthan (ABSS). It highlights the camp purpose, eligibility, duration, venue, benefits, and contact numbers.

The registration buttons are intentionally kept as placeholder links so another registration flow can be connected later.

## Key Features

- Hindi and English language switcher
- Responsive layout for mobile, tablet, and desktop
- Clear hero section for the free summer camp offer
- Quick camp information: duration, eligibility, and venue
- Benefits section covering teachers, tests, curriculum, and free access
- Contact-ready call button and helpline details
- GitHub Pages deployment workflow included

## Camp Details

- Organizer: Awashya Bal Shikshan Sansthan (ABSS)
- Program: Free Summer Preparation Camp
- Exams: Navodaya, Netarhat, and Sainik School entrance preparation
- Duration: June 10 to July 10
- Eligibility: Classes 3 to 8
- Venue: Imamganj, Gaya, Bihar
- Helpline: 9523012888, 9801664500

## Project Structure

```text
.
├── .github/workflows/static.yml
├── css/style.css
├── index.html
├── js/main.js
└── README.md
```

## Tech Stack

- HTML5
- CSS3
- Vanilla JavaScript
- GitHub Pages

## Local Development

Run a local static server from the project root:

```bash
python3 -m http.server 8000
```

Open the site at:

```text
http://localhost:8000
```

## Deployment

The project deploys automatically to GitHub Pages using the workflow in `.github/workflows/static.yml` whenever changes are pushed to the `main` branch.
