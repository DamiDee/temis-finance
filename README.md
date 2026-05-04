# Temi's Financial Academy — Website

A premium, Apple-standard single-page React application for Temi's Financial Academy.

## Stack
- **Framework:** React 18 + Vite 5
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Icons:** Lucide React
- **Form Email:** @emailjs/browser

## Setup & Installation

```bash
# 1. Install all dependencies
npm install

# 2. Start development server
npm run dev
```

## EmailJS Configuration

Open `src/components/RegistrationForm.jsx` and replace the three placeholder constants at the top:

```js
const SERVICE_ID  = 'YOUR_SERVICE_ID'   // Your EmailJS Service ID
const TEMPLATE_ID = 'YOUR_TEMPLATE_ID'  // Your EmailJS Template ID
const PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'   // Account > API Keys
```

In your EmailJS template, use these variables:
- `{{from_name}}` — Full Name
- `{{from_email}}` — Email Address
- `{{phone}}` — Phone Number
- `{{program}}` — Program of Interest

## Project Structure

```
src/
├── components/
│   ├── FadeUp.jsx           # Reusable scroll-reveal animation
│   ├── Navbar.jsx           # Glassmorphic sticky nav + mobile drawer
│   ├── Hero.jsx             # Hero section with background image
│   ├── About.jsx            # Two-column about with profile photo
│   ├── Programs.jsx         # Program cards with hover elevation
│   ├── RegistrationForm.jsx # EmailJS form with floating labels
│   └── Footer.jsx           # Dark footer with contact + socials
├── App.jsx                  # Root composition
├── main.jsx                 # React DOM entry
└── index.css                # Global styles + design tokens
```
