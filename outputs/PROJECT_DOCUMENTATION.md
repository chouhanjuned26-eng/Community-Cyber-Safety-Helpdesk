# Community Cyber Safety Help Desk — Project Documentation Notes

## Implementation summary

This React + Vite single-page application uses hash-based navigation, reusable JSX components, CSS-only responsive styling, and Lucide icons. The interface is designed around a dark-navy and royal-blue cyber-security visual system with gradients, glow, rounded cards, interactive focus states, and responsive layouts.

## Technical architecture

| Layer | Implementation |
| --- | --- |
| UI | React functional components and state hooks |
| Navigation | Client-side hash routes (`#/home`, `#/dashboard`, etc.) |
| Styling | Responsive CSS, CSS transitions, media queries, reduced-motion-friendly animation rules |
| Icons | Lucide React |
| Deployment | Vercel static Vite deployment |

## UI components and features

- **Sticky navigation:** Active navigation states, desktop links, and a mobile hamburger menu provide clear movement between pages.
- **Home page:** Premium hero, cyber illustration, search, quick safety cards, scam ticker, counters, alerts, and emergency support panel.
- **Login flow:** Split-screen branded interface with password visibility toggle, Remember Me, Forgot Password demo flow, and account-creation demo flow.
- **Dashboard:** Post-login safety overview with quick actions, recent scam notices, and a visual safety score.
- **AI Cyber Safety Assistant:** Cyber-only responses, chat bubbles, typing feedback, suggested prompts, and automatic scrolling.
- **Report a Scam:** Form validation, clear action, success state, and immediate 1930 guidance.
- **Awareness and resources:** Student-friendly guides for passwords, phishing, UPI, social media, email, and shopping safety.
- **Scam Alerts:** Dedicated cards for Fake KYC, QR, WhatsApp, Job, and UPI fraud.

## Screenshot captions for project report

| Screen | Suggested report explanation |
| --- | --- |
| Home Page | The landing page introduces the platform through a cyber-security hero, quick actions, ongoing scam awareness, and emergency reporting access. The visual hierarchy guides users toward AI help, awareness content, or scam reporting. |
| Login Page | The split-screen login interface uses a branded cyber visual on the left and an accessible, high-contrast authentication card on the right. It includes password visibility, account creation, and reset-password demonstration flows. |
| Dashboard | The dashboard gives logged-in users a personalised overview, quick safety actions, current alert items, and a safety score prompt. It helps make cyber awareness content actionable. |
| AI Assistant | The assistant provides a constrained chat experience focused exclusively on online safety, phishing, OTP, UPI, password, and reporting queries. Suggested questions help first-time users start a conversation. |
| Report Scam Page | The reporting interface collects incident details with validation and provides a success confirmation. It prominently directs users to the national 1930 helpline for time-sensitive financial fraud. |
| Scam Alerts | This page presents current scam patterns as scannable risk cards. Each alert explains the threat in plain language and routes the user to the reporting workflow. |
| Awareness Hub | Educational cards organise cyber safety information by topic, allowing students to open concise action-oriented guides. |
| Mobile View | The mobile layout collapses navigation into a hamburger menu and restructures grids into single-column cards, preserving readability without horizontal scrolling. |
| Navigation Bar | The sticky navigation bar maintains site orientation through active-link indicators and responsive navigation controls. |
| Footer | The footer provides persistent access to support, legal information, reporting, and project contact routes. |

## Presentation / viva highlights

1. The platform reduces cyber-safety friction through a clear report path and a cyber-only AI helper.
2. It promotes prevention with alerts, daily safety messaging, resource guides, and animated awareness statistics.
3. The current authentication and reporting confirmation are frontend demonstrations; a production release would connect Firebase, Supabase, or a secure backend for identities, email reset delivery, and report persistence.
